import React from "react";
import css from "./Home.module.css";
import Header from "../../components/Header/Header";
import Mainset from "../../components/Mainset/Mainset";

function Home() {
  return (
    <div className={css.page}>
      <div className={css.gradientBackground__wrapper}>
        <div className={css.gradientBackground}>
          <div
            className={`${css.gradientBackground__shape} ${css.gradientBackground__shape__1}`}
          ></div>
          <div
            className={`${css.gradientBackground__shape} ${css.gradientBackground__shape__2}`}
          ></div>
        </div>
      </div>
      <section className={css.section}>
        <div className={css.container}>
          <Header />
        </div>
      </section>
      <section className={css.section}>
        <div className={css.container}>
          <Mainset />
        </div>
      </section>
      <section className={css.section}>
        <div className={css.container}></div>
      </section>
      <section className={css.section}>
        <div className={css.container}></div>
      </section>
      <section className={css.section}>
        <div className={css.container}></div>
      </section>
      <section className={css.section}>
        <div className={css.container}></div>
      </section>
    </div>
  );
}

export default Home;
