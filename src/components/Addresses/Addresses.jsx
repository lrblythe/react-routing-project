import "./Addresses.css";
import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import AddressListItem from "../AddressListItem/AddressListItem";

export default function Addresses({ addresses, setAddresses }) {
  const baseURL = "https://random-data-api.com/api/v2/";

  useEffect(() => {
    if (addresses.length > 0) return; //if there are already addresses in the array, don't fetch them again
    let url = baseURL + "addresses?size=25";
    fetch(url)
      .then((response) => response.json())
      .then((addressesData) => {
        let tempAddresses = addressesData.map((address) => {
          return {
            id: address.id,
            uid: address.uid,
            address: address.street_address,
            state: address.state,
            country: address.country,
          };
        });
        //update addresses state variable
        setAddresses(tempAddresses);
      })
      .catch(console.warn);
  }, []);

  const listOfAddresses =
    addresses.length === 0 ? (
      <Loader />
    ) : (
      addresses.map((address) => {
        return <AddressListItem key={address.uid} address={address} />;
      })
    );

  return (
    <>
      <main>
        <h2 className="address-header">Addresses Page</h2>
        <div className="addressListAndSelected">
          <section>
            <h3>Select a country</h3>
            <div className="addresslist">{listOfAddresses}</div>
          </section>

          <Outlet context={[addresses, setAddresses]} />
        </div>
      </main>
    </>
  );
}
