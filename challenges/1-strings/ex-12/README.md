# fromCharCode Function

## Objective:

Your task is to create a TypeScript function named `fromCharCode`. This function will accept a number representing a Unicode code point and return its corresponding character as a string. For instance, when given the number `65`, the function should return the string `'A'`.

## Function signature

```typescript
export function fromCharCode(code: number): string;
```

## Instructions:

1. **Create a file:** Initiate a file named `fromCharCode.ts`.
2. **Define the function:** Implement your function according to the provided signature.
3. **Export the Function:** Make sure your function is exported from the module, ensuring it can be imported and tested from other files.
4. **Testing your function:** Once you've implemented your function, you can test it by running the following command in your terminal:

```Bash
npm test -- fromCharCode
```

**Example:**

If you input the number `97` into your function, it should return the string `'a'` since the Unicode code point for the lowercase letter 'a' is 97.
