import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="mainnav">
      <NavLink
        className={({ isActive }) => {
          return isActive ? "active" : "";
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "active" : "";
        }}
        to="/addresses"
      >
        Addresses
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "active" : "";
        }}
        to="/appliances"
      >
        Appliances
      </NavLink>
    </nav>
  );
}
