import React, { useState, useEffect } from "react";
import CoffeeSpotCard from "./CoffeeSpotCard";
import NavBar from "./NavBar";

function Home() {
  const [coffeeSpots, setCoffeeSpots] = useState([]);

  useEffect(() => {
    fetch("/coffeespots")
      .then((response) => response.json())
      .then(setCoffeeSpots);
    console.log(coffeeSpots);
  }, []);

  return (
    <div className="Home">
      <NavBar />
      <div className="coffee-card-container">
        {coffeeSpots.map((coffeespot, e) => {
          return <CoffeeSpotCard key={e} coffeespot={coffeespot} />;
        })}
      </div>
    </div>
  );
}

export default Home;
