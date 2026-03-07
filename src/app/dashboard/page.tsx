"use client";

import { useState } from "react";

export default function Dashboard() {

  const [restaurants, setRestaurants] = useState([
    { id: 1, name: "Spice Garden", location: "Dubai, UAE", image: "/images/r1.jpg" },
    { id: 2, name: "Royal Tandoor", location: "London, UK", image: "/images/r2.jpg" },
  ]);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const addRestaurant = () => {
    const newRestaurant = {
      id: Date.now(),
      name,
      location,
      image,
    };

    setRestaurants([...restaurants, newRestaurant]);

    setName("");
    setLocation("");
    setImage("");
  };

  const deleteRestaurant = (id: number) => {
    setRestaurants(restaurants.filter(r => r.id !== id));
  };

  return (
    <div className="dashboard">

      <h1>Restaurant Dashboard</h1>

      {/* CREATE */}

      <div className="form">

        <input
          placeholder="Restaurant name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
        />

        <input
          placeholder="Image URL"
          value={image}
          onChange={(e)=>setImage(e.target.value)}
        />

        <button onClick={addRestaurant}>Add</button>

      </div>

      {/* READ */}

      <div className="grid">

        {restaurants.map((r)=>(
          <div key={r.id} className="card">

            <img src={r.image} alt={r.name}/>

            <h3>{r.name}</h3>
            <p>{r.location}</p>

            {/* DELETE */}

            <button
              className="delete"
              onClick={()=>deleteRestaurant(r.id)}
            >
              Delete
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}