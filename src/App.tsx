import "../src/css/Deneme.css";

function yazdir<T>(array: T[]): void {
  array.forEach((eleman) => console.log(eleman));
}

function App() {
  yazdir([1, "aaa"]);
  return <div className="App">Hello</div>;
}

export default App;
