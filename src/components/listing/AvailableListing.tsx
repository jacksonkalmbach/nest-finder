import { Table } from "@radix-ui/themes";

interface Props {
  name: string;
  minPrice: number;
  maxPrice: number;
  beds: number;
  baths: number;
  sqft: number;
  units: {
    price: number;
    unitNumber: string;
    availableFrom: string;
    zpid: number;
  }[];
}

const AvailableListing = ({
  name,
  minPrice,
  maxPrice,
  beds,
  baths,
  sqft,
  units,
}: Props) => {
  const convertDate = (timestampMs: string) => {
    const date = new Date(Number(timestampMs));

    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = String(date.getUTCFullYear()).slice(-2);

    const formattedDate = `${month}/${day}/${year}`;

    return formattedDate;
  };
  return (
    <div className="flex flex-col justify-between border gap-4 p-4 rounded-xl font-poppins">
      <div className="flex flex-col">
        <div>
          <p className="font-medium text-xl">{name}</p>
          <p className="font-medium text-xl">{`$${minPrice.toLocaleString()} - $${maxPrice.toLocaleString()}`}</p>
          <p className="font-base text-lg">{`${
            beds === 0 ? "Studio" : `${beds} Beds`
          }, ${baths} Baths, ${sqft} SF`}</p>
        </div>
        <div>
          <img />
        </div>
      </div>
      {units && (
        <div className="flex flex-col">
          <Table.Root variant="surface" className="font-poppins">
            <Table.Header className="font-poppins">
              <Table.Row align={"center"}>
                <Table.ColumnHeaderCell>Unit</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Available</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {units.map((unit) => {
                return (
                  <Table.Row key={unit.zpid}>
                    <Table.RowHeaderCell>{unit.unitNumber}</Table.RowHeaderCell>
                    <Table.Cell>${unit.price.toLocaleString()}</Table.Cell>
                    <Table.Cell>
                      {unit.availableFrom === "0"
                        ? "Now"
                        : convertDate(unit.availableFrom)}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table.Root>
        </div>
      )}
    </div>
  );
};

export default AvailableListing;
