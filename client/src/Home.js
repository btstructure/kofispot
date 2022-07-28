import React, { useState, useEffect } from "react";
import CoffeeSpotCard from "./CoffeeSpotCard";
import NavBar from "./NavBar";

function Home({ user, setUser }) {
  const [coffeeSpots, setCoffeeSpots] = useState([]);
  console.log(user)

  useEffect(() => {
    fetch("/coffeespots")
      .then((response) => response.json())
      .then(setCoffeeSpots);
    console.log(coffeeSpots);
  }, []);

  return (
    <div className="Home">
      <NavBar user={user} setUser={setUser} />
      <div className="coffee-card-container">
        {coffeeSpots.map((coffeespot, e) => {
          return <CoffeeSpotCard key={e} coffeespot={coffeespot} />;
        })}
      </div>
    </div>
  );
}

export default Home;
