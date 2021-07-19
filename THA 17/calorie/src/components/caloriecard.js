import React from "react";

export default function caloriecard(props) {

  return (
      
    <div className="container">
      <div className="card1">
        <h1>{props.name}</h1>
        <p>{props.value}</p>
      </div>
      
    </div>
  );
}
