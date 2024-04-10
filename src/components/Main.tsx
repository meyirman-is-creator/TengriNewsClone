import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Sidebar from "./Sidebar";
import News from "./News";
import arts from "../data/arts.json";
import business from "../data/business.json";
import lifestyle from "../data/lifestyle.json";
import opinion from "../data/opinion.json";
import politics from "../data/politics.json";
import world from "../data/world.json";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';
import "swiper/css/pagination";
import "swiper/css";


interface NewsArticle {
  source: {
    id: string | null; // если id может быть null
    name: string;
  } | null; // если весь объект source может отсутствовать
  author?: string; // если поле может отсутствовать
  title: string;
  description?: string; // если поле может отсутствовать
  url: string;
  urlToImage?: string | null; // если поле может отсутствовать или быть null
  publishedAt: string;
  content?: string; // если поле может отсутствовать
}
const adaptArticle = (article: any): NewsArticle => {
  return {
    source: article.source || { id: null, name: "" },
    author: article.author || "",
    title: article.title,
    description: article.description || "",
    url: article.url,
    urlToImage: article.urlToImage || "",
    publishedAt: article.publishedAt,
    content: article.content || "",
  };
};

export default function Main() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [timer]);
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [menu, setMenu] = useState("");
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  const getNews = async () => {
    try {
      await fetch(
        `https://newsapi.org/v2/everything?q=${menu?menu:'politics'}&apiKey=20e4c41c4d904ff49f10485c8aafa3b2`
      )
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setNews(json?.articles)
        });
    }catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getNews();
  }, [menu]);
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <Navbar searchRef={searchRef} setMenu={setMenu} setSearch={setSearch} />
      <div className="flex">
        <Home news={news} num={nums[timer % 9]} />
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={true}

          navigation={true}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          className="swiper-sliders-class"
        >
          <SwiperSlide>
            <Sidebar news={news} num="10" />
          </SwiperSlide>
          <SwiperSlide>
            <Sidebar news={news} num="12" />
          </SwiperSlide>
          <SwiperSlide>
            <Sidebar news={news} num="13" />
          </SwiperSlide>
          <SwiperSlide>
            <Sidebar news={news} num="14" />
          </SwiperSlide>
          <SwiperSlide>
            <Sidebar news={news} num="15" />
          </SwiperSlide>
          <SwiperSlide>
            <Sidebar news={news} num="16" />
          </SwiperSlide>
          <SwiperSlide>
            <Sidebar news={news} num="17" />
          </SwiperSlide>
        </Swiper>
      </div>
      <hr />
      <hr className="mt-1" />
      <hr className="mt-1" />
      <News searchRef={searchRef} news={news} search={search} />
      <Footer setMenu={setMenu} />
    </div>
  );
}
