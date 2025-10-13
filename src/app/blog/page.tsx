import dynamic from 'next/dynamic';

// Dynamic imports for client components
const BlogHero = dynamic(() => import('@/components/BlogHero'), {
  ssr: true,
});

const BlogGrid = dynamic(() => import('@/components/BlogGrid'), {
  ssr: true,
});

const BlogSidebar = dynamic(() => import('@/components/BlogSidebar'), {
  ssr: true,
});


const BlogCategories = dynamic(() => import('@/components/BlogCategories'), {
  ssr: true,
});

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