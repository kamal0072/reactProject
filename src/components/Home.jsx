import React from "react";
import {useLocation} from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const {name, roll} = location.state || {name: "Guest", roll: "N/A"};
  return (
    <div>
      <h1>Home Components</h1>
      <h2>Welcome, {name}!</h2> 
      <h3>Your Roll Number is: {roll}</h3>
    </div>
  );
}
