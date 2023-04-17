import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import { useState, useEffect } from "react";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [plates, setPlates] = useState([]);
  const [balance, setBalance] = useState([100]);

  function getCurrentPage() {
    const itemsPerPage = 4;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return sushis.slice(indexOfFirstItem, indexOfLastItem);
  }
  function clearPlates(sushi) {
    setPlates([...plates, sushi]);
    console.log(plates);
    setBalance((balance) => {
      if (balance - sushi.price >= 0) {
        return balance - sushi.price;
      }
    });
  }

  function onAddClick(sushis) {
    setCurrentPage(currentPage + 1);
    getCurrentPage();
  }

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setSushis(data));
  }, []);

  return (
    <div className="app">
      <SushiContainer
        sushis={getCurrentPage()}
        onAddClick={onAddClick}
        clearPlates={clearPlates}
        balance={balance}
      />
      <Table plates={plates} balance={balance} />
    </div>
  );
}

export default App;
