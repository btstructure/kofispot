import React, { useState, useEffect } from "react";
import CoffeeSpotCard from "../MainPage/CoffeeSpotCard";

function Home({ user, setUser, search }) {
  const [coffeeSpots, setCoffeeSpots] = useState([]);

  useEffect(() => {
    fetch("/api/coffeespots")
      .then((response) => response.json())
      .then(setCoffeeSpots);
  }, []);

  const filteredCoffeeSpots = coffeeSpots.filter((spot) => {
    const searchTerm = search.toLowerCase();
    const words = spot.name.toLowerCase().split(" "); // split name into words
    return words.some((word) => word.startsWith(searchTerm));
  });
  return (
    <div className="d-flex flex-wrap gap-3 justify-content-center">
      {filteredCoffeeSpots.map((coffeespot) => (
        <div key={coffeespot.id} className="p-3">
          <CoffeeSpotCard coffeespot={coffeespot} user={user} />
        </div>
      ))}
    </div>
  );
}

export default Home;
