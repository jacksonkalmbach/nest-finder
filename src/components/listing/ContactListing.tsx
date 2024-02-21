import { useState } from "react";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Button from "../ui/Button";
import ContactForm from "./ContactForm";

interface Props {
  brokerPhoneNumber: string;
  brokerName: string;
  hours?: string[];
  address: string;
}

const ContactListing = ({
  brokerName,
  brokerPhoneNumber,
  hours,
  address,
}: Props) => {
  const [showSendMessage, setShowSendMessage] = useState<boolean>(false);

  return (
    <div className="hidden lg:flex flex-col justify-center items-center bg-white grow p-6 rounded-xl gap-2 overflow-auto ">
      <h3 className="text-lg text-center font-medium">Contact This Property</h3>

      <p className="bg-bg-light px-3 py-2 rounded-full font-medium text-lg text-center">
        {brokerName}
      </p>

      {!showSendMessage && brokerPhoneNumber && (
        <div className="hidden md:flex gap-2 text-accent-blue font-medium items-center">
          <PhoneIcon className="h-4 w-4" />
          <p>{brokerPhoneNumber}</p>
        </div>
      )}
      {!showSendMessage && hours && Object.keys(hours).length > 0 && (
        <div className="flex flex-col items-center">
          <p className="font-medium text-lg underline">Building Hours</p>
          <ul className="w-full flex flex-col justify-center items-center">
            {hours.map((hour, index: number) => (
              <li key={index}>{hour}</li>
            ))}
          </ul>
        </div>
      )}
      {showSendMessage && (
        <ContactForm
          address={address}
          setShowSendMessage={setShowSendMessage}
        />
      )}
      {!showSendMessage && (
        <Button
          text="Send Message"
          type="submit"
          variant="primary"
          onClick={() => setShowSendMessage(true)}
        />
      )}
    </div>
  );
};

export default ContactListing;
