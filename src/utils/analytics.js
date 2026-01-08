// src/analytics.js
export const pageview = (url) => {
  if (window.gtag) {
    window.gtag('config', 'G-7F9GC4PTFB', {
      page_path: url,
    });
  }
};

// Optional: track events later
export const event = ({ action, category, label, value }) => {
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
