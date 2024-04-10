import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import noPhoto from '../assets/bg.webp';
interface newsProps {
  news: any;
  search: any;
  searchRef: any;
}

export default function News(props: newsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const [posts,setPosts] = useState(props?.news.filter((item:any)=>item.title!=='[Removed]'));
  const currentPosts = posts.filter((data: any) => data.title.includes(props?.search)).slice(firstPostIndex, lastPostIndex);
  
  const [sortType, setSortType] = useState('');
  useEffect(()=>{
    if(sortType===''){
      setPosts(props?.news.filter((item:any)=>item.title!=='[Removed]'));
      
    }
    else if(sortType==='date'){
      setPosts(props?.news.slice().filter((item:any)=>item.title!=='[Removed]').sort((a:any,b:any)=>Date.parse(b.publishedAt) - Date.parse(a.publishedAt)));
    } else if(sortType==='title'){
      setPosts(props?.news.slice().filter((item:any)=>item.title!=='[Removed]').sort((a:any, b:any) => a.title.localeCompare(b.title)))
    }
  },[sortType, props.news]);
  return (
    <>
      <h1 ref={props?.searchRef} className="text-base font-bold ml-7 mt-4">
        NEWS
      </h1>
      <div className="btns-sort ml-7 mt-4">
        <button onClick={()=>setSortType('date')} className={sortType==='date'?"btn-sort rounded active":"btn-sort rounded "}>Sort by Date</button>
        <button onClick={()=>setSortType('title')} className={sortType==='title'?"btn-sort rounded ml-5 active":"btn-sort rounded ml-5"}>Sort by Title</button>
        <button onClick={()=>setSortType('')} className="btn-sort rounded ml-5">Clear</button>
      </div>

      <div className="grid pagination p-7">
        {currentPosts
          
          .map((data: any) => {
            return (
              <Link to="/details" state={{ data: data }}>
                <div className="w-60 mt-16">
                  <img className="w-60 " src={data?.urlToImage===''?noPhoto:data?.urlToImage} alt="" />
                  <h1>{data?.title}</h1>
                  <p>{data?.publishedAt}</p>
                </div>
              </Link>
            );
          })}
      </div>
      <Pagination
        totalPosts={posts.length}
        postsPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
} //54:43
