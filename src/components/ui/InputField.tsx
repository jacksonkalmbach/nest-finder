import { ReactElement, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

type VariantTypes = {
  primary: string;
  secondary: string;
  tertiary: string;
  outlined: string;
};

interface Props {
  variant: keyof VariantTypes;
  placeholder: string;
  iconVariant?: keyof typeof icons;
  defaultValue?: string;
}

const variants: VariantTypes = {
  primary: "bg-white",
  secondary: "bg-secondary-dark-blue",
  tertiary: "flex bg-dark-blue",
  outlined: "border",
};

// Correctly define the icons mapping
const icons = {
  search: <MagnifyingGlassIcon className="w-4 h-4 text-gray-500" />, // Correct className for text color
};

const InputField = ({
  variant,
  placeholder,
  iconVariant,
  defaultValue,
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`${variants[variant]} ${
        isFocused ? "ring-2 ring-blue-500" : ""
      } rounded-full px-3 w-full flex items-center gap-2 overflow-hidden`}
    >
      {iconVariant && icons[iconVariant]}
      <input
        placeholder={placeholder}
        value={defaultValue}
        className="outline-none flex-grow h-full py-3 bg-transparent"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default InputField;
