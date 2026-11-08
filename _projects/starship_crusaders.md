---
layout: page
title: Starship Crusaders (In Development)
permalink: /masters_programming/starship_crusaders/
description: ​A 3D Starfox inspired "on rails shooter" in development in Unity. Piloting a spaceship performing a variety of features such as shooting, dodging, and barrel rolling!
img: assets/img/starship_crusaders.png
category: unity
---

Title: Starship Crusader


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/starship_crusaders.png" title="image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---


### Programming Systems:

- Level Scrolling: Per the nature of an on rails shooter the player is limited to the movement within a "box" of the cameras view. The level is moving towards the player simulating the idea that the player is moving forward but preserving the classic StarFox feel.

- Health: The player is expected to dodge a variety of objects while making it through a level if not they take damage that will eventually destroy their ship.

- Player Movement: The player is empowered with a multitude of abiliites for movement not just the expected X and Y + diagonal movement. Additionally, including the tilting of their ship to dodge and squeeze through terrain and additional for quick movement they can perform a fast barrel roll to quickly evade. 

- Projectiles: Projectiles fired by the ship come out of a pre determined weapon points that fire shots that can destroy some game objects and eventually will disappear after a pre determined amount of time. They will travel wherever the reticle was aimed at when firing was commenced.

- Targeting Reticle: The reticle moves independently from the player ships movement. The reticle determines where projectiles will travel towards once fired.

### Enemy Systems
The enemy systems inherent from the base Enemy.cs script core behaviors while each enemy type listed below expands upon the base behaviors with their unique parameters, behaviors. Enemies have the ability to deal damage, receive damage, move (except for turret) and have their own unqiue behaviors.

### Enemy Types

Within the game there are currently 3 seperate enemies: 

- scouts (fast moving side to side enemies), 

- heavies (slow, beefier enemies that follow the players position)

- turrets are stationary enemies that periodically shoot at the player within their given range.

### Inheritance

Each seperate enemy script inherits from the base enemy.cs script base behaviors. The unique enemy scripts can then override these methods with their unique behaviors/data.

---


### Controls

- MnK
- Movement: W,A,S,D
- Aim: Mouse
- Roll:Q,E
- Barrel Roll: Double Tap Roll Buttons
- Shoot: M1

- Controller
- Movement: Left stick
- Aim: Right Stick
- Roll: L/R Bumpers
- Barrel Roll: Double Tap Roll Buttons
- Shoot: RT


---


### Playable below
<iframe frameborder="0" src="https://itch.io/embed-upload/20376263?color=333333" allowfullscreen="" width="640" height="380"><a href="https://keiserdev.itch.io/starshipcruiser">Play Starship Crusader on itch.io</a></iframe>


---


### Github Repo
[Github Link](https://github.com/ckeiser2/StarshipCrusader)
