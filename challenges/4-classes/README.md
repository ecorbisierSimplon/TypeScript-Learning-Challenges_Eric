# OOP Odyssey: Designing a Dungeon Game in TypeScript

Welcome to the "OOP Odyssey"! In this captivating tutorial, we embark on a quest into the realm of Object-Oriented Programming (OOP) using TypeScript. As aspiring software engineers, mastering the principles of OOP is paramount. Whether it's for game development or other software applications, these principles stand as the bedrock of modern software design.

Our odyssey unravels in a classic dungeon where a player traverses through chambers teeming with enemies, treasures, and enigmas. Our protagonist's mission? To uncover the prized treasure while confronting menacing goblins and perhaps, if fortune favors, a daunting dragon!

But here's the twist: the hero of this story is you, and instead of merely playing the game, you'll be crafting it. Each step presents a new challenge, beckoning you to sculpt various game components using the intricate tools of TypeScript's OOP arsenal. Direct solutions won't be handed to you on a silver platter. You'll be armed with blueprints, and the magic touch to bring them alive rests in your hands.

By the conclusion of our odyssey, you'll glean insights into:

- Efficiently structuring a TypeScript project employing classes and interfaces.
- The inner workings of inheritance in the OOP realm.
- The pivotal roles and practical applications of encapsulation, polymorphism, and abstraction.

With "OOP Odyssey" as your guide, you'll traverse the terrains of OOP concepts, witnessing them spring to life. Let's embark on this enlightening adventure, diving into the depths of the dungeon and soaring through the pinnacles of TypeScript OOP! 🏰🐉🗡️

## Step 0: Charting the Directions

### Objective:

In our game, the player will navigate through rooms in different directions. To represent these possible directions, we'll use an enumeration (or `enum`). Enums allow us to define a set of named constants.

### Task:

1. Create a new file named `cardinalDirections.ts`.
2. In this file, create and export an `enum` named `cardinalDirections`.
3. The enum should have four directions: North, South, East, and West.
4. Each direction should map to a string with its full name (e.g., "North").

### Hint:

- The syntax to define and export an enum in TypeScript looks like this:
  ```typescript
  export enum MyEnum {
    firstValue = "First Value",
    secondValue = "Second Value",
    // ... and so on.
  }
  ```

### Test Your Implementation:

After you've crafted your `enum`, run the test command to validate your implementation:

```bash
npm test -- cardinalDirections
```

## Step 1: Pinpointing the Location

### Objective:

Some element in our dungeon game, like players and rooms, has a position. To ensure consistency and clarity, we'll use an interface to represent these positions.

### Task:

1. Create a new file named `Position.ts`.
2. In this file, create and export an interface named `Position`.
3. The interface should define two properties: `x` and `y`, both of which should be of type `number`.

### Hint:

- Defining an interface in TypeScript looks like this:
  ```typescript
  export interface MyInterface {
    property1: Type1;
    property2: Type2;
    // ... and so on.
  }
  ```

### Test Your Implementation:

After defining your interface, validate your implementation using the following test command:

```bash
npm test -- Position
```

## Step 2: Laying the Foundation with GameEntity

### Objective:

In our dungeon game, various elements like treasures, weapons, and enemies share some common properties. To avoid redundancy and to adhere to the principles of OOP, we'll introduce an abstract class named `GameEntity` that acts as a foundational layer for these game elements.

### Task:

1. Create a new file named `GameEntity.ts`.
2. Inside this file, define and export an abstract class named `GameEntity`.
3. This class should have a constructor that initializes two properties: `name` and `description`, both of which should be of type `string`.

### Hint:

- The syntax for defining an abstract class with a constructor in TypeScript is:
  ```typescript
  export abstract class MyAbstractClass {
    constructor(public property1: Type1, public property2: Type2) {}
    // ... additional methods and properties.
  }
  ```

### Class signature

```typescript
import { GameEntity } from "./GameEntity";

export class Treasure extends GameEntity {
  constructor();
}
```

### Test Your Implementation:

