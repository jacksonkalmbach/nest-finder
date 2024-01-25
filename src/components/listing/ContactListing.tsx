import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Button from "../ui/Button";

const ContactListing = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center bg-white grow p-6 rounded-xl gap-4 ">
      <h3 className="text-xl text-center font-medium">Contact This Property</h3>
      <p>Company Name</p>
      <div className="hidden md:flex gap-2 text-accent-blue font-medium items-center">
        <PhoneIcon className="h-4 w-4" />
        <p>(123) 425-5293</p>
      </div>
      <Button text="Send Message" variant="primary" onClick={() => {}} />
    </div>
  );
};

export default ContactListing;
