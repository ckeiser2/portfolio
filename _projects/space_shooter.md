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

Additional, scripting for the project: for each foreign object to the player within the game I created a script that reads from the csv and assigns speed values to the enemy based on the csv data. There are three different enemy types within the game all with unique stats and designs Cruiser, Scout, tiny alien, juggernaut and default alien ufo. Within the enemy data folder a new field was added called "texture" so the enemy spawning algorithm can dynamically generate enemies from one scene by assigning the stats and sprite automatically.

```gdscript

extends Area2D

@export var enemy_id: String = "enm_alien"

var player: Node2D
var max_hp: float = 0.0
var current_hp: float = 0.0
var move_speed: float = 100.0
@onready var hp_label: Label = $HpLabel
@onready var sprite: Sprite2D = $Sprite2D
@onready var death_particles: GPUParticles2D = $DeathParticles

func _ready() -> void:
	setup_enemy(enemy_id)

func setup_enemy(id: String) -> void:
	var loader: Node = get_node("/root/DataLoader")
	if not loader.enemies.has(id):
		print("Unknown enemy id: ", id)
		hp_label.text = "Unknown"
		return
	
	var data: Dictionary = loader.enemies[id]

	print("Enemy ID: ", id)
	print("Enemy data: ", data)
	print("Enemy keys: ", data.keys())

	max_hp = data["hp"]
	current_hp = max_hp
	move_speed = data["speed"]
	hp_label.text = str(current_hp)
	load_enemy_visual(id)
	print("Spawned ",
	data["name"],
	" HP: ",
	current_hp,
	" Speed: ",
	move_speed)
	
func load_enemy_visual(id: String) -> void:
	match id:
		"enm_alien":
			sprite.texture = preload("res://Assets/alien.png")

		"enm_scout":
			sprite.texture = preload("res://Assets/scout.png")

		"enm_cruiser":
			sprite.texture = preload("res://Assets/cruiser.png")



func _physics_process(delta: float) -> void:
	position.x -= move_speed * delta
	if position.x < -100.0:
		leak()

func take_damage(amount: float) -> void:
	current_hp -= amount
	hp_label.text = str(current_hp)
	print(enemy_id, " took ",
	amount,
	" damage. HP left: ",
	current_hp)
	
	if current_hp <= 0.0:
		die()
		
func notify_gone() -> void:
	if get_parent().has_method("on_enemy_gone"):
		get_parent().on_enemy_gone()

func die() -> void:
	print(enemy_id, " destroyed!")

	if get_parent().has_method("add_score"):
		get_parent().add_score(10)

	notify_gone()

	# Disable enemy
	$CollisionShape2D.set_deferred("disabled", true)
	$Sprite2D.hide()
	$HpLabel.hide()

	# Play particles
	death_particles.emitting = true

	# Wait for death animation to finish then free queue
	await death_particles.finished

	queue_free()

func _on_body_entered(body: Node2D) -> void:
	if body.has_method("take_hit"):
		body.take_hit(1)
		notify_gone()
		queue_free()

func leak() -> void:
	if get_parent().has_method("lose_life"):
		get_parent().lose_life(1)
	notify_gone()
	queue_free()
```

---

#### Controls
Use your arrow keys for movement.
Shooting is automatic.
Enemies are defeated once their health goes to 0.

---


<iframe frameborder="0" src="https://itch.io/embed-upload/19330374?color=333333" allowfullscreen="" width="1280" height="740"><a href="https://keiserdev.itch.io/spaceshooter">Play SpaceShooter on itch.io</a></iframe>