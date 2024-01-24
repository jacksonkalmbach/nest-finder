import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

type VariantTypes = {
  primary: string;
  secondary: string;
};

const variants: VariantTypes = {
  primary: "bg-white",
  secondary: "bg-secondary-dark-blue",
};

const InputField = ({ variant }: { variant: keyof VariantTypes }) => {
  return (
    <div
      className={`${variants[variant]} rounded-full w-full px-3 py-2 flex items-center gap-2`}
    >
      <MagnifyingGlassIcon className="w-4 h-4" />
      <input placeholder="Search" className="bg-transparent flex-grow" />
    </div>
  );
};

export default InputField;
