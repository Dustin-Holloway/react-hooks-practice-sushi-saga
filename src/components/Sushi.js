import React, { useState } from "react";

function Sushi({ sushi, addPlates, balance }) {
  const [plates, setPlates] = useState(false);

  function handleOnClick() {
    if (balance - sushi.price >= 0 && !plates) {
      setPlates(true);
      addPlates(sushi);
    } else return null;
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleOnClick}>
        {/* Tell me if this sushi has been eaten! */}
        {plates ? null : <img src={sushi.img_url} alt={"Sushi"} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
