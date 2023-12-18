import { Console } from "./Console";
import { Enemy } from "./Enemy";
import { Player } from "./Player";
import { Room } from "./Room";
import { Weapon } from "./Weapon";
import { Position } from "./Position";
import { cardinalDirections } from "./cardinalDirections";
import { Treasure } from "./Treasure";

export class Game {
  player: Player;
  map: Room[][] = [];
  private readonly mapSize = 5;
  private readonly enemyRatio = 0.5;
  private readonly weaponRatio = 0.1;
  private readonly treasureRoom: Room;

  private get currentRoom(): Room {
    return this.map[this.player.currentPosition.y][
      this.player.currentPosition.x
    ];
  }

  constructor() {
    this.player = new Player({
      x: Math.floor((this.mapSize - 1) / 2),
      y: this.mapSize - 1,
    });

    this.treasureRoom = new Room();
    const treasure = new Treasure();
    this.treasureRoom.addItem(treasure);
    this.treasureRoom.addEnemy(
      new Enemy("Dragon", "A fierce dragon.", 150, 70)
    );

    this.generateGameMap();
  }

  async playTurn() {
    await this.runCombatPhase();
    await this.runExplorePhase();
    this.checkPlayerWin();
    await this.runMovePhase();
  }

  private async runCombatPhase() {
    await this.currentRoom.enemies.reduce(async (acc, enemy) => {
      await acc;
      Console.log(`There is ${enemy.description} in the room!`);
      const userWantToFight = await Console.askYesNo(
        `Do you want to attack it?`
      );
      if (userWantToFight) {
        do {
          Console.log(`You attacked the ${enemy.name}.`);
          enemy.takeDamage(this.player.attack);
          Console.log(`The ${enemy.name} has ${enemy.health} health left.`);
          if (enemy.health <= 0) {
            Console.log(`You killed the ${enemy.name}.`);
            this.currentRoom.removeEnemy(enemy);
          } else {
            Console.log(`The ${enemy.name} attacks you!`);
            this.player.takeDamage(enemy.attack);
            Console.log(`You have ${this.player.health} health left.`);
            this.checkPlayerHealth();
          }
        } while (this.player.health > 0 && enemy.health > 0);
      } else {
        this.player.goBack();
        Console.log(`You ran away from the ${enemy.name}.`);
        Console.log(`you are now in the previous room.`);
      }
    }, Promise.resolve());
  }

  private async runExplorePhase() {
    Console.log(`You are exploring the room...`);
    if (this.currentRoom.items.length) {
      await this.currentRoom.items.reduce(async (acc, item) => {
        await acc;
        const response = await Console.askYesNo(
          `You found : ${item.description} Do you want to pick it ?`
        );
        if (response) {
          Console.log(`You picked up the ${item.name}.`);
          this.player.pickUp(this.currentRoom.items[0]);
          this.currentRoom.removeItem(item);
        }
        Console.log(
          `Now, you have ${this.player.inventory.length} item${
            this.player.inventory.length > 1 ? "s" : ""
          } in your inventory.`
        );
      }, Promise.resolve());
    } else {
      Console.log(`This room is empty.`);
    }
  }

  private async runMovePhase() {
    const direction: cardinalDirections[] = [];
    if (this.player.currentPosition.y > 0) {
      direction.push(cardinalDirections.north);
    }
    if (this.player.currentPosition.y < this.mapSize - 1) {
      direction.push(cardinalDirections.south);
    }
    if (this.player.currentPosition.x > 0) {
      direction.push(cardinalDirections.east);
    }
    if (this.player.currentPosition.x < this.mapSize - 1) {
      direction.push(cardinalDirections.west);
    }
    Console.log(`There is ${direction.length} doors in this room.`);
    const response = await Console.askInput(
      "Which direction do you want to go?",
      direction
    );
    Console.log(`You are going ${response}.`);
    this.player.moveTo(response);
  }

  private generateGameMap() {
    for (let i = 0; i < this.mapSize; i++) {
      this.map[i] = [];
      for (let j = 0; j < this.mapSize; j++) {
        const room = new Room();
        if (Math.random() < this.enemyRatio) {
          room.addEnemy(
            new Enemy("Goblin", "A nasty looking creature.", 30, 10)
          );
        }
        if (Math.random() < this.weaponRatio) {
          room.addItem(new Weapon("Sword", "A shiny sword.", 100));
        }
        this.map[i][j] = room;
      }
    }

    const startingRoom = new Room();
    const sword = new Weapon("dagger", "A rusty dagger.", 10);
    startingRoom.addItem(sword);
    this.map[this.player.currentPosition.y][this.player.currentPosition.x] =
      startingRoom;

    let treasurePosition: Position;
    do {
      treasurePosition = {
        x: Math.floor(Math.random() * 1000) % (this.mapSize - 1),
        y: Math.floor(Math.random() * 1000) % (this.mapSize - 1),
      };
    } while (
      treasurePosition.x === this.player.currentPosition.x &&
      treasurePosition.y === this.player.currentPosition.y
    );
    this.map[treasurePosition.y][treasurePosition.x] = this.treasureRoom;
  }

  private checkPlayerHealth() {
    if (this.player.isDead) {
      Console.log("You died!");
      process.exit(0);
    }
  }

  private checkPlayerWin() {
    if (this.player.hasTreasure) {
      Console.log("Congratulations! You found the treasure!");
      process.exit(0);
    }
  }

  async start() {
    Console.log("You are entering the dungeon...");
    let limit = 1000;
    while (true) {
      // Main game loop
      await this.playTurn();
      if (limit-- === 0) {
        process.exit(0);
      }
    }
  }
}
