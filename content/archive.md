---
layout: double
title: Archive
permalink: /archive/
description: >- # this means to ignore newlines until "baseurl:"
  <p>See the most <a href="/">recent notes</a>.</p>
---

{% if site.posts.size > 0 %}
{% for post in site.posts %}
    
<div class="note-{{post.type}}">
  <a class="note-title" href="{{ post.url }}">{{ post.title }}</a>
<div class="note-meta">
{{ post.date | date: "%b %-d, %Y" }}
</div>
</div>
    
{% endfor %}
{% endif %}
