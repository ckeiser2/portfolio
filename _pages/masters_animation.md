---
layout: page
title: animation examples
permalink: /masters_animation/
description: A collection of animation projects from my Masters in Game Dev program.
nav: true
nav_order: 3
display_categories: [blender]
horizontal: false
---

<div class="projects">

{% assign blender_projects = site.projects | where: "category", "blender" %}
{% assign sorted_animation = blender_projects | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_animation %}
      {% include projects.liquid %}
    {% endfor %}
  </div>

</div>