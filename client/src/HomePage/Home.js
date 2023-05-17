import React, { useState, useEffect } from "react";
import CoffeeSpotCard from "../MainPage/CoffeeSpotCard";

function Home({ user, setUser }) {
  const [coffeeSpots, setCoffeeSpots] = useState([]);

  useEffect(() => {
    fetch("/api/coffeespots")
      .then((response) => response.json())
      .then(setCoffeeSpots);
  }, []);

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {coffeeSpots.map((coffeespot, e) => {
          return (
            <div className="p-3 col-3 flex-wrap m-5">
              <CoffeeSpotCard key={e} coffeespot={coffeespot} user={user} />;
            </div>
          );
        })}
      </div>
   
    </div>
  );
}

export default Home;
