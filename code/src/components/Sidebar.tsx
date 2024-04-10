import React, { useState } from "react";
import { Link } from "react-router-dom";
import noPhoto from '../assets/bg.webp';
interface newsProp {
  news: any;
  num: any;
}

export default function Sidebar(props: newsProp) {  
  return (
    <div className="sidebar_container ml-3 border p-3">
      <Link to="/details" state={{data:props?.news[`${props.num}`]}}>
        <div>
          <img
            className="w-80"
            src={props?.news[`${props.num}`]?.urlToImage===''? noPhoto  : props?.news[`${props.num}`]?.urlToImage}
            alt=""
          />
          <h1 className="text-2xl font-medium font-serif mt-7">
            {props?.news[1]?.title}
          </h1>
          <h1 className="text-sm font-serif">{props?.news[1]?.content}</h1>
        </div>
      </Link>
    </div>
  );
}
