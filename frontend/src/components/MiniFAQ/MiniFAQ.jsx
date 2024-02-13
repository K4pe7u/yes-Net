import React from "react";
import css from "./MiniFAQ.module.css";

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

const MiniFAQ = () => {
  return (
    <div className={css.faq_container}>
      <div className={css.faq_Part}>
        <h2 className={css.faq_title}>FAQ</h2>
        <span className={css.faq_text}>
          Kiedy napotkasz problem lub masz pytania związane z naszymi usługami,
          zajrzyj tutaj. Może się okazać, że z łatwością i w kilka minut Sam
          opanujesz rozwiązanie z pomocą naszych podpowiedzi.
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
            <source media="(min-width: 768px)" srcSet={colorfulNetworkTablet} />
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
            <source media="(min-width: 1280px)" srcSet={neuronDarkDesktop} />
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
            <source media="(min-width: 1280px)" srcSet={colorfulSpaceDesktop} />
            <source media="(min-width: 768px)" srcSet={colorfulSpaceTablet} />
            <img
              className={css.faq_itemImg}
              src={colorfulSpaceMobile}
              alt="space"
            />
          </picture>
        </li>
      </ul>
    </div>
  );
};

export default MiniFAQ;
