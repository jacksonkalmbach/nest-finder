import { useEffect, useState } from "react";
import Button from "../ui/Button";
import InputField from "../ui/InputField";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const defaultFormFields = {
  fullName: "",
  email: "",
  message: "",
  subject: "",
};

const ContactForm = ({
  address,
  setShowSendMessage,
}: {
  address: string;
  setShowSendMessage: (show: boolean) => void;
}) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const [isFormComplete, setIsFormComplete] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleSetFormField = (key: string, value: string) => {
    setFormFields((prevParams) => ({
      ...prevParams,
      [key]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setShowSendMessage(false);
    }, 2000);

    setFormFields(defaultFormFields);
  };

  useEffect(() => {
    handleSetFormField("subject", address);
  }, [address]);

  useEffect(() => {
    const { fullName, email, subject } = formFields;
    if (fullName.trim() && email.trim() && subject.trim()) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [formFields]);

  return (
    <>
      {showSuccess ? (
        <div className="text-accent-blue flex items-center gap-1 mt-5">
          <CheckCircleIcon className="w-5 h-5" />
          <p className="font-medium">Message Sent!</p>
        </div>
      ) : (
        <form
          className="flex flex-col w-full grow gap-2 overflow-auto p-1"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1">
            <label>Full Name *</label>
            <InputField
              variant="outlined"
              placeholder="Full Name"
              type="text"
              required
              setValue={(value) => handleSetFormField("fullName", value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email Address *</label>
            <InputField
              variant="outlined"
              placeholder="Email Address"
              required
              type="email"
              setValue={(value) => handleSetFormField("email", value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Subject *</label>
            <InputField
              variant="outlined"
              defaultValue={address}
              placeholder="Subject"
              setValue={(value) => handleSetFormField("subject", value)}
            />
          </div>
          <div>
            <p>Message</p>
            <textarea
              placeholder="Message (Optional)"
              className="w-full border rounded-2xl p-2 h-[150px] resize-none"
              onChange={(e) => handleSetFormField("message", e.target.value)}
            />
          </div>
          <Button
            text="Send Message"
            type="submit"
            disabled={!isFormComplete}
            variant={isFormComplete ? "primary" : "disabled"}
          />

          <Button
            text="Cancel"
            type="button"
            variant="outlined"
            onClick={() => setShowSendMessage(false)}
          />
        </form>
      )}
    </>
  );
};

export default ContactForm;
