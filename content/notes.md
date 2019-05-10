---
layout: double-column
title: Notes
permalink: /notes/
description: >- # this means to ignore newlines until "baseurl:"
  This is some of the stuff that I write.

---

{% if site.posts.size > 0 %}
{% for post in site.posts %}

## [{{ post.title }}]({{ post.url }})
    
{{ post.content }}


---


{% endfor %}
{% endif %}
