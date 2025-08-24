---
layout: page
title: "Code"
nav: code
description: "Open-source code and data resources."
---

<ul class="cards">
{% for c in site.data.code %}
  <li class="card">
    <h3 class="card-title"><a href="{{ c.url }}" target="_blank" rel="noopener">{{ c.name }}</a></h3>
    <p class="card-desc">{{ c.description }}</p>
    {% if c.tags %}<p class="card-tags">{% for t in c.tags %}<span class="tag">{{ t }}</span>{% endfor %}</p>{% endif %}
  </li>
{% endfor %}
{% if site.data.code == empty %}
  <li class="card dim">Add entries in `_data/code.yml`.</li>
{% endif %}
</ul>
