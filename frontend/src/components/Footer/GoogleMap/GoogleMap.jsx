// GoogleMap.js
import React from 'react'
import css from './GoogleMap.module.css'

const GoogleMap = () => {
  // const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  // Dodaj styl nocny
  const nightMapStyle = [
    {
      elementType: 'geometry',
      stylers: [{ color: '#242f3e' }]
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#242f3e' }]
    },
    {
      elementType: 'labels.text.fill',
      stylers: [{ color: '#746855' }]
    }
    // Dodaj więcej stylów, jeśli potrzebujesz
  ]

  const nightMapOptions = {
    center: { lat: 0, lng: 0 }, // Ustaw centrum mapy
    zoom: 2, // Ustaw zoom
    styles: nightMapStyle // Dodaj styl nocny
  }

  return (
    <div className={css.googleMap}>
      <h2 className={css.googleMap_title}>
        Lokalizacja punktów obsługi YesNet
      </h2>
      <iframe
        title='Google Map - Lokalizacja biura w Wronkach'
        className={css.mapIframe}
        // src={`https://www.google.com/maps/embed/v1/place?q=UL.%20Towarowa%201%2C%2064-510%20Wronki&key=${apiKey}&maptype=roadmap`}
        src='https://www.google.com/maps/d/u/0/embed?mid=1GmaU2EqRUKf-yCJob2NYPUYUc36CiSc&ehbc=2E312F&noprof=1'
        frameBorder='0'
        style={{ border: 0 }}
        allowFullScreen={false}
        aria-hidden='false'
        tabIndex='0'
        width='100%'
        height='450'
        options={nightMapOptions} // Przekaż opcje stylu nocnego
      ></iframe>
    </div>
  )
}

export default GoogleMap
