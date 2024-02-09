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
        <span>
          Za nim zgłosisz usterkę sprawdź, czy problem nie wynika z innych
          przyczyn.
        </span>
      </div>
      <ul className={css.faq_list}>
        <li className={css.faq_item}>
          <picture className={css.faq_itemPhoto}>
            <source media="(min-width: 1280px)" srcSet={aiDarkDesktop} />
            <source media="(min-width: 768px)" srcSet={aiDarkTablet} />
            <img src={aiDarkMobile} alt="AI" />
          </picture>
        </li>
        <li className={css.faq_item}>
          <picture className={css.faq_itemPhoto}>
            <source
              media="(min-width: 1280px)"
              srcSet={colorfulNetworkDesktop}
            />
            <source media="(min-width: 768px)" srcSet={colorfulNetworkTablet} />
            <img src={colorfulNetworkMobile} alt="network" />
          </picture>
        </li>
        <li className={css.faq_item}>
          <picture className={css.faq_itemPhoto}>
            <source media="(min-width: 1280px)" srcSet={neuronDarkDesktop} />
            <source media="(min-width: 768px)" srcSet={neuronDarkTablet} />
            <img src={neuronDarkMobile} alt="neuron" />
          </picture>
        </li>
        <li className={css.faq_item}>
          <picture className={css.faq_itemPhoto}>
            <source media="(min-width: 1280px)" srcSet={colorfulSpaceDesktop} />
            <source media="(min-width: 768px)" srcSet={colorfulSpaceTablet} />
            <img src={colorfulSpaceMobile} alt="space" />
          </picture>
        </li>
      </ul>
    </div>
  );
};

export default MiniFAQ;
