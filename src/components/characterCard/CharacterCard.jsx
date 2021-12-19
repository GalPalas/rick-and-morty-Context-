import React from "react";
import "./CharacterCard.css";

const CharacterCard = ({ name, image, gender, species, status }) => {
  return (
    <div className="card shadow p-2">
      <img src={image} className="card-img-top rounded-circle" alt="..."></img>
      <div className="card-body d-flex flex-column align-items-center">
        <h5 className="card-title">{name}</h5>
        <p className="card-text mb-0">Gender: {gender}</p>
        <p className="card-text mb-0">Species: {species}</p>
        <p className="card-text">Status: {status}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
