import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";
import BlogCard from "@/components/blog-card/BlogCard";
import { Button } from "@/components/ui/button";
export const metadata: Metadata = {
    title: "Page name| Your Company Name",
    description:
        "Learn more about Your Company Name, our mission, vision, and values. Discover who we are and what we do.",
    keywords: [
        "Download App",
        "Company Information",
        "Our Mission",
        "Our Vision",
        "Your Company Name",
    ],
    robots: {
        index: true,
        follow: true,
    },
};
function BlogPage() {
    return (
        <div className="py-10 px-4 lg:px-6">
            <div className="container m-auto">
                <div className="mb-2.5 lg:mb-8">
                    <h1 className="hed-lg font-medium lg:hed-2xl text-dark ">
                        Latest Blogs
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />

                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />

                </div>

                <div className="text-center py-6 mt-2">
                    <Button variant="default" className="p-5">
                        Load More
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BlogPage