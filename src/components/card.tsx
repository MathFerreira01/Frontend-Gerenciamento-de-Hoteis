import { useState } from "react";
import { HotelProps } from "../interfaces/Hotel";
import { Modal } from "./modal";

export function Card({ id, name, cnpj, pais, estado, cidade }: HotelProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div id={id} className="flex flex-wrap flex-row">
        <div className="w-full p-4 lg:w-80">
          <div className="p-8 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
              deserunt quas repellat facere dolor blanditiis tenetur quibusdam
              corporis quaerat. Impedit, repellendus! Delectus et illum eum ipsa
              magni? Facilis, molestiae est!
            </p>
            <button
              onClick={() => setShowModal(!showModal)}
              className="relative top-3 inline-block px-5 py-2.5 bg-blue-600 text-white font-medium rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Action
            </button>
          </div>
        </div>
      </div>
      {showModal ? <Modal /> : null}
    </>
  );
}
