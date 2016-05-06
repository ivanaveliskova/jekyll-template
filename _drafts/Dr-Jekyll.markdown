---
layout: post
title: Dr. Jekyll
description: and Mr. Hyde

categories: Jekyll
social: true
comments: true
---

I won't really be talking about the novel, _Dr. Jekyll and Mr. Hyde_, by Robert Louis Stevensen. I'll be perfectly honest, I haven't even read it (scary things don't sit too well with me, although I saw the _Wishbone_ episode on it), but I understand the gist. Man has split personality disorder, that's my take (kidding, although in a sense it is true).

No, in reality, I want to talk about making the transition to using Jekyll for my site as a static site generator and for blogging. I mention Hyde as well because as I was doing research on learning Jekyll, I came across another static site generator by the name of Hyde which was actually meant to be Jekyll's evil twin. Jekyll is built in ruby while Hyde is built in Python. As I have [read][Jekyll-vs-Hyde], both bare a similar resemblance to one another: using Markdown, using similar templating languages (Jekyll's Liquid templating happens to be based off of Django's templating language which is what Hyde uses), and so on.

As I was doing my research to learn a bit more about Hyde to I could compare the two better, I realized a lot of the resources are relatively outdated (4 years or more). I tried reading a bit more into Hyde on their [website][Hyde], some pages didn't seem to even work (it may be my computer having a fit, but then again it didn't seem like the site was trying to hard anyway). So, I won't get into Hyde too much and talk more about Jekyll.

[Jekyll][jekyll-rb] uses Liquid templating to build a static site. (At least that's what the Jekyll homepage says.) Let's break down what all of that means.

Liquid templating is a templating language (a language kind of like c or javascript). It uses &ldquo;if&rdquo; statments and certain variables to create pages so you don't have to constantly copy and paste everything onto each new page. It does it all for you!

A static site is basically one that will if stored somewhere on a server and will just load with what is on there fairly quickly. These sites take up little space on memory, they are quick and easy to maintain, and load fast. A dynamic page will use some sort of app to build the page when you tell it to build the page. Each has it's own advantages and disadvantages which I won't go into right now, but Jekyll is generated using static pages.

The Jekyll website says that if you have some coding knowledge you can use Jekyll, but I feel that really anyone can use Jekyll if they have the right resources. I've been there, too, where people use big technical terms and I have no idea what anyone is talking about and I'm too afraid to ask. We've all been there. But why hold back on asking? There is so much  you can learn when you take the time. You just need to have a good text editor and be able to follow instructions well (kind of like in baking). Think of this like a recipe. If you follow it in the right order, you don't even need to know what each ingredient does, then you, too, can start writing a blog in Jekyll. Of course, there are some resources you may want to look up in order to really get the full effect of the experience, but all in all, it's really easy.

Personally, I like to install Jekyll on the command line (in the terminal, since I use a mac). I find it quick, easy, and painless. I get really confused when I try to fork it on Github because of all the crazy changes and stuff on it. Also, I prefer to work locally on my machine and seeing what it looks like before pushing any code onto the interwebs where everyone else can see the mess I've made.