export function setReadTime(element: HTMLElement | null) {
  const text = element!.textContent!;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm).toString();
  const timeElement = document.querySelector('[eigo="time-to-read"]') as HTMLElement | null;
  timeElement!.textContent = time;
}
