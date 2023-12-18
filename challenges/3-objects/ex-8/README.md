# Omit Function

## Objective:

Your task is to write a TypeScript function named `omit`. This function should remove specific keys from an object and return the modified object. For example, if you have an object `{ a: 1, b: 2, c: 3 }` and you want to omit the key `b`, the returned object should be `{ a: 1, c: 3 }`.

## Function Signature

```typescript
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K>;
```

## Instructions:

1. **Create a file:** Start by creating a file named `omit.ts`.
2. **Define the function:** Your function should take two parameters:

   - `obj`: The object you want to modify.
   - `keys`: An array of keys you want to omit from the object.

   The function should return a new object without the specified keys.

3. **Export the Function:** Ensure that your function is exported from the module, so it can be imported and tested elsewhere.

4. **Testing your function:** After defining and exporting your function, run the following command in your terminal to test your function:

```Bash
npm test -- omit
```

## Example:

Given:

```typescript
const obj = { a: 1, b: 2, c: 3 };
const keys = ["b"];
```

When:

```typescript
const result = omit(obj, keys);
```

Then `result` should be:

```typescript
{ a: 1, c: 3 }
```
