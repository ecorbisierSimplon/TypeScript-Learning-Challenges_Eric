# Equilateral Triangle Function

## Objective:

Your task is to write a TypeScript function named `equilateralTriangle` that takes a number `count` as a parameter and returns a string representing an equilateral triangle made of asterisks (`*`).

## Function signature:

```typescript
export function equilateralTriangle(count: number): string;
```

## Instructions:

1. **Create a File**: Create a file named `equilateralTriangle.ts`.
2. **Define the Function**: Implement the `equilateralTriangle` function. It should create a string that, when printed, displays an equilateral triangle. The height of the triangle (number of rows) is determined by the `count` parameter.
3. **Export the Function**: Ensure your function is exported from the module. This allows it to be imported and tested in other files.
4. **Testing Your Function**:

   - To verify that your function works as expected, run the following command in your terminal:

     ```Bash
     npm test -- equilateralTriangle
     ```

   - The function should return a string where each line (terminated by a newline character `\n`) represents a level of the triangle, with the correct number of spaces and asterisks.

Remember, the goal of this exercise is to reinforce your understanding of loops and string manipulation in TypeScript. Pay attention to the alignment of the asterisks to ensure the shape of an equilateral triangle.

## Examples

`rightAngleTriangle(5)` should return :

```
     *
    ***
   *****
  *******
 *********
```

`rightAngleTriangle(10)` should return :

```
          *
         ***
        *****
       *******
      *********
     ***********
    *************
   ***************
  *****************
 *******************
```
