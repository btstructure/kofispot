import React, { useState, useEffect } from "react"


function Home() {
  const [coffeeSpots, setCoffeeSpots] = useState([])

  useEffect(() => {
    fetch("/coffeespots")
    .then((response) => response.json())
    .then(setCoffeeSpots)
  }, [])

  


  return(
    <div className="Home">
        <h1>KofiSpot</h1>
        
          
    </div>
  )
}

export default Home
