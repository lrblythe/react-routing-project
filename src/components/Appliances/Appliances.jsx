import "./Appliances.css";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import ApplianceListItem from "../ApplianceListItem/ApplianceListItem";

export default function Appliances({ appliances, setAppliances }) {
  // const [appliances, setAppliances] = useState([]);
  //moving this to MainContent component

  const baseURL = "https://random-data-api.com/api/v2/";

  useEffect(() => {
    if (appliances.length > 0) return; //if there are already appliances in the array, don't fetch them again
    let url = baseURL + "appliances?size=25";
    fetch(url)
      .then((response) => response.json())
      .then((appliancesData) => {
        let appliances = appliancesData.map((appliance) => {
          return {
            id: appliance.id,
            uid: appliance.uid,
            brand: appliance.brand,
            equipment: appliance.equipment,
          };
        });
        //update addresses state variable
        setAppliances(appliances);
      })
      .catch(console.warn);
  }, []);

  const listOfAppliances =
    appliances.length === 0 ? (
      <Loader />
    ) : (
      appliances.map((appliance) => {
        return <ApplianceListItem key={appliance.uid} appliance={appliance} />;
      })
    );

  return (
    <>
      <main>
        <h2 className="appliance-header">Appliances Page</h2>
        <div className="applianceListAndSelected">
          <section>
            <h3>Select an appliance</h3>
            <div className="appliancelist">{listOfAppliances}</div>
          </section>
          <Outlet context={[appliances, setAppliances]} />
        </div>
      </main>
    </>
  );
}
