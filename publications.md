---
layout: page
title: Publications
permalink: /publications/
---

Below is a complete list. Edit `_data/publications.yml` to update.
The **Selected Publications** on the home page are controlled by `selected: true` entries.

{% assign pubs = site.data.publications | sort: "year" | reverse %}
{% assign years = pubs | map: "year" | uniq %}
{% for y in years %}
### {{ y }}
<ul class="pub-list">
  {% for p in pubs %}
    {% if p.year == y %}
      <li>
        <div class="pub-title">
          {% assign primary = p.links.pdf | default: p.links.doi | default: p.links.arxiv | default: p.links.project %}
          {% if primary %}<a href="{{ primary }}">{{ p.title }}</a>{% else %}{{ p.title }}{% endif %}
        </div>
        <div class="pub-authors">{{ p.authors | replace: "Your Name", "<strong>Your Name</strong>" }}</div>
        <div class="pub-venue">{{ p.venue }}, {{ p.year }}</div>
        <div class="pub-links">
          {% if p.links.pdf %}<a class="badge" href="{{ p.links.pdf }}">PDF</a>{% endif %}
          {% if p.links.arxiv %}<a class="badge" href="{{ p.links.arxiv }}">arXiv</a>{% endif %}
          {% if p.links.doi %}<a class="badge" href="{{ p.links.doi }}">DOI</a>{% endif %}
          {% if p.links.code %}<a class="badge" href="{{ p.links.code }}">Code</a>{% endif %}
          {% if p.links.project %}<a class="badge" href="{{ p.links.project }}">Project</a>{% endif %}
          {% if p.links.slides %}<a class="badge" href="{{ p.links.slides }}">Slides</a>{% endif %}
          {% if p.links.poster %}<a class="badge" href="{{ p.links.poster }}">Poster</a>{% endif %}
        </div>
      </li>
    {% endif %}
  {% endfor %}
</ul>
{% endfor %}