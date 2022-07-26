import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

function IndividualCoffeeSpot({coffeespot}) {
  const [individualCoffeeSpot, setIndividualCoffeeSpot] = useState([])
  let {id} = useParams()

  useEffect(() => {
    fetch(`/coffeespots/${id}`)
      .then((response) => response.json())
      .then(setIndividualCoffeeSpot);
    console.log(individualCoffeeSpot);
  }, []);
  console.log(individualCoffeeSpot)

  return <div></div>;
}

export default IndividualCoffeeSpot;
