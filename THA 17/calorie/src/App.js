import React from "react";
import Caloriecard from "./components/caloriecard";
import "./style.css";
export default function App() {
  return (
    <div>
      <h1 id="heading">Calorie Read Only</h1>
      <div className="box">
        <Caloriecard name="Pizza" value="You have consumed 200 cals today" />
        <Caloriecard name="Burger" value="You have consumed 100 cals today" />
        <Caloriecard name="Coke" value="You have consumed 50 cals today" />
        <Caloriecard name="Brownie" value="You have consumed 100 cals today" />
        <Caloriecard name="Non-veg rice" value="You have consumed 300 cals today" />
        <Caloriecard name="Chocholate" value="You have consumed 50 cals today" />
        <Caloriecard name="Banana Shake" value="You have consumed 500 cals today" />
      </div>
    </div>
  );
}
