import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateAccount } from "../Pages/CreateAccount";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<CreateAccount />} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}
