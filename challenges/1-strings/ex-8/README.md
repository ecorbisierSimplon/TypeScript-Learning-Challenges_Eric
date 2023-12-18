# includes Function

## Objective:

Your task is to create a TypeScript function named `includes`. This function should determine whether a given search string exists within another string. For instance, if the main string is "hello" and the search string is "ell", the function should return `true`.

## Function signature

```typescript
export function includes(str: string, search: string): boolean;
```

## Example:

For the input strings "TypeScript" and "Script", the function should return `true`. For the input strings "TypeScript" and "Java", the function should return `false`.

## Instructions:

1. **Create a file**: Create a new file and name it `includes.ts`.
2. **Define the function**: Use the provided function signature as a guide and implement the function.
3. **Export the Function**: Ensure your function is exported from the module, making it available for importing and testing elsewhere.
4. **Testing your function**: Once you've written and saved your function, use the following command in the terminal to test its correctness:

```Bash
npm test -- includes
```
