---
layout: default
title: Publications
permalink: /publications/
---

# Publications

<ul class="pubs">
{% for p in site.data.publications %}
  <li class="pub">
    <div class="pub-main">
      <span class="pub-title">{{ p.title }}</span>
      {% if p.authors %}<span class="pub-meta"> — {{ p.authors }}</span>{% endif %}
      {% if p.venue or p.year %}
        <span class="pub-meta">
          {% if p.venue %} · {{ p.venue }}{% endif %}
          {% if p.year %} · {{ p.year }}{% endif %}
        </span>
      {% endif %}
    </div>
    <div class="btn-row">
      {% if p.link and p.link != "" %}<a class="btn-pill" href="{{ p.link }}" target="_blank" rel="noopener">Paper</a>{% endif %}
      {% if p.code and p.code != "" %}<a class="btn-pill" href="{{ p.code }}" target="_blank" rel="noopener">Code</a>{% endif %}
      {% if p.project and p.project != "" %}<a class="btn-pill" href="{{ p.project }}" target="_blank" rel="noopener">Project</a>{% endif %}
      {% if p.video and p.video != "" %}<a class="btn-pill" href="{{ p.video }}" target="_blank" rel="noopener">Video</a>{% endif %}
    </div>
  </li>
{% endfor %}
</ul>
