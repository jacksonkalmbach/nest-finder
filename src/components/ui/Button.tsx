import { Cross1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import React from "react";

interface Props {
  text: string;
  variant: keyof typeof buttonVariants;
  onClick: () => void;
  icon?: keyof typeof icons;
}

const icons = {
  close: <Cross1Icon />,
  search: <MagnifyingGlassIcon />,
};

const buttonVariants = {
  primary: "bg-accent-blue text-white",
  outlined: "border",
  seeThrough: "bg-bg-light text-black border border-black opacity-80",
  ghost: "hover:text-accent-blue",
};

const Button = ({ text, onClick, variant, icon }: Props) => {
  return (
    <button
      className={`${buttonVariants[variant]} flex items-center justify-center gap-1 px-3 py-3 w-full font-medium rounded-full font-poppins active:scale-95 transition-all duration-150 ease-in-out`}
      onClick={onClick}
    >
      {icon && icons[icon]}
      {text}
    </button>
  );
};

export default Button;
