const CustomMarker = ({ price }: { price: number }) => {
  // const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <div className="bg-white rounded-full shadow-xl font-poppins px-2 p-1 font-medium cursor-pointer hover:scale-110 transition-all duration-200">
      ${price}
    </div>
  );
};

export default CustomMarker;
