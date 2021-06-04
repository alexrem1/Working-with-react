import "./App.css";
import { PropTypes } from "prop-types";
import Info from "./Info";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Info title="Inventory" />
      <ButtonState />
    </div>
  );
}

function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);

  const updateTitleClicked = () => {
    setTitle("We now have a title!");
  };
  const updateCounterClicked = () => {
    if (count === 0) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <p>Title: {title}</p>
      <p>Counter: {count}</p>
      <button onClick={updateTitleClicked}>Update Title</button>
      <button onClick={updateCounterClicked}>Update Count</button>
    </div>
  );
}

export default App;
