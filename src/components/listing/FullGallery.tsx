import Button from "../ui/Button";

interface Props {
  buildingPhotos?: {
    mixedSources: {
      jpeg: {
        url: string;
      }[];
    }[];
  }[];
  listingPhotos?: string[];
  handleCloseGallery: () => void;
}

const FullGallery = ({
  buildingPhotos,
  listingPhotos,
  handleCloseGallery,
}: Props) => {
  return (
    <>
      <div className="w-screen flex justify-end px-5 bg-bg-light">
        {/* <div>
          <Button
            text="Close"
            type="button"
            variant="ghost"
            icon="close"
            onClick={handleCloseGallery}
          />
        </div> */}
      </div>
      <div className="p-2 w-screen grow overflow-auto bg-bg-light gap-2 grid grid-cols-4">
        {buildingPhotos?.map((img: any) => (
          <div className="row-span-1 overflow-hidden object-cover">
            <img
              src={img.mixedSources.jpeg[0].url}
              alt=""
              className="w-full h-[250px]"
            />
          </div>
        ))}
        {listingPhotos?.map((img: string) => (
          <div className="row-span-1 overflow-hidden object-cover">
            <img src={img} alt="" className="w-full h-[250px]" />
          </div>
        ))}
      </div>
    </>
  );
};

export default FullGallery;
