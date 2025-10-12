import BlogHero from '@/components/BlogHero';
import BlogGrid from '@/components/BlogGrid';
import BlogSidebar from '@/components/BlogSidebar';
import BlogSearch from '@/components/BlogSearch';
import BlogCategories from '@/components/BlogCategories';

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
            {/* Search and Filter Section */}
            <div className="mb-8">
              <BlogSearch />
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