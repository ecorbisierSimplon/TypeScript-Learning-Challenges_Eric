# Read Line by Line Function

## Objective:

Your task is to create a TypeScript function named `readLineByLine` that reads a file line by line. This function should be asynchronous and use a generator to yield each line from the file. Such a function is particularly useful in handling large files where loading the entire file content into memory is inefficient or impractical. It allows for processing or analyzing a file's content line by line, reducing memory usage and potentially improving performance.

## Function signature

```typescript
import * as fs from "fs";

export async function* readLineByLine(filePath: string): AsyncGenerator<string>;
```

## Instructions:

1. **Create a file**: Make a new file named `readLineByLine.ts`.

2. **Define the function**: Implement the `readLineByLine` function according to the provided signature. This function should:

   - Accept a file path as its parameter.
   - Utilize Node.js's `fs` module to read the file in a streaming manner.
   - Yield each line of the file as it is read, allowing for memory-efficient processing of large files.
   - Handle any errors that may occur during file reading.

3. **Export the Function**: Ensure that your function is correctly exported from the module. This is necessary for it to be imported and tested elsewhere.

4. **Download datasets**: Before running the tests you need to download a datasets, by running `npm run download-dataset`.

5. **Testing your function**: After completing your implementation, you can test the function to ensure it's working correctly. Use the following command in your terminal:

   ```Bash
   npm test -- readLineByLine
   ```

   Please note this test suite can take some times.

Understanding asynchronous programming and generators in TypeScript is crucial in this exercise. It's not only about reading files but also about managing resources efficiently, especially when dealing with large datasets or files.
