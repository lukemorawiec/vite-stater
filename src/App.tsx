import "./App.css";

function App() {
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

  const inputString = "Hello, world!";
  const outputString = processString(inputString);
  console.log(outputString);

  return (
    <>
      <h1>Wstęp do TSa</h1>
    </>
  );
}

export default App;
