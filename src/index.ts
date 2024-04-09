// Description: This file is the entry point for the Webflow projectt
// It includes all the necessary scripts based on the attributes of the body tag

import { setFooterYear } from '$utils/footerYear';
import { scrollToTop } from '$utils/scrollToTop';

document.addEventListener('DOMContentLoaded', () => {
  const footerYearElement = document.querySelector('[eigo="footer-year"]');
  const scrollToTopElement = document.querySelector('[eigo="scroll-to-top"]');

  if (footerYearElement) {
    setFooterYear(footerYearElement);
  }
  if (scrollToTopElement) {
    scrollToTop(scrollToTopElement);
  }
});
