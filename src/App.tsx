import "./App.css";
import WordParser from "./WordParser/WordParser";

function App() {
  return (
    <>
      <h1>Wstęp do TSa</h1>
      <div>
        <WordParser input="Hello" prop="123" />
      </div>
    </>
  );
}

export default App;
