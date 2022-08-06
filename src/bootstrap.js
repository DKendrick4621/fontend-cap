import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./components/app";
import AddCar from "./components/add-cars";
import Navbar from "./components/navbar";

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/add-cars">
          <AddCar />
        </Route>
      </Switch>
    </BrowserRouter>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
