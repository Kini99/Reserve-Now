import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound"
import Payment from "../pages/Payment";
import Flights from "../pages/Flights";
import Reservation from "../pages/Reservation";
import SearchResults from "../pages/SearchResults";
import UnderConstruction from "../pages/UnderConstruction"
import PrivateRoute from "./PrivateRoute";



export default function AllRoutes() {
  return (

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/flights" element={<Flights/>} />
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/reservation" element={<Reservation/>} />
      <Route path="/results" element={<SearchResults/>} />
      <Route path="/working" element={<UnderConstruction/>} />
    </Routes>

  )
}