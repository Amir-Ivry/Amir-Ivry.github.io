---
layout: default
title: Team
permalink: /team/
---

# Team

{% assign phd = site.data.team.phd | default: empty %}
{% assign msc = site.data.team.msc | default: empty %}

{% if phd and phd.size > 0 %}
<h3 class="team-head">PhD Students</h3>
<div class="team-grid">
  {% for s in phd %}
  <div class="member">
    <img src="{{ s.photo | relative_url }}" alt="{{ s.name }}">
    <div class="m-name"><strong>{{ s.name }}</strong></div>
    <div class="m-field">{{ s.field }}</div>
  </div>
  {% endfor %}
</div>
{% endif %}

{% if msc and msc.size > 0 %}
<h3 class="team-head">MSc Students</h3>
<div class="team-grid">
  {% for s in msc %}
  <div class="member">
    <img src="{{ s.photo | relative_url }}" alt="{{ s.name }}">
    <div class="m-name"><strong>{{ s.name }}</strong></div>
    <div class="m-field">{{ s.field }}</div>
  </div>
  {% endfor %}
</div>
{% endif %}