After crafting the `GameEntity` class, use the following command to validate your implementation:

```bash
npm test -- GameEntity
```

## Step 3: Discovering the Treasure

### Objective:

Every dungeon game needs its main prize, the treasure! In this step, we will build on top of our `GameEntity` class to create a specific entity representing the treasure.

### Task:

1. Create a new file named `Treasure.ts`.
2. Inside this file, first import the `GameEntity` class.
3. Define and export a class named `Treasure` that extends the `GameEntity` class.
4. This class should have a constructor that calls the super constructor of `GameEntity` with the name "Treasure" and a description "A large bag filled with gold."

### Hint:

- Extending a class in TypeScript is done using the `extends` keyword. And to call the constructor of the parent class, you use the `super()` function:

  ```typescript
  import { ParentClass } from "./ParentClass";

  export class ChildClass extends ParentClass {
    constructor() {
      super(propertyValue1, propertyValue2);
      // ... additional methods and properties.
    }
  }
  ```

### Test Your Implementation:

Once you've crafted the `Treasure` class, execute the following command to validate your work:

```bash
npm test -- Treasure
```

## Step 4: Arming for Battle

### Objective:

In our dungeon game, players will face challenging enemies, and to tackle these challenges, they'll need weapons. In this step, we will introduce weapons to our game world by creating a `Weapon` class that extends from the `GameEntity` class.

### Task:

1. Create a new file named `Weapon.ts`.
2. At the beginning of the file, import the `GameEntity` class.
3. Define and export a class named `Weapon` that extends `GameEntity`.
4. The `Weapon` class should have a constructor with the following parameters:
   - `name` and `description` (which are passed to the super constructor of `GameEntity`)
   - `damage` of type `number`.
5. The `Weapon` class should have a `damage` property that holds the damage value of the weapon.

### Class signature

```typescript
import { GameEntity } from "./GameEntity";

export class Weapon extends GameEntity {
  public damage: number;

  constructor(name: string, description: string, damage: number);
}
```

### Test Your Implementation:

Once you've crafted your `Weapon` class, confirm its functionality with the test command provided:

```bash
npm test -- Weapon
```

## Step 5: The Enemy Lurks

### Objective:

A dungeon game without challenges is no fun. Enemies will bring these challenges! In this step, we'll develop an `Enemy` class that builds upon our base `GameEntity` class. This enemy will have unique properties like health and attack strength and a method to manage damage taken during combat.

### Task:

1. Create a new file named `Enemy.ts`.
2. At the beginning of the file, import the `GameEntity` class.
3. Define and export a class named `Enemy` that extends `GameEntity`.
4. The `Enemy` class should have a constructor with the following parameters:
   - `name` and `description` (which are passed to the super constructor of `GameEntity`)
   - `health` and `attack` which are both of type `number`.
5. Also, implement a method `takeDamage(damage: number): string`. This method should decrement the enemy's health by the given damage value and return appropriate messages based on the enemy's state post damage.

### Class signature

```typescript
import { GameEntity } from "./GameEntity";

export class Enemy extends GameEntity {
  public name: string;
  public description: string;
  public health: number;
  public attack: number;

  constructor(
    name: string,
    description: string,
    health: number,
    attack: number
  );

  public takeDamage(damage: number): string;
}
```

### Test Your Implementation:

After creating your `Enemy` class, ensure its correctness with the following test command:

```bash
npm test -- Enemy
```

## Step 6: Enter the Hero

### Objective:

Every great dungeon game revolves around a protagonist: a player with abilities, weapons, health, and, most importantly, the desire to explore and conquer. In this step, we'll focus on bringing our player to life by designing the `Player` class.

### Task:

1. Create a new file named `Player.ts`.
2. At the beginning of the file, import necessary entities such as `Position`, `cardinalDirections`, `Weapon`, `GameEntity`, and `Treasure`.
3. Define and export a class named `Player`.
4. The `Player` class should have the following properties:
   - `inventory`: an array of type `GameEntity` that will store items the player collects. Initialize it as an empty array.
   - `health`: a number initialized to 100 representing the player's health.
   - `currentPosition`: a `Position` object to keep track of where the player is.
