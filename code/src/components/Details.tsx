import React from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import newyork from "../img/tengrinews.svg";
import Footer from "./Footer";
export default function Details() {
  const location = useLocation();
  return (
    <>
      <div className="p-4 shadow-lg">
        <img src={newyork} className="w-52" alt="" />
      </div>
      <div className="pl-32 mt-10">
        <div className="w-9/12 pl-40">
          <h1 className="font-semibold text-4xl font-serif italic">
            {location?.state?.data?.titles}
          </h1>
          <h1 className="font-serif text-2xl mt-3">
            {location?.state?.data?.description}
          </h1>
        </div>

        <img
          className="w-11/12 mt-20"
          src={location?.state?.data?.urlToImage}
        />
        <div className="flex items-center font-bold mt-4">
          <h1>
            {moment(location?.state?.data?.publishedAt).format("DD-MM-YYYY")}
          </h1>
          <h1 className="ml-3">{location?.state?.data?.source?.name}</h1>
        </div>

        <h1 className="font-serif text-2xl mt-3 w-9/12 pl-40">
          {location?.state?.data?.content}
        </h1>
      </div>
      <Footer/>
    </>
  );
}
