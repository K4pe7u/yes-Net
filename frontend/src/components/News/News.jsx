import React, { useState, useEffect } from "react";
import css from "./News.module.css";
import newsData from "./newsData.json"; // Zaimportowany plik JSON z danymi ogłoszeń/newsów

const News = () => {
  const itemsPerPage = 5;
  const [currentNews, setCurrentNews] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setTotalPages(Math.ceil(newsData.length / itemsPerPage));
  }, []);

  const handleNewsClick = (newsId) => {
    const selectedNews = newsData.find((news) => news.id === newsId);
    setCurrentNews(selectedNews);
  };

  const handlePageChange = (newPage) => {
    if (typeof newPage === "number" && newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setCurrentNews(null);
    }
  };

  const paginatedNews = newsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPagination = () => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    const getPageNumbers = () => {
      if (totalPages <= 3) {
        return pages;
      }

      const middlePage = currentPage;
      const offset = 1;
      let startPage = Math.max(1, middlePage - offset);
      let endPage = Math.min(totalPages, middlePage + offset);

      if (currentPage <= offset) {
        endPage += offset - currentPage + 1;
      } else if (currentPage >= totalPages - offset) {
        startPage -= offset - (totalPages - currentPage);
      }

      const result = [];
      if (startPage > 1) {
        result.push(1);
      }
      if (startPage > 2) {
        result.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        result.push(i);
      }

      if (endPage < totalPages - 1) {
        result.push("...");
      }
      if (endPage < totalPages) {
        result.push(totalPages);
      }

      return result;
    };

    return (
      <div className={css.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className={
            currentPage === 1
              ? `${css.pageButton} ${css.activePage}`
              : css.pageButton
          }
        >
          {"<"}
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className={
              page === currentPage
                ? `${css.pageButton} ${css.activePage}`
                : css.pageButton
            }
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className={
            currentPage === totalPages
              ? `${css.pageButton} ${css.activePage}`
              : css.pageButton
          }
        >
          {">"}
        </button>
      </div>
    );
  };

  return (
    <div className={css.newsContainer}>
      <div className={css.newsList}>
        <h2 className={css.newsHeading}>Informator Sieci</h2>
        <ul className={css.newsItems}>
          {paginatedNews.map((news) => (
            <li
              key={news.id}
              className={css.newsItem}
              onClick={() => handleNewsClick(news.id)}
            >
              <div className={css.title}>{news.title}</div>
              <div className={css.date}>{news.date}</div>
            </li>
          ))}
        </ul>
      </div>
      {renderPagination()}
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
