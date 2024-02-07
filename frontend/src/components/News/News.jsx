// import React, { useState } from "react";
// import Slider from "react-slick";
// import css from "./News.module.css";
// import newsData from "./newsData.json";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const News = () => {
//   const [currentNews, setCurrentNews] = useState(null);

//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     centerMode: true,
//     variableWidth: true,
//   };

//   const handleNewsClick = (newsId) => {
//     const selectedNews = newsData.find((news) => news.id === newsId);
//     setCurrentNews(selectedNews);
//   };

//   return (
//     <div className={css.newsContainer}>
//       <div className={css.newsList}>
//         <h2 className={css.newsHeading}>Informator Sieci</h2>
//         <Slider {...settings}>
//           {newsData.map((news) => (
//             <div key={news.id}>
//               <div
//                 className={css.newsItem}
//                 onClick={() => handleNewsClick(news.id)}
//               >
//                 <span className={css.glow}></span>
//                 <div className={css.informationContainer}>
//                   <span className={css.title}>{news.title}</span>
//                   <span className={css.date}>{news.date}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <div className={css.newsDetails}>
//         {currentNews ? (
//           <>
//             <h3 className={css.newsDetailTitle}>{currentNews.title}</h3>
//             <p className={css.newsDetailContent}>{currentNews.content}</p>
//             <p className={css.newsDetailDate}>Data: {currentNews.date}</p>
//           </>
//         ) : (
//           <p className={css.noNewsSelected}>
//             Wybierz ogłoszenia, aby zobaczyć więcej szczegółów.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default News;
import React, { useState, useEffect, useRef } from "react";
import css from "./News.module.css";
import newsData from "./newsData.json";

const News = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const sortNews = newsData.sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestNews = sortNews.slice(0, 8);

  useEffect(() => {
    const slider = sliderRef.current;
    const handleScroll = () => {
      if (sliderRef.current) {
        const itemWidth = sliderRef.current.offsetWidth + 10; // Szerokość elementu plus odstęp
        const index = Math.round(sliderRef.current.scrollLeft / itemWidth);
        setActiveIndex(index);
      }
    };

    if (slider) {
      slider.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToIndex = (index) => {
    setActiveIndex(index);
    sliderRef.current.scrollTo({
      left: index * (sliderRef.current.offsetWidth + 10), // Szerokość elementu plus odstęp
      behavior: "smooth",
    });
  };

  return (
    <div className={css.news_container}>
      <h2 className={css.news_title}>informator sieci</h2>
      <div ref={sliderRef} className={css.news_slider}>
        {latestNews.map((news) => (
          <div key={news.id} className={css.news_item}>
            <h3 className={css.news_itemTitle}>{news.title}</h3>
            <span className={css.date}>Opublikowano: {news.date}</span>
            <div className={css.content_newsItem}>
              <p className={css.content_text}>{news.content}</p>
              <span className={css.team_solution}>Zespół yesNET</span>
            </div>
          </div>
        ))}
      </div>
      <div className={css.news_indicator}>
        {latestNews.map((news, index) => (
          <div
            key={news.id}
            className={`${css.dot} ${index === activeIndex ? css.active : ""}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default News;
