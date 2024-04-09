export function setFooterYear(element: HTMLElement | null) {
  const year = new Date().getFullYear();
  if (element) element.textContent = year.toString();
}
