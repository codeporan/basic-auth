import React from "react";
import { Navbar } from "../../../components/Navbar";
import { HeroElement } from "../../../components/HeroSection/HeroElement";
import { InfoSection } from "../../../components/InfoSection/InfoSection";

import { homeObjOne } from "../../../components/InfoSection/Data";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroElement />
      <InfoSection {...homeObjOne} />
    </>
  );
};
