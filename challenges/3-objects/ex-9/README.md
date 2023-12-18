# Pick Function

## Objective:

Your task is to write a TypeScript function named `pick`. This function should take an object and an array of keys. It will then return a new object containing only the specified keys and their corresponding values.

For instance, if you have an object:

```typescript
const user = {
  id: 123,
  name: "John Doe",
  email: "john.doe@example.com",
};
```

And you call the function with the keys `['id', 'name']`, the function should return:

```typescript
{
  id: 123,
  name: 'John Doe'
}
```

## Function signature

```typescript
export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K>;
```

## Instructions:

1. **Create a file:** Start by creating a file named `pick.ts`.
2. **Define the function:** Implement the `pick` function. It should be able to accept an object and an array of its keys, then return an object containing only the specified keys.
3. **Export the Function:** Ensure that your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function:** Run the following command in your terminal to verify that your function works correctly:

```Bash
npm test -- pick
```

Remember to make use of the provided function signature as a guide while implementing the function.
