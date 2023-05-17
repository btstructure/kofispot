import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

function CarouselComponent() {
  const [coffeeSpots, setCoffeeSpots] = useState([]);

  useEffect(() => {
    fetch("/api/coffeespots")
      .then((response) => response.json())
      .then(setCoffeeSpots);
  }, []);

  return (
    <Carousel>
      {coffeeSpots.map((coffeespot) => (
        <Carousel.Item key={coffeespot.id}>
          <div style={{
            height: '500px',
            width: 100,
            objectFit: 'cover'
          }}>
            <img
              alt=""
              src={coffeespot.image_url}
            />
          </div>
          <Carousel.Caption>
            <h3>{coffeespot.name}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
