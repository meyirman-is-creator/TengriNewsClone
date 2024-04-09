import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Sidebar from "./Sidebar";
import News from "./News";
import arts from '../data/arts.json';
import business from '../data/business.json';
import lifestyle from '../data/lifestyle.json';
import opinion from '../data/opinion.json';
import politics from '../data/politics.json';
import world from '../data/world.json';
import Footer from "./Footer";

interface NewsArticle {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
export default function Main() {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [menu,setMenu] = useState('');
  const [search,setSearch] = useState("");
  const searchRef = useRef(null);
  const getNews = async () => {
    try {
    
      switch(menu) {
        case 'arts':
          setNews(arts.articles);
          break;
        case 'business':
          setNews(business.articles);
          break;
        case 'lifestyle':
          setNews(lifestyle.articles);
          break;
        case 'opinion':
          setNews(opinion.articles);
          break;
        case 'politics':
          setNews(politics.articles);
          break;
        case 'world':
          setNews(world.articles);
          break;
        default:
          setNews(politics.articles); 
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getNews();
  }, [menu]);
  return (
    <div>
      <Navbar searchRef={searchRef} setMenu={setMenu} setSearch={setSearch}/>
      <div className="flex">
        <Home news={news} num="0" />
        <Sidebar news={news} num="5" />
      </div>
      <hr />
      <div className="flex mt-3">
        <Home news={news} num="1" />
        <Sidebar news={news} num="6" />
      </div>
      <hr />
      <div className="flex mt-3">
        <Home news={news} num="2" />
        <Sidebar news={news} num="7" />
      </div>
      <hr />
      <div className="flex mt-3">
        <Home news={news} num="3" />
        <Sidebar news={news} num="8" />
      </div>
      <hr className="mt-1" />
      <hr className="mt-1" />
      <News searchRef={searchRef} news={news} search={search} />
      <Footer setMenu={setMenu}/>
    </div>
  );
}
