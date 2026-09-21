---
layout: page
title: Space Shooter
permalink: /masters_godot/spaceshooter/
description: Created in Godot utilizing gdscript. As of right now the game has you surviving a variety of space objects hitting your ship while in an asteroid belt. Utilizes data within csv.
img: assets/img/spaceshooter.png
category: godot
---

#### Skills/Tools used
- Godot 4: Game engine used.
- GDScript: Scripting language used.
- JetBrains Rider: IDE used for scripting.


#### Embedded Data Docs

<img src="{{ site.baseurl }}/assets/img/weapons.png" alt="weapons">

<img src="{{ site.baseurl }}/assets/img/enemy_data.png" alt="enemies">

I used the game data above to decentralize the storage of game data for weapons and enemies. Post lecture I included the data of the "Alien" enemy type. Once I had the blaster and further attacking functionality I will be able to better showcase the different hitpoint values and speed of each object.

#### Description of game
Created in Godot utilizing gdscript. As of right now the game has you surviving a variety of extraterrestial beings within the asteroid belt. Utilizes data within csv. Added multiple foreign objects and particle effects to mimic being in space and surrounded by debris around you while be in an asteroid belt. Additionally, added music as well.

---

#### Description of scripting

Additional, scripting for the project: for each foreign object to the player within the game I created a script that reads from the csv and assigns speed values to the enemy based on the csv data. There are three different enemy types within the game all with unique stats and designs Cruiser, Scout, and default alien ufo. Within the enemy data folder a new field was added called "texture" so the enemy spawning algorithm can dynamically generate enemies from one scene by assigning the stats and sprite automatically.

---

#### Controls
Use your arrow keys for movement.
Shooting is automatic.
Enemies are defeated once their health goes to 0.

---


<iframe frameborder="0" src="https://itch.io/embed-upload/19329536?color=333333" allowfullscreen="" width="1280" height="740"><a href="https://keiserdev.itch.io/spaceshooter">Play SpaceShooter on itch.io</a></iframe>