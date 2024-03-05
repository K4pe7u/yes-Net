import css from "./Ourself.module.css";
import icons from "./assets/icons.svg";

function Ourself() {
  return (
    <div className={css.container}>
      <h2 className={css.ourselfTitle}>Poznaj nas</h2>
      <div className={css.gridContainer}>
        <section className={css.singleBlock}>
          <div className={css.iconBlock}>
            <svg>
              <use href={`${icons}#Hands`}></use>
            </svg>
          </div>
          <div className={css.infoBlock}>
            <p className={css.info}>
              Jesteśmy zespołem ludzi dla ludzi. Pracujemy nad zapewnieniem
              stałego łącza i pełnego komfortu odbioru, dostarczanych usług
              naszym klientom.
            </p>
          </div>
        </section>
        <section className={css.singleBlock}>
          <div className={css.iconBlock}>
            <svg>
              <use href={`${icons}#Lock`}></use>
            </svg>
          </div>
          <div className={css.infoBlock}>
            <p className={css.info}>
              Zawsze możesz liczyć na naszą pomoc i wsparcie. Nikogo nie
              pozostawimy bez odpowiedzi. Pragniemy, aby nasi klienciu czuli się
              z nami bezpiecznie.
            </p>
          </div>
        </section>
        <section className={css.singleBlock}>
          <div className={css.iconBlock}>
            <svg>
              <use href={`${icons}#Planet`}></use>
            </svg>
          </div>
          <div className={css.infoBlock}>
            <p className={css.info}>
              Łączymy świat za pomocą sieci współpracując z innymi operatorami,
              bowiem jesteśmy cząstką sieciowego ekosystemu i gramy w jednej
              drużynie.
            </p>
          </div>
        </section>
        <section className={css.singleBlock}>
          <div className={css.iconBlock}>
            <svg>
              <use href={`${icons}#People`}></use>
            </svg>
          </div>
          <div className={css.infoBlock}>
            <p className={css.info}>
              Kochamy to co robimy i z pełnym zaangażowaniem brniemy w nowe
              technologie i rozwiązania, aby móc zaserwować klientom internet
              wysokiej jakości.
            </p>
          </div>
        </section>
        <section className={css.singleBlock}>
          <div className={css.iconBlock}>
            <svg>
              <use href={`${icons}#Cloud`}></use>
            </svg>
          </div>
          <div className={css.infoBlock}>
            <p className={css.info}>
              Ciągle rozwijamy nasz wspólny, cyfrowy plac zabaw. Przez słuchanie
              ludzi i doświadczanie sytuacji, budujemy silny fundament
              współpracy z klientami.
            </p>
          </div>
        </section>
        <section className={css.singleBlock}>
          <div className={css.iconBlock}>
            <svg>
              <use href={`${icons}#Eye`}></use>
            </svg>
          </div>
          <div className={css.infoBlock}>
            <p className={css.info}>
              Bacznie obserwujemy każdy aspekt naszej pracy upewniając się, że
              działamy zgodnie z założonymi celami, nie pomiając
              najdrobniejszych elementów.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Ourself;
