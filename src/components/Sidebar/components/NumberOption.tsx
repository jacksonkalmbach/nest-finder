interface Props {
  value: number;
  numSelected: boolean | null;
  handleSelect: (val: number) => void;
}

const NumberOption = ({ value, numSelected, handleSelect }: Props) => {
  const isSelected = numSelected
    ? "bg-accent-blue text-white font-medium md:text-dark-blue md:bg-bg-light"
    : "border md:border-none text-text-gray md:bg-dark-blue";

  return (
    <div
      className={`${isSelected} h-8 w-8 flex justify-center items-center rounded-full cursor-pointer transition-all duration-150 active:scale-90`}
      onClick={() => handleSelect(value)}
    >
      {value}
    </div>
  );
};

export default NumberOption;
