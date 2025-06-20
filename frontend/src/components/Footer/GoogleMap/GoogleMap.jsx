import React from 'react'
import css from './GoogleMap.module.css'

const GoogleMap = () => {
  return (
    <div className={css.googleMap}>
      <h2 className={css.googleMap_title}>Lokalizacje yesNET</h2>
      <iframe
        title='Google Map - Lokalizacja punktów yesNET'
        className={css.mapIframe}
        src='https://www.google.com/maps/d/embed?mid=1rwAYsY5PPrKUzM9u0h0MHY-VJha9Cwc&ehbc=2E312F&noprof=1'
        style={{ border: 0 }}
        allowFullScreen={true}
        aria-hidden='false'
        tabIndex='0'
        width='100%'
        height='450'
        loading='lazy'
      ></iframe>
    </div>
  )
}

export default GoogleMap
