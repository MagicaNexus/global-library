// Description: This file is the entry point for the Webflow projectt
// It includes all the necessary scripts based on the attributes of the body tag

import { setHeaderStyles, setReadTime } from '$utils/blog';
import { setFooterYear } from '$utils/footer';
import { scrollToTop } from '$utils/miscellaneous';

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
    setHeaderStyles(readTimeElement);
  }
});
