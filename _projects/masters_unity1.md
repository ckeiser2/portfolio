---
layout: page
title: A Hero's Journey
permalink: /masters_programming/hero_journey/
description: ​A 2D Platformer in development.
img: assets/img/2D_Game.png
category: unity
---

### Description

​A 2D Platformer in development. Current win condition is to obtain different collectibles around the map dodging enemies.

<img src="{{ site.baseurl }}/assets/img/2D_Game.png" alt="game">


### Questions


**What did you add?**

Camera movement script that follows player movement.

Added a slime enemy that will not fall off platforms.

Additionally, added a new collectible with customizable movement logic "the star". 

---

**How did you go about implementing it?**

Camera movement script: A basic camera script that follows player position.

Slime Enemy: Has pathfinding logic where they have two seperate ground checks to ensure they stay on the leveled platform they are place on. Similar in logic to the red shelled koopa from traditional Mario games.

Star Collectible: In order to complete the level you will additionally have to catch the star which currently bounces around the level.

---

**Why did you choose this feature for your platformer?**

Camera movement script: This was an intuitive natural progression of the development. As I designed this level I realized in order to scatter the collectibles across the map and add the various features we would need a camera movement script.

Slime Enemy: When I thought about a 2D game that was centered around the collecting of objects I found it intuitive to add hazzards that were not stationary as a way to enage/test the player in a level.

Star Collectible: This was an effort to enhance the collectible system with variations that had special effects, or gimmicks that interacted with the player and level in engaging ways.

---


**How do you think the feature contributes to the game?**

Camera movement script: This allows the game to have more expansive/larger levels as the camera is no longer locked to a stationary perspective.

Slime Enemy: The Slime enemy creates conflict for the player. Additionally, it is an expansion to our hazzard system by adding in essentially a moving hazzard with logic to its navigation of a level.

Star Collectible: This adds an engaging twist on collectibles that enhances the experience of hitting the stage win condition by adding a fun twist to the traditional stationary collectible mechanic. The Star creates interesting scenarios where it could bounce into an enemies zone creating challenge for the player.

---

### Github Repo
[Github Link](https://github.com/ckeiser2/GSD551-Project1/tree/main)

### Play Game Here
<iframe frameborder="0" src="https://itch.io/embed-upload/19441329?color=333333" allowfullscreen="" width="640" height="380"><a href="https://keiserdev.itch.io/a-heros-journey">Play A Hero's Journey on itch.io</a></iframe>