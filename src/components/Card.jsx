import React from "react";

export default function Card({ name, description, link} ){
    return(
        <a href={link} className="food-card" >
            <h3>{name}</h3>
            <p>{description}</p>
        </a>
        
    );
}