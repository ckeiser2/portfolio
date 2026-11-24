---
layout: page
title: NinjaFrogPlatformer
permalink: /masters_godot/NFP/
description: Created in Godot utilizing gdscript. Platformer.
img: assets/img/platformer_img.png
category: godot
---

#### Skills/Tools used
- Engine: Godot 4.6.3 stable
- GDScript: Scripting language used.
- JetBrains Rider: IDE used for scripting.
- Version 0.4 in development
- Build Date: 11/23/2026
- Title: Ninga Frog Platformer

#### Description

- Dynamic shooting mechanics
The player can pick up a blow dart which can shoot down certain objects by hitting key points, create dart like objects into trees and freeze enemies.

- Input mapping
Refer to the controls section below for all inputs necessary for playable demo

- Enemy behavior
Enemy logic allows for them to stay on platforms and react appropriately to being hit with a dart (By being stunned.)


### Controls

---

- Can move around using W,A,S,D

- Press E to interact with objects

- Left click will shoot your blow dart

- R to reset

- Q to reload

- Can jump and double jump using space

- Can navigate menus using mouse

### Level Design & Lighting

Level Layout Sketch
<img src="{{ site.baseurl }}/assets/img/level_layout.png" alt="Level Layout">

Top Down Engine view
<img src="{{ site.baseurl }}/assets/img/engine_top_down.png" alt="top down engine view">

Annotated Player-Perspective Screenshot
<img src="{{ site.baseurl }}/assets/img/annotated_engine.png" alt="top down engine view">


<div class="pdf-section">

  <h2>Design Rationale Table</h2>
  <iframe
    src="{{ site.baseurl }}/assets/pdf/Design Rationale Table.pdf"
    width="100%"
    height="700px"
    style="border: 1px solid #ccc; border-radius: 8px;"
  ></iframe>

  <h2>Sketch-to-Build Fidelity Check</h2>
  <iframe
    src="{{ site.baseurl }}/assets/pdf/Sketch-to-Build Fidelity Check.pdf"
    width="100%"
    height="700px"
    style="border: 1px solid #ccc; border-radius: 8px;"
  ></iframe>

</div>

### Short Design Summary

The lighting and overall level layout were designed to naturally guide the player toward the exit through visual cues and environmental flow. Lighting highlights important areas and interactable objects, drawing the player's attention toward key points of interest. Platforms and blocks also act as subtle directional indicators, encouraging progression from left to right. An upward-pointing arrow was added to the lower section of the level to help players who drop from the upper platform understand how to navigate over the wall and continue forward. Optional dead ends containing enemies provide opportunities for exploration while acknowledging players who venture off the intended path.

When comparing the original sketch to the final engine implementation, several adjustments were made to improve visual variety and gameplay flow. Additional platforming details were added to the far-left and far-right dead ends to make these areas more visually distinct and rewarding to explore. The middle block sections were also expanded with additional platforms to make jumps more approachable. Rather than making every jump equally challenging, I wanted to introduce some variety while keeping the platforming relatively forgiving, allowing players to become more comfortable with the game's movement and jumping mechanics.

---

### Playable game below

<iframe frameborder="0" src="https://itch.io/embed-upload/20781632?color=333333" allowfullscreen="" width="800" height="520"><a href="https://keiserdev.itch.io/platformer">Play NinjaFrogPlatformer on itch.io</a></iframe>

