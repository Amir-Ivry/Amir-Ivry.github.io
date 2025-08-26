---
layout: default
title: Publications
permalink: /publications/
---

# Publications

{%- assign groups = site.data.publications | group_by: "year" | sort: "name" | reverse -%}

{%- for g in groups -%}
  {%- if g.name and g.name != "" -%}
<h3 class="pub-year">{{ g.name }}</h3>

<ul class="pubs">
  {%- for p in g.items -%}
    {%- assign paper_url = p.pdf | default: p.paper | default: p.link -%}
    <li>
      <div class="pub-title">{{ p.title }}</div>

      {%- if p.authors -%}
      <div class="pub-authors">
        {{ p.authors
          | replace: 'Amir Ivry','<span class="me">Amir Ivry</span>'
          | replace: 'Ivry, Amir','<span class="me">Ivry, Amir</span>'
          | replace: 'A. Ivry','<span class="me">A. Ivry</span>'
          | replace: 'Amir I.','<span class="me">Amir I.</span>' }}
      </div>
      {%- endif -%}

      <div class="pub-meta-row">
        <div class="left">
          {%- if p.venue -%}<span>{{ p.venue }}</span>{%- endif -%}
          {%- if p.venue and p.year -%}<span class="dot">·</span>{%- endif -%}
          {%- if p.year -%}<span>{{ p.year }}</span>{%- endif -%}
        </div>
        <div class="right links icons">
          {%- if paper_url and paper_url != "" -%}
          <a href="{{ paper_url | relative_url }}" target="_blank" rel="noopener" aria-label="Paper" title="Paper">…</a>
          {%- endif -%}
          {%- if p.code and p.code != "" -%}
          <a href="{{ p.code }}" target="_blank" rel="noopener" aria-label="Code" title="Code">…</a>
          {%- endif -%}
          {%- if p.project and p.project != "" -%}
          <a href="{{ p.project | relative_url }}" target="_blank" rel="noopener" aria-label="Project" title="Project page">…</a>
          {%- endif -%}
          {%- if p.video and p.video != "" -%}
          <a href="{{ p.video }}" target="_blank" rel="noopener" aria-label="Video" title="Video">…</a>
          {%- endif -%}
        </div>
      </div>
    </li>
  {%- endfor -%}
</ul>
  {%- endif -%}
{%- endfor -%}
