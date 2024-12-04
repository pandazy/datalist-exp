const Formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

/**
 * Format date to display in the UIs
 * @param date - original ISO date string to format
 */
export function displayDate(date: string): string {
  return Formatter.format(new Date(date));
}

/**
 * Display unescaped HTML content
 * @param content - HTML content to display, e.g., the content that contains escaped characters like &lt; and &gt;
 */
export function displayUnescape(content: string): string {
  const doc = new DOMParser().parseFromString(content, 'text/html');
  return doc.documentElement.textContent || '';
}
