import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// CSS
import "../styles/index.css";

// Componente del semáforo
import TrafficLight from "./components/TrafficLight.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TrafficLight />
  </React.StrictMode>
);
