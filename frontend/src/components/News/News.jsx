import React, { useState, useEffect, useRef } from 'react'
import css from './News.module.css'
import newsData from './newsData.json'

const News = () => {
  const [activeIndex, setActiveIndex] = useState(0)
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

  const scrollToIndex = (index) => {
    setActiveIndex(index)
    sliderRef.current.scrollTo({
      left: index * (sliderRef.current.offsetWidth + 10), // Szerokość elementu plus odstęp
      behavior: 'smooth'
    })
  }

  return (
    <div className={css.news_container}>
      <h2 className={css.news_title}>informator sieci</h2>
      <div ref={sliderRef} className={css.news_slider}>
        {latestNews.map((news) => (
          <div key={news.id} className={css.news_item}>
            <div className={css.new_item_container}>
              <h3 className={css.news_itemTitle}>{news.title}</h3>
              <span className={css.date}>Opublikowano: {news.date}</span>
              <div className={css.content_newsItem}>
                <p className={css.content_text}>{news.content}</p>
                <span className={css.team_solution}>Zespół yesNET</span>
              </div>
            </div>
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
