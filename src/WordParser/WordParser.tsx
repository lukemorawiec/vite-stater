import { useState } from "react";

export type Prop = {
  prop: string;
};

export interface WordParserProps extends Prop {
  input: string;
}

enum Status {
  DONE = "done",
  NEW = "new",
  NOT_DONE = "not_done",
}

interface Todo {
  title: string;
  id: number;
  content: string;
  status: Status;
}

export default function WordParser({ input }: WordParserProps) {
  const [todos] = useState<Todo[]>([]);

  function countCharacters(str: string): number {
    return str.length;
  }

  function isEven(value: number): boolean {
    return value % 2 === 0;
  }

  function getParityMessage(isEven: boolean): string {
    if (isEven) {
      return "Ta liczba jest parzysta.";
    }
    return "Ta liczba nie jest parzysta.";
  }

  function processString(str?: string): string {
    if (!str) {
      return "Nie podano słowa";
    }
    const length = countCharacters(str);
    const even = isEven(length);
    const message = getParityMessage(even);
    return `${str} - Liczba znaków: ${length}. ${message}`;
  }

  const outputString = processString(input);
  return (
    <div>
      {todos[0] && todos[0].status === Status.DONE && outputString}

      {todos.map((todo) => {
        if (todo.content) {
          return todo.content;
        }
      })}
    </div>
  );
}
