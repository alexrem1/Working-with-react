import SearchBar from "./SearchBar";
import { useState } from "react";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";
import styled from "styled-components";
import style from "./App.module.css";

const Title = styled.h1`
  color: ${(props) => (props.color ? props.color : "black")};
  border-style: dotted;
`;

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(data);
  };

  return (
    <div className="App">
      <p className={style.blue}>
        Tessting modular css eg specific to component
      </p>
      <Title color="red" style={{ backgroundColor: "violet" }}>
        test
      </Title>
      <SearchBar updateSearchParams={updateFilters} />
      <ItemsDisplay items={data["items"]} />
      <AddItem addItem={addItemToData} />
    </div>
  );
}

export default App;
