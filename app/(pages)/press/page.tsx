import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";
import BlogCard from "@/components/blog-card/BlogCard";
import { Button } from "@/components/ui/button";
import InnerBanner from "@/components/inner-banner/InnerBanner";
import PressCard from "@/components/press-card/PressCard";
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
function PressPage() {
    return (
        <>
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <InnerBanner rightImage="/images/pressbanner.png" overlayColor="#EC4E54CC" title="PressHop in the press 
coverage" subtitle="Welcome to the Buzz behind the byline. This is where all the headlines about us live. Dive into the press coverage" />
                </div>
            </div>
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <div className="mb-2.5 lg:mb-8">
                        <h1 className="hed-lg font-medium lg:hed-3xl text-dark ">
                            PressHop in the press
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-6">
                        <PressCard />
                        <PressCard />
                        <PressCard />

                    </div>

                </div>
            </div>
        </>
    )
}

export default PressPage