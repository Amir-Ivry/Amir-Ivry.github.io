---
layout: default
title: Team
permalink: /team/
---

# Team

{% assign phd = site.data.team.phd | default: empty %}
{% assign msc = site.data.team.msc | default: empty %}

{% if phd and phd.size > 0 %}
<h3 class="team-section-title">PhD Students</h3>
<div class="team-grid">
  {% for s in phd %}
  <div class="team-card">
    <div class="team-photo">
      <img src="{{ s.photo | relative_url }}" alt="{{ s.name }}">
    </div>
    <div class="team-info">
      <div class="team-name"><strong>{{ s.name }}</strong></div>
      <div class="team-field">{{ s.field }}</div>
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}

{% if msc and msc.size > 0 %}
<h3 class="team-section-title">MSc Students</h3>
<div class="team-grid">
  {% for s in msc %}
  <div class="team-card">
    <div class="team-photo">
      <img src="{{ s.photo | relative_url }}" alt="{{ s.name }}">
    </div>
    <div class="team-info">
      <div class="team-name"><strong>{{ s.name }}</strong></div>
      <div class="team-field">{{ s.field }}</div>
    </div>
  </div>
  {% endfor %}
</div>
{% endif %}
