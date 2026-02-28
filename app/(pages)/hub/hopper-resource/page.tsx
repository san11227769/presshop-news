import AddsTypeOne from "@/components/adds/AddsTypeOne";
import NewsCardTypeOne from "@/components/news-cards/NewsCardTypeOne";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Heart, MessageSquare, Send } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
                            <h2 className="hed-xl md:hed-3xl lg:hed-3xl line-height120 font-medium">Hopper resource</h2>
                            <p className="fs-lg lg:fs-xl text-light-gray">
                                Hello Hoppers,
                            </p>
                            <p className="fs-lg lg:fs-xl text-light-gray">
                                Need a hand getting the most out of PressHop? You’re in the right place.
                            </p>
                            <p className="fs-lg lg:fs-xl text-light-gray">
                                Here you’ll find handy guides, tips, and everything you need to sharpen your skills — from capturing newsworthy moments to understanding how your uploads get verified and sold.
                            </p>
                            <p className="fs-lg lg:fs-xl text-light-gray">
                                Have a browse, pick up a few tricks, and get ready to make your mark.
                            </p>
                        </Card>
                    </div>
                    <div className="col-span-12 xl:col-span-8">
                        <Card className="p-4 md:p-6 lg:p-8 bg-white dark:bg-transparent gap-3 lg:gap-6 rounded-3xl shadow-md mb-6 lg:mb-10">
                            <Image src="/images/banner-hopper-resource1.png" width="800" height="400" className='w-full  rounded-xl object-cover mb-2' alt="News Image" />

                            <h2 className="font-medium line-height120 hed-sm lg:hed-2sm">Hopper Army Loyalty Program</h2>

                            <p className="text-gray fs-md lg:fs-xl line-height120">At <strong>PressHop</strong>, loyalty pays. Literally.
                            </p>
                            <p className="text-gray fs-md lg:fs-xl line-height120">With our Hopper Army Loyalty Programme, every friend you invite becomes part of your growing crew. You earn 5% of what each referral earns — every month, for life.

                            </p>
                            <p className="text-gray fs-md lg:fs-xl line-height120">Whether it’s 10 mates or 1,000 — the more you grow your army, the more you earn. No cap, no expiry. Just pure, passive income for being part of the revolution.
                            </p>
                        </Card>
                        <Card className="p-4 md:p-6 lg:p-8 bg-white  dark:bg-transparent gap-3 lg:gap-6 rounded-3xl shadow-md mb-6 lg:mb-10">
                            <Image src="/images/banner-hopper-resource2.png" width="800" height="400" className='w-full  rounded-xl object-cover mb-2' alt="News Image" />

                            <h2 className="font-medium line-height120 hed-sm lg:hed-2sm">Got questions? We’ve got you</h2>

                            <p className="text-gray fs-md lg:fs-xl line-height120">From earning tips to safety, tasks to payments — our FAQ section covers everything a Hopper needs to know.</p>
                            <p className="text-gray fs-md lg:fs-xl line-height120">Whether you're just getting started or levelling up your citizen journalism game, we've answered all the most common questions. Still need help? Drop us a line at hello@presshop.co.uk or chat with Emily, our Story Sniffer-in-Chief.

                            </p>
                            <p className="text-gray fs-md lg:fs-xl line-height120">Hop in. Get answers. Stay informed.
                            </p>
                        </Card>
                        <Card className="p-4 md:p-6 lg:p-8 bg-white  dark:bg-transparent gap-3 lg:gap-6 rounded-3xl shadow-md mb-6 lg:mb-10">
                            <Image src="/images/banner-hopper-resource3.png" width="800" height="400" className='w-full  rounded-xl object-cover mb-2' alt="News Image" />

                            <h2 className="font-medium line-height120 hed-sm lg:hed-2sm">Check our video on how to register as a Hopper </h2>

                            <p className="text-gray fs-md lg:fs-xl line-height120">Ready to turn your snaps into cash?
                                Signing up as a Hopper is a piece of cake! Just download the app, fill in a few quick details, and boom — you’re part of the PressHop family.
                            </p>
                            <p className="text-gray fs-md lg:fs-xl line-height120">No fuss, no drama — just real stories, real rewards.
                            </p>
                        </Card>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hubpage