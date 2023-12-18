# Set Property Function

## Objective:

Your task is to write a TypeScript function named `setProperty`. This function should take an object, a key of that object, and a value corresponding to that key. It will then return a new object with the given key set to the provided value. The original object should not be mutated.

## Function signature

```typescript
export function setProperty<T, K extends keyof T>(
  object: T,
  key: K,
  value: T[K]
): T;
```

## Instructions:

1. **Create a file:** Initiate a new file named `setProperty.ts`.
2. **Define the function:** Using generics, ensure that the key belongs to the type of the object and the value is of the type corresponding to the key.
3. **Return a New Object:** Use the spread operator to return a new object instead of mutating the original object.
4. **Export the Function:** Ensure your function is exported from the module so it can be imported and tested elsewhere.
5. **Testing your function:** Run the following command in your terminal to test your function:

```Bash
npm test -- setProperty
```

## Example:

```typescript
const user = {
  name: "Alice",
  age: 25,
};

const updatedUser = setProperty(user, "name", "Bob");
console.log(updatedUser); // Outputs: { name: 'Bob', age: 25 }
```

**Note:** `user` object remains unchanged after the `setProperty` function is called, demonstrating immutability.
