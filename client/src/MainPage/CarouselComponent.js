import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  const [coffeeSpots, setCoffeeSpots] = useState([]);

  useEffect(() => {
    fetch("/coffeespots")
      .then((response) => response.json())
      .then(setCoffeeSpots);
    console.log(coffeeSpots);
  }, []);

  return (
      <Carousel className="justify-content-center align-items-center">
        {coffeeSpots.map((coffeespot) => (
          <Carousel.Item  key={coffeespot.id}>
            <img style={{width:"100%", maxHeight: "750px"}}  alt="" src={coffeespot.image_url} />
            <Carousel.Caption>
              <h3>{coffeespot.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
  );
}

export default CarouselComponent;
