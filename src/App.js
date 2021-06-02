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
  // props are readonly eg property can't be changed from inside the component its being passed to eg props.text = "junk";
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
  // Decomposed props can be modified as they are a copy of the prop passed through
  text = "donkey";

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
