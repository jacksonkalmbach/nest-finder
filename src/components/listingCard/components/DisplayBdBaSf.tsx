interface Props {
  value?: string;
  units?: {
    beds: string;
  }[];
  label: string;
}

const DisplayBdBaSf = ({ value, label, units }: Props) => {
  let displayValue;

  if (units && label === "Bd") {
    const hasStudio = units[0].beds === "0";
    if (units.length === 1) {
      displayValue = hasStudio ? "Studio" : units[0].beds;
    } else {
      displayValue = `${hasStudio ? "Studio" : units[0].beds} - ${
        units[units.length - 1].beds
      }`;
    }
  } else if (label === "Bd") {
    displayValue = value;
  } else if (label === "Ba") {
    displayValue = value ? value : undefined;
  } else if (label === "Sf") {
    displayValue = value ? value.toLocaleString() : undefined;
  }
  return (
    <>
      {displayValue && (
        <div>
          {displayValue} {label}
        </div>
      )}
    </>
  );
};

export default DisplayBdBaSf;
