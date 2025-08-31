---
layout: default
title: Team
permalink: /team/
---

<div class="container">
<h1>Team</h1>

{% assign phd = site.data.team.phd | default: empty %}
{% assign msc = site.data.team.msc | default: empty %}

{% if phd and phd.size > 0 %}
<h3 class="team-head">PhD Students</h3>
<div class="team-grid">
  {% for s in phd %}
  {% assign slug = s.slug | default: s.name | slugify %}
  {% assign anchor = 'team-' | append: slug %}
  <div id="{{ anchor }}" data-section="students" data-slug="{{ slug }}" class="member shareable">
    <img src="{{ s.photo | relative_url }}" alt="{{ s.name }}">
    <div class="m-info">
      <div class="m-name"><strong>{{ s.name }}</strong> <a class="share" href="#{{ anchor }}" title="Share" onclick="return shareAndTrack('{{ anchor }}','students','{{ slug }}')">🔗</a></div>
      <div class="m-field">{{ s.field }}</div>
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}

{% if msc and msc.size > 0 %}
<h3 class="team-head">MSc Students</h3>
<div class="team-grid">
  {% for s in msc %}
  {% assign slug = s.slug | default: s.name | slugify %}
  {% assign anchor = 'team-' | append: slug %}
  <div id="{{ anchor }}" data-section="students" data-slug="{{ slug }}" class="member shareable">
    <img src="{{ s.photo | relative_url }}" alt="{{ s.name }}">
    <div class="m-info">
      <div class="m-name"><strong>{{ s.name }}</strong> <a class="share" href="#{{ anchor }}" title="Share" onclick="return shareAndTrack('{{ anchor }}','students','{{ slug }}')">🔗</a></div>
      <div class="m-field">{{ s.field }}</div>
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}
</div>
