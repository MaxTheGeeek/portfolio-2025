// === SVG icons ===
const Icon = {
  cube: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z"/>
      <path d="M3 7l9 5 9-5M12 12v10"/>
    </svg>
  ),
  sphere: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="9"/>
      <ellipse cx="12" cy="12" rx="9" ry="3.5"/>
      <path d="M12 3v18"/>
    </svg>
  ),
  torus: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <ellipse cx="12" cy="12" rx="9" ry="5"/>
      <ellipse cx="12" cy="12" rx="4" ry="2"/>
    </svg>
  ),
  diamond: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 2 4 10l8 12 8-12-8-8Z"/>
      <path d="M4 10h16M12 2v20"/>
    </svg>
  ),
  prism: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3 3 20h18L12 3Z"/>
      <path d="M12 3v17"/>
    </svg>
  ),
  arrow: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  download: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 4v12M6 11l6 6 6-6M4 20h16"/>
    </svg>
  ),
  mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="m3 7 9 6 9-6"/>
    </svg>
  ),
  globe: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9"/>
      <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18"/>
    </svg>
  ),
  github: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86v2.76c0 .26.18.58.69.48A10 10 0 0 0 12 2Z"/>
    </svg>
  ),
  linkedin: () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18v-7.93H5.67V18h2.67Zm-1.33-9.07a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1ZM18.34 18v-4.34c0-2.5-1.34-3.66-3.13-3.66a2.7 2.7 0 0 0-2.46 1.36V10.07h-2.66c.04.75 0 7.93 0 7.93h2.66v-4.43c0-.24.02-.48.09-.65a1.46 1.46 0 0 1 1.36-.97c.96 0 1.34.73 1.34 1.8V18h2.8Z"/>
    </svg>
  ),
  spark: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>
    </svg>
  ),
  book: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4V4Z"/>
      <path d="M20 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8V4Z"/>
    </svg>
  )
};
window.Icon = Icon;
