import React from "react";
import {useLocation} from "react-router-dom";

export default function UserDetails() {
    const location = useLocation();
    const {name, roll} = location.state;

  return (
    <div>
        <h1>User Details Component</h1>
        <h2>Welcome, {name}!</h2>
        <h3>Your Roll Number is: {roll}</h3>
        <p>This component displays user details passed through the router.</p>
    </div>
  );
}
