import React from "react";

export default function FlightCarouselItem({url, destination, dates}) {
  return (
    <div>
        <img src={url} alt={destination} style={{marginBottom: "0.5em", objectFit: "cover", height: "15em", borderRadius: "1em"}}/>

        <div>
            <h2 style={{fontSize:"1em", fontWeight: "bolder"}}>{destination}</h2>
            <p>{dates}</p>
        </div>
    </div>
  );
}