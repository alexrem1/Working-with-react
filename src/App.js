import "./App.css";
import Info from "./Info";

function App() {
  return (
    <div className="App">
      <Info />
      <AddItem />
    </div>
  );
}

function AddItem() {
  const value = "I am great";

  return (
    <form>
      <label for="text-form">Type something: </label>
      <input type="text" id="text-form" value={value} />
      {/* <Info /> */}
    </form>
  );
}

export default App;
