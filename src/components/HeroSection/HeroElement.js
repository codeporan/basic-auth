import React, { useState } from "react";
import { Button } from "../common/ButonElement";
import {
  HeroContainer,
  HeroBg,
  ImageBg,
  HeroContent,
  HeroBtnWrapper,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./index";
export const HeroElement = () => {
  let [hover, setHover] = useState(false);

  let onHover = () => setHover(!hover);
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Viruta</HeroH1>
        <HeroP>asdfafdasdfsdafasdfs</HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            primary={true}
            dark={true}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
