import React, { useState } from "react";
import Slider from "react-slick";
import css from "./News.module.css";
import newsData from "./newsData.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
  const [currentNews, setCurrentNews] = useState(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
  };

  const handleNewsClick = (newsId) => {
    const selectedNews = newsData.find((news) => news.id === newsId);
    setCurrentNews(selectedNews);
  };

  return (
    <div className={css.newsContainer}>
      <div className={css.newsList}>
        <h2 className={css.newsHeading}>Informator Sieci</h2>
        <Slider {...settings}>
          {newsData.map((news) => (
            <div key={news.id}>
              <div
                className={css.newsItem}
                onClick={() => handleNewsClick(news.id)}
              >
                <span className={css.glow}></span>
                <div className={css.informationContainer}>
                  <span className={css.title}>{news.title}</span>
                  <span className={css.date}>{news.date}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className={css.newsDetails}>
        {currentNews ? (
          <>
            <h3 className={css.newsDetailTitle}>{currentNews.title}</h3>
            <p className={css.newsDetailContent}>{currentNews.content}</p>
            <p className={css.newsDetailDate}>Data: {currentNews.date}</p>
          </>
        ) : (
          <p className={css.noNewsSelected}>
            Wybierz ogłoszenia, aby zobaczyć więcej szczegółów.
          </p>
        )}
      </div>
    </div>
  );
};

export default News;
