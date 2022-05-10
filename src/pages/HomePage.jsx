import React from "react";

// Components
import SocialsComponent from "../components/SocialsComponent";
import NavbarComponent from "../components/NavbarComponent";
import WelcomeComponent from "../components/WelcomeComponent";
import AddressComponent from "../components/AddressComponent";
import SearchRoomsComponent from "../components/SearchRoomsComponent";
import OurRoomsComponent from "../components/OurRoomsComponent";
import OurServicesComponent from "../components/OurServicesComponent";
import ReachUsComponent from "../components/ReachUsComponent";
import ClientReviewsComponent from "../components/ClientReviewsComponent";
import FooterComponent from "../components/FooterComponent";

const HomePage = () => {
  return (
    <>
      <SocialsComponent />
      <NavbarComponent />
      <WelcomeComponent />
      <AddressComponent />
      <SearchRoomsComponent />
      <OurRoomsComponent />
      <OurServicesComponent />
      <ReachUsComponent />
      <ClientReviewsComponent />
      <FooterComponent />
    </>
  );
};

export default HomePage;
