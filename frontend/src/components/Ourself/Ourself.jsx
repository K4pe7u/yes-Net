import css from "./Ourself.module.css";
import planet from "./assets/icons.svg";

function Ourself() {
  return (
    <div className={css.container}>
      <section className={css.singleBlock}>
        <div className={css.iconBlock}>
          <svg width="90%" height="90%">
            <use href={`${planet}#Hands`}></use>
          </svg>
        </div>
        <div className={css.infoBlock}>
          <p className={css.info}>
            Jesteśmy dumni z tego, że jesteśmy ludźmi dla ludzi i zawsze
            pracujemy nad zapewnieniem komfortu dla naszych klientów
          </p>
        </div>
      </section>
      <section className={css.singleBlock}>
        <div className={css.iconBlock}>
          <svg width="90%" height="90%">
            <use href={`${planet}#Lock`}></use>
          </svg>
        </div>
        <div className={css.infoBlock}>
          <p className={css.info}>
            Możesz na nas liczyć, że wszystkie połączenia zostaną wykonanę z
            należytą starannością
          </p>
        </div>
      </section>
      <section className={css.singleBlock}>
        <div className={css.iconBlock}>
          <svg width="90%" height="90%">
            <use href={`${planet}#Planet`}></use>
          </svg>
        </div>
        <div className={css.infoBlock}>
          <p className={css.info}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium dignissimos necessitatibus nulla sequi at, sed deserunt,
            molestiae odit
          </p>
        </div>
      </section>
      <section className={css.singleBlock}>
        <div className={css.iconBlock}>
          <svg width="90%" height="90%">
            <use href={`${planet}#People`}></use>
          </svg>
        </div>
        <div className={css.infoBlock}>
          <p className={css.info}>
            Kochanie tego, co robisz, jest pierwszym krokiem do zapewnienia
            wysokiej jakości pracy - i my to robimy.
          </p>
        </div>
      </section>
      <section className={css.singleBlock}>
        <div className={css.iconBlock}>
          <svg width="90%" height="90%">
            <use href={`${planet}#Cloud`}></use>
          </svg>
        </div>
        <div className={css.infoBlock}>
          <p className={css.info}>something</p>
        </div>
      </section>
      <section className={css.singleBlock}>
        <div className={css.iconBlock}>
          <svg width="90%" height="90%">
            <use href={`${planet}#Eye`}></use>
          </svg>
        </div>
        <div className={css.infoBlock}>
          <p className={css.info}>
            Bacznie obserwujemy każdy element naszej pracy, aby upewnić się, że
            nic nie zostało pominięte.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Ourself;
