import "./AddressDetails.css";
import { useParams, useOutletContext } from "react-router-dom";

export default function Address() {
  const { id } = useParams(); //read the query string from the url - this will be the id you need
  const [addresses, setAddresses] = useOutletContext();
  //takes the context in the outlet, which is sending the addresses array here

  const addressMatch = addresses.find((address) => address.id == id);
  //add a check to see if addressMatch is undefined, if it is, return a message that says "No address found"
  if (!addressMatch) return <h3>Page refreshed. Select a new address!</h3>;

  return (
    <div className="details-section">
      <div className="sticky">
        <h3>Country Details</h3>
        <div className="country-details">
          <p className="name">Name: </p>
          <h2>{addressMatch && addressMatch.country}</h2>
          <p>Address: {addressMatch && addressMatch.address}</p>
          <p>State: {addressMatch && addressMatch.state}</p>
        </div>
      </div>
    </div>
  );
}
