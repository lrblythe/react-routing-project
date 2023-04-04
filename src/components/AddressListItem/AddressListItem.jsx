import "./AddressListItem.css";
import { NavLink } from "react-router-dom";

export default function ListItem({ address }) {
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive ? "active" : "";
      }}
      to={`/addresses/${address.id}`}
    >
      {
        <div className="box">
          <p>{address.country}</p>
        </div>
      }
    </NavLink>
  );
}
