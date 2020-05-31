---
layout: main
title: About me
permalink: /about/
show_navbar: true
picture_url: /assets/images/profile.jpg
---

<img src="{{ page.picture_url }}" class="object-cover w-40 h-40 mx-auto rounded-full" alt="profile">

**TL;DR: I make websites and APIs**

My name is Alejandro Figueroa, but most of the people I work with just call me Alejo. I like to write code and develop software (and now it should be really obvious what the "dev" part of the title means).

You can find me on twitter as [{{site.twitter_username}}][twitter], or check some of the code I've written at my [GitHub][github] profile.

My main focus are .NET apps and technologies, but I also try to work on (or play with) some other stuff, mainly related to web sites, APIs and backends. The list so far covers bits of Javascript (Node, Vue), Java, Python and Go.

<hr class="my-8">

This site was built using [Jekyll][jekyll] and [TailwindCSS][tailwind].

The "notes" section content is pulled by a build-time script (before Jekyll builds the site), using a custom-made, super-minimal [headless blog api][notes-api] created by me. This is one of my preferred approaches for a [JAM Stack][jam] architecture.

Title icon made by [xnimrodx][icon-author] from [www.flaticon.com][flaticon].

Small link icons from RefactoringUI's [Heroicons](https://github.com/refactoringui/heroicons).

[twitter]:https://twitter.com/{{site.twitter_username}}
[github]:https://github.com/{{site.github_username}}
[notes-api]:https://github.com/alexphi/alejof-notes-api
[jekyll]:https://jekyllrb.com/
[tailwind]:https://tailwindcss.com/
[jam]:https://jamstack.org
[icon-author]:https://www.flaticon.com/authors/xnimrodx
[flaticon]:https://www.flaticon.com/
