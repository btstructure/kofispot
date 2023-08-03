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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Carousel slide={false}>
        {coffeeSpots.map((coffeespot) => (
          <Carousel.Item key={coffeespot.id}>
            <div
              style={{
                height: "600px",
                width: 800,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <img alt="" src={coffeespot.image_url} style={{height: "100%", width: '100%', objectFit: 'cover'}}/>
            </div>
            <Carousel.Caption>
              <h3>{coffeespot.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
