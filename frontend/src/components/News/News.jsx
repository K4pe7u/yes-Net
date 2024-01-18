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
import React, { useState } from "react";
import css from "./News.module.css";
import newsData from "./newsData.json";
import NewsModal from "./Modals/NewsModal";

const News = () => {
  const sortNews = newsData.sort((a, b) => new Date(b.date) - new Date(a.date));

  const latestNews = sortNews.slice(0, 8);

  const [selectedNews, setSelectedNews] = useState(null);

  const openModal = (news) => {
    setSelectedNews(news);
  };

  const closeModal = () => {
    setSelectedNews(null);
  };

  return (
    <div className={css.news_container}>
      <div className={css.news_slider}>
        {latestNews.map((news) => (
          <div
            key={news.id}
            className={css.news_item}
            onClick={() => openModal(news)}
          >
            <h3>{news.title}</h3>
            <p className={css.date}>{news.date}</p>
          </div>
        ))}
      </div>
      {selectedNews && <NewsModal news={selectedNews} onClose={closeModal} />}
    </div>
  );
};

export default News;
