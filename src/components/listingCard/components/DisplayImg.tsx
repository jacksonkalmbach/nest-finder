import Logo from "../../Logo";

const DisplayImg = ({ src }: { src: string }) => {
  let displayStr = "";
  if (!src.startsWith("https://maps.googleapis.com")) {
    displayStr = src;
  }
  return (
    <>
      {displayStr !== "" ? (
        <img src={displayStr} alt="listing" className="w-full h-full" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-white gap-2">
          <div className="w-10">
            <Logo />
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayImg;
