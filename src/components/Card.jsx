import React from "react";

export default function Card({ name, image, description} ){
    return(
        <div className ="food-card">
            <img src ={image} alt={name}/>
            <h1>{name}</h1>;
            <p>{description}</p>;
        </div>
        
    );
}