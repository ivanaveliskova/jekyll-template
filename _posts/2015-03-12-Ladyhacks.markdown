---
title: Ladyhacks 2015
description: How to Make Your Weekend Busy
date: 2015-03-12 12:19:19
categories: weekends
---

This past weekend I had the chance to attend Ladyhacks, a hackathon made only for women. There are some differences between this and a traditional hackathon, but for ladies who are new to coding and wish to improve their skills as well as add to their portfolios, this is a great place to get started. This is the third year in a row it has been run in Philly and, to be perfectly honest, it was my first hackathon.

I was very excited to get to participate in the hackathon because I wanted to be a part of something big, meet some new people, and have a cool new project I could show off in my portfolio. I feel confident that I accomplished all of those things and then some.

I chose to work on rebuilding the North 3rd St website (a.k.a. N3rd St). N3rd St is an area in Philadelphia along 3rd St where there seems to be an accumulation of nerds (so to speak). People define what a nerd is in many different ways and somehow N. 3rd St seems to fill that definition with the surrounding areas rather well. That is what N3rd St is all about and that is what we tried to convey in the new site.

N3rd St is not only about the people but also about what those people are doing on N3rd St. Generally, the reason why it is called N3rd St is becasue there is this huge amount of tech companies hanging out all along N 3rd and the surrounding area (it is a little ridiculous that there are so many in such a small geographical area). Each member of the team who worked on N3rd St had a job within the website to put it all together. The site is built upon a templating format, which allows each person to individually work on different parts (one works on a header, another on a footer, someone can do content) and then the templating format puts it all together for you without having to copy and paste anything constantly, which can get messy and mistakes can happen. The templating format is similar to that of Jekyll, but it is closer to the one used by Tumblr.

I was assigned to work on finding and listing all of the companies on N3rd St and the surrounding area (I seem to say surrounding area a lot). There is no immediate resource to efficiently find these companies. Basically, I did a lot of Googling and using certain key terms to find different companies because of course none of the companies will use the same key terms to describe their company, that would make my job way too easy. I opened up a spreadsheet in Google Docs (so I could easily update and share the information with the rest of the group) and got myself to work on gathering all of the necessary information that we chose to display on the site.

<img src="/images/blog-images/N3rdstSpreadsheet.png" alt="Spreadsheet example"/>

<img src="/images/blog-images/N3rdstmap.png" alt="Nerd St map" class="img-right"/>

Meanwhile, I had to think about how we are going to display this information. The best way to visually display any list of locations is with a map. So, at this point, I also had to figure out how I wanted to map out the locations. Gathering the data itself was a pain and took forever and a day since there are so many companies, so I had to choose a mapping technique that was quick and painless and didn't require me to do much more past my spreadsheet at the moment. (We were working on everything from about 9:30am - 5pm, so only a few hours.) My first thought was to set up the Cesium API since it has a lot of these functions available that would be extremely useful in this real world problem. Unfortunately, because of the time restraint, this was not possible, it would take too long to make sure to have all of the necessary information in a file and building a JSON file to store it all and a template to read, and yada yada da. So, I went with the quick route, and I just fed my spreadsheet into Google tables and it mapped out the data for me and then spit out an `<iframe>` for me to use on the page.

The ladies who mostly update the N3rd St. website were nice enough to allow us to stay as developers and if we ever want to change something up in the site, we just have to let them know and go for it. So, keeping that in mind, when I got home I decided to refactor all of the data that I worked on and use the Cesium API for a couple of reasons:

+ It would be nice to use a locally (relatively local, in PA) API for something that is so dependent on geographical location and supporting local businesses.
+ I wanted to test out a different way of visualizing the data.
+ I still really wanted to work on the site and make sure I could work out all the other problems I encountered.

I have yet to post up the update to the site because I need to input the rest of the data in and then figure out how to feature it on the site while still linking back to the Cesium API. But with a small sample of data, I put together a working prototype of the map along with buttons to the company names which when clicked will take you to the pin on the map and pop up the description box.

<img src="/images/blog-images/CesiumN3rdstmap.png" alt="Cesium N 3rd St Map"/>

I will need to work on this more to include all of the companies on my list as well as to try to make the data input slightly more efficient. Check out the source code and documentation for it all on my [Github][N3rdst-Github]{:target="_blank"} page!

[N3rdSt-Github]: https://github.com/ivanaveliskova/Ivana-n3rdst