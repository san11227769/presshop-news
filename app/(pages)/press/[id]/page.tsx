import AddsTypeOne from "@/components/adds/AddsTypeOne";
import DownloadApp from "@/components/download-app/DownloadApp";
import DownloadAppBanner from "@/components/download-the-app-banner/DownloadAppBanner";
import ImageSlider from "@/components/image-slider/ImageSlider";
import NewsCardTypeOne from "@/components/news-cards/NewsCardTypeOne";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, Heart, MessageSquare, Send, Bookmark } from "lucide-react";

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
function BlogDEtails() {
    return (
        <div className="px-6 py-4">
            <div className="container  m-auto">
                <div className="grid grid-cols-1 py-6">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-black dark:text-white fs-md lg:fs-xl" href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="font-bold text-pink fs-md lg:fs-xl">Press Details</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                </div>
                <div className="grid grid-cols-12 lg:px-4 gap-6">
                    <div className="col-span-12 xl:col-span-8 space-y-6">
                        <Card className="p-3 lg:p-8">

                            <div className="">
                                <ImageSlider images={["/images/blog/news1.png", "/images/blog/blog1.png", "/images/news1.png", "/images/blog/blog2.png"]} className="mb-5" />

                                <h1 className="font-bold hed-sm md:hed-md  lg:hed-xl mb-2">7 Safety Tips for Filming and Uploading Public Events</h1>

                                <div className="text-gray dark:[&>h3]:text-white fs-md md:fs-lg lg:fs-xl text-sm md:[&>h3]:fs-xl lg:[&>h3]:text-lg [&>h3]:text-black [&>h3]:font-medium space-y-4">
                                    <p>
                                        From protests and flash floods to heart-warming community gatherings and spontaneous moments of joy, public events often tell the stories that define communities. These moments can become powerful pieces of journalism, shining a light on truth, resilience, and the human experience.</p>

                                    <p>Filming in public however, especially when emotions are high or crowds are large, comes with its own set of risks. Safety, privacy, and awareness should always come before the shot. Whether you are a Hopper capturing something unfolding in real time or simply documenting an event you happened to witness, its important to protect yourself while helping the world see what matters.</p>
                                    <p>
                                        Here are seven essential safety practices to help you record and upload responsibly while keeping yourself and others safe.
                                    </p>
                                    <h3>
                                        1. Prioritise your personal safety over the shot
                                    </h3>
                                    <p>From protests and flash floods to heart-warming community gatherings and spontaneous moments of joy, public events often tell the stories that define communities. These moments can become powerful pieces of journalism, shining a light on truth, resilience, and the human experience.


                                    </p>
                                    <p>
                                        Filming in public however, especially when emotions are high or crowds are large, comes with its own set of risks. Safety, privacy, and awareness should always come before the shot. Whether you are a Hopper capturing something unfolding in real time or simply documenting an event you happened to witness, its important to protect yourself while helping the world see what matters.</p>
                                    <p>Here are seven essential safety practices to help you record and upload responsibly while keeping yourself and others safe.</p>
                                    <h3>
                                        2. Respect privacy and personal boundaries
                                    </h3>
                                    <p>From protests and flash floods to heart-warming community gatherings and spontaneous moments of joy, public events often tell the stories that define communities. These moments can become powerful pieces of journalism, shining a light on truth, resilience, and the human experience.


                                    </p>
                                    <p>
                                        Filming in public however, especially when emotions are high or crowds are large, comes with its own set of risks. Safety, privacy, and awareness should always come before the shot. Whether you are a Hopper capturing something unfolding in real time or simply documenting an event you happened to witness, its important to protect yourself while helping the world see what matters.</p>
                                    <p>Here are seven essential safety practices to help you record and upload responsibly while keeping yourself and others safe.</p>
                                    <h3>
                                        3. Use your anonymity to stay secure
                                    </h3>
                                    <p>From protests and flash floods to heart-warming community gatherings and spontaneous moments of joy, public events often tell the stories that define communities. These moments can become powerful pieces of journalism, shining a light on truth, resilience, and the human experience.


                                    </p>
                                    <p>
                                        Filming in public however, especially when emotions are high or crowds are large, comes with its own set of risks. Safety, privacy, and awareness should always come before the shot. Whether you are a Hopper capturing something unfolding in real time or simply documenting an event you happened to witness, its important to protect yourself while helping the world see what matters.</p>
                                    <p>Here are seven essential safety practices to help you record and upload responsibly while keeping yourself and others safe.</p>
                                    <h3>
                                        4. Know your local filming rights
                                    </h3>
                                    <p>From protests and flash floods to heart-warming community gatherings and spontaneous moments of joy, public events often tell the stories that define communities. These moments can become powerful pieces of journalism, shining a light on truth, resilience, and the human experience.


                                    </p>
                                    <p>
                                        Filming in public however, especially when emotions are high or crowds are large, comes with its own set of risks. Safety, privacy, and awareness should always come before the shot. Whether you are a Hopper capturing something unfolding in real time or simply documenting an event you happened to witness, its important to protect yourself while helping the world see what matters.</p>
                                    <p>Here are seven essential safety practices to help you record and upload responsibly while keeping yourself and others safe.</p>
                                    <h3>
                                        5. Keep your footage authentic and unedited
                                    </h3>
                                    <p>From protests and flash floods to heart-warming community gatherings and spontaneous moments of joy, public events often tell the stories that define communities. These moments can become powerful pieces of journalism, shining a light on truth, resilience, and the human experience.


                                    </p>
                                    <p>
                                        Filming in public however, especially when emotions are high or crowds are large, comes with its own set of risks. Safety, privacy, and awareness should always come before the shot. Whether you are a Hopper capturing something unfolding in real time or simply documenting an event you happened to witness, its important to protect yourself while helping the world see what matters.</p>
                                    <p>Here are seven essential safety practices to help you record and upload responsibly while keeping yourself and others safe.</p>
                                    <Image src="/images/blog/blog2.png" alt="quote" width={800} height={200} className="my-6 w-full rounded-2xl" />
                                    <h3>
                                        6. Know your local filming rights
                                    </h3>
                                    <p>From protests and flash floods to heart-warming community gatherings and spontaneous moments of joy, public events often tell the stories that define communities. These moments can become powerful pieces of journalism, shining a light on truth, resilience, and the human experience.


                                    </p>
                                    <p>
                                        Filming in public however, especially when emotions are high or crowds are large, comes with its own set of risks. Safety, privacy, and awareness should always come before the shot. Whether you are a Hopper capturing something unfolding in real time or simply documenting an event you happened to witness, its important to protect yourself while helping the world see what matters.</p>
                                    <p>Here are seven essential safety practices to help you record and upload responsibly while keeping yourself and others safe.</p>
                                    <h3>
                                        7. Keep your footage authentic and unedited
                                    </h3>
                                    <p>From protests and flash floods to heart-warming community gatherings and spontaneous moments of joy, public events often tell the stories that define communities. These moments can become powerful pieces of journalism, shining a light on truth, resilience, and the human experience.


                                    </p>
                                    <p>
                                        Filming in public however, especially when emotions are high or crowds are large, comes with its own set of risks. Safety, privacy, and awareness should always come before the shot. Whether you are a Hopper capturing something unfolding in real time or simply documenting an event you happened to witness, its important to protect yourself while helping the world see what matters.</p>
                                    <p>Here are seven essential safety practices to help you record and upload responsibly while keeping yourself and others safe.</p>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className='flex text-sm gap-1 md:gap-4 items-center border-t border-gray-200 pt-8'>
                                    <Link href='/' className='flex gap-1 text-gray fs-xs md:fs-md lg:fs-xl items-center'>
                                        <Heart className='w-3 md:w-3 lg:w-4' />  1900 likes
                                    </Link>
                                    <Link href='/' className='flex gap-1 text-gray fs-xs md:fs-md lg:fs-xl items-center'>
                                        <MessageSquare className='w-3 md:w-4 lg:w-4' />  1900 comments
                                    </Link>
                                    <Link href='/' className='flex gap-1 text-gray fs-xs md:fs-md lg:fs-xl items-center'>
                                        <Send className='w-3 md:w-3 lg:w-4' /> 1900 shares
                                    </Link>
                                </div>
                                <div className='flex text-sm gap-2 md:gap-4 items-center border-t border-gray-200 pt-8'>
                                    <Link href='/' className='flex gap-1 text-gray fs-md lg:fs-xl items-center'>
                                        <Heart className='w-3 md:w-3 lg:w-4' />
                                    </Link>
                                    <Link href='/' className='flex gap-1 text-gray fs-md lg:fs-xl items-center'>
                                        <Bookmark className='w-3 md:w-3 lg:w-4' />
                                    </Link>
                                    <Link href='/' className='flex gap-1 text-gray fs-md lg:fs-xl items-center'>
                                        <MessageSquare className='w-3 md:w-4 lg:w-4' />
                                    </Link>
                                    <Link href='/' className='flex gap-1 text-gray fs-md lg:fs-xl items-center'>
                                        <Send className='w-3 md:w-3 lg:w-4' />
                                    </Link>

                                </div>
                            </div>

                        </Card>
                        <Card className="p-3 lg:p-8">
                            {/* COMMENTS SECTION */}
                            <div className="">
                                <h3 className="font-bold fs-2xl mb-6">3 Comments</h3>

                                {/* Comment Item */}
                                <div className="flex gap-4 mb-6">
                                    <Image
                                        src="/images/profile1.jpg"
                                        alt="User"
                                        width={48}
                                        height={48}
                                        className="rounded-full w-10 h-10 object-cover"
                                    />

                                    <div className="flex-1">
                                        <div className="flex items-center flex-col lg:flex-row  gap-2 mb-1 justify-start">
                                            <h4 className="font-semibold fs-xl w-full lg:w-auto">Eleanor Pena</h4>
                                            <span className="text-gray w-full lg:w-auto fs-md relative pl-3 before:content-['•'] before:absolute  before:left-0
                                                            before:top-1.5 before:-translate-y-1/2 before:text-4xl">
                                                29 November 25
                                            </span>
                                        </div>
                                        <p className="text-gray fs-md mb-2">
                                            Great update! The layout feels much clearer now, and everything is easier to navigate, making the overall user experience smoother and more enjoyable.
                                        </p>
                                        <div className="flex gap-6 text-gray fs-lg">
                                            <span className="flex items-center gap-1">
                                                <Heart className="w-4" /> 200 likes
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MessageSquare className="w-4" /> 100 replies
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full pl-16 mb-3">
                                    <div className="flex gap-4 mb-6">
                                        <Image
                                            src="/images/profile2.jpg"
                                            alt="User"
                                            width={48}
                                            height={48}
                                            className="rounded-full w-10 h-10 object-cover"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center flex-col lg:flex-row  gap-2 mb-1 justify-start">
                                                <h4 className="font-semibold fs-xl w-full lg:w-auto">Eleanor Pena</h4>
                                                <span className="text-gray w-full lg:w-auto fs-md relative pl-3 before:content-['•'] before:absolute  before:left-0
                                                            before:top-1.5 before:-translate-y-1/2 before:text-4xl">
                                                    29 November 25
                                                </span>
                                            </div>
                                            <p className="text-gray fs-md mb-2">
                                                This feature looks really helpful. Excited to see how it improves the overall experience!
                                            </p>
                                            <div className="flex gap-6 text-gray fs-sm">
                                                <span className="flex items-center gap-1">
                                                    <Heart className="w-4" /> 200 likes
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MessageSquare className="w-4" /> 100 replies
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Reply Input */}
                                    <div className="bg-gray-100 dark:bg-[#4A4A4A] rounded-xl p-4 flex items-end gap-3">
                                        <Textarea
                                            placeholder="Share your comment..."
                                            className="bg-transparent   dark:bg-[#4A4A4A] resize-none fs-md border-0"
                                        />

                                        <button
                                            aria-label="Send comment"
                                            className="bg-black text-white rounded-md p-2 shrink-0"
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>



                                {/* Another Comment */}
                                <div className="flex gap-4 mb-6">
                                    <Image
                                        src="/images/profile2.jpg"
                                        alt="User"
                                        width={48}
                                        height={48}
                                        className="rounded-full w-10 h-10 object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center flex-col lg:flex-row  gap-2 mb-1 justify-start">
                                            <h4 className="font-semibold fs-xl w-full lg:w-auto">Eleanor Pena</h4>
                                            <span className="text-gray w-full lg:w-auto fs-md relative pl-3 before:content-['•'] before:absolute  before:left-0
                                                            before:top-1.5 before:-translate-y-1/2 before:text-4xl">
                                                29 November 25
                                            </span>
                                        </div>
                                        <p className="text-gray fs-md mb-2">
                                            This feature looks really helpful. Excited to see how it improves the overall experience!
                                        </p>
                                        <div className="flex gap-6 text-gray fs-sm">
                                            <span className="flex items-center gap-1">
                                                <Heart className="w-4" /> 200 likes
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MessageSquare className="w-4" /> 100 replies
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mb-6">
                                    <Image
                                        src="/images/profile1.jpg"
                                        alt="User"
                                        width={48}
                                        height={48}
                                        className="rounded-full w-10 h-10 object-cover"
                                    />
                                    <div className="flex-1">
                                        <div className="flex items-center flex-col lg:flex-row  gap-2 mb-1 justify-start">
                                            <h4 className="font-semibold fs-xl w-full lg:w-auto">Eleanor Pena</h4>
                                            <span className="text-gray w-full lg:w-auto fs-md relative pl-3 before:content-['•'] before:absolute  before:left-0
                                                            before:top-1.5 before:-translate-y-1/2 before:text-4xl">
                                                29 November 25
                                            </span>
                                        </div>
                                        <p className="text-gray fs-md mb-2">
                                            Great update! The layout feels much clearer now, and everything is easier to navigate, making the overall user experience smoother and more enjoyable.
                                        </p>
                                        <div className="flex gap-6 text-gray fs-lg">
                                            <span className="flex items-center gap-1">
                                                <Heart className="w-4" /> 200 likes
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MessageSquare className="w-4" /> 100 replies
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Add Comment */}
                                <h3 className="font-bold fs-xl mb-4">Comments</h3>
                                <div className="bg-gray-100 dark:bg-[#4A4A4A] rounded-xl p-4 flex items-end gap-3">
                                    <Textarea
                                        placeholder="Share your comment..."
                                        className="bg-transparent dark:bg-[#4A4A4A] resize-none fs-md border-0"
                                    />

                                    <button
                                        aria-label="Send comment"
                                        className="bg-black text-white rounded-md p-2 shrink-0"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </Card>
                        <div className="xl:hidden">
                            <DownloadAppBanner rightImage="/images/download-app-banner.png" overlayColor="#EC4E54"
                                subtitle="Access detailed maps and directions right from your phone anytime, anywhere with ease" />
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-4">

                        <div>
                            <div className="hidden lg:block">
                                <AddsTypeOne />
                            </div>
                            <div className="flex justify-between items-center py-4">
                                <h2 className="font-bold hed-lg ">Popular News</h2>
                                <button className="text-pink fs-md lg:fs-2xl flex gap-2">
                                    See All <ChevronRight />
                                </button>
                            </div>
                            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
                                <NewsCardTypeOne />
                                <NewsCardTypeOne />
                                <NewsCardTypeOne />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogDEtails