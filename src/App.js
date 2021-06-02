import "./App.css";
import Info from "./Info";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem text="Alex" number={2} />
      <AddItem text="Joe" />
      <AddItem text="Test" />
      <SomethingRandom text="John" />
    </div>
  );
}

function AddItem(props) {
  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" id="text-form" value={props.text} />
      {/* <Info /> */}
      <p>{props.number}</p>
    </form>
  );
}

// OR

function SomethingRandom({ text, number }) {
  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" id="text-form" value={text} />
      {/* <Info /> */}
      <p>{number}</p>
    </form>
  );
}

export default App;
