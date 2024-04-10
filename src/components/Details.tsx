import React from "react";
import { useLocation } from "react-router-dom";
import moment from "moment";
import newyork from "../img/tengrinews.svg";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import noPhoto from '../assets/bg.webp';
export default function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div className="p-4 shadow-lg">
        <img
          onClick={() => navigate("/")}
          src={newyork}
          className="w-52"
          alt=""
        />
      </div>
      <div className="pl-32 mt-10">
        <button onClick={() => navigate("/")} className="goToBack rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85A3,3,0,0,0,.88,14.09Z" />
          </svg>
          <path
            xmlns="http://www.w3.org/2000/svg"
            d="M.88,14.09,4.75,18a1,1,0,0,0,1.42,0h0a1,1,0,0,0,0-1.42L2.61,13H23a1,1,0,0,0,1-1h0a1,1,0,0,0-1-1H2.55L6.17,7.38A1,1,0,0,0,6.17,6h0A1,1,0,0,0,4.75,6L.88,9.85A3,3,0,0,0,.88,14.09Z"
          />
        </button>
        <div className="w-9/12">
          <h1 className="font-semibold text-4xl font-serif italic">
            {location?.state?.data?.titles}
          </h1>
          <h1 className="font-serif text-2xl mt-3">
            {location?.state?.data?.description}
          </h1>
        </div>

        <img
          className="mt-5"
          style={{width:'1000px'}}
          src={location?.state?.data?.urlToImage===''?noPhoto:location?.state?.data?.urlToImage}
        />
        <div className="flex items-center font-bold mt-4">
          <h1>
            {moment(location?.state?.data?.publishedAt).format("DD-MM-YYYY")}
          </h1>
          <h1 className="ml-3">{location?.state?.data?.source?.name}</h1>
        </div>

        <h1 className="font-serif text-2xl mt-3 w-9/12">
          {location?.state?.data?.content}
        </h1>
      </div>
      <Footer />
    </>
  );
}
