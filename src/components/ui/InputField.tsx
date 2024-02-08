import { useState } from "react";
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
  required?: boolean;
  type?: string;
  defaultValue?: string;
  textAligned?: string;
  setValue?: (val: string) => void;
  onChange?: () => void;
}

const variants: VariantTypes = {
  primary: "bg-white",
  secondary: "bg-secondary-dark-blue",
  tertiary: "flex bg-dark-blue",
  outlined: "border",
};

const icons = {
  search: <MagnifyingGlassIcon className="w-4 h-4 text-gray-500" />,
};

const InputField = ({
  variant,
  placeholder,
  type,
  required,
  iconVariant,
  defaultValue,
  textAligned,
  setValue,
}: Props) => {
  const [inputValue, setInputValue] = useState(defaultValue || "");
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (setValue) {
      setValue(e.target.value);
    }
  };

  return (
    <div
      className={`${variants[variant]} ${
        isFocused ? "ring-2 ring-blue-500" : ""
      } rounded-full px-3 w-full flex items-center gap-2 overflow-hidden`}
    >
      {iconVariant && icons[iconVariant]}
      <input
        placeholder={placeholder}
        value={inputValue}
        className={`${
          textAligned ? `text-${textAligned}` : ""
        } outline-none w-full flex-grow h-full py-3 bg-transparent`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputField;
