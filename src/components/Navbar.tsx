import React, { useState } from "react";
import menu from "../img/menu.png";
import lens from "../img/search-interface-symbol.png";
import moment from "moment";
import tengrinewsIcon from "../img/tengrinews.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/setup";
import { signOut } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from "react-toastify";
interface menuProp {
  setMenu: any;
  setSearch: any;
  searchRef: any;
}
export default function Navbar(props: menuProp) {
  const [searchIcon, setSearchIcon] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("LoggedOut successfully");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <div className="grid grid-row-3 p-7 header">
        <div className="flex items-center header__top">
          <div className="header__top-left">
            <img
              src={menu}
              alt=""
              className="w-5 h-5"
              onClick={() => setSideMenu(true)}
            />
            {sideMenu && (
              <div
                onMouseLeave={() => setSideMenu(false)}
                className="font-bold sidebar text-sm pl-5 pt-5 z-10 pb-4 absolute bg-white mt-52 shadow-2xl border border-gray-300 left-0 w-48"
              >
                <h1
                  onClick={() => props?.setMenu("arts")}
                  className="mt-2 cursor-pointer"
                >
                  Arts
                </h1>
                <h1
                  onClick={() => props?.setMenu("business")}
                  className="mt-2 cursor-pointer"
                >
                  Business
                </h1>
                <h1
                  onClick={() => props?.setMenu("lifestyle")}
                  className="mt-2 cursor-pointer"
                >
                  Lifestyle
                </h1>
                <h1
                  onClick={() => props?.setMenu("opinion")}
                  className="mt-2 cursor-pointer"
                >
                  Opinion
                </h1>
                <h1
                  onClick={() => props?.setMenu("politics")}
                  className="mt-2 cursor-pointer"
                >
                  Politics
                </h1>
                <h1
                  onClick={() => props?.setMenu("world")}
                  className="mt-2 cursor-pointer"
                >
                  World
                </h1>
              </div>
            )}
            <img
              src={lens}
              onClick={() => setSearchIcon(!searchIcon)}
              alt=""
              className="w-4 h-4 ml-5 cursor-pointer"
            />
            {searchIcon ? (
              <>
                <div className="button-search">
                  <input
                    onChange={(e) => props?.setSearch(e.target.value)}
                    type="text"
                    placeholder="SEARCH"
                    className="border border-black rounded-sm p-1 ml-3"
                  />
                  <button
                    onClick={() =>
                      props?.searchRef?.current?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                    className="bg-blue-100 text-white text-xs font-medium p-2 rounded-sm ml-1"
                  >
                    GO
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>

          <h1 className="text-xs font-semibold ml-5">INTERNATIONAL</h1>
          {auth?.currentUser ? (
            <button onClick={logout} className="text-xs">
              LOGOUT
            </button>
          ) : (
            <Link to="/login">
              <button className="text-xs bg-slate-500 p-1 w-16 text-white font-bold rounded-sm">
                LOG IN
              </button>
            </Link>
          )}
        </div>
        <div className="flex items-center">
          <div>
            <h1 className="font-bold text-xs">
              {moment(new Date()).format("DD-MM-YYYY")}
            </h1>
            <h1>Today's paper</h1>
          </div>

          <img src={tengrinewsIcon} alt="" className="w-96 ml-72" />
        </div>
        <div>
          <hr className="mt-2" />
          <div className="flex items-center text-sm mt-3 header__menu">
            <h1
              onClick={() => props?.setMenu("arts")}
              className="cursor-pointer"
            >
              Arts
            </h1>
            <h1
              onClick={() => props?.setMenu("business")}
              className="ml-7 cursor-pointer"
            >
              Business
            </h1>
            <h1
              onClick={() => props?.setMenu("lifestyle")}
              className="ml-7 cursor-pointer"
            >
              Lifestyle
            </h1>
            <h1 className="ml-4">|</h1>
            <h1
              onClick={() => props?.setMenu("opinion")}
              className="ml-7 cursor-pointer"
            >
              Opinion
            </h1>
            <h1
              onClick={() => props?.setMenu("politics")}
              className="ml-7 cursor-pointer"
            >
              Politics
            </h1>
            <h1
              onClick={() => props?.setMenu("world")}
              className="ml-7 cursor-pointer"
            >
              World
            </h1>
          </div>
          <hr className="mt-2" />
          <hr className="mt-1" />
        </div>
      </div>
    </>
  );
}
