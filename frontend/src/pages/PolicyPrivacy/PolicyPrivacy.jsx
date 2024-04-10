import css from "./PolicyPrivacy.module.css";

const PolicyPrivacy = () => {
  return (
    <>
      <section className={css.policyPrivacy}>
        <div className={css.animatedBorder}>
          <div className={css.container}>
            <h1 className={css.mainTitle}>Polityka Prywatności</h1>
            <article className={css.description}>
              Witamy w Polityce Prywatności Firmy YesNet. Niniejszy dokument
              wyjaśnia, w jaki sposób zbieramy, przechowujemy i wykorzystujemy
              dane osobowe naszych klientów w związku z naszymi usługami
              internetowymi. Prosimy o zapoznanie się z tym dokumentem, aby
              dowiedzieć się więcej o naszych praktykach dotyczących ochrony
              danych osobowych.
            </article>
            <span className={css.breakPoint}></span>
            <ul className={css.listOfParagraphs}>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 1</span>
                  <h3>Zbieranie Danych Osobowych</h3>
                  <p>
                    Podczas procesu wypisywania formularza dla naszych usług
                    internetowych zbieramy następujące dane osobowe od naszych
                    klientów:
                  </p>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; Imię i nazwisko
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Adres e-mail
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Numer telefonu
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Lokalizacja usługi
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Adres korespondencyjny
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Nazwa firmy (jeśli dotyczy)
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Numer Identyfikacji Podatkowej (jeśli dotyczy)
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 2</span>
                  <h3>Cel Zbierania Danych</h3>
                  <p>Zebrane dane osobowe są wykorzystywane w celu:</p>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; Utworzenia i zarządzania kontem klienta
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Fakturowania usług
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Świadczenia usług internetowych
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Komunikacji z klientami w sprawach związanych z
                      naszymi usługami
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 3</span>
                  <h3>Bezpieczeństwo Danych</h3>
                  <p>
                    Zabezpieczamy dane osobowe naszych klientów poprzez
                    stosowanie odpowiednich środków bezpieczeństwa, takich jak
                    szyfrowanie danych, kontrola dostępu oraz regularne audyty
                    bezpieczeństwa.
                  </p>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 4</span>
                  <h3>Przechowywanie Danych</h3>
                  <p>
                    Dane osobowe klientów są przechowywane tylko przez okres
                    niezbędny do realizacji celów opisanych w tej Polityce
                    Prywatności oraz zgodnie z obowiązującymi przepisami prawa.
                  </p>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 5</span>
                  <h3>Udostępnianie Danych i Ochrona Prywatności</h3>
                  <p>
                    Zobowiązujemy się do nieudostępniania danych osobowych
                    naszych klientów osobom trzecim, z wyjątkiem przypadków
                    wymaganych przez prawo lub za zgodą klienta.
                  </p>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 6</span>
                  <h3>Prawa Klientów</h3>
                  <p>
                    Nasi klienci mają prawo dostępu do swoich danych osobowych,
                    ich poprawiania oraz usuwania. W razie pytań lub wątpliwości
                    związanych z naszą Polityką Prywatności, prosimy o kontakt z
                    naszym działem obsługi klienta.
                  </p>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 7</span>
                  <h3>Aktualizacje Polityki Prywatności</h3>
                  <p>
                    Niniejsza Polityka Prywatności może być okresowo
                    aktualizowana. Wszelkie zmiany będą publikowane na naszej
                    stronie internetowej, a klienci zostaną poinformowani o
                    istotnych zmianach.
                  </p>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 8</span>
                  <h3>Kontakt</h3>
                  <p>
                    W razie pytań lub wątpliwości dotyczących naszej Polityki
                    Prywatności, prosimy o kontakt z nami pod adresem&nbsp;
                    <a href="mailto:bok@yesnet.pl">bok@yesnet.pl</a> lub
                    telefonicznie pod numerem&nbsp;
                    <a href="tel:+48690860520">+48690860520</a>.
                  </p>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default PolicyPrivacy;
