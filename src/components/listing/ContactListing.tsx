import React from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Button from "../ui/Button";

interface Props {
  brokerPhoneNumber: string;
  brokerName: string;
  hours: string[];
}

const ContactListing = ({ brokerName, brokerPhoneNumber, hours }: Props) => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center bg-white grow p-6 rounded-xl gap-4 ">
      <h3 className="text-xl text-center font-medium">Contact This Property</h3>
      <p>{brokerName}</p>
      <div className="hidden md:flex gap-2 text-accent-blue font-medium items-center">
        <PhoneIcon className="h-4 w-4" />
        <p>{brokerPhoneNumber}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-medium text-lg underline">Building Hours</p>
        <ul className="w-full flex flex-col justify-center items-center">
          {hours.map((hour) => (
            <li>{hour}</li>
          ))}
        </ul>
      </div>
      <Button text="Send Message" variant="primary" onClick={() => {}} />
    </div>
  );
};

export default ContactListing;
