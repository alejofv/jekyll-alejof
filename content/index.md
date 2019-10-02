---
layout: list
title: Recent Notes
permalink: /
description: Older content is found in the <a href="/archive">archive</a>.
---

{% if site.posts.size > 0 %}
{% for post in site.posts %}

<div class="note note-{{post.type}}">
  <h2>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </h2>
{%- if post.type == "link" -%}
    <div class="note-source">
      from <a href="{{ post.sourceUrl }}" target="_blank">{{ post.sourceName }} &nbsp;<i class="fas fa-external-link-alt"></i></a>
    </div>
{%- endif -%}
    <div markdown="1">
{{ post.content }}
</div>
</div>

{% endfor %}
{% endif %}
