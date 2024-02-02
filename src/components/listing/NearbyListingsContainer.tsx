import React from "react";
import ListingCard from "../ListingCard";
import GridCard from "../GridCard";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 flex-wrap gap-3 p-2">
      {DATA.map((apt) => {
        return (
          <Link
            className="flex w-full flex-col items-center overflow-hidden rounded-xl shadow-md cursor-pointer"
            to={`/${apt.zpid}`}
          >
            <div className="w-full object-fit">
              <img
                src="https://photos.zillowstatic.com/fp/e3eab42685bb801eb0bcbe6e26acbbf1-p_c.jpg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className="p-2 text-center">
              <p className="font-medium text-sm md:text-lg">
                ${apt.price.toLocaleString()}
              </p>
              <p className="text-xs md:text-base">
                {apt.address.streetAddress}
              </p>
              <p className="text-xs md:text-base">{apt.address.city}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default NearbyListingsContainer;
