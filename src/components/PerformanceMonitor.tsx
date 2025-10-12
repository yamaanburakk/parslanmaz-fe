'use client';

import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}

interface LegacyPerformanceTiming {
  navigationStart: number;
  responseStart: number;
}

const PerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run in development and after mount
    if (process.env.NODE_ENV !== 'development' || !isMounted) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: Math.round(entry.startTime) }));
          }
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: Math.round(entry.startTime) }));
        }
        
        if (entry.entryType === 'first-input') {
          const firstInputEntry = entry as PerformanceEventTiming;
          setMetrics(prev => ({ ...prev, fid: Math.round(firstInputEntry.processingStart - entry.startTime) }));
        }
        
        if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as PerformanceEntry & { value: number };
          setMetrics(prev => ({ ...prev, cls: prev.cls ? prev.cls + layoutShiftEntry.value : layoutShiftEntry.value }));
        }
      });
    });

    // Observe various performance metrics
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch {
      // Fallback for older browsers
      console.log('Performance Observer not supported');
    }

    // Measure TTFB
    if (performance.timing) {
      const timing = performance.timing as unknown as LegacyPerformanceTiming;
      const ttfb = timing.responseStart - timing.navigationStart;
      setMetrics(prev => ({ ...prev, ttfb }));
    }

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [isMounted]);

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isVisible || !isMounted) {
    return null;
  }

  return (
    <div className="performance-monitor" style={{ display: 'block' }}>
      <div className="text-xs mb-1 font-bold">Performance Metrics</div>
      {metrics.fcp && (
        <div className="text-xs">
          FCP: {metrics.fcp}ms {metrics.fcp < 1800 ? '🟢' : metrics.fcp < 3000 ? '🟡' : '🔴'}
        </div>
      )}
      {metrics.lcp && (
        <div className="text-xs">
          LCP: {metrics.lcp}ms {metrics.lcp < 2500 ? '🟢' : metrics.lcp < 4000 ? '🟡' : '🔴'}
        </div>
      )}
      {metrics.fid && (
        <div className="text-xs">
          FID: {metrics.fid}ms {metrics.fid < 100 ? '🟢' : metrics.fid < 300 ? '🟡' : '🔴'}
        </div>
      )}
      {metrics.cls && (
        <div className="text-xs">
          CLS: {metrics.cls.toFixed(3)} {metrics.cls < 0.1 ? '🟢' : metrics.cls < 0.25 ? '🟡' : '🔴'}
        </div>
      )}
      {metrics.ttfb && (
        <div className="text-xs">
          TTFB: {metrics.ttfb}ms {metrics.ttfb < 800 ? '🟢' : metrics.ttfb < 1800 ? '🟡' : '🔴'}
        </div>
      )}
      <div className="text-xs mt-1 opacity-50">
        Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;