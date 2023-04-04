import "./ApplianceListItem.css";
import { NavLink } from "react-router-dom";

export default function ApplianceListItem({ appliance }) {
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive ? "active" : "";
      }}
      to={`/appliances/${appliance.id}`}
    >
      {
        <div className="box">
          <p>{appliance.equipment}</p>
        </div>
      }
    </NavLink>
  );
}
