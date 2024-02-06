import React, { useState, useEffect, useContext } from "react";
import UserCard from "./UserCard";
import Logo from "./Logo";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import Button from "./ui/Button";
import InputField from "./ui/InputField";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { RootStoreContext } from "../context/RootStoreContext";

const variants = {
  home: "",
  discover: "",
  listing: "",
};

const NavBar = observer(() => {
  const navigate = useNavigate();
  const { uiStore } = useContext(RootStoreContext);

  const handleClick = () => {
    uiStore.toggleNav();
  };

  const [isHome, setIsHome] = useState<boolean>(true);
  const path = window.location.pathname;

  useEffect(() => {
    if (path === "/") {
      setIsHome(true);
    } else {
      setIsHome(false);
    }
  }, [path]);
  return (
    <div
      className={
        "bg-white w-full h-[70px] flex items-center justify-between lg:justify-end z-[9999] p-8 gap-3 sticky top-0"
      }
    >
      <div
        onClick={() => navigate("/")}
        className={`${
          isHome
            ? "absolute flex left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 cursor-default"
            : "flex lg:absolute lg:left-1/2 lg:top-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 gap-2 items-center justify-center cursor-pointer"
        }`}
      >
        <div
          className={"h-8 w-8 md:h-10 md:w-10 flex justify-center items-center"}
        >
          <Logo />
        </div>
        <p
          className={`${
            !isHome
              ? "hidden md:block text-4xl font-medium font-lilita text-accent-blue"
              : "text-3xl md:text-4xl font-medium font-lilita text-accent-blue z-10"
          }`}
        >
          NestFinder
        </p>
      </div>
      <div className="flex justify-center items-center gap-2">
        {/* {!isHome && (
          <div className="hidden md:block">
            <HeartIcon className="h-6 w-6" />
          </div>
        )} */}
        <div className="hidden md:block">
          {/* <UserCard /> */}
          {/* <TestMenu /> */}

          {/* <Button
            text="Sign In"
            variant="ghost"
            onClick={() => console.log("click")}
          /> */}
        </div>
      </div>
      {!isHome && (
        <div className="md:hidden w-full">
          <InputField variant="outlined" placeholder="Search" />
        </div>
      )}
      <div className="block md:hidden" onClick={handleClick}>
        <Bars3BottomRightIcon className="h-8 w-8" />
      </div>
    </div>
  );
});

export default NavBar;
