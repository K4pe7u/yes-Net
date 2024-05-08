import React, { useState, useEffect, useRef } from 'react'
import css from './News.module.css'
import newsData from './newsData.json'
import icons from '../../icons/icons.svg'

const News = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [arrowsDisappear, setArrowsDisappear] = useState(false)
  const sliderRef = useRef(null)

  const sortNews = newsData.sort((a, b) => new Date(b.date) - new Date(a.date))
  const latestNews = sortNews.slice(0, 8)

  useEffect(() => {
    const slider = sliderRef.current
    const handleScroll = () => {
      if (sliderRef.current) {
        const itemWidth = sliderRef.current.offsetWidth + 10 // Szerokość elementu plus odstęp
        const index = Math.round(sliderRef.current.scrollLeft / itemWidth)
        setActiveIndex(index)
      }
    }

    if (slider) {
      slider.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (slider) {
        slider.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const disappear = (countdown) => {
    setArrowsDisappear(true)
    setTimeout(() => {
      setArrowsDisappear(false)
    }, countdown)
  }

  const scrollToIndex = (index) => {
    disappear(700)
    sliderRef.current.scrollTo({
      left: index * (sliderRef.current.offsetWidth + 10), // Szerokość elementu plus odstęp
      behavior: 'smooth'
    })
  }

  return (
    <div className={css.news_container}>
      <h2 className={css.news_title}>informator sieci</h2>
      <div ref={sliderRef} className={css.news_slider}>
        {latestNews.map((news, index) => (
          <div key={news.id} className={css.news_item}>
            {news.id !== 1 ? (
              <div
                className={`${css.btnLeft} ${
                  arrowsDisappear ? css.disappear : ''
                }`}
                onClick={() => scrollToIndex(index - 1)}
              >
                <svg width='50px' height='50px'>
                  <use href={`${icons}#left-news`}></use>
                </svg>
                <svg width='50px' height='50px'>
                  <use href={`${icons}#left-news`}></use>
                </svg>
              </div>
            ) : (
              <div className={css.emptySpace}></div>
            )}
            <div className={css.new_item_container}>
              <h3 className={css.news_itemTitle}>{news.title}</h3>
              <span className={css.date}>Opublikowano: {news.date}</span>
              <div className={css.content_newsItem}>
                <p className={css.content_text}>{news.content}</p>
                <span className={css.team_solution}>Zespół yesNET</span>
              </div>
            </div>
            {news.id !== latestNews.length ? (
              <div
                className={`${css.btnRight} ${
                  arrowsDisappear ? css.disappear : ''
                }`}
                onClick={() => {
                  scrollToIndex(index + 1)
                }}
              >
                <svg width='50px' height='50px'>
                  <use href={`${icons}#right-news`}></use>
                </svg>
                <svg width='50px' height='50px'>
                  <use href={`${icons}#right-news`}></use>
                </svg>
              </div>
            ) : (
              <div className={css.emptySpace}></div>
            )}
          </div>
        ))}
      </div>
      <div className={css.news_indicator}>
        {latestNews.map((news, index) => (
          <div
            key={news.id}
            className={`${css.dot} ${index === activeIndex ? css.active : ''}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default News
