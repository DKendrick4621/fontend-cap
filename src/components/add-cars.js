import React, { useState } from "react";
import axios from "axios";

export default function addCar() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  const postCar = (event) => {
    axios
      .post("https://dlk-the-garage.herokuapp.com/car/add", {
        make: make,
        model: model,
        price: price,
        description: description,
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    event.preventDefault();
  };

  return (
    <div className="add-car">
      <h1 className="add-car-title">Enter your car data!</h1>
      <form className="add-car-form" onSubmit={postCar}>
        <input
          className="add-car-form-input"
          onChange={(event) => setMake(event.target.value)}
          type="text"
          placeholder="Make"
        />
        <input
          className="add-car-form-input"
          onChange={(event) => setModel(event.target.value)}
          type="text"
          placeholder="Model"
        />
        <input
          className="add-car-form-input"
          onChange={(event) => setPrice(event.target.value)}
          type="number"
          placeholder="Price"
        />
        <textarea
          className="add-car-form-input"
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="Tell me about your baby"
        />
        <input
          className="add-car-form-input"
          onChange={(event) => setImg_url(event.target.value)}
          type="file"
          placeholder="Show your baby if you want to"
        />
        <button className="add-car-form-input">Add A Whip!</button>
      </form>
    </div>
  );
}
