---
layout: default
title: Publications
permalink: /publications/
---

# Publications

{%- comment -%}
We split the list: entries WITH a numeric year (sorted desc) and entries WITHOUT a year (shown after).
{%- endcomment -%}

{%- assign pubs_with_year = site.data.publications | where_exp: "p", "p.year and p.year != ''" -%}
{%- assign pubs_with_year = pubs_with_year | sort: "year" | reverse -%}
{%- assign pubs_no_year = site.data.publications | where_exp: "p", "p.year == nil or p.year == ''" -%}

<ul class="pubs">
{%- for p in pubs_with_year -%}
  <li class="pub">
    <div class="pub-main">
      <span class="pub-title">{{ p.title }}</span>
      {%- if p.authors %} <span class="pub-meta"> — {{ p.authors }}</span>{% endif -%}
      {%- if p.venue or p.year -%}
        <span class="pub-meta">
          {%- if p.venue %} · {{ p.venue }}{% endif -%}
          {%- if p.year %} · {{ p.year }}{% endif -%}
        </span>
      {%- endif -%}
    </div>
    <div class="btn-row">
      {%- if p.link %}<a class="btn-pill" href="{{ p.link }}" target="_blank" rel="noopener">Paper</a>{% endif -%}
      {%- if p.code %}<a class="btn-pill" href="{{ p.code }}" target="_blank" rel="noopener">Code</a>{% endif -%}
      {%- if p.project %}<a class="btn-pill" href="{{ p.project }}" target="_blank" rel="noopener">Project</a>{% endif -%}
      {%- if p.video %}<a class="btn-pill" href="{{ p.video }}" target="_blank" rel="noopener">Video</a>{% endif -%}
    </div>
  </li>
{%- endfor -%}

{%- if pubs_no_year and pubs_no_year.size > 0 -%}
  {%- for p in pubs_no_year -%}
    <li class="pub">
      <div class="pub-main">
        <span class="pub-title">{{ p.title }}</span>
        {%- if p.authors %} <span class="pub-meta"> — {{ p.authors }}</span>{% endif -%}
        {%- if p.venue %}<span class="pub-meta"> · {{ p.venue }}</span>{% endif -%}
      </div>
      <div class="btn-row">
        {%- if p.link %}<a class="btn-pill" href="{{ p.link }}" target="_blank" rel="noopener">Paper</a>{% endif -%}
        {%- if p.code %}<a class="btn-pill" href="{{ p.code }}" target="_blank" rel="noopener">Code</a>{% endif -%}
        {%- if p.project %}<a class="btn-pill" href="{{ p.project }}" target="_blank" rel="noopener">Project</a>{% endif -%}
        {%- if p.video %}<a class="btn-pill" href="{{ p.video }}" target="_blank" rel="noopener">Video</a>{% endif -%}
      </div>
    </li>
  {%- endfor -%}
{%- endif -%}
</ul>
