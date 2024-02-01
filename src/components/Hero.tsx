import React from "react";
import heroImg from "../assets/hero-image.jpg";
import InputField from "./ui/InputField";
import Underline from "./Underline";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-3/4 flex justify-center items-center bg-bg-light p-6">
      {/* <img
        src={heroImg}
        alt="hero"
        className="absolute w-full h-auto -z-0 object-cover"
      /> */}
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="flex flex-col justify-center items-center md:items-start w-fit md:gap-4 md:flex-row">
          <h1 className="text-6xl md:text-8xl font-medium text-end font-lilita">
            Find your{" "}
          </h1>
          <div className="flex flex-col justify-start items-center">
            <h1 className="text-6xl md:text-8xl font-medium font-lilita text-accent-blue">
              {" "}
              perfect home
            </h1>
            <div className="w-[300px] md:w-[400px]">
              <Underline />
            </div>
          </div>
        </div>
        <h3 className="text-2xl text-center md:text-3xl font-poppins">
          Effortless Apartment Hunting at Your Fingertips
        </h3>
        <div className="w-full flex flex-col md:flex-row gap-2">
          <div className="hidden md:block w-full h-full">
            <InputField
              variant="primary"
              iconVariant="search"
              placeholder="Start Searching"
            />
          </div>
          <div className="block md:hidden">
            <Button
              text="Start Searching"
              variant="primary"
              onClick={() => navigate("/discover")}
            />
          </div>
          <div className="hidden md:block w-full md:w-[200px]">
            <Button
              text="Go"
              variant="primary"
              onClick={() => navigate("/discover")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
