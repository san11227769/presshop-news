import AddsTypeOne from "@/components/adds/AddsTypeOne";
import NewsCardTypeOne from "@/components/news-cards/NewsCardTypeOne";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Heart, MessageSquare, Send } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

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
function Hubpage() {
    return (
        <div className="py-10 px-4 lg:px-6">
            <div className="container  m-auto">

                <div className="grid grid-cols-12 xl:px-4 gap-6">
                    <div className="col-span-12 xl:col-span-4">
                        <Card className="p-4 md:p-6 xl:p-6 bg-black dark:bg-[#262626] text-white  rounded-xl shadow-md mb-4">
                            <h2 className="hed-xl md:hed-3xl lg:hed-3xl line-height120 font-medium">Publisher resource</h2>
                            <p className="fs-lg lg:fs-xl text-light-gray">
                                Welcome Publisher,
                            </p>
                            <p className="fs-lg lg:fs-xl text-light-gray">
                                You’re in the right place.
                            </p>
                            <p className="fs-lg lg:fs-xl text-light-gray">

                                <strong>PressHop</strong> gives you real-time access to authentic, verified content — from breaking news to local stories that matter. Our platform is built for modern newsrooms: faster sourcing, sharper storytelling, and no legal headaches.

                            </p>
                            <p className="fs-lg lg:fs-xl text-light-gray">
                                Have a browse through our resources, see what’s new, and discover how <strong>PressHop</strong> can power your next big headline.
                            </p>
                        </Card>
                    </div>
                    <div className="col-span-12 xl:col-span-8">
                        <Card className="p-4 md:p-6 lg:p-8 bg-white    dark:bg-transparent gap-3 lg:gap-6 rounded-3xl shadow-md mb-6 lg:mb-10">
                            <Image src="/images/banner-publisher-resource1.png" width="800" height="400" className='w-full  rounded-xl object-cover mb-2' alt="News Image" />

                            <h2 className="font-medium line-height120 hed-sm lg:hed-2sm">Content sourcing, reinvented - citizen journalism at its finest🤳🏼
                            </h2>

                            <p className="text-gray fs-md lg:fs-xl line-height120">Looking for a smarter way to source real stories, straight from the streets?</p>
                            <p className="text-gray fs-md lg:fs-xl line-height120"><strong>PressHop</strong> is revolutionising citizen journalism — connecting publishers with verified, on-the-ground content faster, safer, and more affordably than ever before.
                            </p>
                            <p className="text-gray fs-md lg:fs-xl line-height120"><strong>PressHop</strong> Want to see how we’re changing the game? Click to see our brochure and discover why PressHop is the future of real-time news sourcing.

                            </p>
                        </Card>
                        <Card className="p-4 md:p-6 lg:p-8 bg-white  dark:bg-transparent gap-3 lg:gap-6 rounded-3xl shadow-md mb-6 lg:mb-10">
                            <Image src="/images/banner-publisher-resource2.png" width="800" height="400" className='w-full  rounded-xl object-cover mb-2' alt="News Image" />

                            <h2 className="font-medium line-height120 hed-sm lg:hed-2sm">Why every publisher needs PressHop on its side 🛵</h2>

                            <p className="text-gray fs-md lg:fs-xl line-height120">PressHop delivers the stories you need — faster, safer, and at a fraction of the cost. Get instant access to real-time, verified content with our triple-layered checks, cut your sourcing costs by up to 90%, and ditch the chaos of chasing leads across platforms. One smart, seamless marketplace. One step ahead of the news. That's the PressHop promise
                            </p>
                        </Card>
                        <Card className="p-4 md:p-6 lg:p-8 bg-white  dark:bg-transparent gap-3 lg:gap-6 rounded-3xl shadow-md mb-6 lg:mb-10">
                            <Image src="/images/banner-publisher-resource4.png" width="800" height="400" className='w-full  rounded-xl object-cover mb-2' alt="News Image" />

                            <h2 className="font-medium line-height120 hed-sm lg:hed-2sm">The PressHop onboarding deck for publishers🗞️📺</h2>

                            <p className="text-gray fs-md lg:fs-xl line-height120">Everything you need to know, minus the faff. Our onboarding presentation gives publishers a sharp, no-nonsense look at how PressHop solves newsroom headaches — faster content, verified stories, and real savings. It’s not just a new platform; it’s a smarter way to run your newsroom.</p>
                        </Card>
                        <Card className="p-4 md:p-6 lg:p-8 bg-white  dark:bg-transparent gap-3 lg:gap-6 rounded-3xl shadow-md mb-6 lg:mb-10">
                            <Image src="/images/banner-publisher-resource3.png" width="800" height="400" className='w-full  rounded-xl object-cover mb-2' alt="News Image" />

                            <h2 className="font-medium line-height120 hed-sm lg:hed-2sm">
                                The journey from Snap to Scoop🤳🏼🛵📰</h2>

                            <p className="text-gray fs-md lg:fs-xl line-height120">Every story starts with a moment — captured by everyday people on the ground. PressHop turns those snaps into verified, licensed news ready for the press to publish — fast, safe, and powerful</p>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hubpage