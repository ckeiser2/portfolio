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

<img src="{{ site.baseurl }}/assets/img/enemies.png" alt="enemies">

I used the game data above to decentralize the storage of game data for weapons and enemies. Post lecture I included the data of the "Alien" enemy type. Once I had the blaster and further attacking functionality I will be able to better showcase the different hitpoint values and speed of each object.

#### Description of game
Created in Godot utilizing gdscript. As of right now the game has you surviving a variety of space objects hitting your ship while in an asteroid belt. Utilizes data within csv. Added multiple foreign objects and particle effects to mimic being in space and surrounded by debris around you while be in an asteroid belt. Additionally, added music as well.

** Disclaimer: it is turned down very low. **

#### Description of scripting

Additional, scripting for the project: for each foreign object to the player within the game I created a script that reads from the csv and assigns speed values to the enemy based on the csv data.

```gdscript

extends RigidBody2D

@export var enemy_id: String = "enm_alien"

var player: Node2D
var speed: float = 100.0


func _ready() -> void:
	player = get_tree().get_first_node_in_group("Player")

	load_enemy_data()

	# Initial random movement
	var x_axis_force = randf_range(-speed, speed)
	var y_axis_force = randf_range(-speed, speed)

	var enemy_vector := Vector2(x_axis_force, y_axis_force)

	apply_impulse(enemy_vector * 10)


func load_enemy_data() -> void:
	var file = FileAccess.open("res://Data/enemies.csv", FileAccess.READ)

	if file == null:
		print("Could not open enemies.csv")
		return

	# Read and discard header
	file.get_line()

	while not file.eof_reached():
		var line = file.get_line().strip_edges()

		if line == "":
			continue

		var data = line.split(",")

		if data.size() < 4:
			continue

		var id = data[0]

		if id == enemy_id:
			speed = float(data[3])
			print(enemy_id, " speed = ", speed)
			break


func _physics_process(delta: float) -> void:
	if player == null:
		return

	var constant_speed = speed * 0.1

	var x_axis_force = randf_range(-constant_speed, constant_speed)
	var y_axis_force = randf_range(-constant_speed, constant_speed)

	var enemy_vector := Vector2(x_axis_force, y_axis_force)
```

---

#### Controls
Use your arrow keys for movement


<iframe frameborder="0" src="https://itch.io/embed-upload/19134727?color=333333" allowfullscreen="" width="1280" height="740"><a href="https://keiserdev.itch.io/spaceshooter">Play SpaceShooter on itch.io</a></iframe>