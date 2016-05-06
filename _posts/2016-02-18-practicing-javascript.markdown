---
title: Practicing Javacript
description: A walkthrough on a recent project - or I'm a dummy
date: 2016-02-18 01:13:48
categories: walkthrough
---

So, first of all, I fail at New Year's Resolutions. I know. I haven't read anything and I've been terrible at posting more and stuff. Bad me. But in good news, I'm here to post right now and do a little mini walkthrough.

As of today, I added my first piece of javascript onto this site. I took quite a bit of pride not having any javascript on my site and I wanted to keep it that way, but then I thought, "ok, well, JS isn't ~SO~ bad. I could probably have certain js modules running around doing crazy things." The other day, I was assisting with a GDI class and we were talking about microdata (which I recently added to my blog posts), when one student started talking about how cool it is that some sites will tell you about how long it will take to read an article. Although, the class was on HTML5 and CSS3 concepts, and this is obviously javascript related, it got me thinking, maybe I should build something for myself just to practice my javascript skills a bit.

Through work, I've been working on more and more javascript tickets and getting better and better at it. I'm even improving at decoding other peoples' javascripts, but that still has a long way to go for me. Anyway, so I decided to embark on this interesting journey. Let me take you through the steps I took to figuring out how to do this.

I started off with something super easy: figuring out the math. You remember those ridiculous word problems you would get in math class all the time, that were inplausible and super difficult to read correctly? This was kind of like one of those. So I started working backwards because I already knew what my end value should be. Everyone reads at different speeds, which is something difficult to accomodate for, unless I prompt the reader to tell me their average words per minute (WPM) that they read every time they come to my blog. (<-- This is a sure way to have readers NOT return to your blog.) Instead, I chose to do a little research and find an average WPM that I would set as a constant and not worry about. Along the way I found some really interesting articles, some about speed readers and so on, but average WPM is about 200WPM give or take a few words here and there.

Cool, so now we have an average. Let's do a little math in our heads. Let's say we have an article that has 300 words on the dot. For an average reader, reading at 200 words per minute: in 1 minute the reader will get through 200 words of that article, then there are still 100 words left which will then take the read 1/2 minute, or 30 seconds. Hey, look, math problem solved.

Now, we have a solid example with a solution which we can use to test out our javascript funtion as we build it. At work, I use HAML to build pages, so I have become extremely used to using that, therefore I set it up as my preprocessor on codepen and that is how I started:

{% highlight haml %}
.time{ data: {length_to_read: '' } } Time
%p.article { data: { words: '' } } Here I will write some words with thingd and stuff. Make sure your words and article have relatively decent formatting, spaces between words. ETC. will try to figure out how to divide up the words or count the words or something. Maybe splitting at the spaces or whitespace? Not sure yet how this will work. Also, how will it react when there is an image in the text, or a link? Will I just need to tell it to strip the HTML? Will it ignore HTML tags? Should I have it just count words within a paragraph tag (if using this on Jekyll in a blog which I write with markdown). Meh. I will figure it out when I get to it I guess. For now, let's build the basic template. Sans styling. Ok maybe a little styling to make it easier to read.
{% endhighlight %}

which obviously compiles to:

{% highlight html %}
<div class='time' data-length-to-read=''>Time</div>
<p class='article' data-words=''>Here I will write some words with thingd and stuff. Make sure your words and article have relatively decent formatting, spaces between words. ETC. will try to figure out how to divide up the words or count the words or something. Maybe splitting at the spaces or whitespace? Not sure yet how this will work. Also, how will it react when there is an image in the text, or a link? Will I just need to tell it to strip the HTML? Will it ignore HTML tags? Should I have it just count words within a paragraph tag (if using this on Jekyll in a blog which I write with markdown). Meh. I will figure it out when I get to it I guess. For now, let's build the basic template. Sans styling. Ok maybe a little styling to make it easier to read.</p>
{% endhighlight %}

