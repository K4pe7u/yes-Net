import React from "react";
import css from "./NewsModal.module.css";

const NewsModal = ({ news, onClose }) => {
  return (
    <div className={css.modal_overlay} onClick={onClose}>
      <div className={css.modal_content} onClick={(e) => e.stopPropagation()}>
        <h3>{news.title}</h3>
        <p>{news.content}</p>
        <p className={css.date}>{news.date}</p>
        <button onClick={onClose}>Zamknij</button>
      </div>
    </div>
  );
};

export default NewsModal;
