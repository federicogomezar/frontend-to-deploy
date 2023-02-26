import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [apiMessage, setApiMessage] = useState("No ha cargado");

  useEffect(() => {
    const getApiInfo = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/test`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const parsedResponse = await response.json();
      setApiMessage(parsedResponse.message);
    };

    getApiInfo();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>La respuesta de la API es:</p>
        <p>{apiMessage}</p>
      </header>
    </div>
  );
}

export default App;
