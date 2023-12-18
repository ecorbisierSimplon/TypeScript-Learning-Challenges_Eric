import * as readline from "node:readline/promises";

export class Console {
  public static log(message: string): void {
    console.log(message);
  }

  public static async askYesNo(question: string): Promise<boolean> {
    const response = await this.askInput(question, ["yes", "no"]);
    return response === "yes";
  }

  public static async askInput<T extends string>(
    question: string,
    possibleResponse: T[]
  ): Promise<T> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    const formatedQuestion = possibleResponse
      ? `${question} [${possibleResponse.join(", ")}]`
      : question;
    const answer = await rl.question(formatedQuestion);
    rl.close();
    const answerLowerCase = answer.toLowerCase();
    const foundIndex = possibleResponse
      .map((response) => response.toLowerCase())
      .indexOf(answerLowerCase);
    if (foundIndex < 0) {
      return Console.askInput(question, possibleResponse);
    }
    return possibleResponse[foundIndex];
  }
}
