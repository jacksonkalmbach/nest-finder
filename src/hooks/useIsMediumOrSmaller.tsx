import { useState, useEffect } from "react";

export const useIsMediumOrSmaller = () => {
  const [isMediumOrSmaller, setIsMediumOrSmaller] = useState(
    window.innerWidth < 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMediumOrSmaller(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMediumOrSmaller;
};
