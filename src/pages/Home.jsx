import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import InputSearch from "../components/InputSearch";
import CardUpcoming from "../containers/CardUpcoming";
import CardTopRated from "../containers/CardTopRated";
import CardPopular from "../containers/CardPopular";
import Hero from "../containers/Hero";
import CardCinema from "../containers/CardCinema";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <InputSearch />
      <Hero />
      <CardUpcoming />
      <CardTopRated />
      <CardPopular />
      <CardCinema />
    </Fragment>
  );
};

export default Home;