Let's be honest, there were a bunch of spelling errors. Actually, I also think that the first version of this markup had exactly 300 words so I could use that to solve my problem, although I may have started adding more words based on my word counter that I had built/used. (Even as I'm typing this, I continue to tweak the javascript here and there to make sure it is working as expected.) Anywho. I also like to keep a reset stylesheet already set up on my codepen as well, so I had to give the basic text a little bit of styling to make it legible at least, a bit of padding, made the area where the time will be set have a different color text and background so I could see it, etc.

Now was time to get to the javascript.

Let's be honest, the best way to do any sort of javascript is to use lots of `console.log`. Which is exaclty what I did, every step of the way, (obviously removed them from my final code but I'm going to walk you through my process anyway).

I'm most familiar with jquery, so I told myself I will first get this working using jquery and then decide what I want to do after that. I first defined my function and some basic variables that I knew I was looking for or I was going to need:

{% highlight javascript %}
var calculateReadTime = function () {
    var $text = $('[data-words]').text(),
        $averageWPM = 200,
        $secondsInAMinute = 60;
};
calculateReadTime();
{% endhighlight %}

Ok, cool. This looks awesome and when I `console.log` I get the text within the data attribute (I was currently not bothering to look at anything such as an anchor or a span within the text, that scared me and I hoped that as I was doing this, it would solve itself and fortunately it did.) Moving on. At this point in time, I needed to figure out how many words were in the text. I knew from working a bit with Ruby that you can use the method `split()` to split the text at a certain point that you define and then it would place everything in an array for you. This sounds solid, cool, is there a method like this in javascript? SURE IS! Guess what?! It's called split(). Awesome, so I threw that into this function and `console.log` the result. At that point you can even go ahead and check the length of your array to see how many words it contains:

{% highlight javascript %}
var calculateReadTime = function () {
    var $text = $('[data-words]').text(),
        $wordCount = $text.split(' ').length,
        $averageWPM = 200,
        $secondsInAMinute = 60;
        console.log($wordCount);
};
calculateReadTime();
{% endhighlight %}

So far, so good. At this point, now that I had a word count, I was wondering how it would handle if I had multiple locations with this same data attibute and if it would count all the words etc. So I added a new paragraph with the same styling and data attribute and was pleasantly surprised that my number of words just kept going up so I brought the number to 300, since that is what our practice problem laid out and it would make it easier for doing math if I already have an example that I know the answer to. Now I started laying out the math:

{% highlight javascript %}
var calculateReadTime = function () {
    var $text = $('[data-words]').text(),
        $wordCount = $text.split(' ').length,
        $averageWPM = 200,
        $secondsInAMinute = 60,
        $minutes = Math.floor($wordCount / $averageWPM),
        $seconds = Math.floor((($wordCount % $averageWPM) / $averageWPM ) * $secondsInAMinute);
        $('[data-length-to-read]').text($wordCount + ' words. ' + $minutes + ' minutes and ' + $seconds + ' seconds.');
};
calculateReadTime();
{% endhighlight %}

This code doesn't account for if there is only one second, to change the plauralization of seconds to second, same with minutes, and a bunch of other stuff. But it worked and got the job done. Cool.

BUT...

I wasn't happy with this actually. It's short and sweet, but it's using jQuery, a pretty heavy library for something so short and ridiculous that, it would just burden the pages to add jQuery, and then my pride of having no javascript on this site would be hurt even more because I had to add a whole lot of additional crap that wasn't even needed. So, I promised myself I would come back to this code and refactor it using plain-jane  javascript, no libraries, no frameworks, just using some solid and clean (relatively) code.

Back to the drawing board. I was going to attempt to refactor the function within the function, but then I decided to create a new function so I could more easily compare the two. I created a new function and defined my variables:

{% highlight javascript %}
var calculateTime = function() {
  var selectors = document.querySelectorAll('[data-words]'),
    timeToReadSelector = document.querySelectorAll('[data-length-to-read]'),
    wordCount = 0,
    averageWPM = 200,
    secondsInAMin = 60,
    minutes, seconds, wordPlauralize, minutePlauralize, secondPlauralize;
};

calculateTime();
{% endhighlight %}

This seemed like a good place to start. I set up base values and everything has a solid starting point. Cool, now to get my words split up. Split is a standard javascript function, it doesn't belong to jQuery, so if you have a variable with a string it in, split will also work on it sans jQuery. Sans it is.

{% highlight javascript %}
for (var i = 0; i < selectors.length; i++) {
  var text = selectors[i].textContent,
      splitText = text.split(' ');

  wordCount += splitText.length;
}
{% endhighlight %}

This is the original code since originally I had multiple data selectors on each paragraph and therefore plain javascript required me to loop through each one in order to get the actual length, and then I had to add on to the beginning word count. This actually starting giving me a slightly different number for the word count than what I had from the original jQuery function. So, I, naturally, thought I did something wrong. I spent a few minutes investigating when I realized that in the original function, since I was splitting at spaces (' '), it wasn't considering line breaks, so a new paragraph actually didn't have a space before, or at the end of the last paragraph, so it didn't get split, and so the last word of the last paragraph got glued with the first word of the next paragraph (in the original function in jQuery). So, actually, I didn't do anything wrong, I actually improved the function at this point. Ok, moving on. Now I wanted to add in some conditional statements that would check if a plaural word was needed or if it should be singular. Originally, I was going to do this as nested conditionals, but that sounded like an extremely bad idea, and the way I did it seems clean and simple enough. And then the sentences get glued together:

{% highlight javascript %}

if (wordCount === 1) {
  wordPlauralize = 'word';
} else {
  wordPlauralize = 'words';
}

minutes = Math.floor(wordCount / averageWPM);

if (minutes === 1) {
  minutePlauralize = 'minute';
} else {
  minutePlauralize = 'minutes';
}

seconds = Math.floor(((wordCount % averageWPM) / averageWPM) * secondsInAMin);

if (seconds === 1) {
  secondPlauralize = 'second';
} else {
  secondPlauralize = 'seconds';
}

if (seconds === 0) {
  timeToReadSelector[0].textContent = wordCount + ' ' + wordPlauralize + '. ' + minutes + ' ' + minutePlauralize;
} else {
  timeToReadSelector[0].textContent = wordCount + ' ' + wordPlauralize + '. ' + minutes + ' ' + minutePlauralize + ' and ' + seconds + ' ' + secondPlauralize;
}
{% endhighlight %}

This was working great! I had a solid and correct word count, math was working exaclty as I needed it to, everything seemed great. Until...

I realized that when I write in Markdown on my blog posts on my site, I can't control the class that each paragraph gets, also, I REALLY didn't want to add this data attribute to EVERY. SINGLE. PARAGRAPH. Look at this post, image how tedious that would become. So I moved the data attribute to a `<div>` that was surrounding the text. But SUDDENLY!

Suddenly, my word counter was telling me that there were far more words than there were before and I couldn't figure out why. Back to `console.log`. After console logging and inspecting each array closely, the function was taking a new paragraph (whenever I had a new p tag start) as an empty character (''). So that required a quick conditional statement to get that fixed:

{% highlight javascript %}
for (var i = 0; i < splitText.length; i++) {
  if (splitText[i] === '') {
    wordCount--;
  }
}
{% endhighlight %}

But, there was still an extra 'word' in there that was bugging me, and it was a newline character at the beginning of the first paragraph. Well that had to go.

{% highlight javascript %}
for (var i = 0; i < splitText.length; i++) {
  if (splitText[i] === '' || splitText[i] === '\n') {
    wordCount--;
  }
}
{% endhighlight %}

I tested this out by adding an anchor into the text and a random image to make sure that wasn't getting any additional words that weren't supposed to be there. Yay! Here's the completed codepen:

<p data-height="266" data-theme-id="8642" data-slug-hash="YwMWRj" data-default-tab="result" data-user="ivanaveliskova" class='codepen'>See the Pen <a href='http://codepen.io/ivanaveliskova/pen/YwMWRj/'>Word count and Time to read calculator</a> by Ivana Veliskova (<a href='http://codepen.io/ivanaveliskova'>@ivanaveliskova</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

At this point I decided that is was time to implement this into the site. I had seen somewhere that I could add conditional javascript/css files to help reduce the bulk of files, I didn't see the point of using conditional CSS because that would require to several calls to the server to bring in the CSS files and that's a much heavier load than a few extra lines of code in one file. But for javascript, if I could prevent the scripts from running where they aren't being used, that would be great. I was having trouble implementing the conditional javascript on the page, so I just added the file directly onto the posts template that I use and it does it's thing. My jshint was giving me a few errors on my code so I had to go in and make a few fixes:

{% highlight javascript %}
var calculateTime = function() {
    var selectors = document.querySelectorAll('[data-words]'),
        timeToReadSelector = document.querySelectorAll('[data-length-to-read]'),
        wordCount = 0,
        averageWPM = 200,
        secondsInAMin = 60,
        minutes, seconds, wordPlauralize, minutePlauralize, secondPlauralize, splitText;

        for (var i = 0; i < selectors.length; i++) {
            var text = selectors[i].textContent;

            splitText = text.split(' ');

            wordCount += splitText.length;
        }

    for (var y = 0; y < splitText.length; y++) {
        if (splitText[y] === '' || splitText[y] === '\n') {
            wordCount--;
        }
    }

    if (wordCount === 1) {
        wordPlauralize = 'word';
    } else {
        wordPlauralize = 'words';
    }

    minutes = Math.floor(wordCount / averageWPM);

    if (minutes === 1) {
        minutePlauralize = 'minute';
    } else {
        minutePlauralize = 'minutes';
    }

    seconds = Math.floor(((wordCount % averageWPM) / averageWPM) * secondsInAMin);

    if (seconds === 1) {
        secondPlauralize = 'second';
    } else {
        secondPlauralize = 'seconds';
    }

    if (seconds === 0) {
        timeToReadSelector[0].textContent = wordCount + ' ' + wordPlauralize + ' • ' + minutes + ' ' + minutePlauralize;
    } else {
        timeToReadSelector[0].textContent = wordCount + ' ' + wordPlauralize + ' • ' + minutes + ' ' + minutePlauralize + ' and ' + seconds + ' ' + secondPlauralize;
    }
};

calculateTime();
{% endhighlight %}

SO CLOSE! We are so close to being done. I implemented the js into the page rather simply and as I started writing this post I noticed something funky going on when I started adding code samples on the page, the text I was adding into the examples was being counted into the function as well. I don't expect any of you to read any of the jibber jabber I wrote in the haml/html files, so I had to add a little extra code to make it work on here:

{% highlight javascript %}
var code = document.getElementsByTagName('pre');

for(var z = 0; z < code.length; z++) {
    var ignoreCodeTextLength = code[z].textContent.split(' ').length;
    wordCount -= ignoreCodeTextLength;
}
{% endhighlight %}

And that seemed to remove any text within code blocks from the calculation. And now everything is working so fine and dandy!

Let's be honest, it's a rather simple function, but it gets the job done. It's also something people can use for additional ideas for code samples.

As part of my goal to attempt to aspire more people to pursure a dream in development and encourage them that they too can make it, this is one sort of idea for adding to your portfolio. It's relatively easy and a short task, but there is a lot more thought that can go into it. I could definitely take this even further, but for now, I like where it is.

Let me know your thoughts in the comments below or if you have any other suggestions on how to make the function better or more efficient.
