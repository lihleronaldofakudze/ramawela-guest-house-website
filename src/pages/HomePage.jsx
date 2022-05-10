import React from "react";

// Components
import SocialsComponent from "../components/SocialsComponent";
import NavbarComponent from "../components/NavbarComponent";
import WelcomeComponent from "../components/WelcomeComponent";
import AddressComponent from "../components/AddressComponent";
import SearchRoomsComponent from "../components/SearchRoomsComponent";
import OurRoomsComponent from "../components/OurRoomsComponent";

const HomePage = () => {
  return (
    <>
      <SocialsComponent />
      <NavbarComponent />
      <WelcomeComponent />
      <AddressComponent />
      <SearchRoomsComponent />
      <OurRoomsComponent />
    </>
  );
};

export default HomePage;
