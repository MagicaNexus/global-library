export function setFooterYear() {
  const year = new Date().getFullYear();
  const footerYear = document.querySelector('[eigo="footerYear"]');
  if (footerYear) footerYear.textContent = year.toString();
}
