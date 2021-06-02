import "./App.css";
import { PropTypes } from "prop-types";
import Info from "./Info";

function App() {
  return (
    <div className="App">
      <Info title="Inventory" />
      <AddItem text="Alex" number={2} />
      <AddItem text="Joe" />
      <AddItem />
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

AddItem.defaultProps = {
  number: 2,
  text: "default",
};

AddItem.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
};

// OR "decomposed" for small amount of props

function SomethingRandom({ text, number = 4 }) {
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
