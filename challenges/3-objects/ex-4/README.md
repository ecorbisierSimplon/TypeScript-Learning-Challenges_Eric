# Assign Mutate Function

## Objective:

Your task is to write a TypeScript function named `assignMutate`. This function will take two objects as parameters: a `target` object and a `source` object. The function will mutate the `target` object by copying properties from the `source` object onto it using the `Object.assign()` method. Your function should not return anything, but the `target` object should be changed as a side effect of calling this function.

## Function signature

```typescript
export function assignMutate<T extends {}, U>(target: T, source: U): void;
```

## Example:

If you have a target object:

```typescript
let target = { name: "John", age: 30 };
```

And a source object:

```typescript
let source = { age: 25, city: "New York" };
```

After using the `assignMutate` function:

```typescript
assignMutate(target, source);
```

The `target` object should now look like this:

```typescript
{ name: "John", age: 25, city: "New York" }
```

## Instructions:

1. Create a file: Create a file named `assignMutate.ts`.
2. Define the function: Write the function according to the provided signature.
3. Export the Function: Make sure your function is exported from the module.
4. Testing your function: Run the following command in your terminal to test your function:

```Bash
npm test -- assignMutate
```
