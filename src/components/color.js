import React from "react";
import "../App.css";
import { Link } from "react-router-dom";



const Color = ({ colors }) =>(
    <div>
      <header className="header">
        <h3>Welcome to Color Factory</h3>
        <Link to="/color/form">
          <h1>Add a Color</h1>
        </Link>
      </header>
      <p style={{ padding: "12px" }}>Please Select a Color</p>
      <div>
        {colors.map((page) => (
          <div key={page.name}>
            <Link to={`/formColor/${page.name}`}>{page.name}</Link>
          </div>
        ))}
      </div>
    </div>
);


export default Color;