import React from "react";
import CarouselComponent from "./CarouselComponent";

function About() {
  return (
    <div className="text-white">
      <div>
        <h1>About</h1>
        <p>
          Welcome to kofispots! Here you can find some well known NYC
          coffeeshops. Find a spot that catches your eye and spend some time
          drinking quality coffee!
        </p>
      </div>

      <div>
        <CarouselComponent />
      </div>
    </div>
  );
}

export default About;
