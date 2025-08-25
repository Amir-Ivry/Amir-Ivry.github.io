---
layout: default
title: Blog
permalink: /blog/
---

# Blog

<ul class="list">
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <span class="post-meta"> · {{ post.date | date: "%b %-d, %Y" }}</span>
  </li>
{% endfor %}
{% if site.posts.size == 0 %}
  <li>(Add posts in `_posts/`.)</li>
{% endif %}
</ul>
