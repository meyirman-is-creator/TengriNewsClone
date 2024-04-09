import React from "react";
import { Link } from "react-router-dom";
interface newsProp {
  news: any;
  num: any;
}

export default function Home(props: newsProp) {
  return (
    <div className="w-8/12 p-7">
      <Link to="/details" state={{data:props?.news[`${props?.num}`]}}>
        <div className="flex">
          <div>
            <h1 className="font-bold text-xl font-serif">
              {props?.news[`${props.num}`]?.title}
            </h1>
            <h1 className="font-serif text-sm">
              {props?.news[`${props.num}`]?.content}
            </h1>
          </div>
          <img
            className="w-8/12 h-96 ml-7"
            src={props?.news[`${props.num}`]?.urlToImage}
            alt=""
          />
        </div>
      </Link>
    </div>
  );
}
