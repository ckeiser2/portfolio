---
layout: page
title: Unity Projs
permalink: /masters_programming/
description: A collection of programming projects from my Masters in Game Dev program.
nav: true
nav_order: 2
display_categories: [unity]
horizontal: false
---

<div class="projects">

{% assign unity_projects = site.projects | where: "category", "unity" %}
{% assign sorted_unity = unity_projects | sort: "importance" %}

  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_unity %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
