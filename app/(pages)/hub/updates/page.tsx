
import type { Metadata } from "next";
import { pressHopWorksData } from "@/data/pressHopWorks";
import PressHopWorksCard from "@/components/press-hop-works-card/PressHopWorksCard";
import InnerBanner from "@/components/inner-banner/InnerBanner";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
function updatePage() {
    return (
        <>

            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <InnerBanner rightImage="/images/gemini_generated.png" overlayColor="#EC4E54" title="Stay Tuned Folks Big News 
Ahead Stay Ready" subtitle="Curious about what’s been brewing behind the scenes? Come take a peek at what our busy bunnies have been up to." />
                </div>
            </div>
            <div className="xl:py-10 px-4 xl:px-6">
                <div className="container m-auto">
                    <h2 className="hed-lg lg:hed-2xl mb-2.5 lg:mb-8 font-medium">Stay Updated</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-6">
                        <Card
                            className={
                                "p-3 lg:p-8 rounded-xl lg:rounded-2xl mb-8 bg-white dark:bg-black"}
                        >
                            <div
                                className={
                                    "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"}
                            >
                                {/* Image */}
                                <div className="relative">
                                    <Image
                                        src="/images/images-update.png"
                                        alt=""
                                        width={600}
                                        height={400}
                                        className="w-full h-40 xl:h-100 object-cover rounded-xl"
                                    />
                                    <Badge variant="secondary" className="absolute top-4 right-4 font-medium fs-md lg:fs-2xl text-gray px-3 lg:px-6 py-2 lg:py-3  z-10">
                                        June 2024
                                    </Badge>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="hed-sm lg:hed-xl font-semibold mb-4">
                                        Turbo-charging PressHop’s digital growth online
                                    </h3>
                                    <div className="space-y-4  fs-sm lg:[&>p]:text-sm opacity-90 ">
                                        <p>
                                            We’re pleased to share that Tom Welbourne and his team at The Good Marketer have partnered with PressHop to lead our digital marketing efforts.
                                        </p>
                                        <p>
                                            Known for helping ambitious brands scale through strategic, data-driven campaigns, The Good Marketer brings deep expertise in SEO, paid media, content strategy, and social media. Under Tom’s leadership, they’ve built a strong track record of driving measurable growth — making them the ideal partner as PressHop prepares for launch and rapid Read more...
                                        </p>
                                        <Button variant="default">The Good Marketer</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card
                            className={
                                "p-3 lg:p-8 rounded-xl lg:rounded-2xl mb-8 bg-black dark:bg-[#262626] text-white "}
                        >
                            <div
                                className={
                                    "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"}
                            >
                                {/* Image */}
                                <div className="relative">
                                    <Image
                                        src="/images/images-update1.png"
                                        alt=""
                                        width={600}
                                        height={400}
                                        className="w-full h-40 xl:h-100 object-cover rounded-xl"
                                    />
                                    <Badge variant="secondary" className="absolute top-4 right-4 font-medium fs-md lg:fs-2xl text-gray px-3 lg:px-6 py-2 lg:py-3  z-10">
                                        June 2024
                                    </Badge>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="hed-sm lg:hed-xl font-semibold mb-4">
                                        Powering media growth with Andrew Webb 📰
                                    </h3>
                                    <div className="space-y-4  fs-sm lg:[&>p]:text-sm opacity-90 ">
                                        <p>
                                            We’re excited to announce that Andrew Webb has joined PressHop to lead our Media Onboarding and Partnerships. With over 20 years of experience in the news and publishing industry, Andrew brings a wealth of expertise to our growing team.
                                        </p>
                                        <p>
                                            His stellar career includes leadership roles at prestigious organisations such as The Economist and News International, working closely with iconic titles like The Times and The Sunday Times. At PressHop, Andrew is spearheading our efforts to onboard publishers, broadcasters, and media houses — ensuring a smooth, impactful experience as Read more...
                                        </p>
                                        <Button variant="default">Meet the Team</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card
                            className={
                                "p-3 lg:p-8 rounded-xl lg:rounded-2xl mb-8 bg-white dark:bg-black"}
                        >
                            <div
                                className={
                                    "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"}
                            >
                                {/* Image */}
                                <div className="relative">
                                    <Image
                                        src="/images/images-update2.png"
                                        alt=""
                                        width={600}
                                        height={400}
                                        className="w-full h-40 xl:h-100 object-cover rounded-xl"
                                    />
                                    <Badge variant="secondary" className="absolute top-4 right-4 font-medium fs-md lg:fs-2xl text-gray px-3 lg:px-6 py-2 lg:py-3  z-10">
                                        June 2024
                                    </Badge>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="hed-sm lg:hed-xl font-semibold mb-4">
                                        Turbo-charging PressHop’s digital growth online
                                    </h3>
                                    <div className="space-y-4  fs-sm lg:[&>p]:text-sm opacity-90 ">
                                        <p>
                                            We’re pleased to share that Tom Welbourne and his team at The Good Marketer have partnered with PressHop to lead our digital marketing efforts.
                                        </p>
                                        <p>
                                            Known for helping ambitious brands scale through strategic, data-driven campaigns, The Good Marketer brings deep expertise in SEO, paid media, content strategy, and social media. Under Tom’s leadership, they’ve built a strong track record of driving measurable growth — making them the ideal partner as PressHop prepares for launch and rapid Read more...
                                        </p>
                                        <Button variant="default">The Good Marketer</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card
                            className={
                                "p-3 lg:p-8 rounded-xl lg:rounded-2xl mb-8 bg-black dark:bg-[#262626] text-white "}
                        >
                            <div
                                className={
                                    "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"}
                            >
                                {/* Image */}
                                <div className="relative">
                                    <Image
                                        src="/images/images-update3.png"
                                        alt=""
                                        width={600}
                                        height={400}
                                        className="w-full h-40 xl:h-100 object-cover rounded-xl"
                                    />
                                    <Badge variant="secondary" className="absolute top-4 right-4 font-medium fs-md lg:fs-2xl text-gray px-3 lg:px-6 py-2 lg:py-3  z-10">
                                        June 2024
                                    </Badge>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="hed-sm lg:hed-xl font-semibold mb-4">
                                        Powering media growth with Andrew Webb 📰
                                    </h3>
                                    <div className="space-y-4  fs-sm lg:[&>p]:text-sm opacity-90 ">
                                        <p>
                                            We’re excited to announce that Andrew Webb has joined PressHop to lead our Media Onboarding and Partnerships. With over 20 years of experience in the news and publishing industry, Andrew brings a wealth of expertise to our growing team.
                                        </p>
                                        <p>
                                            His stellar career includes leadership roles at prestigious organisations such as The Economist and News International, working closely with iconic titles like The Times and The Sunday Times. At PressHop, Andrew is spearheading our efforts to onboard publishers, broadcasters, and media houses — ensuring a smooth, impactful experience as Read more...
                                        </p>
                                        <Button variant="default">Meet the Team</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card
                            className={
                                "p-3 lg:p-8 rounded-xl lg:rounded-2xl mb-8 bg-white dark:bg-black "}
                        >
                            <div
                                className={
                                    "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"}
                            >
                                {/* Image */}
                                <div className="relative">
                                    <Image
                                        src="/images/images-update4.png"
                                        alt=""
                                        width={600}
                                        height={400}
                                        className="w-full h-40 xl:h-100 object-cover rounded-xl"
                                    />
                                    <Badge variant="secondary" className="absolute top-4 right-4 font-medium fs-md lg:fs-2xl text-gray px-3 lg:px-6 py-2 lg:py-3  z-10">
                                        June 2024
                                    </Badge>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="hed-sm lg:hed-xl font-semibold mb-4">
                                        Turbo-charging PressHop’s digital growth online
                                    </h3>
                                    <div className="space-y-4  fs-sm lg:[&>p]:text-sm opacity-90 ">
                                        <p>
                                            We’re pleased to share that Tom Welbourne and his team at The Good Marketer have partnered with PressHop to lead our digital marketing efforts.
                                        </p>
                                        <p>
                                            Known for helping ambitious brands scale through strategic, data-driven campaigns, The Good Marketer brings deep expertise in SEO, paid media, content strategy, and social media. Under Tom’s leadership, they’ve built a strong track record of driving measurable growth — making them the ideal partner as PressHop prepares for launch and rapid Read more...
                                        </p>
                                        <Button variant="default">The Good Marketer</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card
                            className={
                                "p-3 lg:p-8 rounded-xl lg:rounded-2xl mb-8 bg-black dark:bg-[#262626] text-white "}
                        >
                            <div
                                className={
                                    "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"}
                            >
                                {/* Image */}
                                <div className="relative">
                                    <Image
                                        src="/images/images-update5.png"
                                        alt=""
                                        width={600}
                                        height={400}
                                        className="w-full h-40 xl:h-100 object-cover rounded-xl"
                                    />
                                    <Badge variant="secondary" className="absolute top-4 right-4 font-medium fs-md lg:fs-2xl text-gray px-3 lg:px-6 py-2 lg:py-3  z-10">
                                        June 2024
                                    </Badge>
                                </div>

                                {/* Content */}
                                <div>
                                    <h3 className="hed-sm lg:hed-xl font-semibold mb-4">
                                        Powering media growth with Andrew Webb 📰
                                    </h3>
                                    <div className="space-y-4  fs-sm lg:[&>p]:text-sm opacity-90 ">
                                        <p>
                                            We’re excited to announce that Andrew Webb has joined PressHop to lead our Media Onboarding and Partnerships. With over 20 years of experience in the news and publishing industry, Andrew brings a wealth of expertise to our growing team.
                                        </p>
                                        <p>
                                            His stellar career includes leadership roles at prestigious organisations such as The Economist and News International, working closely with iconic titles like The Times and The Sunday Times. At PressHop, Andrew is spearheading our efforts to onboard publishers, broadcasters, and media houses — ensuring a smooth, impactful experience as Read more...
                                        </p>
                                        <Button variant="default">Meet the Team</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default updatePage