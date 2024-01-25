interface Props {
  value: number;
  numSelected: number;
  handleSelect: (val: number) => void;
}

const NumberOption = ({ value, numSelected, handleSelect }: Props) => {
  const isSelected =
    numSelected === value
      ? "text-dark-blue bg-bg-light"
      : "text-text-gray bg-dark-blue";

  return (
    <div
      className={`${isSelected} h-8 w-8 flex justify-center items-center rounded-full cursor-pointer active:scale-90`}
      onClick={() => handleSelect(value)}
    >
      {value}
    </div>
  );
};

export default NumberOption;
