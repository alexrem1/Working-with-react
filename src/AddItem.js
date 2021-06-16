import { useState } from "react";

function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const addItemButtonPressed = () => {
    props.addItem({ name, price, type, brand });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Add a Item</h2>
      </div>
      <div className="row">
        <label htmlFor="name-field">Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        ></input>
        <label htmlFor="price-field">Price: </label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="form-control"
        ></input>
        <label htmlFor="type-field">Type: </label>
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="form-control"
        ></input>
        <label htmlFor="brand-field">Brand: </label>
        <input
          type="text"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="form-control"
        ></input>
      </div>
      <div className="row mt-3">
        <button
          type="button"
          onClick={addItemButtonPressed}
          className="btn btn-secondary"
        >
          Add Item
        </button>
      </div>
    </div>
  );
}

export default AddItem;
