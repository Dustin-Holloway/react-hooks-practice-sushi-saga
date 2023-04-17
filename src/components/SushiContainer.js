import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onAddClick, clearPlates, balance }) {
  console.log(balance);
  const sushiItem = sushis.map((item) => (
    <Sushi balance={balance} addPlates={addPlates} sushi={item} key={item.id} />
  ));

  function addPlates(sushi) {
    clearPlates(sushi);
  }

  return (
    <div className="belt">
      {sushiItem}
      <MoreButton onAddClick={onAddClick} />
    </div>
  );
}

export default SushiContainer;
