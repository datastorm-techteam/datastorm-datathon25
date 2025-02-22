import React from "react";

import Header from "./Header";
import Main from "./Main";

import Mission from "./Mission";
import Questions from "./Questions";
import Schedule from "./Schedule";
import Sponsor from "./Sponsor";

import background from "../img/background.png";
import background_frame from "../img/background_frame.png";

const Home = () => {
  return (
    <div
      class="overflow-x-hidden h-auto"
      id="home"
      style={{
        backgroundImage: `url(${background})`,
        // height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <Main />

      <Mission />
      <Questions />

      <Sponsor />
    </div>
  );
};

export default Home;
