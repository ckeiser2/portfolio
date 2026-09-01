---
layout: page
title: Thief Catcher
permalink: /masters_godot/thiefcatcher/
description: Created in Godot utilizing gdscript. Goal of the game is too navigate through levels as a police officer catching thieves and pushing them into the police vehicle. With the interactive UI once all thieves in a level are captured, the player is moved onto the next level. As of right now there are two levels. 
img: assets/img/thiefcatcher.png
category: godot
---

#### Skills/Tools used
- Godot 4: Game engine used.
- GDScript: Scripting language used.
- JetBrains Rider: IDE used for scripting.

#### Thief Catcher
**Role: Solo Developer**

#### Description
Created in Godot utilizing gdscript. The goal of the game is to navigate through levels as a police officer catching thieves and pushing them into the police vehicle. With the interactive UI once all thieves in a level are captured, the player is moved onto the next level. As of right now there are two levels. Controls found below.

---

#### Features/mechanics

- **Visual Production Pipeline:** Assets generated using a mixture of cursor generative agents, and ChatGPT generative features. Plan on replacing these with assets I've created out of Krita eventually.

- **UI Mechanics:** Interactive UI that dynamically responds to the number of gameobjects tagged with the tag "Enemy" within a level. Updates text when all remaining thieves are captured. After a short delay progressing the player character to the next level.

- **Level Design / Thought Process:** As the current state of the game has two levels, the first level serves as an introduction to the core concepts of the game with a simple and easily navigable design. While the second plays on concepts established in the first level while introducing a more complex and larger map to navigate with more police trucks and thieves for the player to engage with.

- **Sound Effects:** Grunting sound effects for when enemies are pushed into the police patrol vehicle.

- **Enemy Movement / Enemy chase mechanic:** Enemies have a layered movement logic when at the start of the round they will travel in a random direction with a weak force. As the player approaches them the game will check if they are in a certain distance before having the thieves run in the opposite direction with a weak force. This was a pretty iterative feature as making the force too strong creates obstacles in getting the enemies out of corners or making them too hard to push into the truck. Refer to the below GDScript:

```gdscript
func _physics_process(delta: float) -> void:
	if player == null:
		return

	var distance_to_player = global_position.distance_to(player.global_position)

	if distance_to_player < flee_distance:
		var flee_direction = global_position - player.global_position
		flee_direction = flee_direction.normalized()

		apply_central_force(flee_direction * flee_force)

	if linear_velocity.length() > max_speed:
		linear_velocity = linear_velocity.normalized() * max_speed
```


---

#### Controls
Use W,A,S,D keys for movement

W	Move Up
A	Move Left
S	Move Down
D	Move Right

<iframe frameborder="0" src="https://itch.io/embed-upload/19062971?color=2f2f2f" allowfullscreen="" width="1280" height="740"><a href="https://keiserdev.itch.io/thiefgame">Play ThiefCatcher on itch.io</a></iframe>