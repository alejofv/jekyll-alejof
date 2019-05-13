---
layout: double
title: Notes
permalink: /notes/
header: My Notes
description: >- # this means to ignore newlines until "baseurl:"
  <p>by Alejandro Figueroa</p>
  <p>
  Here is the most recent stuff that I've written, plus links to interesting things that I find on the internet. This is actually one of my side-projects - a minimal(ish) blog engine.
  </p>
  <p>Older content is found in the <a href="/archive">archive</a>.

---

{% if site.posts.size > 0 %}
{% for post in site.posts %}
  
{%- if post.date != last_date -%}
<div class="note-meta">
{{ post.date | date: "%b %-d, %Y" }}
</div>
{%- endif -%}
    
<div class="note note-{{post.type}}">
  <h3>
    <a class="note-title" href="{{ post.url }}">{{ post.title }}</a>
  </h3>
{%- if post.type == "link" -%}
    <div class="note-source">
      from <a href="{{ post.sourceUrl }}">{{ post.sourceName }}</a>
    </div>
{%- endif -%}
      
  <div class="note-content">
    <div markdown="1">
{{ post.content }}
</div>
</div>
</div>
    
{%- assign last_date = post.date -%}
{% endfor %}
{% endif %}
