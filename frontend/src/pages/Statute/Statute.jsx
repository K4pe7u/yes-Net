import { useEffect } from 'react'
import css from './Statute.module.css'

const Statute = () => {
  const init = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <div className={css.wrapper}></div>
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
                    (telekomunikacyjnych), w tym dostępu do Internetu
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
                      będących integralną częścią Umowy
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Regulamin został wydany na podstawie art. 384 § 1
                      ustawy z dnia 23 kwietnia 1964 r. Kodeks cywilny (Dz.U. Nr
                      16, poz. 93 ze. zm.)
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
                      świadczeniu usługi yesNET prepaid
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Operator - Jessa Przedsiębiorstwo z siedzibą we
                      Wronkach, ul. Towarowa 1, zwane dalej Operatorem lub Jessa
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; yesNET prepaid (zwana też Usługą) - usługa
                      telekomunikacyjna umożliwiająca dostęp do internetu od
                      1-go do ostatniego dnia miesiąca pod warunkiem doładowania
                      konta przez Abonenta przed terminem jej rozpoczęcia, w
                      wysokości określonej w umowie
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Okres Rozliczeniowy - okres od 1-go do ostatniego
                      dnia miesiąca
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Doładowanie konta = wniesienie opłaty - czynność
                      Abonenta polegająca na przekazaniu środków pieniężnych w
                      sposób ustalony przez Operatora w celu zasilenia konta,
                      które warunkuje rozpoczęcie świadczenia usługi w każdym
                      kolejnym okresie rozliczeniowym
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Biuro Obsługi Klienta - biuro Operatora, powołane
                      do kontaktów Operatora z Abonentami i Klientami, zwane też
                      Centrum Zarządzania Siecią, znajdujące się w siedzibie
                      firmy we Wronkach, ul. Towarowa 1, czynne od poniedziałku
                      do piątku w godz. od 9 do 17
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Cennik - zestawienie Opłat, wchodzących w skład
                      Oferty Usług Operatora
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Urządzenie / Terminal / Sprzęt Operatora –
                      elektroniczne, aktywne urządzenie telekomunikacyjne,
                      zainstalowane u Abonenta w celu realizacji usługi yesNET
                      prepaid
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Numer Abonenta – nadany Abonentowi przez Operatora
                      numer identyfikacyjny, służący do kontaktów i rozliczeń
                      Operatora z Abonentem
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Opłata – szczegółowo określone w Umowie i Cenniku,
                      należne Operatorowi świadczenie pieniężne, do zapłaty
                      którego Abonent jest zobowiązany na podstawie zawartej
                      Umowy i Regulaminu
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Protokół Zdawczo-Odbiorczy – dokument, w którym
                      Abonent potwierdza przyjęcie do używania Sprzętu
                      Operatora, w celu realizacji zawartej umowy oraz
                      poprawność działania Usługi
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Protokół Zwrotu Sprzętu – dokument, w którym
                      Operator potwierdza dokonanie przez Abonenta zwrotu
                      Sprzętu Operatora
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Regulamin - Regulamin Świadczenia Usług
                      Telekomunikacyjnych, będący integralną częścią Umowy o
                      świadczenie usług multimedialnych
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Sieć – będąca własnością Operatora lub posiadana
                      przez niego na podstawie innego tytułu prawnego sieć
                      telekomunikacyjna w rozumieniu ustawy z dnia 16 lipca 2004
                      r. Prawo telekomunikacyjne (Dz. U. Nr 171, poz. 1800 z
                      pózn. zm.)
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Umowa – zawarta pomiędzy Operatorem a Abonentem
                      Umowa o świadczenie Usług Multimedialnych
                      (telekomunikacyjnych), której integralną część stanowią
                      Regulamin, Cennik i Protokół Zdawczo-Odbiorczy
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Usługa - multimedialne usługi telekomunikacyjne
                      świadczone przez Operatora na rzecz Abonenta, których
                      zakres określa Regulamin
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Cena podstawowa za pakiet – cena usługi yesNET
                      prepaid bez przysługującej ulgi (rabatu), określona w
                      umowie
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Ulga – kwota, na którą składa się suma przyznanych
                      Abonentowi rabatów z tytułu terminowego wniesienia opłaty
                      za usługę yesNET prepaid
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Terminowe wniesienie opłaty – wniesienie opłaty za
                      usługę yesNET prepaid do 10-go dnia miesiąca
                      poprzedzającego miesiąc świadczenia usługi
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Opłata właściwa, po uldze – cena usługi yesNET
                      prepaid uwzględniająca przyznaną Abonentowi ulgę za
                      terminową wpłatę
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Awaria – przerwa w działaniu usługi z wyłączeniem
                      przerw spowodowanych siłą wyższą, działaniami technicznymi
                      Operatora niezbędnymi dla zapewnienia prawidłowego
                      funkcjonowania Usługi lub przyczynami leżącymi po stronie
                      Abonenta
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
                      uiszczania opłat określonych w umowie
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W szczególnej sytuacji, kiedy z Usługi korzysta
                      inny podmiot niż Abonent, Abonent zobowiązany jest do
                      zapoznania użytkownika z treścią Regulaminu. Abonent
                      ponosi wszelką odpowiedzialność za działania bądź
                      zaniechania innego podmiotu jak za działania bądź
                      zaniechania własne
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Umowa o świadczenie usług multimedialnych zostaje
                      zawarta w formie pisemnej, pod rygorem nieważności
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
                      uprawnione do jej reprezentacji lub przez pełnomocnika
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
                      zdawczo-odbiorczego umowa zostaje automatycznie rozwiązana
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
                      technicznych świadczenia Usługi
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Na życzenie Abonenta, Operator może dokonać także
                      montażu Dodatkowych Urządzeń Dostępowych za Opłatą
                      określoną w Cenniku. Za korzystanie z Dodatkowego
                      Urządzenia Dostępowego Abonent uiszcza Opłatę dodatkową
                      określoną w Cenniku
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W celu umożliwienia Operatorowi montażu Urządzeń
                      Abonent, składając zamówienie na świadczenie Usługi,
                      wyraża zgodę na wywiercenie otworów, mocowanie
                      odpowiedniego wyposażenia oraz prowadzenie przewodów w
                      Lokalu Abonenta
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
                      podłączenia do Sieci
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
                      Opłat Jednorazowych
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Wykonanie podłączenia do Sieci oraz stwierdzenie
                      prawidłowego działania Usługi Abonent potwierdza
                      podpisując Protokół Sprawności Działania, stanowiący
                      załącznik nr 3 do Umowy
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Na wniosek Abonenta Operator, za Opłatą
                      Jednorazową określoną w Cenniku, może odłączyć Abonenta od
                      Sieci w aktualnie używanym Lokalu i podłączyć go w innym
                      Lokalu, jeżeli stwierdzi technicznie możliwości do
                      dokonania takiego przełączenia
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Zlecenie realizacji usługi dodatkowej może
                      nastąpić telefonicznie lub za pośrednictwem innego,
                      udostępnionego przez Operatora środka porozumiewania się
                      na odległość. Operator w przypadku zlecenia wiążącego się
                      z istotnym obciążeniem finansowym może zażądać
                      potwierdzenia zlecenia na piśmie oraz wpłaty zaliczki na
                      poczet realizacji usługi
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 5</span>
                  <h3>Sprzęt Operatora</h3>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; Operator oddaje Abonentowi w posiadanie Sprzęt
                      Operatora z chwilą podpisania Protokołu
                      zdawczo-odbiorczego. Abonent ma prawo używania Sprzętu
                      Operatora w okresie obowiązywania Umowy o świadczenie
                      usług multimedialnych, w celu realizacji umowy
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Abonent nie może udostępniać Sprzętu Operatora
                      osobom trzecim (za wyjątkiem osób mieszkających wspólnie z
                      Abonentem) bez zgody Operatora
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Abonent ponosi odpowiedzialność za utratę,
                      zniszczenie lub uszkodzenie Sprzętu Operatora, wynikające
                      z jego nieprawidłowego używania, w szczególności ponosi
                      koszty naprawy lub wymiany Sprzętu Operatora. Za
                      nieprawidłowe używanie Sprzętu Operatora uważa się również
                      naruszenie lub zniszczenie plomby, jeżeli Sprzęt Operatora
                      był nią zabezpieczony przed otwarciem. Operator może
                      powyższe koszty określić w Cenniku w postaci odpowiednich
                      Opłat Jednorazowych
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Abonent zobowiązany jest niezwłocznie zgłosić
                      każde uszkodzenie Sprzętu Operatora w Biurze Obsługi
                      Klienta
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Operator zobowiązuje się usunąć uszkodzenie w
                      możliwie najkrótszym czasie, nie później niż w terminie 14
                      dni od dnia doręczenia/odebrania zawiadomienia
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Kwalifikacji uszkodzenia Sprzętu Operatora, pod
                      kątem odpowiedzialności określonej w ust. 3, dokonuje
                      Operator. Operator, w uzasadnionych wypadkach, może
                      odstąpić od obciążenia Abonenta kosztami naprawy lub
                      wymiany. Abonentowi, który nie zgadza się z dokonaną przez
                      Operatora kwalifikacją uszkodzenia Sprzętu Operatora,
                      przysługuje prawo dochodzenia roszczeń w postępowaniu
                      sądowym
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Niezwłocznie po rozwiązaniu Umowy o świadczenie
                      usług multimedialnych, ale nie później niż w siódmym dniu
                      od jej rozwiązania, Abonent jest zobowiązany, na swój
                      koszt i ryzyko, zwrócić Sprzęt Operatora wymieniony w
                      protokole zdawczo-odbiorczym w stanie nie gorszym niż
                      wynika to z normalnej eksploatacji
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Operator może określić w Cenniku odpowiednią
                      Opłatę Jednorazową za każdy dzień opóźnienia w zwrocie
                      Sprzętu Operatora
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W razie nie zwrócenia Sprzętu Operatora w terminie
                      określonym w ust. 7, Operator pisemnie lub telefonicznie
                      wezwie dotychczasowego Abonenta do zwrotu, wyznaczając
                      termin nie krótszy niż 7 dni od daty doręczenia wezwania
                      (powiadomienia), pod rygorem podjęcia przewidzianych
                      prawem czynności, zmierzających w szczególności do
                      odzyskania Sprzętu Operatora bądź jego równowartości.
                      Koszty wezwania, o którym mowa ponosi Abonent
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W przypadku utraty, zniszczenia, uszkodzenia lub
                      zużycia ponad normalną eksploatację Sprzętu Operatora,
                      Operator ma prawo do żądania odszkodowania w wysokości
                      poniesionej straty. Wartość urządzeń jest określona w
                      protokole zdawczo-odbiorczym
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Załącznik nr 3 "Protokół przekazania sprzętu" do
                      umowy o świadczenie Usług Multimedialnych, może ulec
                      zmianie w przypadku wymiany lub demontażu urządzeń
                      zawartych w "Protokole przekazania sprzętu", związanych z
                      czynnościami serwisowymi przeprowadzanymi u Abonenta. W
                      takim przypadku "Protokół wykonania serwisu" zawierać
                      będzie urządzenia wymienione lub zdemontowane oraz nowe
                      urządzenia zamontowane u Abonenta. "Protokół wykonania
                      serwisu" będzie świadczył o zwrocie urządzeń klienckich
                      będących własnością Operatora oraz wydaniu nowych urządzeń
                      Abonentowi na czas trwania umowy. W przypadku wykonania
                      serwisu, "Protokół wykonania serwisu" staje się integralną
                      częścią umowy o świadczenie Usług Multimedialnych.
                      "Protokół wykonania serwisu" może być powielany ze względu
                      na kolejne czynności serwisowe. Jako pkt.1 załącznika nr 3
                      do Umowy (protokół przekazania sprzętu) obowiązuje stan
                      urządzeń po podliczeniu wszystkich "protokołów wykonania
                      serwisów" łącznie z początkowym "protokołem przekazania
                      sprzętu"
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 6</span>
                  <h3>Nadzór i serwis Sieci</h3>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; W celu prawidłowego wykonania Usługi Operator ma
                      prawo do okresowej konserwacji i kontroli Sieci oraz, w
                      tym celu, do przerw w dostępie do Internetu
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Abonent zobowiązany jest umożliwić Operatorowi
                      dostęp do Urządzeń przekazanych Abonentowi dla celów
                      realizacji umowy, o ile zachodzi podejrzenie zaburzenia
                      pracy Sieci w związku z niepoprawną pracą tychże Urządzeń,
                      pod rygorem natychmiastowego rozwiązania Umowy oraz w celu
                      ich demontażu
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Abonent zobowiązany jest do udostępnienia
                      Operatorowi dostępu do miejsca awarii. Abonent zobowiązany
                      jest nadto do udostępnienia Operatorowi dostępu do Sieci,
                      w przypadku zgłoszenia takiego żądania przez Operatora
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Wszelkich zmian, przeróbek lub ingerencji w Sieć
                      może dokonywać jedynie Operator
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Abonent nie ma prawa naruszania ani podejmowania
                      prób zachwiania sieci Internet, w szczególności:
                      blokowania działania, prób włamań do systemów oraz
                      wszelkich innych działań powodujących zakłócenia w pracy
                      Sieci. W razie ujawnienia takiego zachowania Abonenta,
                      Operator ma prawo rozwiązać Umowę w trybie natychmiastowym
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Jeżeli, z przyczyn leżących po stronie Abonenta,
                      Operator w celu dalszego świadczenia Usługi dokonuje
                      ponownej konfiguracji Urządzeń Operatora, a także innych
                      urządzeń nie będących Sprzętem Operatora, Abonent
                      zobowiązany jest do uiszczenia Opłaty Jednorazowej,
                      zgodnie z obowiązującym Cennikiem
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Za bezpodstawne wezwanie Operatora Abonent
                      zobowiązany jest do zapłaty Opłaty Jednorazowej zgodnie z
                      obowiązującym Cennikiem
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Abonent nie ma prawa do przesyłania jakichkolwiek
                      treści o charakterze sprzecznym z prawem, w tym w
                      szczególności do przesyłania niezamówionej informacji
                      handlowej w rozumieniu ustawy z dnia 18 lipca 2002 r. o
                      świadczeniu usług drogą elektroniczną (Dz. U. Nr 144, poz.
                      1204 ze zm.).
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 7</span>
                  <h3>Opłaty</h3>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; Wszelkie opłaty za korzystanie z usług
                      telekomunikacyjnych należne Operatorowi, w szczególności
                      opłaty za doładowanie usługi yesNET prepaid, Abonent
                      dokonuje przelewem na rachunek bankowy Operatora nr:
                      <b>21 1050 1520 1000 0022 7161 0178</b> w ING Banku
                      Śląskim
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Brak faktury nie zwalnia z obowiązku uiszczania
                      opłat wynikających z Umowy i Regulaminu
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Wszelkie wpłaty dokonywane przez Abonenta będą w
                      pierwszej kolejności zaliczane na poczet zaległych
                      należności Operatora, poczynając od najdawniej wymagalnych
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Wniesienie przez Abonenta Opłaty za okres dłuższy
                      niż Okres Rozliczeniowy określony w Umowie, nie zwalnia go
                      od obowiązku dopłaty z tytułu ewentualnego wzrostu Opłaty,
                      który nastąpił po jej wniesieniu
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Opłaty Jednorazowe Abonent uiszcza bezpośrednio
                      pracownikowi Operatora w momencie wykonania usługi
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W przypadku opóźnienia w uiszczeniu Opłat Abonent
                      zobowiązany jest do zapłaty odsetek ustawowych za każdy
                      dzień opóźnienia
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W odniesieniu do usługi yesNET prepaid brak wpłaty
                      w terminie do 10-do dnia miesiąca poprzedzającego miesiąc
                      świadczenia usługi wiąże się z cofnięciem przyznanej
                      Abonentowi Ulgi, czyli rabatu za terminowe wniesienie
                      opłaty. Kwota cofniętej ulgi podlega obligatoryjnej
                      zapłacie w terminie następnej płatności
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Rozwiązanie Umowy o świadczenie usług
                      multimedialnych nie zwalnia Abonenta z obowiązku
                      uregulowania Opłat należnych do dnia jej rozwiązania
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226;
                      <b>
                        Strony uzgadniają, że Operator będzie stale
                        wykorzystywał środki porozumiewania się na odległość, w
                        szczególności wysyłanie wiadomości sms na podany przez
                        Abonenta numer kontaktowy, do powiadamiania go o
                        powstałych zaległościach w płatnościach
                      </b>
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Operator nie odpowiada za następstwa wysłania
                      wiadomości sms na nieaktualny lub nieprawidłowy numer
                      telefonu Abonenta
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W przypadku niewywiązania się Abonenta z
                      postanowień Umowy i Regulaminu Operator obciąży Abonenta
                      kosztami sądowymi, kosztami zastępstwa procesowego i
                      innymi, które poniósł w związku z dochodzeniem swoich
                      roszczeń
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Operator zaleca Abonentowi ubezpieczenie od ognia
                      i innych zdarzeń losowych (w szczególności przepięć)
                      powierzonych mu Urządzeń/Terminali
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 8</span>
                  <h3>Promocje</h3>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; Operator ma prawo do organizowania, w ustalonych
                      przez siebie terminach, promocji. Szczegółowe warunki
                      promocji Operator określa w odrębnym regulaminie promocji,
                      zamieszczonym na stronie internetowej{' '}
                      <a href='../'>www.yesnet.pl</a> lub w Biurze Obsługi
                      Abonenta
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Operator zastrzega sobie prawo do wysyłania
                      wiadomości sms na podany przez Abonenta numer kontaktowy
                      lub adres poczty elektronicznej informacji o nowych
                      ofertach i promocjach (maksymalnie 5 wiadomości sms w
                      ciągu miesiąca)
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 9</span>
                  <h3>Zmiana Pakietu przez Abonenta</h3>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; W okresie trwania umowy Abonent ma prawo do zmiany
                      parametrów Usługi, która realizowana jest na podstawie
                      sporządzonego aneksu do umowy, o ile istnieją możliwości
                      techniczne realizacji takiej zmiany
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Zmiana parametrów usługi może być dokonana w
                      przypadku, gdy Abonent nie zalega z żadnymi opłatami na
                      rzecz Operatora
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 10</span>
                  <h3>Zawieszenie i wstrzymanie świadczenia Usługi</h3>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; Na pisemny wniosek Abonenta, który nie zalega z
                      żadnymi Opłatami na rzecz Operatora, Operator może
                      zawiesić świadczenie Usługi. Wniosek, zawierający
                      przewidywany okres zawieszenia musi zostać doręczony
                      Operatorowi najpóźniej w 14-tym dniu przed końcem Okresu
                      Rozliczeniowego poprzedzającego okres, w którym ma
                      nastąpić zawieszenie
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Zawieszenie świadczenia Usługi liczone jest w
                      pełnych miesiącach kalendarzowych i nie może trwać dłużej
                      niż 3 miesiące (chyba że co innego wynika z umowy). Za
                      okres zawieszenia Usługi Operator pobiera Opłatę
                      Jednorazową za każdy okres rozliczeniowy, zgodnie z
                      obowiązującym Cennikiem
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Po upływie wnioskowanego przez Abonenta okresu
                      zawieszenia, Operator wznawia świadczenie Usługi na
                      dotychczasowych warunkach
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Brak wpłaty za usługę yesNET prepaid w terminie do
                      ostatniego dnia miesiąca poprzedzającego miesiąc
                      świadczenia usługi powoduje brak aktywacji usługi i jej
                      zawieszenie do czasu doładowania konta przez Abonenta
                      kwotą abonamentu bez przyznanego rabatu (cena podstawowa
                      na umowie)
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W przypadku doładowanie Usługi w trakcie trwania
                      okresu rozliczeniowego (w trakcie miesiąca), zakończenie
                      świadczenia usługi następuje każdorazowo z ostatnim dniem
                      miesiąca, którego opłata dotyczy
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W przypadku braku zasilenia konta ze strony
                      Abonenta przez dwa kolejne okresy rozliczeniowe umowa
                      ulega rozwiązaniu, a Abonent jest zobowiązany do zdania
                      urządzeń, o których mowa w Protokole przekazania sprzętu,
                      na warunkach określonych w § 5
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 11</span>
                  <h3>Zmiana Oferty / Usług Operatora</h3>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; W trakcie obowiązywania Umowy o świadczenie usług
                      multimedialnych Operator, z ważnych przyczyn, może
                      dokonywać zmian Oferty Usług Operatora, polegających w
                      szczególności na zmianie wysokości Opłat
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; O zmianie Oferty Usług Operatora Operator
                      poinformuje Abonenta na piśmie bądź za pomocą poczty
                      elektronicznej (e-mail) z wyprzedzeniem jednego pełnego
                      Okresu Rozliczeniowego wynikającego z Umowy o świadczenie
                      usług multimedialnych
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W przypadku nie wyrażenia przez Abonenta zgody na
                      dokonane zmiany Oferty Usług Operatora, może on w terminie
                      30 dni od otrzymania informacji, o której mowa w ust. 2,
                      złożyć Operatorowi pisemne oświadczenie o odstąpieniu od
                      Umowy o świadczenie usług multimedialnych
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 12</span>
                  <h3>Odpowiedzialność Operatora</h3>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; Operator ponosi odpowiedzialność za niewykonanie
                      lub nienależyte wykonanie Usługi, chyba że niewykonanie
                      lub nienależyte wykonanie nastąpiło wskutek siły wyższej,
                      okien serwisowych, z winy Abonenta lub nieprzestrzegania
                      przez Abonenta postanowień niniejszego Regulaminu, w tym
                      niezapewnienia przez niego warunków, o których mowa w § 6
                      ust. 3, a także wskutek działań bądź zaniechań osób
                      trzecich
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W przypadku wystąpienia przerw lub zakłóceń w
                      jakości świadczonej usługi, powstałych z winy Operatora i
                      trwających przez okres dłuższy niż gwarantowany czas
                      usunięcia awarii, tzn. dłuższy niż 48 godzin w przypadku
                      Gwarancji SLA/Standard dla Usługobiorców indywidualnych/
                      lub dłuższy niż 24 godzin w przypadku Gwarancji SLA Gold
                      skierowanej dla Usługobiorców instytucjonalnych,
                      Usługobiorcy przysługuje obniżenie opłaty abonamentowej o
                      kwotę równą 1/30 wysokości opłaty abonamentowej za każdy
                      dzień wystąpienia ww. przerw lub zakłóceń
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Operator nie gwarantuje przepustowości transmisji
                      poza własną Siecią
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Operator nie ponosi odpowiedzialności:
                      <ul className={css.listOfSubData}>
                        <li className={css.listOfSubData_item}>
                          - z tytułu niemożności korzystania z Usługi przez
                          Abonenta w przypadku uszkodzenia lub zniszczenia
                          Sprzętu Operatora, wynikającego z jego nieprawidłowego
                          używania, burz i przepięć lub w skutek ingerencji osób
                          trzecich, wirusów, jak również w skutek
                          nieprawidłowego działania Sprzętu nie będącego
                          Sprzętem operatora, np.: karty sieciowej Abonenta
                        </li>
                        <li className={css.listOfSubData_item}>
                          - za treść i formę rozpowszechnianych przez Abonenta
                          materiałów niezgodnych z obowiązującym prawem i
                          dobrymi obyczajami. W razie ujawnienia takiego
                          zachowania Abonenta, Operator ma prawo rozwiązać Umowę
                          z Abonentem w trybie natychmiastowym
                        </li>
                        <li className={css.listOfSubData_item}>
                          - za stan techniczny urządzeń Abonenta, w
                          szczególności jednostki PC, za pośrednictwem których
                          Abonent korzysta z Usługi
                        </li>
                        <li className={css.listOfSubData_item}>
                          - za zabezpieczenia urządzeń Abonenta, w szczególności
                          za zabezpieczenie danych i oprogramowania
                          komputerowego przed ingerencją osób trzecich, oraz za
                          blokadę Usługi lub utratę informacji spowodowaną
                          rozprzestrzenieniem się wirusa poprzez podłączenie
                          urządzeń Abonenta do sieci Internet
                        </li>
                      </ul>
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Operator nie odpowiada za następstwa i szkody
                      pośrednie i bezpośrednie, oraz za jakiekolwiek utracone
                      korzyści powstałe na skutek nie działania, ograniczenia
                      lub zawieszenia Usługi, w tym bez ograniczeń za szkody
                      wtórne, specjalne lub przypadkowe, w szczególności za
                      utratę zysków lub dochodów, przerwy w prowadzonej
                      działalności lub utratę informacji, powstałe w związku z
                      jakąkolwiek umową, produktem lub usługą , nawet w
                      przypadku powiadomienia Operatora o możliwości wystąpienia
                      takich szkód lub jeśli wystąpienie takich szkód można było
                      w sposób uzasadniony przewidzieć
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Operator nie odpowiada za zakłócenia pracy łączy
                      internetowych nie będących własnością Operatora
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 13</span>
                  <h3>Reklamacyjne</h3>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; W przypadku wystąpienia przerw lub zakłóceń w
                      jakości świadczonej Usługi, Abonent dokonuje zgłoszenia
                      telefonicznie, pocztą e-mail lub osobiście w Biurze
                      Obsługi Klienta od poniedziałku do piątku w godzinach od 9
                      do 17, tel. stacjonarny (67) 25 42 689 lub (61) 62 22 372,
                      a po godz. 17-tej sms: 660 480 036 czynny całą dobę we
                      wszystkie dni tygodnia, adres e-mail: pomoc@jessa.pl
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Abonent może złożyć reklamację dotyczącą
                      niewykonania lub nienależytego wykonania Umowy o
                      świadczenie usług multimedialnych
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Jeżeli reklamacja dotyczy przerw w świadczeniu
                      Usługi powinna być wniesiona niezwłocznie
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Zgłoszenie reklamacyjne musi być sporządzone na
                      piśmie i zawierać co najmniej: imię, nazwisko, adres,
                      numer telefonu Abonenta wraz z jego czytelnym podpisem,
                      dokładnie wskazywać zaistniałe zdarzenie, będące
                      przedmiotem reklamacji oraz czas jego wystąpienia
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Za datę złożenia reklamacji uznaje się datę wpływu
                      pisma do Operatora, albo dzień zgłoszenia reklamacji w
                      Biurze Obsługi Klienta
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Odpowiedź Operatora na reklamację wymaga formy
                      pisemnej
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Wszelkie reklamacje rozpatrywane będą w terminie
                      30 dni od ich złożenia
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W przypadku nieuwzględnienia reklamacji, Operator
                      zobowiązany jest do podania uzasadnienia
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Złożenie przez Abonenta reklamacji nie zwalnia go
                      od obowiązku uiszczania Opłaty Abonamentowej za okres
                      rozliczeniowy, w którym nastąpiło zdarzenie uzasadniające,
                      według Abonenta, złożenie reklamacji
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W przypadku uwzględnienia reklamacji Operator
                      zobowiązany jest do zwrotu Abonentowi części uiszczonej
                      przez niego Opłaty Abonamentowej, w kwocie odpowiadającej
                      iloczynowi: liczby dni przerwy w świadczeniu Usługi i 1/30
                      uiszczonej przez Abonenta Opłaty Abonamentowej, albo do
                      pomniejszenia w tych samych granicach Opłaty Abonamentowej
                      należnej za następny Okres Rozliczeniowy
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Abonentowi nie przysługuje roszczenie w wysokości
                      przekraczającej kwotę Opłaty Abonamentowej za jeden Okres
                      Rozliczeniowy
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Jeżeli przerwy w świadczeniu Usługi wystąpiły z
                      ważnych przyczyn, a przerwa nie trwała dłużej niż przez 48
                      kolejnych godzin albo ich łączny czas w Okresie
                      Rozliczeniowym był krótszy od 96 godzin, Abonentowi nie
                      przysługuje rekompensata
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W przypadku przerwy w świadczeniu Usług
                      Internetowych wynikającej z przyczyn niezależnych od
                      Operatora (np. siła wyższa) oraz z przyczyn leżących po
                      stronie Abonenta, Abonentowi nie przysługuje prawo do
                      rekompensaty
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Jeden dzień przerwy w świadczeniu Usług
                      Internetowych nastąpił, jeżeli dostęp do Internetu nie był
                      możliwy przez pełną dobę. Jedna godzina przerwy w
                      świadczeniu Usług Internetowych nastąpiła, jeżeli dostęp
                      do Internetu nie był możliwy przez pełną godzinę zegarową
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Abonentowi przysługuje, po wyczerpaniu drogi
                      postępowania reklamacyjnego, prawo dochodzenia roszczeń
                      wobec Operatora w postępowaniu sądowym
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 14</span>
                  <h3>Rozwiązanie Umowy</h3>
                  <ul className={css.listOfData}>
                    <li className={css.listOfData_item}>
                      &#8226; Każdej ze Stron przysługuje prawo do rozwiązania
                      Umowy o świadczenie usług multimedialnych z zachowaniem
                      jednomiesięcznego okresu wypowiedzenia, ze skutkiem na
                      koniec przyjętego w Umowie Okresu Rozliczeniowego, o ile
                      Abonent nie korzysta z oferty promocyjnej, wówczas warunki
                      wypowiedzenia określa Umowa lub Regulamin Promocji
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226;Umowa o świadczenie usług multimedialnych ulega
                      rozwiązaniu bez zachowania okresu wypowiedzenia:
                      <ul className={css.listOfSubData}>
                        <li className={css.listOfSubData_item}>
                          a) gdy Abonent będący osobą prawną lub jednostką
                          organizacyjną nie posiadającą osobowości prawnej
                          zostanie postawiony w stan likwidacji lub upadłości
                          albo zostanie rozwiązany
                        </li>
                        <li className={css.listOfSubData_item}>
                          b) w przypadku śmierci Abonenta będącego osobą
                          fizyczną
                        </li>
                        <li className={css.listOfSubData_item}>
                          c) gdy Operator zaprzestanie działalności gospodarczej
                        </li>
                        <li className={css.listOfSubData_item}>
                          d) gdy Operator utraci możliwości techniczne
                          świadczenia Usługi
                        </li>
                        <li className={css.listOfSubData_item}>
                          e) gdy zaistnieją okoliczności powodujące, że dalsze
                          trwanie umowy narażałoby Operatora na szkody
                        </li>
                      </ul>
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Operator ma prawo w każdym czasie zawiesić
                      świadczenie usługi lub wypowiedzieć umowę bez zachowania
                      okresu wypowiedzenia w przypadku stwierdzenia
                      nieprawidłowego wykonywania umowy przez Abonenta,
                      naruszenia postanowień regulaminu lub przepisów prawa w
                      zakresie związanym z umową lub Usługą, a w szczególności:
                      <ul className={css.listOfSubData}>
                        <li className={css.listOfSubData_item}>
                          a) nieuregulowania opłat za Usługę za jeden okres
                          rozliczeniowy, jeżeli Abonent pozostaje w opóźnieniu
                          dłużej niż 14 dni
                        </li>
                        <li className={css.listOfSubData_item}>
                          b) zniszczenia lub uszkodzenia urządzeń, których
                          właścicielem jest Operator, a których uszkodzenie
                          powoduje brak możliwości świadczenia Usługi.
                        </li>
                      </ul>
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Umowa o świadczenie usług multimedialnych może
                      zostać rozwiązana przez Abonenta bez zachowania okresu
                      wypowiedzenia w przypadku, gdy przerwa w świadczeniu
                      Usługi z winy Operatora trwała dłużej niż jeden miesiąc
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; Ponowne zawarcie Umowy o świadczenie usług
                      multimedialnych może nastąpić pod warunkiem uregulowania
                      przez Abonenta zaległych należności oraz uiszczenia Opłaty
                      Jednorazowej, zgodnie z obowiązującym Cennikiem
                    </li>
                    <li className={css.listOfData_item}>
                      &#8226; W przypadku rozwiązania umowy zawartej na czas
                      określony przed upływem okresu wskazanego w umowie lub
                      regulaminie promocji, Abonent zobowiązany jest do zapłaty
                      kary umownej z tytułu jednostronnego rozwiązania Umowy w
                      wysokości Ulgi przyznanej Abonentowi w związku z zawarciem
                      tejże Umowy, w wysokości określonej w umowie
                    </li>
                  </ul>
                </article>
              </li>
              <li className={css.listOfParagraphs_item}>
                <article className={css.segment}>
                  <span>&#167;&#160; 8</span>
                  <h3>Promocje</h3>
                  <li className={css.listOfData_item}>
                    &#8226; W przypadku zmiany danych Abonenta, szczególnie
                    adresu miejsca zamieszkania, adresu siedziby firmy oraz
                    numeru telefonu, Abonent ma obowiązek niezwłocznie
                    poinformować Operatora o zaistniałych zmianach, nie później
                    jednak niż w terminie 7 dni od dokonania zmiany. W przypadku
                    niedotrzymania tego obowiązku wszelką korespondencję wysłaną
                    pod wskazany w umowie adres uważa się za doręczoną a
                    informację sms, na wskazany przez Abonenta numer telefonu,
                    dostarczoną
                  </li>
                  <li className={css.listOfData_item}>
                    &#8226; Operator nie ponosi odpowiedzialności za negatywne
                    dla Abonenta skutki spowodowane brakiem poinformowania o
                    zmianie danych Abonenta
                  </li>
                  <li className={css.listOfData_item}>
                    &#8226; Zmiana Regulaminu i cennika nie stanowi zmiany
                    umowy. O każdej proponowanej zmianie treści warunków
                    określonych w Regulaminie, Operator poinformuje Abonenta za
                    pomocą poczty elektronicznej (email) w panelu użytkownika
                    dostępnym na stronie www.yesnet.pl z wyprzedzeniem co
                    najmniej jednego okresu rozliczeniowego przed wprowadzeniem
                    tych zmian w życie. Abonent ma prawo do wypowiedzenia umowy
                    o świadczenie usług multimedialnych (internetowych), z
                    zachowaniem jednomiesięcznego okresu wypowiedzenia, ze
                    skutkiem na koniec przyjętego w umowie okresu
                    rozliczeniowego, w przypadku braku akceptacji tych zmian
                  </li>
                  <li className={css.listOfData_item}>
                    &#8226; W sprawach nie uregulowanych niniejszym Regulaminem
                    znajdują zastosowanie przepisy Kodeksu cywilnego oraz Prawa
                    telekomunikacyjnego
                  </li>
                  <li className={css.listOfData_item}>
                    Regulamin wchodzi w życie z dniem 17 listopada 2014 r.
                  </li>
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
