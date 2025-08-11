---
layout: page
title: Publications
permalink: /publications/
---

> Selected papers. Add or edit entries in `_data/publications.yml`.

{% assign pubs = site.data.publications %}
{% for p in pubs %}
### {{ p.title }} ({{ p.venue }}, {{ p.year }})
_{{ p.authors }}_

{{ p.summary }}

{%- if p.pdf %}[PDF]({{ p.pdf }}){%- endif -%}
{%- if p.doi %} · [DOI]({{ p.doi }}){%- endif -%}
{%- if p.code %} · [Code]({{ p.code }}){%- endif -%}
{%- if p.talk %} · [Talk]({{ p.talk }}){%- endif -%}
{%- if p.bib %} · [BibTeX]({{ p.bib }}){%- endif -%}

---
{% endfor %}
