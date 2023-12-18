# Right Angle Triangle Function

## Objective:

Create a TypeScript function named `rightAngleTriangle` that takes a single number as a parameter and returns a string representing a right-angled triangle made of asterisks (`*`). The number parameter will determine the number of rows in the triangle.

## Function Signature

```typescript
export function rightAngleTriangle(count: number): string;
```

## Instructions:

1. **Create a File**: Make a new file named `rightAngleTriangle.ts`.

2. **Define the Function**: Implement the `rightAngleTriangle` function. This function should use loops to construct a string that forms a right-angled triangle. Each row of the triangle should have a decreasing number of asterisks, starting from the provided number down to 1.

3. **Export the Function**: Ensure that your function is exported from the module, enabling it to be imported and tested in other files.

4. **Testing Your Function**: To verify that your function works as expected, run the following command in your terminal:

   ```Bash
   npm test -- rightAngleTriangle
   ```

   Your function should create a triangle with the number of rows equal to the `count` argument. Each row should have one less asterisk than the row above it.

Remember, the focus of this exercise is to practice loop constructs and string manipulation in TypeScript. Pay attention to how you construct the nested loops and how you manage the string concatenation to achieve the desired pattern.

## Examples

`rightAngleTriangle(5)` should return :

```
*****
****
***
**
*
```

`rightAngleTriangle(10)` should return :

```
**********
*********
********
*******
******
*****
****
***
**
*
```
