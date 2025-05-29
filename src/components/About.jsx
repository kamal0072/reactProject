import React from 'react'
import {useLocation} from "react-router-dom";

export default function About() {
  const location = useLocation();
  const {name, roll} = location.state;
  return (
    <div>
      <h1>About Components</h1>
      <h2>Welcome, {name}!</h2>
      <h3>Your Roll Number is: {roll}</h3>
      
    </div>
  )
}
