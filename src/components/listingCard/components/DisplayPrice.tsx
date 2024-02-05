interface Props {
  price?: number;
  units?: {
    price: string;
  }[];
}

const DisplayPrice = ({ price, units }: Props) => {
  return (
    <>
      {price ? (
        <p>{price && `$${price.toLocaleString()}`}</p>
      ) : (
        <p>{units && units[0].price}</p>
      )}
    </>
  );
};

export default DisplayPrice;
