import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const UserCard = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-10 w-10 rounded-full overflow-hidden">
        <img
          src="https://media.licdn.com/dms/image/D4E03AQFseatAMo8cnA/profile-displayphoto-shrink_800_800/0/1679333450208?e=1710374400&v=beta&t=5xDLmntMXr5ZW88Hh5Gb8-oKSvtnPsxYLtIeoijSkME"
          alt="profile"
        />
      </div>
      <ChevronDownIcon className="h-6 w-6" />
    </div>
  );
};

export default UserCard;
