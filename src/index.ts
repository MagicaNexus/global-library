// Description: This file is the entry point for the Webflow projectt
// It includes all the necessary scripts based on the attributes of the body tag

import { setFooterYear } from '$utils/footerYear';
import { scrollToTop } from '$utils/scrollToTop';

document.addEventListener('DOMContentLoaded', () => {
  const footerYearAttribute = document.querySelector('[eigo="footerYear"]');
  const scrollToTopAttribute = document.body.getAttribute('data-scroll-to-top');

  if (footerYearAttribute) {
    setFooterYear();
  }
  if (scrollToTopAttribute === 'true') {
    scrollToTop();
  }
});
