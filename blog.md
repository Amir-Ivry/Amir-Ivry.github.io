---
layout: page
title: Blog
permalink: /blog/
---

Occasional notes on research, evaluation, and tooling.

{% assign posts = site.categories.blog | sort: 'date' | reverse %}
{% if posts.size == 0 %}
<p class="muted">No posts yet.</p>
{% endif %}

{% for post in posts %}
<h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
<p class="muted">{{ post.date | date: "%b %-d, %Y" }}</p>
<p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
{% endfor %}