5. Implement the following public methods and properties in the `Player` class:
   - `moveTo(direction: cardinalDirections)`: Updates the player's `currentPosition` based on the given direction. Remember to maintain the player's previous position for the `goBack()` method.
   - `isDead`: a property that returns `true` if the player's health is 0 or less.
   - `hasTreasure`: a property that checks if the player's inventory contains any item of type `Treasure`.
   - `attack`: a property that determines the player's attack strength based on the strongest weapon in their inventory.
   - `goBack()`: Sets the player's `currentPosition` back to their previous position.
   - `pickUp(item: GameEntity)`: Adds the given `GameEntity` to the player's `inventory`.
   - `takeDamage(damage: number)`: Decreases the player's health by the given damage amount.

### Class signature

```typescript
export class Player {
  public inventory: GameEntity[];
  public health: number;
  public currentPosition: Position;
  public isDead: boolean;
  public hasTreasure: boolean;
  public attack: number;

  constructor(currentPosition: Position);

  public moveTo(direction: cardinalDirections): void;

  public goBack(): void;

  public pickUp(item: GameEntity): void;

  public takeDamage(damage: number): void;
}
```

### Test Your Implementation:

After designing your `Player` class, you can validate its behavior and structure using the following test command:

```bash
npm test -- Player
```

Remember to carefully consider how each public method or property affects or interacts with the player's current state and inventory. Don't worry about private methods and properties as they're internal mechanisms to aid the player's functionalities.

## Step 7: Setting the Stage

### Objective:

Our dungeon game will consist of rooms, each with its unique set of challenges and rewards. This step involves developing the `Room` class that will house our game entities, be it treasures or enemies.

### Task:

1. Create a new file named `Room.ts`.
2. At the beginning of the file, import the required classes (`Enemy` and `GameEntity`).
3. Define and export a class named `Room`.
4. The `Room` class should have two public arrays: `items` and `enemies` to keep track of the various game entities present in the room.
5. Implement the following methods:
   - `addEnemy(enemy: Enemy)`: Add an enemy to the `enemies` array.
   - `addItem(item: GameEntity)`: Add an item to the `items` array.
   - `removeItem(item: GameEntity)`: Remove the specified item from the `items` array.
   - `removeEnemy(enemy: Enemy)`: Remove the specified enemy from the `enemies` array.

### Class signature

```typescript
import { Enemy } from "./Enemy";
import { GameEntity } from "./GameEntity";

export class Room {
  public items: GameEntity[];
  public enemies: Enemy[];

  public addEnemy(enemy: Enemy): void;

  public addItem(item: GameEntity): void;

  public removeItem(item: GameEntity): void;

  public removeEnemy(enemy: Enemy): void;
}
```

### Test Your Implementation:

Once you have created the `Room` class, validate its functionality with the provided test command:

```bash
npm test -- Room
```

Remember to always handle possible errors in your methods to ensure the integrity and stability of your game mechanics.

## Step 8: Boot Up The Adventure

### Objective:

Now that we've built the essential building blocks of our dungeon game, it's time to experience the adventure firsthand. In this step, you'll learn how to start the game and immerse yourself in the dungeon world you've crafted.

### Task:

1. Ensure all your previous steps are completed and that there are no errors in your code.
2. Open your terminal or command prompt.
3. Navigate to the root directory of the game project (where your `package.json` is located).
4. Launch the game using the following command:
   ```bash
   npm run start-game -s
   ```

### What's happening?

When you run the command, the game's main function will be invoked, and you'll be able to navigate through rooms, face enemies, and hunt for treasures.

### Encountering Issues?

If you encounter any issues while running the game, revisit the previous steps to ensure that you've implemented everything correctly. Check for error messages in the terminal—they'll often point you towards the problem. Remember, debugging is also a valuable part of the development journey. Don't be discouraged if things don't work perfectly the first time. Persevere and you'll get there!
