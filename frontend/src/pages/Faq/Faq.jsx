import React, { useState } from "react";
import css from "./Faq.module.css";

import aiDarkDesktop from "../../image/aiDarkDesktop.png";
import aiDarkTablet from "../../image/aiDarkTablet.png";
import aiDarkMobile from "../../image/aiDarkMobile.png";

import colorfulNetworkDesktop from "../../image/colorfulNetworkDesktop.jpg";
import colorfulNetworkTablet from "../../image/colorfulNetworkTablet.jpg";
import colorfulNetworkMobile from "../../image/colorfulNetworkMobile.jpg";

import colorfulSpaceDesktop from "../../image/colorfulSpaceDesktop.jpg";
import colorfulSpaceTablet from "../../image/colorfulSpaceTablet.jpg";
import colorfulSpaceMobile from "../../image/colorfulSpaceMobile.jpg";

import neuronDarkDesktop from "../../image/neuronDarkDesktop.jpg";
import neuronDarkTablet from "../../image/neuronDarkTablet.jpg";
import neuronDarkMobile from "../../image/neuronDarkMobile.jpg";

const Faq = () => {
  const [openElement, setOpenElement] = useState(false);

  const handleClick = () => {
    setOpenElement((prevState) => !prevState);
  };
  return (
    <div className={css.page}>
      <div className={css.gradientBackground__wrapper}>
        <div className={css.faq_container}>
          <div className={css.faq_Part}>
            <h2 className={css.faq_title}>FAQ</h2>
            <div className={css.faqDescriptions}>
              <span className={css.faq_text}>
                Witaj w sekcji często zadawanych pytań (FAQ) naszej firmy, gdzie
                staramy się odpowiedzieć na najczęstsze zapytania dotyczące
                naszych usług internetowych.
              </span>
              <span className={css.faq_text}>
                Czy masz pytania dotyczące sposobu działania naszej sieci,
                skrojenia odpowiedniego pakietu, technicznych problemów lub po
                prostu chcesz dowiedzieć się więcej o naszej firmie?{" "}
              </span>
              <span className={css.faq_text}>
                Nie martw się! Jesteśmy tutaj, aby pomóc Ci znaleźć odpowiedzi
                na wszystkie Twoje pytania. Przejrzyj poniższe pytania i
                odpowiedzi, aby uzyskać szybką i skuteczną pomoc.
              </span>
              <span className={css.faq_text}>
                Jeśli nie znajdziesz tutaj odpowiedzi na swoje pytanie,
                skontaktuj się z nami bezpośrednio, a z przyjemnością udzielimy
                Ci wszelkich potrzebnych informacji. Dziękujemy, że jesteś z
                nami!
              </span>
            </div>
          </div>
          <ul className={css.faq_list}>
            <li onClick={handleClick} className={css.faq_item}>
              <span className={css.faq_itemTitle}>pomoc techniczna</span>
              <picture className={css.faq_itemPhoto}>
                <source media="(min-width: 1280px)" srcSet={aiDarkDesktop} />
                <source media="(min-width: 768px)" srcSet={aiDarkTablet} />
                <img className={css.faq_itemImg} src={aiDarkMobile} alt="AI" />
              </picture>
            </li>
            {openElement && (
              <div>
                <p>
                  Czy Twój internet działa nie wystarczająco do twoich potrzeb?
                  Sprawdź zastosować kilka porad:
                </p>
                <ol className={css.faqListSuggestion}>
                  <li className={css.faqSuggestion}>
                    Sprawdź, czy masz aktualne oprogramowanie i sterowniki
                    sieciowe na swoim urządzeniu.
                  </li>
                  <li className={css.faqSuggestion}>
                    Wyłącz i ponownie włącz urządzenia sieciowe, takie jak
                    router, antena, komputer.
                  </li>
                  <li className={css.faqSuggestion}>
                    Podłącz komputer bezpośrednio do routera za pomocą kabla
                    Ethernet, aby wykluczyć problemy z Wi-Fi.
                  </li>
                  <li className={css.faqSuggestion}>
                    Wyłącz wszystkie programy działające w tle, które mogą
                    korzystać z internetu.
                  </li>
                  <li className={css.faqSuggestion}>
                    Wyłącz zapory ogniowe i programy antywirusowe na chwilę, aby
                    sprawdzić, czy nie blokują one połączenia.
                  </li>
                  <li className={css.faqSuggestion}>
                    Sprawdź, czy w pomieszczeniu gdzie jest router Wi-Fi sygnał
                    jest odpowiedni.
                  </li>
                  <li className={css.faqSuggestion}>
                    Sprawdź, czy masz wystarczającą przepustowość internetową
                    dla swoich potrzeb przełączając się na inną przeglądarkę
                    internetową lub inny komputer, urządzenie jak tablet,
                    telefon.
                  </li>
                  <li className={css.faqSuggestion}>
                    Sprawdź, czy nie ma problemów z przewodami lub gniazdami
                    sieciowymi. Upewnij się, że kable są dobrze podłączone i nie
                    uszkodzone.
                  </li>
                  <li className={css.faqSuggestion}>
                    Wyłącz wszystkie urządzenia, które korzystają z internetu,
                    oprócz tego, na którym przeprowadzasz test prędkości. Inne
                    urządzenia mogą zużywać część przepustowości, co wpływa na
                    prędkość internetu.
                  </li>
                  <li className={css.faqSuggestion}>
                    Sprawdź, czy dostawca usług internetowych nie ma żadnych
                    planowanych prac konserwacyjnych lub problemów technicznych,
                    które mogą wpływać na prędkość łącza.
                  </li>
                </ol>
              </div>
            )}

            <li className={css.faq_item}>
              <span className={css.faq_itemTitle}>płatności i umowy</span>
              <picture className={css.faq_itemPhoto}>
                <source
                  media="(min-width: 1280px)"
                  srcSet={colorfulNetworkDesktop}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={colorfulNetworkTablet}
                />
                <img
                  className={css.faq_itemImg}
                  src={colorfulNetworkMobile}
                  alt="network"
                />
              </picture>
            </li>
            <li className={css.faq_item}>
              <span className={css.faq_itemTitle}>oferta i promocje</span>
              <picture className={css.faq_itemPhoto}>
                <source
                  media="(min-width: 1280px)"
                  srcSet={neuronDarkDesktop}
                />
                <source media="(min-width: 768px)" srcSet={neuronDarkTablet} />
                <img
                  className={css.faq_itemImg}
                  src={neuronDarkMobile}
                  alt="neuron"
                />
              </picture>
            </li>
            <li className={css.faq_item}>
              <span className={css.faq_itemTitle}>współpraca</span>
              <picture className={css.faq_itemPhoto}>
                <source
                  media="(min-width: 1280px)"
                  srcSet={colorfulSpaceDesktop}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={colorfulSpaceTablet}
                />
                <img
                  className={css.faq_itemImg}
                  src={colorfulSpaceMobile}
                  alt="space"
                />
              </picture>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
