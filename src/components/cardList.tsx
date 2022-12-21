import axios from "axios";
import  { useEffect, useState } from "react";
import { FormHotelProps } from "../interfaces/Hotel";
import { api } from "../services/api";
import { Card } from "./card";

export function CardList() {
  const [hotel, setHotel] = useState<FormHotelProps[]>([]);

  async function getCards () {
    api.get("/hoteis").then((res) => setHotel(res.data));
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="flex flex-row flex-wrap">
      {hotel.map((hotel) => (
        <Card
          id={hotel.id}
          name={hotel.name}
          pais={hotel.pais}
          estado={hotel.estado}
          cidade={hotel.cidade}
          getCards={getCards}
        />
      ))}
    </div>
  );
}
