import React from "react";
import CarouselComponent from "./CarouselComponent";

function About() {
  return (
    <div>
      <div className= "justify-content-center align-items-center">
        <h1 className="text-white">About</h1>
        <p className="text-white">
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
