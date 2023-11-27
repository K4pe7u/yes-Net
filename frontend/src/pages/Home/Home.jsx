import css from "./Home.module.css";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <div className={css.page}>
      <section className={css.section}>
        <div className={css.container}>
          <Header />
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
      <section className={css.section}>
        <div className={css.container}></div>
      </section>
    </div>
  );
}
export default Home;
