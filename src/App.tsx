import { useState } from "react";
import { hotelContext } from "./context/contextApi";
import { AppRoutes } from "./routes/app.routes";
import "./styles/main.css";

function App() {
  const [name, setName] = useState("");
  const [pais, setPais] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <hotelContext.Provider value={{ name, setName, setPais, setEstado, setCidade, pais, estado, cidade}}>
      <AppRoutes />
    </hotelContext.Provider>
  )
}

export default App;
