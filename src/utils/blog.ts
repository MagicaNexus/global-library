export function setReadTime(element: HTMLElement | null) {
  const text = element!.textContent!;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm).toString();
  const timeElement = document.querySelector('[eigo="time-to-read"]') as HTMLElement | null;
  timeElement!.textContent = time;
}

export function setHeaderStyles(element: HTMLElement | null): void {
  if (!element) return;

  const headers = [
    { selector: 'h2', className: 'heading-style-h4' },
    { selector: 'h3', className: 'heading-style-h5' },
    { selector: 'h4', className: 'heading-style-h6' },
  ];

  headers.forEach((header) => {
    const elements = element.querySelectorAll(header.selector);
    elements.forEach((element) => {
      element.classList.add(header.className, 'text-color-black');
    });
  });
}
