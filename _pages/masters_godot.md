---
layout: page
title:  godot game programming examples
permalink: /masters_godot/
description: A collection of Godot projects from my Masters in Game Dev program.
nav: true
nav_order: 2
display_categories: [godot]
horizontal: false
---

<div class="projects">

{% assign godot_projects = site.projects | where: "category", "godot" %}
{% assign sorted_godot = godot_projects | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_godot %}
      {% include projects.liquid %}
    {% endfor %}
  </div>

</div>
