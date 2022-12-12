import { Button } from "../components/button";
import { Input } from "../components/input";
import { Label } from "../components/label";
import { Sidebar } from "../components/sidebar";

export function FormRegisterHotel() {
  return (
    <div className="bg-gray-100 flex">
      <Sidebar />
      <div className="w-1/2 m-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <Label children="Hotel Name" />
            <Input />
          </div>
          <div className="mb-6">
            <Label children="CNPJ" />
            <Input />
          </div>
          <div className="mb-6">
            <Label children="País" />
            <Input />
          </div>
          <div className="mb-6">
            <Label children="Estado" />
            <Input />
          </div>
          <div className="mb-6">
            <Label children="Cidade" />
            <Input />
          </div>
          <div className="mb-6">
            <Label children="País" />
            <Input />
          </div>
          <div className="mb-6">
            <Label children="Estado" />
            <Input />
          </div>
          <div className="mb-6">
            <Label children="Cidade" />
            <Input />
          </div>

          <Button children="Register" />
        </form>
      </div>
    </div>
  );
}
