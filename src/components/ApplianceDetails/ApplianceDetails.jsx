import "./ApplianceDetails.css";
import { useParams, useOutletContext } from "react-router-dom";

export default function ApplianceDetails() {
  const { id } = useParams(); //read the query string from the url - this will be the id you need
  const [appliances, setAppliances] = useOutletContext();
  //takes the context in the outlet, which is sending the addresses array here

  const applianceMatch = appliances.find((appliance) => appliance.id == id);
  //check to see if applianceMatch is undefined if the page refreshes
  if (!applianceMatch) return <h3>Page refreshed. Select a new appliance!</h3>;
  return (
    <div className="details-section">
      <div className="sticky">
        <h3>Appliance Details</h3>
        <div className="appliance-details">
          <p className="brand">Equipment: </p>
          <h2>{applianceMatch && applianceMatch.equipment}</h2>
          <p>Brand: {applianceMatch && applianceMatch.brand}</p>
        </div>
      </div>
    </div>
  );
}
