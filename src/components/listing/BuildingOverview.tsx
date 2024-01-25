import React from "react";

const BuildingOverview = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-4 md:p-6 gap-4">
      <h3 className="font-medium text-2xl">Building Overview</h3>
      <p>
        If you're not much for great views of downtown Chicago, you won't like
        this vintage 10-story high rise situated on a nice tree-lined street
        just off of Clark Street with all of its fantastic restaurants,
        nightlife and shopping. Now that that's out of the way, let's start from
        the top, on your sundeck, with its picture-perfect framing of the Loop.
      </p>
      <h4 className="font-medium text-xl">Community Amenities</h4>
      <ul className="flex flex-col">
        <li>Fitness Center</li>
        <li>Gated</li>
      </ul>
      <h4 className="font-medium text-xl">Apartment Features</h4>
      <ul>
        <li>Fitness Center</li>
        <li>Gated</li>
      </ul>
    </div>
  );
};

export default BuildingOverview;
