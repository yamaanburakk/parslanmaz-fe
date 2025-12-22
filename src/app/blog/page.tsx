import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import BlogHero from '@/components/BlogHero';
import BlogCategories from '@/components/BlogCategories';

// Lazy load below-the-fold content
const BlogGrid = dynamic(() => import('@/components/BlogGrid'), {
  loading: () => <div className="h-96 bg-white animate-pulse rounded-2xl" />,
  ssr: true,
});

const BlogSidebar = dynamic(() => import('@/components/BlogSidebar'), {
  loading: () => <div className="h-96 bg-white animate-pulse rounded-2xl" />,
  ssr: true,
});

export const metadata: Metadata = {
  title: "Blog - Pars Endüstriyel Mutfak | Mutfak Ekipmanları Makaleleri",
  description: "Endüstriyel mutfak ekipmanları, paslanmaz çelik ürünler ve mutfak tasarımı hakkında bilgilendirici makaleler. Uzman yazılar ve sektör haberleri.",
  keywords: [
    "endüstriyel mutfak blog",
    "mutfak ekipmanları makaleler",
    "paslanmaz çelik blog",
    "mutfak tasarımı yazılar",
    "endüstriyel mutfak haberler",
  ],
  openGraph: {
    title: "Blog - Pars Endüstriyel Mutfak",
    description: "Endüstriyel mutfak ekipmanları hakkında bilgilendirici makaleler.",
    type: "website",
  },
};

export const revalidate = 1800; // Revalidate every 30 minutes for blog content

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Blog Hero Section */}
      <BlogHero />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Filter Section */}
            <div className="mb-8">
              <BlogCategories />
            </div>
            
            {/* Blog Posts Grid */}
            <BlogGrid />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}