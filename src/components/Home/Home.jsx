// import NavBar from "./NavBar";
import "./Home.css";
import { NavLink } from "react-router-dom";
import StreetSign from "../../images/b8c1f668-76a3-4c91-add8-36753c6e36a2-the-other-street-this-street-halifax-nova-scotia.jpeg";

import SomeAppliances from "../../images/appliacnes-clp-offer-sa-2col-xs.webp";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <main>
        <h1>Home Page</h1>
        <p>
          Thanks for stopping by! Enjoy some information about Addresses and
          Appliances. Tell your friends.
        </p>

        <div className="images">
          <NavLink to="/addresses" className="image_wrap">
            <img src={StreetSign} alt=" street sign" />
            <div className="image_description">
              <p>Addresses</p>
            </div>
          </NavLink>
          <NavLink to="/appliances" className="image_wrap">
            <img src={SomeAppliances} alt="some appliances" />
            <div className="image_description">
              <p>Appliances</p>
            </div>
          </NavLink>
        </div>
      </main>
    </>
  );
}
