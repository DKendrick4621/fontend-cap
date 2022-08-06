import React from "react";
import axios from "axios";

export default function garage(props) {
  const deleteCar = () => {
    axios
      .delete(`https://dlk-the-garage.herokuapp.com/car/${props.carData.id}`)
      .then((response) => console.log("success", response));
  };

  return (
    <div className="showroom">
      <div className="cars">
        <img className="car-img" src={props.carData.img_url} alt="oops" />
        <h2>{props.carData.make}</h2>
        <h3>{props.carData.model}</h3>
        <p>${props.carData.price}</p>
        <h4>{props.carData.description}</h4>
        {/* <button onClick={deleteCar}>Delete</button> */}
      </div>
    </div>
  );
}
