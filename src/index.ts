// Description: This file is the entry point for the Webflow projectt
// It includes all the necessary scripts based on the attributes of the body tag

import { setFooterYear } from '$utils/footerYear';
import { scrollToTop } from '$utils/scrollToTop';
import { setReadTime } from '$utils/timeToRead';

document.addEventListener('DOMContentLoaded', () => {
  const footerYearElement = document.querySelector('[eigo="footer-year"]') as HTMLElement | null;
  const scrollToTopElement = document.querySelector('[eigo="scroll-to-top"]') as HTMLElement | null;
  const readTimeElement = document.querySelector('[eigo="article"]') as HTMLElement | null;

  if (footerYearElement) {
    setFooterYear(footerYearElement);
  }
  if (scrollToTopElement) {
    scrollToTop(scrollToTopElement);
  }
  if (readTimeElement) {
    setReadTime(readTimeElement);
  }
});
