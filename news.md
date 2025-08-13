---
layout: page
title: News
permalink: /news/
---

Latest updates, talks, acceptances, and awards.

<ul class="news-list">
{% assign news_posts = site.categories.news | sort: 'date' | reverse %}
{% for post in news_posts %}
  <li>
    <span class="date">{{ post.date | date: "%b %-d, %Y" }}</span>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>