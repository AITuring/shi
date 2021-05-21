import "./styles.css";

const shi = require("jinrishici");

export default function App() {
  let ci = "";
  shi.load((result) => {
    ci = result.data.content;
    console.log(result);
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{ci}</h2>
    </div>
  );
}
