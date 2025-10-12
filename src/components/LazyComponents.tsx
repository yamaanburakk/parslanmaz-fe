import dynamic from 'next/dynamic';

// Lazy load components for better performance
export const LazyProjectsGrid = dynamic(() => import('./ProjectsGrid'), {
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="skeleton h-48 w-full" />
          <div className="p-6">
            <div className="skeleton h-6 w-3/4 mb-3" />
            <div className="skeleton h-4 w-1/2 mb-2" />
            <div className="skeleton h-4 w-full mb-4" />
            <div className="skeleton h-10 w-32" />
          </div>
        </div>
      ))}
    </div>
  ),
  ssr: true,
});

export const LazyProjectsStats = dynamic(() => import('./ProjectsStats'), {
  loading: () => (
    <div className="bg-gradient-to-br from-[#131C3C] via-[#1A2647] to-[#223052] text-white py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="text-center">
              <div className="skeleton h-12 w-24 mx-auto mb-2" />
              <div className="skeleton h-4 w-20 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: true,
});

export const LazyProjectsCTA = dynamic(() => import('./ProjectsCTA'), {
  loading: () => (
    <div className="bg-gradient-to-br from-[#131C3C] to-[#1A2647] text-white py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
        <div className="skeleton h-8 w-64 mx-auto mb-4" />
        <div className="skeleton h-4 w-96 mx-auto mb-8" />
        <div className="skeleton h-12 w-40 mx-auto" />
      </div>
    </div>
  ),
  ssr: true,
});

export const LazyBlogGrid = dynamic(() => import('./BlogGrid'), {
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="skeleton h-48 w-full" />
          <div className="p-6">
            <div className="skeleton h-4 w-20 mb-3" />
            <div className="skeleton h-6 w-full mb-3" />
            <div className="skeleton h-4 w-full mb-2" />
            <div className="skeleton h-4 w-3/4 mb-4" />
            <div className="skeleton h-4 w-24" />
          </div>
        </div>
      ))}
    </div>
  ),
  ssr: true,
});

export const LazyFAQAccordion = dynamic(() => import('./FAQAccordion'), {
  loading: () => (
    <div className="space-y-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <div className="skeleton h-5 w-3/4 mb-2" />
            <div className="skeleton h-4 w-full mb-2" />
            <div className="skeleton h-4 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  ),
  ssr: true,
});

export const LazyContactForm = dynamic(() => import('./ContactForm'), {
  loading: () => (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <div className="skeleton h-8 w-48 mb-6" />
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i}>
            <div className="skeleton h-4 w-20 mb-2" />
            <div className="skeleton h-12 w-full" />
          </div>
        ))}
        <div className="skeleton h-12 w-32" />
      </div>
    </div>
  ),
  ssr: true,
});

export const LazyProductGallery = dynamic(() => import('./ProductGallery'), {
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="aspect-square">
          <div className="skeleton h-full w-full rounded-lg" />
        </div>
      ))}
    </div>
  ),
  ssr: true,
});

export const LazyProductFeatures = dynamic(() => import('./ProductFeatures'), {
  loading: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="skeleton h-12 w-12 mb-4" />
          <div className="skeleton h-5 w-3/4 mb-2" />
          <div className="skeleton h-4 w-full mb-2" />
          <div className="skeleton h-4 w-2/3" />
        </div>
      ))}
    </div>
  ),
  ssr: true,
});

export const LazyProductSpecs = dynamic(() => import('./ProductSpecs'), {
  loading: () => (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <div className="skeleton h-8 w-48 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100">
            <div className="skeleton h-4 w-24" />
            <div className="skeleton h-4 w-32" />
          </div>
        ))}
      </div>
    </div>
  ),
  ssr: true,
});