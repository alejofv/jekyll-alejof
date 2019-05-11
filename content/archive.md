---
layout: double
title: Archive
permalink: /archive/
header: My Notes - Archive
description: >- # this means to ignore newlines until "baseurl:"
  <p>by Alejandro Figueroa</p>

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
