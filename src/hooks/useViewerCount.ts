'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * Profesyonel ve gerçekçi viewer count hook'u
 * Sayı yavaş ve yumuşak bir şekilde değişir
 */
export function useViewerCount() {
  // İlk değeri sabit 15 olarak başlat (hydration hatası olmaması için)
  const [displayCount, setDisplayCount] = useState<number>(15);
  const [isClient, setIsClient] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);
  const isMountedRef = useRef(true);
  const displayCountRef = useRef<number>(45);
  
  // İlk değeri belirle (8-42 arası gerçekçi bir aralık)
  const getRandomCount = (): number => {
    // %75 ihtimalle 8-28 arası (daha gerçekçi)
    // %25 ihtimalle 29-42 arası (daha nadir)
    const random = Math.random();
    if (random < 0.75) {
      return Math.floor(Math.random() * 21) + 8; // 8-28
    } else {
      return Math.floor(Math.random() * 14) + 29; // 29-42
    }
  };

  // displayCount değiştiğinde ref'i güncelle
  useEffect(() => {
    displayCountRef.current = displayCount;
  }, [displayCount]);

  // İlk mount'da client-side olduğumuzu belirle
  useEffect(() => {
    setIsClient(true);
    // İlk gerçek değeri ayarla
    const initialCount = getRandomCount();
    setDisplayCount(initialCount);
    displayCountRef.current = initialCount;
  }, []);

  useEffect(() => {
    if (!isClient) return; // Client-side değilse çalışma
    isMountedRef.current = true;

    // Smooth count animation - daha yavaş ve profesyonel
    const animateCount = (start: number, end: number, duration: number = 2000) => {
      if (!isMountedRef.current) return;

      // Önceki animasyonu iptal et
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }

      const startTime = performance.now();
      const difference = end - start;

      const step = (currentTime: number) => {
        if (!isMountedRef.current) return;

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease-out cubic function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + difference * easeOutCubic);
        
        setDisplayCount(current);
        displayCountRef.current = current;

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(step);
        } else {
          animationRef.current = null;
        }
      };

      animationRef.current = requestAnimationFrame(step);
    };

    // Profesyonel ve yavaş sayı güncelleme (15-25 saniye arası - çok daha yavaş)
    const updateTargetCount = () => {
      if (!isMountedRef.current) return;

      // Çok küçük ve yumuşak değişimler: %85 ihtimalle ±1, %12 ihtimalle ±2, %3 ihtimalle ±3
      const changeType = Math.random();
      let change = 0;
      
      if (changeType < 0.85) {
        // En yaygın: ±1 (çok küçük değişim)
        change = Math.random() < 0.5 ? -1 : 1;
      } else if (changeType < 0.97) {
        // Nadir: ±2
        change = Math.random() < 0.5 ? -2 : 2;
      } else {
        // Çok nadir: ±3
        change = Math.random() < 0.5 ? -3 : 3;
      }
      
      const currentDisplay = displayCountRef.current;
      const newTarget = Math.max(5, Math.min(45, currentDisplay + change));
      
      // Animasyonu başlat (daha yavaş animasyon)
      animateCount(currentDisplay, newTarget);

      // Bir sonraki güncelleme için rastgele süre belirle (15000-25000ms - çok daha yavaş ve profesyonel)
      const nextUpdate = Math.floor(Math.random() * 10000) + 15000;
      
      timeoutRef.current = setTimeout(() => {
        updateTargetCount();
      }, nextUpdate);
    };

    // İlk güncellemeyi başlat (10-15 saniye sonra - daha uzun bekleme)
    const initialDelay = Math.floor(Math.random() * 5000) + 10000;
    timeoutRef.current = setTimeout(() => {
      updateTargetCount();
    }, initialDelay);

    // Cleanup
    return () => {
      isMountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isClient]); // isClient değiştiğinde yeniden çalış

  return displayCount;
}
