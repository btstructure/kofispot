import React, { useState, useEffect } from "react";
import CoffeeSpotCard from "../MainPage/CoffeeSpotCard";

function Home({ user, setUser }) {
  const [coffeeSpots, setCoffeeSpots] = useState([]);

  useEffect(() => {
    fetch("/coffeespots")
      .then((response) => response.json())
      .then(setCoffeeSpots);
    console.log(coffeeSpots);
  }, []);

  return (
    <div className="display">
      {coffeeSpots.map((coffeespot, e) => {
        return <CoffeeSpotCard key={e} coffeespot={coffeespot} user={user} />;
      })}
    </div>
  );
}

export default Home;
