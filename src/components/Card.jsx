import React from "react";

export default function Card({ name, image, description, link} ){
    return(
        <a href={link} className="food-card" style={{ textDecoration: "none", color: "inherit" }}>
            <img src ={image} alt={name}/>
            <h1>{name}</h1>
            <p>{description}</p>
        </a>
        
    );
}