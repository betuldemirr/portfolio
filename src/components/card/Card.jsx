import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="cardContainer">
      <div className="cardBody">
        <img src={props.img} className="cardImage" />

        <h2 className="cardTitle">{props.title}</h2>

        <p className="cardDescription">{props.description}</p>
        <button className="cardBtn">View Codes</button>
      </div>
      
    </div>
  );
}
export default Card;
