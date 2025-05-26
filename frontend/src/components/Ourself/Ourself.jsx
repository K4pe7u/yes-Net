import css from "./Ourself.module.css";
import ai1 from "../../image/ai1.png";
import ai2 from "../../image/ai2.png";
import ai3 from "../../image/ai3.jpg";

function Ourself() {
  return (
    <div className={css.container}>
      <h2 className={css.ourselfTitle}>Poznaj &nbsp;nas</h2>
      <p className={css.lead}>
        Jesteśmy firmą, która łączy ludzi, technologię i świat cyfrowy z pasją i zaangażowaniem.
      </p>
      <div className={css.tilesContainer}>
        <div className={css.tile}>
          <img src={ai2} alt="Zespół z pasją" className={css.tileImage} />
          <h3 className={css.tileTitle}>Zespół z pasją</h3>
          <p className={css.tileDesc}>
            Tworzymy zgrany zespół, który łączy doświadczenie z energią. Każdego dnia wspieramy naszych klientów, bo ich zadowolenie to nasza największa motywacja.
          </p>
        </div>
        <div className={css.tile}>
          <img src={ai3} alt="Łączymy świat" className={css.tileImage} />
          <h3 className={css.tileTitle}>Łączymy świat</h3>
          <p className={css.tileDesc}>
            Budujemy mosty w cyfrowym świecie. Dzięki naszej sieci możesz być bliżej ludzi, miejsc i możliwości w naszym rejonie.
          </p>
        </div>
        <div className={css.tile}>
          <img src={ai1} alt="Nowoczesne rozwiązania" className={css.tileImage} />
          <h3 className={css.tileTitle}>Nowoczesne rozwiązania</h3>
          <p className={css.tileDesc}>
            Nieustannie wdrażamy innowacje, by zapewnić Ci szybki i niezawodny internet. Stawiamy na rozwój, bo przyszłość zaczyna się dziś.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default Ourself;
