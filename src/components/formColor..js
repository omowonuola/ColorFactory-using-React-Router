import React from "react";
import "../App.css";
import { Link, useParams } from "react-router-dom";

const FormColor = () => {
    const { color } = useParams();
    return (
        <div style={{ background: color, height: "90vh" }}>
            <h1>This is {color} page </h1>
            <Link to="/color">
                <h2>Go Back</h2>
            </Link>
        </div>
    );
};


export default FormColor;