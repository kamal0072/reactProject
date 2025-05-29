import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          padding: 10,
          justifyContent: "space-around",
          backgroundColor: "darkcyan",
          margin: 0,
          color: "white",
        }}
      >
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "yellow", textDecoration: "none" } : {}
            }
            to="/"
            state={{ name: "alex", roll: 10 }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "yellow", textDecoration: "none" } : {}
            }
            to="about"
            state={{ name: "peter", roll: 20 }}
          >
            About{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "yellow", textDecoration: "none" } : {}
            }
            to="calculator"
            state={{ name: "ashok", roll: 30 }}
          >
            Calculator
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "yellow", textDecoration: "none" } : {}
            }
            to="user-detail"
            state={{ name: "khan", roll: 103 }}
          >
            user Detail
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
