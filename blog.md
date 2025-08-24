---
layout: page
title: "Blog"
nav: blog
description: "Occasional notes and updates."
---

<ul class="posts">
  {% for post in site.posts %}
    <li class="post-item">
      <time class="post-date" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %-d, %Y" }}</time>
      <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
  {% if site.posts == empty %}
    <li class="post-item dim">Add Markdown files in <code>_posts/</code> to publish blog posts.</li>
  {% endif %}
</ul>
