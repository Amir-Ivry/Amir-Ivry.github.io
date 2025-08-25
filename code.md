---
layout: default
title: Code
permalink: /code/
---

# Code

<ul class="list list-code">
{% for c in site.data.code %}
  <li>
    <a href="{{ c.url }}" target="_blank" rel="noopener">{{ c.name }}</a>
    {% if c.description %} — {{ c.description }}{% endif %}
  </li>
{% endfor %}
{% if site.data.code == nil or site.data.code.size == 0 %}
  <li>(Add items in `_data/code.yml`.)</li>
{% endif %}
</ul>
