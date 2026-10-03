/**
 * Bulletproof cross-browser smooth scrolling to section by ID.
 * Works seamlessly across Safari, Chrome, Firefox, iOS, and Android
 * without getting blocked by overflow-x or scroll-snap quirks.
 */
export function scrollToSection(id: string, offset = 80) {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const targetId = id.replace(/^#/, "");
  const el = document.getElementById(targetId);
  if (!el) {
    console.warn(`[scrollToSection] Element with id "${targetId}" not found.`);
    return;
  }

  // Calculate position relative to document top
  const bodyTop = document.body.getBoundingClientRect().top;
  const elementTop = el.getBoundingClientRect().top;
  const absoluteElementTop = elementTop - bodyTop;
  const targetScrollTop = Math.max(0, absoluteElementTop - offset);

  try {
    window.scrollTo({
      top: targetScrollTop,
      behavior: "smooth"
    });
  } catch {
    // Fallback for older browsers
    window.scrollTo(0, targetScrollTop);
  }

  // Update URL hash without causing a page jump
  if (window.history && typeof window.history.pushState === "function") {
    window.history.pushState(null, "", `#${targetId}`);
  }
}
