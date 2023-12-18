# Caesar Cipher Function

## Objective:

Your task is to implement the Caesar Cipher encryption technique in TypeScript. Given a string `str` and a number `shift`, the function should return the encrypted string where each letter in the `str` is shifted by the number `shift`. Non-letter characters should remain unchanged.

For example:

- If `str` is "Hello" and `shift` is 3, the encrypted string should be "Khoor".
- If `str` is "aZ" and `shift` is 1, the encrypted string should be "bA".

## Function signature

```typescript
export function caesarCipher(str: string, shift: number): string;
```

## Instructions:

1. **Create a file**: Create a new file named `caesarCipher.ts`.

2. **Define the function**: Using the provided function signature, define the `caesarCipher` function to perform the Caesar Cipher encryption.

3. **Export the Function**: Ensure that your function is exported from the module so it can be imported and tested elsewhere.

4. **Testing your function**: Once you've completed the implementation, run the following command in your terminal to test the functionality:

```Bash
npm test -- caesarCipher
```

Ensure your function accounts for both uppercase and lowercase letters and that non-letter characters are not shifted.
