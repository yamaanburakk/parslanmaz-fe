'use client';

import { useViewerCount } from "@/hooks/useViewerCount";

const ViewerCount = () => {
  const viewerCount = useViewerCount();

  return (
    <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 py-2">
      {/* Minimal live indicator */}
      <div className="relative flex items-center justify-center w-2 h-2 flex-shrink-0">
        <div className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <div className="relative w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
      </div>
      
      {/* Count and text */}
      <span className="text-sm font-medium text-white/90 tabular-nums">
        <span className="font-semibold text-white">{viewerCount}</span>
        <span className="text-white/70 ml-1.5">kişi şu anda bu ürünü inceliyor</span>
      </span>
    </div>
  );
};

export default ViewerCount;





