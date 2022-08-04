import React, { useState, useEffect } from "react";
import CoffeeSpotCard from "./CoffeeSpotCard";

function Home({ user, setUser }) {
  const [coffeeSpots, setCoffeeSpots] = useState([]);

  useEffect(() => {
    fetch("/coffeespots")
      .then((response) => response.json())
      .then(setCoffeeSpots);
    console.log(coffeeSpots);
  }, []);



  return (
    <div className="Home">
      <div className="coffee-card-container">
        {coffeeSpots.map((coffeespot, e) => {
          return <CoffeeSpotCard key={e} coffeespot={coffeespot} user={user} />;
        })}
      </div>
    </div>
  );
}

export default Home;
