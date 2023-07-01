import React from "react"; //responsavel pelo core do react
import ReactDOM from "react-dom/client"; // integração do core do react com o DOM (representação do html com o js)
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
