interface Metric {
  name: string;
  value: number;
  id: string;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  navigationType: 'navigate' | 'reload' | 'back-forward' | 'back-forward-cache' | 'prerender' | 'restore';
}

export function onCLS(metric: Metric) {
  // Cumulative Layout Shift
  console.log('CLS:', metric);
}

export function onFID(metric: Metric) {
  // First Input Delay
  console.log('FID:', metric);
}

export function onFCP(metric: Metric) {
  // First Contentful Paint
  console.log('FCP:', metric);
}

export function onLCP(metric: Metric) {
  // Largest Contentful Paint
  console.log('LCP:', metric);
}

export function onTTFB(metric: Metric) {
  // Time to First Byte
  console.log('TTFB:', metric);
}

export function onINP(metric: Metric) {
  // Interaction to Next Paint
  console.log('INP:', metric);
}

// You can send these metrics to your analytics service
export function sendToAnalytics(metric: Metric) {
  // Example: Send to Google Analytics
  if (typeof window !== 'undefined' && 'gtag' in window) {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtag) {
      gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }
}
