import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  title: string;
}

const ListingInfoSection = ({ title, children }: Props) => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-4 md:p-6 gap-2">
      <h3 className="font-medium text-2xl">{title}</h3>
      {children}
    </div>
  );
};

export default ListingInfoSection;
