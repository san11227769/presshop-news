import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import InnerBanner from "@/components/inner-banner/InnerBanner";
import PressCard from "@/components/press-card/PressCard";
import PresshopVideoCard from "@/components/presshop-video-card/PresshopVideoCard";
import presshopVideos from '@/data/presshop-videos'
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
function VideoPage() {
    return (
        <>
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <InnerBanner rightImage="/images/pressbanner.png" overlayColor="#EC4E54CC" title="Grab a cuppa and enjoy 
our videos" subtitle="New to PressHop? We've got you covered. Watch our easy step-by-step videos to learn how to use the app, upload content," />
                </div>
            </div>
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <div className="mb-2.5 lg:mb-8">
                        <h1 className="hed-lg font-medium lg:hed-3xl text-dark ">
                            PressHop Video
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6">
                        {presshopVideos.map((item) => (

                            <PresshopVideoCard {...item} />
                        ))}

                    </div>
                    <div className="text-center py-6 mt-2">
                        <Button variant="default" className="p-5">
                            Load More
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoPage