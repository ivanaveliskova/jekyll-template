---
title: Developing for the Internet
description: Or why does Internet Explorer Hate me so much?
date: 2015-05-05 10:32:18
categories: webdev
---

Recently, I was working on a project and realized that I needed my code to support Internet Explorer 8 (IE8) (who does that anymore?) (no, but really...) (it's cool). A few things I learned along this journey of finding support for IE8.

First of all, `background-size` is not supported (ok, everyone knew that, but I like the whole learning while on the job thing or learning as you go along). Ok, no big deal, instead of using background images I can switch to using `<img>` tags. Not a problem.

The biggest issue of all was finding ways to target certain elements on the page. Discovering that `nth-child()` is not supported was my downfall, for about 5 minutes. From there I had to consider different solutions to target elements. My proudest moment was using `.parent-element:first-child + .sibling-element + .sibling-element` Now what's really cool about this piece of code is that it will target the one single element that I was searching for without having to know what is in that element. Now we are good to go with IE8. Funny thing was, I was working in Chrome and using Chrome Dev Tools for this project and even though Firefox, Safari, and Opera all functioned with this code no problem, Chrome was all like, "not gonna work, nope, you can't make me." So, I was searching the interwebs for a solution to this issue that I encountered.

WHY WAS CHROME NOT WORKING WITH `:first-child`. It has supported `:first-child` since version 4.0 and now we are on version like a billion!!!!!!!!!

Not even the internet had any solutions for this issue, actually, I found that some people also encountered this issue, in comments on blog posts and articles, but no one had offered a solution. I'm sure plenty of people have discovered this solution already, but I'm here to offer my solution: add a space. It's really that simple. Chrome will see `:first-child` if you add a space before the colon (:). `element :first-child + .something + .anotherthing`

That's it. That's all there is to it. How crazy is that? And the fact that even with the space, it works in all other browsers is pretty awesome. Sometimes the code stops working if you add a space between parts that should be together, such as `element:hover` but somehow with `:first-child` it works. 

And that's my code tidbit for the day (or week) (or however long it takes me to post again).

Also, happy Cinco de Mayo!

AND!

Happy Revenge of the Fifth.