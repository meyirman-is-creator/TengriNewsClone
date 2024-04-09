import React from "react";
import { Link } from "react-router-dom";

interface newsProps {
  news: any
  search:any
  searchRef:any
}

export default function News(props: newsProps) {
  return (
    <>
      <h1 ref={props?.searchRef} className="text-base font-bold ml-7 mt-4">NEWS</h1>
      <div className="grid grid-cols-4 p-7">
        {props?.news?.filter((data:any)=>data.title.includes(props?.search)).map((data: any) => {
          return (
            <Link to="/details" state={{ data: data }}>
              <div className="w-60 mt-16">
                <img className="w-60" src={data?.urlToImage} alt="" />
                <h1>{data?.title}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
} //54:43
