import React from "react";

interface Props {
  text: string;
  variant: keyof typeof buttonVariants;
  onClick: () => void;
}

const buttonVariants = {
  primary: "bg-accent-blue text-white",
  ghost: "hover:text-accent-blue",
};

const Button = ({ text, onClick, variant }: Props) => {
  return (
    <button
      className={`${buttonVariants[variant]} px-3 py-3 w-full font-medium rounded-full font-poppins`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
