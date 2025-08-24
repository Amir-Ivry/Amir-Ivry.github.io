---
layout: page
title: "Publications"
nav: publications
description: "Selected and full list, reverse chronological."
---

<ul class="pubs">
{% assign pubs = site.data.publications | sort: 'year' | reverse %}
{% for p in pubs %}
  <li class="pub">
    <span class="pub-title"><a href="{{ p.link }}" target="_blank" rel="noopener">{{ p.title }}</a></span>
    <span class="pub-authors">{{ p.authors }}</span>
    <span class="pub-venue">— {{ p.venue }} {{ p.year }}</span>
    {% if p.extra %}<span class="pub-extra"> · {{ p.extra }}</span>{% endif %}
    {% if p.links %}
    <span class="pub-links">
      {% for k in p.links %}
        <a href="{{ k.url }}" target="_blank" rel="noopener">{{ k.name }}</a>{% if forloop.last == false %} · {% endif %}
      {% endfor %}
    </span>
    {% endif %}
  </li>
{% endfor %}
</ul>
