import { useEffect, useState } from "react";
import { HotelProps } from "../interfaces/Hotel";
import { api } from "../services/api";
import { Card } from "./card";

export function CardList() {
  const [hotel, setHotel] = useState<HotelProps[]>([]);

  useEffect(() => {
    api.get("/hoteis").then((res) => setHotel(res.data));
  }, []);
  return (
    <div className="flex">
      {hotel.map((hotel, index) => (
        <Card
          key={index}
          id={hotel.id}
          name={hotel.name}
          cnpj={hotel.cnpj}
          pais={hotel.pais}
          estado={hotel.estado}
          cidade={hotel.cidade}
        />
      ))}
    </div>
  );
}
