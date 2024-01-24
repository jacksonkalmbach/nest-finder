import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import Logo from "./Logo";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import Button from "./ui/Button";

const NavBar = () => {
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
        "bg-white relative w-full h-[60px] flex items-center justify-end p-6"
      }
    >
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2 items-center justify-center">
        <div className="h-8 w-8 md:h-10 md:w-10 flex justify-center items-center">
          <Logo />
        </div>
        <p
          className={`text-3xl md:text-4xl font-medium font-lilita text-accent-blue z-10`}
        >
          NestFinder
        </p>
      </div>
      <div className="flex justify-center items-center gap-10">
        {!isHome && (
          <div className="hidden md:block">
            <HeartIcon className="h-6 w-6" />
          </div>
        )}
        <div className="hidden md:block">
          {/* <UserCard /> */}

          <Button
            text="Sign In"
            variant="ghost"
            onClick={() => console.log("click")}
          />
        </div>
      </div>
      <div className="block md:hidden">
        <Bars3BottomRightIcon className="h-8 w-8" />
      </div>
    </div>
  );
};

export default NavBar;
