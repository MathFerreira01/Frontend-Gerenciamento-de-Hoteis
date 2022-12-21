import axios from "axios";
import { FormEvent, useContext } from "react";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { Sidebar } from "../components/sidebar";
import { hotelContext } from "../context/contextApi";

export function FormRegisterHotel() {
  const { name, pais, estado, cidade, setName, setPais, setEstado, setCidade } = useContext(hotelContext)

  async function createHotel(event: FormEvent) {
    event.preventDefault()
    const response = await axios.post("http://localhost:3000/hoteis",{
      name: name,
      pais: pais,
      estado: estado,
      cidade: cidade
    });
    setName("")
    setPais("")
    setEstado("")
    setCidade("")
  }


  return (
    <div className="bg-gray-100 flex">
      <Sidebar />
      <div className="w-1/2 m-auto">
        <form 
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"          
        >
        <h1 className="text-center m-4 text-2xl">Register your Hotel</h1>
            <div className="mb-4">
            <Label children="Hotel Name" />
            <Input 
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="mb-6">
            <Label children="País" />
            <Input 
              value={pais}
              onChange={(event) => setPais(event.target.value)}
            />
          </div>
          <div className="mb-6">
            <Label children="Estado" />
            <Input 
              value={estado}
              onChange={(event) => setEstado(event.target.value)}
            />
          </div>
          <div className="mb-6">
            <Label children="Cidade" />
            <Input 
              value={cidade}
              onChange={(event) => setCidade(event.target.value)}
            />
          </div>

          <button onClick={createHotel} children="Register" />
        </form>
      </div>
    </div>
  );
}
