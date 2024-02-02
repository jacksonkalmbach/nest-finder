import React from "react";
import ListingCard from "../ListingCard";
import GridCard from "../GridCard";

const DATA = [
  {
    miniCardPhotos: [
      {
        url: "https://photos.zillowstatic.com/fp/e3eab42685bb801eb0bcbe6e26acbbf1-p_c.jpg",
      },
    ],
    zpid: 2126449199,
    longitude: -87.64292,
    address: {
      city: "Chicago",
      state: "IL",
      streetAddress: "525 W Deming Pl APT 222",
      zipcode: "60614",
    },
    price: 1525,
    latitude: 41.927727,
  },
  {
    miniCardPhotos: [
      {
        url: "https://photos.zillowstatic.com/fp/e3eab42685bb801eb0bcbe6e26acbbf1-p_c.jpg",
      },
    ],
    zpid: 2126449199,
    longitude: -87.64292,
    address: {
      city: "Chicago",
      state: "IL",
      streetAddress: "525 W Deming Pl APT 222",
      zipcode: "60614",
    },
    price: 1525,
    latitude: 41.927727,
  },
  {
    miniCardPhotos: [
      {
        url: "https://photos.zillowstatic.com/fp/e3eab42685bb801eb0bcbe6e26acbbf1-p_c.jpg",
      },
    ],
    zpid: 2126449199,
    longitude: -87.64292,
    address: {
      city: "Chicago",
      state: "IL",
      streetAddress: "525 W Deming Pl APT 222",
      zipcode: "60614",
    },
    price: 1525,
    latitude: 41.927727,
  },
  {
    miniCardPhotos: [
      {
        url: "https://photos.zillowstatic.com/fp/e3eab42685bb801eb0bcbe6e26acbbf1-p_c.jpg",
      },
    ],
    zpid: 2126449199,
    longitude: -87.64292,
    address: {
      city: "Chicago",
      state: "IL",
      streetAddress: "525 W Deming Pl APT 222",
      zipcode: "60614",
    },
    price: 1525,
    latitude: 41.927727,
  },
];

const NearbyListingsContainer = () => {
  return (
    <div className="grid grid-cols-4 flex-wrap gap-3 p-2">
      {DATA.map((apt) => {
        return (
          <div className="flex w-full flex-col items-center p-3 rounded-xl shadow-md">
            <div className="h-[150px] w-full object-fit">
              <img
                src="https://photos.zillowstatic.com/fp/e3eab42685bb801eb0bcbe6e26acbbf1-p_c.jpg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <div>
              <p className="font-medium text-lg">
                ${apt.price.toLocaleString()}
              </p>
              <p>{apt.address.streetAddress}</p>
              <p>Chicago, IL</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NearbyListingsContainer;
