import { Cross1Icon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

interface Props {
  text: string;
  variant: keyof typeof buttonVariants;
  onClick?: () => void;
  disabled?: boolean;
  icon?: keyof typeof icons;
  type: "button" | "submit" | "reset" | undefined;
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
  disabled: "bg-bg-light text-text-gray cursor-not-allowed active:scale-100",
};

const Button = ({ text, onClick, variant, icon, type, disabled }: Props) => {
  return (
    <button
      className={`${buttonVariants[variant]} flex items-center justify-center gap-1 px-3 py-3 w-full font-medium cursor-pointer rounded-full font-poppins active:scale-95 transition-all duration-150 ease-in-out`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {icon && icons[icon]}
      {text}
    </button>
  );
};

export default Button;
