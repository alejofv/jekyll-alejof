---
layout: list
title: Archive
permalink: /archive/
description: See the most <a href="/">recent notes</a>.
---

{% if site.posts.size > 0 %}
<div class="note">
{% for post in site.posts %}
    
<div class="note-{{post.type}}">
  <p class="note-title"><a href="{{ post.url }}">{{ post.title }}</a></p>
<div class="note-meta">
{{ post.date | date: "%b %-d, %Y" }}
</div>
</div>
    
{% endfor %}
</div>
{% endif %}
