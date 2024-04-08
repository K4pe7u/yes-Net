import React from "react";
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
  return (
    <div className={css.page}>
      <div className={css.gradientBackground__wrapper}>
        <div className={css.faq_container}>
          <div className={css.faq_Part}>
            <h2 className={css.faq_title}>FAQ</h2>
            <span className={css.faq_text}>
              Witaj w sekcji często zadawanych pytań (FAQ) naszej firmy, gdzie
              staramy się odpowiedzieć na najczęstsze zapytania dotyczące
              naszych usług internetowych.
            </span>
            <span>
              {" "}
              Czy masz pytania dotyczące sposobu działania naszej sieci,
              skrojenia odpowiedniego pakietu, technicznych problemów lub po
              prostu chcesz dowiedzieć się więcej o naszej firmie? Nie martw
              się! Jesteśmy tutaj, aby pomóc Ci znaleźć odpowiedzi na wszystkie
              Twoje pytania. W razie potrzeby możesz również skorzystać z
              naszego wsparcia klienta, który jest gotowy pomóc Ci w każdej
              kwestii. Przejrzyj poniższe pytania i odpowiedzi, aby uzyskać
              szybką i skuteczną pomoc. Jeśli nie znajdziesz tutaj odpowiedzi na
              swoje pytanie, skontaktuj się z nami bezpośrednio, a z
              przyjemnością udzielimy Ci wszelkich potrzebnych informacji.
              Dziękujemy, że jesteś z nami!
            </span>
          </div>
          <ul className={css.faq_list}>
            <li className={css.faq_item}>
              <span className={css.faq_itemTitle}>pomoc techniczna</span>
              <picture className={css.faq_itemPhoto}>
                <source media="(min-width: 1280px)" srcSet={aiDarkDesktop} />
                <source media="(min-width: 768px)" srcSet={aiDarkTablet} />
                <img className={css.faq_itemImg} src={aiDarkMobile} alt="AI" />
              </picture>
            </li>
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
