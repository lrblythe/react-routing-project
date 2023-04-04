import "./MainContent.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Addresses from "../Addresses/Addresses";
import AddressDetails from "../AddressDetails/AddressDetails";
import Appliances from "../Appliances/Appliances";
import ApplianceDetails from "../ApplianceDetails/ApplianceDetails";
import FourOhFour from "../FourOhFour/FourOhFour";

export default function MainContent() {
  const [appliances, setAppliances] = useState([]);
  const [addresses, setAddresses] = useState([]);
  //pass both of these down to their components

  return (
    // put all of the Routes / Route into here

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/index" element={<Home />} />
      <Route path="/index.html" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/addresses/*"
        element={
          <Addresses addresses={addresses} setAddresses={setAddresses} />
        }
      >
        <Route path=":id" element={<AddressDetails />} />
        {/* this will be the 'Outlet' */}
      </Route>

      <Route
        path="/appliances/*"
        element={
          <Appliances appliances={appliances} setAppliances={setAppliances} />
        }
      >
        <Route path=":id" element={<ApplianceDetails />} />
      </Route>

      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
}
