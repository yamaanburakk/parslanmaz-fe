import dynamic from 'next/dynamic';
import BlogHero from '@/components/BlogHero';
import BlogCategories from '@/components/BlogCategories';

// Lazy load below-the-fold content
const BlogGrid = dynamic(() => import('@/components/BlogGrid'), {
  loading: () => <div className="h-96 bg-white animate-pulse rounded-2xl" />,
});

const BlogSidebar = dynamic(() => import('@/components/BlogSidebar'), {
  loading: () => <div className="h-96 bg-white animate-pulse rounded-2xl" />,
});

export const metadata = {
  title: "Blog - Pars Endüstriyel Mutfak",
  description: "Endüstriyel mutfak ekipmanları, paslanmaz çelik ürünler ve mutfak tasarımı hakkında bilgilendirici makaleler.",
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