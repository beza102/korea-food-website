import React from "react";

export default function Card({ name, image, description, link} ){
    return(
        <a href={link} className="food-card" >
            <img src ={image} alt={`A delicious image of ${name}`}/>
            <h3>{name}</h3>
            <p>{description}</p>
        </a>
        
    );
}