export function scrollToTop() {
  const scrollToTopButton = document.querySelector('[eigo="scroll-to-top"]');
  if (scrollToTopButton) {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };

    // Attach event listener to scrollToTopButton
    scrollToTopButton.addEventListener('click', () => {
      scrollToTop();
    });
  }
}
