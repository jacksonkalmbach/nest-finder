import { useContext } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { RootStoreContext } from "../context/RootStoreContext";
import { observer } from "mobx-react";
import { Separator } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const MobileNavMenu = observer(() => {
  const navigate = useNavigate();
  const { uiStore } = useContext(RootStoreContext);

  const handleNavClick = (path: string) => {
    navigate(path);
    uiStore.toggleNav();
  };

  const handleClose = () => {
    uiStore.toggleNav();
  };

  return (
    <div
      className={`${
        uiStore.showNav ? "right-0" : "-right-full"
      } fixed w-4/5 h-screen bg-bg-light z-30 p-6 transition-all duration-200`}
    >
      <div className="w-6 h-6" onClick={handleClose}>
        <Cross1Icon className="w-full h-full" />
      </div>
      <div className="flex flex-col font-poppins gap-4 mt-8">
        <p className="text-lg">Sign In</p>
        <p className="text-lg">Sign Up</p>
        <Separator size="4" />
        <p onClick={() => handleNavClick("/discover")} className="text-lg">
          Apartments for Rent
        </p>
      </div>
    </div>
  );
});

export default MobileNavMenu;
