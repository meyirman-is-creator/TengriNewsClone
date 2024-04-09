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
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("home")}>Home Page</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("world")}>World</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("coronavirus")}>Coronavirus</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("us")}>U.S.World</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("politics")}>U.S.Politics</h1>
          </div>
          <div>
            <h1 className="font-bold text-sm">OPINION</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("opinion")}>Today's Opinion</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("editorials")}>Editorials</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("video")}>Opinion video</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("letters")}>Letters</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("columnists")}>Columnists</h1>
          </div>
          <div>
            <h1 className="font-bold text-sm">ARTS</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("Movies")}>Movies</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("Books")}>Books</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("Video")}>Video</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("Music")}>Music</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("Dance")}>Dance</h1>
          </div>
          <div>
            <h1 className="font-bold text-sm">LIVING</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("Food")}>Food</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("Health")}>Health</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("Travel")}>Travel</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("Love")}>Love</h1>
            <h1 className="cursor-pointer" onClick={()=>props?.setMenu("Job")}>Job</h1>
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
