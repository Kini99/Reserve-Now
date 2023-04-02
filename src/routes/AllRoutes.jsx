import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound"
import Payment from "../pages/Payment";
import Reservation from "../pages/Reservation";
import UnderConstruction from "../pages/UnderConstruction"
import PrivateRoute from "./PrivateRoute";
import Admin from "../pages/Admin";



export default function AllRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/reservation" element={<Reservation />}/>
      <Route path="/working" element={<UnderConstruction />} />
      <Route path="/admin" element={<Admin />} />

    </Routes>

  )
}