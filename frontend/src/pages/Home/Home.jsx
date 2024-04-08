import React from "react";
import css from "./Home.module.css";
import Header from "../../components/Header/Header";
import Mainset from "../../components/Mainset/Mainset";
// eslint-disable-next-line
import Ourself from "../../components/Ourself/Ourself";
import Footer from "../../components/Footer/Footer";
// eslint-disable-next-line
import Promotion from "../../components/Promotion/Promotion";
import News from "../../components/News/News";
import MiniFaq from "../../components/MiniFAQ/MiniFAQ";

function Home() {
  return (
    <div className={css.page}>
      <div className={css.gradientBackground__wrapper}>
        {/* <div className={css.gradientBackground}>
          <div
            className={`${css.gradientBackground__shape} ${css.gradientBackground__shape__1}`}
          ></div>
          <div
            className={`${css.gradientBackground__shape} ${css.gradientBackground__shape__2}`}
          ></div>
        </div> */}
      </div>
      <section className={css.section} id="Header">
        <div className={css.container}>
          <Header />
        </div>
      </section>
      <section className={css.section} id="Mainset">
        <div className={css.container}>
          <Mainset />
        </div>
      </section>
      <section className={css.section}>
        <div className={css.container}>
          <Ourself />
        </div>
      </section>
      <section className={css.section}>
        <div className={css.container}>
          <Promotion />
        </div>
      </section>

      <section className={css.section} id="News">
        <div className={css.container}>
          <News />
        </div>
      </section>
      <section className={css.section} id="MiniFaq">
        <div className={css.container}>
          <MiniFaq />
        </div>
      </section>
      <section className={css.section}>
        <div className={css.container}>
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default Home;
