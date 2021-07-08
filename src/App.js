import SearchBar from "./SearchBar";
import { useState } from "react";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";
// import styled from "styled-components";
// import style from "./App.module.css";

// const Title = styled.h1`
//   color: ${(props) => (props.color ? props.color : "black")};
//   border-style: dotted;
// `;

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    const requestOptions = {
      method: "POST",
    };
    fetch("http://localhost:3000/items", requestOptions);

    items.push(item);
    setData({ items: items });
    console.log(data);
  };

  const filterData = (data) => {
    const filteredData = [];

    if (!filters.name && !filters.price && !filters.type && !filters.brand) {
      return data;
    }

    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) {
        continue;
      }
      if (filters.price !== 0 && item.price > filters.price) {
        continue;
      }
      if (filters.type !== "" && item.type !== filters.type) {
        continue;
      }
      if (filters.brand !== "" && item.brand !== filters.brand) {
        continue;
      }
      filteredData.push(item);
    }

    return filteredData;
  };

  return (
    <div className="container">
      {/* <p className={style.blue}>
        Tessting modular css eg specific to component
      </p>
      <Title color="red" style={{ backgroundColor: "violet" }}>
        test
      </Title> */}
      <div className="row mt-3">
        <ItemsDisplay items={filterData(data["items"])} />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>

      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
    </div>
  );
}

export default App;
