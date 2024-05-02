import css from './Statute.module.css'

const Statute = () => {
  return (
    <>
      <section className={css.statute}>
        <div className={css.animatedBorder}>
          <div className={css.container}>
            <h1 className={css.mainTitle}>Regulamin</h1>
            <article className={css.description}>
              Regulamin Świadczenia Usługi yesNET prepaid
            </article>
            <span className={css.breakPoint}></span>
            <ul className={css.listOfParagraphs}>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 1</span>
                  <h3> Postanowienia ogólne</h3>
                  <p>
                    Niniejszy regulamin, zwany dalej „Regulaminem”, określa
                    zasady świadczenia przez Operatora usług multimedialnych
                    (telekomunikacyjnych), w tym dostępu do Internetu.
                  </p>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 2</span>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; Jessa Przedsiębiorstwo z siedzibą we Wronkach
                      (64-510), ul. Towarowa 1, zgodnie z obowiązującymi
                      przepisami prawa, świadczy na terytorium Rzeczypospolitej
                      Polskiej Usługi Telekomunikacyjne, na warunkach i w
                      zakresie określonym w Umowie o świadczenie usług
                      multimedialnych, Regulaminie oraz innych dokumentach
                      będących integralną częścią Umowy.
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Regulamin został wydany na podstawie art. 384 § 1
                      ustawy z dnia 23 kwietnia 1964 r. Kodeks cywilny (Dz.U. Nr
                      16, poz. 93 ze. zm.).
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 3</span>
                  <h3>Definicje</h3>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; Abonent/Klient - osoba fizyczna, prawna lub
                      jednostka organizacyjna nieposiadająca osobowości prawnej,
                      która zawarła z Operatorem Umowę w formie pisemnej o
                      świadczeniu usługi yesNET prepaid,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Operator - Jessa Przedsiębiorstwo z siedzibą we
                      Wronkach, ul. Towarowa 1, zwane dalej Operatorem lub
                      Jessa,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; yesNET prepaid (zwana też Usługą) - usługa
                      telekomunikacyjna umożliwiająca dostęp do internetu od
                      1-go do ostatniego dnia miesiąca pod warunkiem doładowania
                      konta przez Abonenta przed terminem jej rozpoczęcia, w
                      wysokości określonej w umowie,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Okres Rozliczeniowy - okres od 1-go do ostatniego
                      dnia miesiąca,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Doładowanie konta = wniesienie opłaty - czynność
                      Abonenta polegająca na przekazaniu środków pieniężnych w
                      sposób ustalony przez Operatora w celu zasilenia konta,
                      które warunkuje rozpoczęcie świadczenia usługi w każdym
                      kolejnym okresie rozliczeniowym,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Biuro Obsługi Klienta - biuro Operatora, powołane
                      do kontaktów Operatora z Abonentami i Klientami, zwane też
                      Centrum Zarządzania Siecią, znajdujące się w siedzibie
                      firmy we Wronkach, ul. Towarowa 1, czynne od poniedziałku
                      do piątku w godz. od 9 do 17,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Cennik - zestawienie Opłat, wchodzących w skład
                      Oferty Usług Operatora,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Urządzenie / Terminal / Sprzęt Operatora –
                      elektroniczne, aktywne urządzenie telekomunikacyjne,
                      zainstalowane u Abonenta w celu realizacji usługi yesNET
                      prepaid,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Numer Abonenta – nadany Abonentowi przez Operatora
                      numer identyfikacyjny, służący do kontaktów i rozliczeń
                      Operatora z Abonentem,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Opłata – szczegółowo określone w Umowie i Cenniku,
                      należne Operatorowi świadczenie pieniężne, do zapłaty
                      którego Abonent jest zobowiązany na podstawie zawartej
                      Umowy i Regulaminu,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Protokół Zdawczo-Odbiorczy – dokument, w którym
                      Abonent potwierdza przyjęcie do używania Sprzętu
                      Operatora, w celu realizacji zawartej umowy oraz
                      poprawność działania Usługi,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Protokół Zwrotu Sprzętu – dokument, w którym
                      Operator potwierdza dokonanie przez Abonenta zwrotu
                      Sprzętu Operatora,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Regulamin - Regulamin Świadczenia Usług
                      Telekomunikacyjnych, będący integralną częścią Umowy o
                      świadczenie usług multimedialnych,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Sieć – będąca własnością Operatora lub posiadana
                      przez niego na podstawie innego tytułu prawnego sieć
                      telekomunikacyjna w rozumieniu ustawy z dnia 16 lipca 2004
                      r. Prawo telekomunikacyjne (Dz. U. Nr 171, poz. 1800 z
                      pózn. zm.),
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Umowa – zawarta pomiędzy Operatorem a Abonentem
                      Umowa o świadczenie Usług Multimedialnych
                      (telekomunikacyjnych), której integralną część stanowią
                      Regulamin, Cennik i Protokół Zdawczo-Odbiorczy,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Usługa - multimedialne usługi telekomunikacyjne
                      świadczone przez Operatora na rzecz Abonenta, których
                      zakres określa Regulamin,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Cena podstawowa za pakiet – cena usługi yesNET
                      prepaid bez przysługującej ulgi (rabatu), określona w
                      umowie,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Ulga – kwota, na którą składa się suma przyznanych
                      Abonentowi rabatów z tytułu terminowego wniesienia opłaty
                      za usługę yesNET prepaid,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Terminowe wniesienie opłaty – wniesienie opłaty za
                      usługę yesNET prepaid do 10-go dnia miesiąca
                      poprzedzającego miesiąc świadczenia usługi,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Opłata właściwa, po uldze – cena usługi yesNET
                      prepaid uwzględniająca przyznaną Abonentowi ulgę za
                      terminową wpłatę,
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Awaria – przerwa w działaniu usługi z wyłączeniem
                      przerw spowodowanych siłą wyższą, działaniami technicznymi
                      Operatora niezbędnymi dla zapewnienia prawidłowego
                      funkcjonowania Usługi lub przyczynami leżącymi po stronie
                      Abonenta.
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 4</span>
                  <h3>Warunki świadczenia Usługi</h3>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; Operator świadczy Usługi w zakresie i na warunkach
                      określonych w Umowie, Regulaminie i Cenniku. Abonent
                      zobowiązany jest do przestrzegania warunków określonych w
                      tych dokumentach, a w szczególności do terminowego
                      uiszczania opłat określonych w umowie.
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W szczególnej sytuacji, kiedy z Usługi korzysta
                      inny podmiot niż Abonent, Abonent zobowiązany jest do
                      zapoznania użytkownika z treścią Regulaminu. Abonent
                      ponosi wszelką odpowiedzialność za działania bądź
                      zaniechania innego podmiotu jak za działania bądź
                      zaniechania własne.
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Umowa o świadczenie usług multimedialnych zostaje
                      zawarta w formie pisemnej, pod rygorem nieważności.
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Umowa o świadczenie usług multimedialnych
                      zawierana jest na czas nie określony, chyba że co innego
                      wynika z regulaminu promocji organizowanej przez
                      Operatora, z której korzysta Abonent, lub z Umowy
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Abonent będący osobą fizyczną może podpisać Umowę
                      o świadczenie usług multimedialnych osobiście lub przez
                      pełnomocnika. Klient będący osobą prawną może podpisać
                      Umowę o świadczenie usług multimedialnych przez osoby
                      uprawnione do jej reprezentacji lub przez pełnomocnika.
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Na wniosek Abonenta Operator świadczy Usługi
                      dodatkowe wymienione w Cenniku bądź w regulaminach innych
                      Usług
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Abonent zobowiązuje się:
                      <ul className={css.listOfSubData}>
                        <li className={css.listOfSubData_item}>
                          a) korzystać z udostępnionych mu przez Operatora
                          Urządzeń zgodnie z ich przeznaczeniem i wymogami
                          prawidłowej eksploatacji,
                        </li>
                        <li className={css.listOfSubData_item}>
                          b) niezwłocznie udostępnić pracownikom bądź
                          przedstawicielom Operatora lokal, w celu
                          zainstalowania Urządzeń, dokonania naprawy, wymiany
                          bądź demontażu Urządzeń. Czas opóźnienia w
                          udostępnieniu lokalu nie jest wliczany do okresu, za
                          który Abonentowi może przysługiwać obniżenie
                          abonamentu z tytułu niewykonania lub nienależytego
                          wykonania Usługi, jak również za czas naprawy bądź
                          wymiany Urządzeń w związku ze zgłoszoną awarią,
                        </li>
                        <li className={css.listOfSubData_item}>
                          c) niezwłocznie powiadomić Operatora o wszelkich
                          nieprawidłowościach w pracy bądź działaniu Urządzeń
                          udostępnionych przez Operatora w momencie ich
                          stwierdzenia,
                        </li>
                        <li className={css.listOfSubData_item}>
                          d) nie dokonywać samodzielnie napraw lub modernizacji
                          Urządzeń udostępnionych przez Operatora,
                        </li>
                        <li className={css.listOfSubData_item}>
                          e) poinformować Operatora o wymaganiach osób trzecich
                          (właściciel budynku mieszkalnego/administrator sieci
                          wewnętrznej), w związku z realizacją umowy,
                        </li>
                        <li className={css.listOfSubData_item}>
                          f) do przyłączania do Sieci własnych urządzeń zgodnie
                          z wymaganiami Operatora,
                        </li>
                        <li className={css.listOfSubData_item}>
                          g) w momencie instalacji do przedstawienia własnych
                          urządzeń, które Abonent zamierza podłączyć do sieci w
                          celu akceptacji przez Operatora,
                        </li>
                      </ul>
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Operator ma prawo obciążyć Abonenta kosztami
                      naprawy Urządzeń będących własnością Operatora w
                      przypadku:
                      <ul className={css.listOfSubData}>
                        <li className={css.listOfSubData_item}>
                          a) samowolnej naprawy bądź zmian konfiguracyjnych
                          Urządzeń dokonanych przez Abonenta,
                        </li>
                        <li className={css.listOfSubData_item}>
                          b) uszkodzeń mechanicznych, które nie mogły powstać w
                          trakcie użytkowania Urządzeń zgodnie z ich
                          przeznaczeniem,
                        </li>
                        <li className={css.listOfSubData_item}>
                          c) uszkodzeń spowodowanych urządzeniami będącymi
                          własnością Abonenta,
                        </li>
                        <li className={css.listOfSubData_item}>
                          d) uszkodzeń spowodowanych przez burze i przepięcia w
                          sieci,
                        </li>
                      </ul>
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Jeżeli, w momencie montażu w Lokalu Abonenta,
                      parametry Usługi są inne niż określone w umowie
                      (zamówieniu), podpisanie protokołu zdawczoodbiorczego
                      przez Abonenta lub osobę upoważnioną do podpisania
                      protokołu w imieniu Abonenta oznacza wyrażenie zgody na
                      parametry przedstawione w protokole zdawczo-odbiorczym (a
                      nie w zamówieniu). W przypadku nie podpisania protokołu
                      zdawczo-odbiorczego umowa zostaje automatycznie
                      rozwiązana.
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W przypadku, gdy Abonent lub jego przedstawiciel
                      nie wezmą udziału w instalacji łącza, Operator może
                      dokonać instalacji według zapotrzebowania technicznego
                      stwierdzonego przez instalatora Operatora. W takim
                      przypadku Abonent ma obowiązek podpisać przekazany mu
                      Protokół zdawczoodbiorczy
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Za opłatą określoną w Cenniku lub umowie Operator,
                      w celu stworzenia możliwości świadczenia Usługi, dokonuje
                      w Lokalu Abonenta montażu Urządzeń zgodnie z technologią
                      stosowaną przez Operatora. Montaż następuje najpóźniej w
                      terminie 30 dni roboczych od dnia złożenia przez Abonenta
                      zamówienia na świadczenie Usługi, pod warunkiem
                      potwierdzenia przez służby techniczne Operatora możliwości
                      technicznych świadczenia Usługi.
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Na życzenie Abonenta, Operator może dokonać także
                      montażu Dodatkowych Urządzeń Dostępowych za Opłatą
                      określoną w Cenniku. Za korzystanie z Dodatkowego
                      Urządzenia Dostępowego Abonent uiszcza Opłatę dodatkową
                      określoną w Cenniku.
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W celu umożliwienia Operatorowi montażu Urządzeń
                      Abonent, składając zamówienie na świadczenie Usługi,
                      wyraża zgodę na wywiercenie otworów, mocowanie
                      odpowiedniego wyposażenia oraz prowadzenie przewodów w
                      Lokalu Abonenta.
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Przygotowanie Lokalu do montażu Urządzeń w celu do
                      podłączenia do Sieci jest obowiązkiem Abonenta i obejmuje
                      przenoszenie mebli oraz innych przedmiotów w Lokalu
                      Abonenta, w zakresie niezbędnym do montażu lub podłączenia
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Niezwłocznie po montażu Urządzeń, ale nie później
                      niż w ciągu 14 dni roboczych od dnia zawarcia Umowy o
                      świadczenie usług multimedialnych, Operator dokonuje
                      podłączenia do Sieci.
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W celu uruchomienia Usługi Operator dokonuje
                      konfiguracji Urządzeń własnych oraz urządzeń nie będących
                      Sprzętem Operatora, w zakresie niezbędnym do uruchomienia
                      i prawidłowego działania Usługi. Abonent, podpisując Umowę
                      o świadczenie usług multimedialnych, wyraża zgodę na
                      dokonanie przez Operatora konfiguracji tych urządzeń,
                      niezależnie od zabezpieczeń związanych z udzieloną na te
                      urządzenia gwarancją oraz obowiązującą rękojmią
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W przypadku konieczności przystosowania Terminala
                      do urządzeń nie będących własnością Operatora, Abonent
                      ponosi koszty wszelkich niezbędnych przeróbek. Abonent
                      ponosi także koszty konfiguracji Urządzeń Operatora oraz
                      urządzeń nie będących Sprzętem Operatora w zakresie
                      przekraczającym określony w ust. 16. Operator może
                      powyższe koszty określić w Cenniku w postaci odpowiednich
                      Opłat Jednorazowych.
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Wykonanie podłączenia do Sieci oraz stwierdzenie
                      prawidłowego działania Usługi Abonent potwierdza
                      podpisując Protokół Sprawności Działania, stanowiący
                      załącznik nr 3 do Umowy.
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Na wniosek Abonenta Operator, za Opłatą
                      Jednorazową określoną w Cenniku, może odłączyć Abonenta od
                      Sieci w aktualnie używanym Lokalu i podłączyć go w innym
                      Lokalu, jeżeli stwierdzi technicznie możliwości do
                      dokonania takiego przełączenia.
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Zlecenie realizacji usługi dodatkowej może
                      nastąpić telefonicznie lub za pośrednictwem innego,
                      udostępnionego przez Operatora środka porozumiewania się
                      na odległość. Operator w przypadku zlecenia wiążącego się
                      z istotnym obciążeniem finansowym może zażądać
                      potwierdzenia zlecenia na piśmie oraz wpłaty zaliczki na
                      poczet realizacji usługi.
                    </li>
                  </ul>
                </article>
              </li>







{/* zacznij od 5 paragrafu - regulamin.pdf */}







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
                    <a href='mailto:bok@yesnet.pl'>bok@yesnet.pl</a> lub
                    telefonicznie pod numerem&nbsp;
                    <a href='tel:+48690860520'>+48690860520</a>.
                  </p>
                </article>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Statute
