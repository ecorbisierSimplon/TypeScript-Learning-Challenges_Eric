# Set Property Mutate Function

## Objective:

Your task is to write a TypeScript function named `setPropertyMutate`. This function should be capable of taking in an object, a key belonging to that object, and a value. The function will then mutate the provided object by setting the value of the specified key to the provided value.

**Example**:

If we have an object:

```typescript
const user = {
  name: "John",
  age: 25,
};
```

After invoking `setPropertyMutate(user, 'name', 'Alice')`, the `user` object should be:

```typescript
{
  name: 'Alice',
  age: 25
}
```

## Function signature:

```typescript
export function setPropertyMutate<T>(
  obj: T,
  key: keyof T,
  value: T[keyof T]
): void;
```

## Instructions:

1. **Create a file**: Create a file named `setPropertyMutate.ts`.
2. **Define the function**: Using the provided function signature, implement the functionality so that the object is mutated with the new value for the specified key.
3. **Export the Function**: Ensure that your function is exported from the module so it can be imported and tested elsewhere.
4. **Testing your function**: To verify the correctness of your function, run the following command in your terminal:

```Bash
npm test -- setPropertyMutate
```
