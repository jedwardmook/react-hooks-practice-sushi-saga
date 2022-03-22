import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {
  const [sushis, setSushis] = useState([])
  const [beltPosition, setBeltPosition] = useState(0);
  const [money, setMoney] = useState(100);
  const displayNumber = 4;

  useEffect(()=>{
    fetch(API)
    .then(response => response.json())
    .then((sushis) => {
      setSushis(sushis)
    })
  }, []);

  function handleEaten(piece){
    const remainingMoney = money - piece.price

    if (remainingMoney >=0){
    setMoney(remainingMoney)

    setSushis(sushis.map((sushi) => 
      sushi.id === piece.id ? {...sushi, eaten: true} : sushi))
    }
  };

  function moveBelt(){
    setBeltPosition((beltPosition+displayNumber) % sushis.length);
  }


  return (
    <div className="app">
      <SushiContainer 
        sushis={sushis.slice(beltPosition, beltPosition + displayNumber)}
        handleMore={moveBelt}
        handleEaten={handleEaten} 
        />
      <Table 
        plates={sushis.filter(sushi => sushi.eaten)} 
        money={money}
        />
    </div>
  );
}

export default App;
