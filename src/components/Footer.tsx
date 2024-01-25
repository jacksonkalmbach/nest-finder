import React from "react";
import Logo from "./Logo";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <div className="w-screen flex flex-col md:flex-row justify-between items-center h-[200px] bg-bg-light p-14">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            <Logo />
          </div>
          <h2 className="text-3xl text-accent-blue font-lilita">NestFinder</h2>
        </div>
        <p>© 2024 Jackson Kalmbach</p>
      </div>
      <div className="flex gap-2 mt-4">
        <a href="https://www.linkedin.com/in/jacksonkalmbach" target="_blank">
          <LinkedInLogoIcon className="w-8 h-8" />
        </a>
        <a href="https://github.com/jacksonkalmbach" target="_blank">
          <GitHubLogoIcon className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
