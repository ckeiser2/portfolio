---
layout: page
title: game_projs
permalink: /games/
description: A growing collection of my game related projects.
nav: false
nav_order: 
display_categories: [games 🎮]
horizontal: false
---

<div class="projects">

{% assign game_projects = site.projects | where: "category", "games 🎮" %}
{% assign sorted_games = game_projects | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_games %}
      {% include projects.liquid %}
    {% endfor %}
  </div>

</div>