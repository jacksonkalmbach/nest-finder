import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Button from "../components/ui/Button";
import { useParams } from "react-router-dom";
import { fetchImages } from "../utils/fetchImages";

const ImageGalleryPage = () => {
  const params = useParams();
  const isProperty = params.locationType === "zpid";
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (isProperty) {
      setIsLoading(true);
      const fetchAndSetImages = async () => {
        const id = params.id ? params.id : "";
        try {
          const response = await fetchImages(id);
          if (response) {
            setImages(response.data.images);
            console.log(response.data.images);
          }
        } catch (error) {
          console.error("Failed to fetch images:", error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchAndSetImages();
    }
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen gap-2 px-2 grid grid-cols-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="col-span-1 h-[250px] w-full">
            <Skeleton className="w-full h-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-screen gap-2 px-2 grid grid-cols-4">
      {images.length > 0 &&
        images.map((img: string, index) => {
          return (
            <div key={index} className="col-span-1 h-[250px] w-full">
              <img src={img} className="h-full" />
            </div>
          );
        })}
    </div>
  );
};

export default ImageGalleryPage;
