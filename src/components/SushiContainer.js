import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, handleMore, handleEaten}) {

  return (
    <div className="belt">
      { sushis.map((sushi) => (
        <Sushi key={sushi.id} sushi={sushi} handleEaten={handleEaten}/>
        ))}
      <MoreButton handleMore={handleMore}/>
    </div>
  );
}

export default SushiContainer;
