---
layout: default
title: Publications
permalink: /publications/
---

# Publications

<ul class="list list-pubs">
{% assign pubs = site.data.publications | sort: "year" | reverse %}
{% for p in pubs %}
  <li>
    <span class="pub-title">{{ p.title }}</span>
    {% if p.venue %}<span class="pub-venue"> · {{ p.venue }}{% if p.year %} {{ p.year }}{% endif %}</span>{% endif %}
    {% if p.link %} — <a href="{{ p.link }}" target="_blank" rel="noopener">paper</a>{% endif %}
    {% if p.code %} · <a href="{{ p.code }}" target="_blank" rel="noopener">code</a>{% endif %}
    {% if p.project %} · <a href="{{ p.project }}" target="_blank" rel="noopener">project</a>{% endif %}
  </li>
{% endfor %}
</ul>
