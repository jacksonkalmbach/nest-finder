import React, { useContext } from "react";
import { observer } from "mobx-react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { RootStoreContext } from "../context/RootStoreContext";

const UserCard = observer(() => {
  const { userStore } = useContext(RootStoreContext);
  return (
    <div className="flex items-center gap-2 font-poppins px-3 py-1 hover:bg-gray-100 cursor-pointer rounded-xl active:scale-95 transition-all duration-150 ease-in-out">
      <div className="h-9 w-9 rounded-full overflow-hidden">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQFseatAMo8cnA/profile-displayphoto-shrink_800_800/0/1679333450208?e=1710374400&v=beta&t=5xDLmntMXr5ZW88Hh5Gb8-oKSvtnPsxYLtIeoijSkME"
          alt="profile"
        />
      </div>
      <div>
        <p className="text-sm">
          {userStore.firstName + " " + userStore.lastName}
        </p>
        <p className="text-xs text-gray-400">{userStore.email}</p>
      </div>
      {/* <ChevronDownIcon className="h-6 w-6" /> */}
    </div>
  );
});

export default UserCard;
