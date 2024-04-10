import React from "react";
import newyork from "../img/tengrinews.svg";
interface menuProp{
    setMenu?: any
}
export default function Footer(props:menuProp) {
  return (
    <div className="p-7">
      <div>
        <hr />
        <hr className="mt-1" />
        <img src={newyork} alt="" className="w-52 mt-3" />
        <div className="flex items-center justify-between p-4">
          <div>
            <h1 className="font-bold text-sm">NEWS</h1>
            <h1 className="cursor-pointer" >Home Page</h1>
            <h1 className="cursor-pointer" >World</h1>
            <h1 className="cursor-pointer" >Coronavirus</h1>
            <h1 className="cursor-pointer" >U.S.World</h1>
            <h1 className="cursor-pointer" >U.S.Politics</h1>
          </div>
          <div>
            <h1 className="font-bold text-sm">OPINION</h1>
            <h1 className="cursor-pointer" >Today's Opinion</h1>
            <h1 className="cursor-pointer" >Editorials</h1>
            <h1 className="cursor-pointer" >Opinion video</h1>
            <h1 className="cursor-pointer" >Letters</h1>
            <h1 className="cursor-pointer" >Columnists</h1>
          </div>
          <div>
            <h1 className="font-bold text-sm">ARTS</h1>
            <h1 className="cursor-pointer" >Movies</h1>
            <h1 className="cursor-pointer" >Books</h1>
            <h1 className="cursor-pointer" >Video</h1>
            <h1 className="cursor-pointer" >Music</h1>
            <h1 className="cursor-pointer" >Dance</h1>
          </div>
          <div>
            <h1 className="font-bold text-sm">LIVING</h1>
            <h1 className="cursor-pointer" >Food</h1>
            <h1 className="cursor-pointer" >Health</h1>
            <h1 className="cursor-pointer" >Travel</h1>
            <h1 className="cursor-pointer" >Love</h1>
            <h1 className="cursor-pointer" >Job</h1>
          </div>
          <div>
            <h1 className="font-bold text-sm">MORE</h1>
            <h1>Cooking</h1>
            <h1>Graphics</h1>
            <h1>Podcasts</h1>
            <h1>Video</h1>
            <h1>Articles</h1>
          </div>
        </div>
      </div>
      <hr />
      <h1 className="mt-3 text-xs text-center">
        © 2024 The New York Times Company
      </h1>
    </div>
  );
}
