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
          <a href="{{ paper_url | relative_url }}" target="_blank" rel="noopener" aria-label="Paper" title="Paper">
            <svg viewBox="0 0 24 24"><path d="M6 2h7l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2Zm7 1.5V8h4.5L13 3.5Z"/></svg>
          </a>
          {%- endif -%}
          {%- if p.code and p.code != "" -%}
          <a href="{{ p.code }}" target="_blank" rel="noopener" aria-label="Code" title="Code">
            <svg viewBox="0 0 24 24"><path d="M12 .5A11.5 11.5 0 0 0 8.3 22.9c.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.2 1.2a11.2 11.2 0 0 1 5.9 0c2.2-1.5 3.2-1.2 3.2-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5Z"/></svg>
          </a>
          {%- endif -%}
          {%- if p.project and p.project != "" -%}
          <a href="{{ p.project | relative_url }}" target="_blank" rel="noopener" aria-label="Project" title="Project page">
            <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm0 1.5c1.7 0 3.2.5 4.5 1.4-2.4.6-4.3 2.9-5 6.1H6.2A8.5 8.5 0 0 1 12 3.5Zm-8.3 7.5h4.4c-.1.5-.1 1-.1 1.5s0 1 .1 1.5H3.7A8.4 8.4 0 0 1 3.5 12c0-.3 0-.7.2-1Zm1.5 5.9h5.3c.7 3.1 2.6 5.4 5 6a8.5 8.5 0 0 1-10.3-6Zm6.8 0h5.3A7.8 7.8 0 0 1 12 21.5c-1.4-.3-2.7-2-3.3-4.6ZM20.3 9h-5.3c-.6-2.6-1.9-4.3-3.3-4.6A7.8 7.8 0 0 1 20.3 9ZM15 12c0 .5 0 1-.1 1.5H9.1A7.7 7.7 0 0 1 9 12c0-.5 0-1 .1-1.5h5.8ZM14.2 18h5.1A8.5 8.5 0 0 1 18 20.6c-1.7-.3-3.1-1.3-3.8-2.6Z"/></svg>
          </a>
          {%- endif -%}
          {%- if p.video and p.video != "" -%}
          <a href="{{ p.video }}" target="_blank" rel="noopener" aria-label="Video" title="Video">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7L8 5Z"/></svg>
          </a>
          {%- endif -%}
        </div>
      </div>
    </li>
  {%- endfor -%}
</ul>
  {%- endif -%}
{%- endfor -%}
