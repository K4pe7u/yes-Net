import React from 'react'
import css from './Home.module.css'
import notiflix from 'notiflix'
import Header from '../../components/Header/Header'
import Mainset from '../../components/Mainset/Mainset'
import Ourself from '../../components/Ourself/Ourself'
import Footer from '../../components/Footer/Footer'
import Promotion from '../../components/Promotion/Promotion'
import News from '../../components/News/News'
import MiniFaq from '../../components/MiniFAQ/MiniFAQ'

import IndividualModal from './Modals/Individual/Individual'
import BusinessModal from './Modals/Business/Business'

import { useState, useEffect } from 'react'

function Home() {
  const [currentModal, setCurrentModal] = useState(null)

  const openModal = (modalType) => {
    setCurrentModal(modalType)
  }

  const closeModal = () => {
    setCurrentModal(null)
  }
  useEffect(() => {
    if (currentModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [currentModal])

  notiflix.Notify.init({
    // height: '300px',
    width: '400px',
    fontSize: '16px',
    distance: '20px',
    fontFamily: 'Poppins'
  })

  return (
    <div className={css.page}>
      <div className={css.gradientBackground__wrapper}></div>
      <section className={css.section} id='Header'>
        <div className={css.container}>
          <Header />
        </div>
      </section>
      <section className={css.section} id='Mainset'>
        <div className={css.container}>
          <Mainset open={openModal} />
        </div>
      </section>
      <section className={css.section} id='Ourself'>
        <div className={css.container}>
          <Ourself />
        </div>
      </section>
      <section className={css.section} id='Promotion'>
        <div className={css.container}>
          <Promotion />
        </div>
      </section>
      <section className={css.section} id='News'>
        <div className={css.container}>
          <News />
        </div>
      </section>
      <section className={css.section} id='MiniFaq'>
        <div className={css.container}>
          <MiniFaq />
        </div>
      </section>
      <section className={css.section} id='Footer'>
        <div className={css.container}>
          <Footer />
        </div>
      </section>
      {currentModal === 'individual' && (
        <IndividualModal onClose={closeModal} />
      )}

      {currentModal === 'business' && <BusinessModal onClose={closeModal} />}
    </div>
  )
}

export default Home
