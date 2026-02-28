"use client"

import { useRef, useState } from "react";
import PressHopWorksCard from "@/components/press-hop-works-card/PressHopWorksCard";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Image from "next/image";
import { pressHopWorksData } from "@/data/pressHopWorks";
import DownloadApp from "@/components/download-app/DownloadApp";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card";
import { BrickWallFire, Pause, Video } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
function AppPage() {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoToggle = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }

        setIsPlaying(!isPlaying);
    };
    return (
        <>
            <div className='pt-10 pb-0 lg:pb-10 px-4 lg:px-6'>
                <div className="container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h1 className="hed-2xl lg:hed-5xl font-medium line-height120 mb-6 lg:mb-10">
                                Let’s talk<br />
                                <strong className="font-extrabold">PressHop</strong>
                            </h1>
                            <div className="space-y-4 text-gray mb-8 fs-md sm:fs-lg lg:fs-2xl">
                                <p>Get ready — PressHop is about to change the game.</p>
                                <p>We are live now. We’ve not just launched an app, we’ve launched a revolution. PressHop offers you a seamless, secure way to monetise real moments, without the hassle. Capture it. Upload it. Get paid. Meanwhile, an army of publications, broadcasters, and digital giants are standing by, eager to buy your stories as they unfold.
                                </p>
                                <p>But it’s not just about empowering creators. PressHop is tearing up the old rulebook on how the press sources content - cutting out middlemen, slashing costs, and delivering speed, authenticity, and transparency at a level the industry’s never seen before. This isn’t an upgrade — it’s a total reset!
                                </p>
                            </div>

                            <div className="space-x-2">
                                <Button variant="default" >
                                    Read More
                                </Button>
                                <Button variant="light" >
                                    About Us
                                </Button>
                            </div>

                        </div>
                        <div>
                            <Image src="/images/appbanner.png" alt="" width={600} height={600} className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-6 lg:py-10 px-4 lg:px-6'>
                <div className="container m-auto">
                    <h2 className="hed-lg lg:hed-2xl mb-2.5 lg:mb-8 font-medium">How <strong>PressHop</strong> works?</h2>
                    <div className="grid-cols-1 hidden  lg:grid gap-6">
                        {pressHopWorksData?.slice(0, 5).map((item) => (
                            <PressHopWorksCard
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                reverse={item.reverse}
                                dark={item.dark}
                            />
                        ))}
                    </div>
                    <div className=" grid-cols-3 hidden md:grid lg:hidden gap-6">
                        {pressHopWorksData?.slice(0, 3).map((item) => (
                            <PressHopWorksCard
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                reverse={item.reverse}
                                dark={item.dark}
                            />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:hidden gap-6">
                        {pressHopWorksData?.slice(0, 2).map((item) => (
                            <PressHopWorksCard
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                reverse={item.reverse}
                                dark={item.dark}
                            />
                        ))}
                    </div>
                    <div className="w-full justify-center flex lg:hidden">
                        <Button variant="default" className="w-30 mt-6">Load more</Button>
                    </div>
                </div>
            </div>
            <div className='py-15 px-4 bg-black lg:px-6'>
                <div className="container m-auto">
                    <Carousel opts={{ align: "start" }} className="relative">
                        <div className='flex justify-between items-center xl:hidden'>
                            <h2 className='font-medium  mb-4 lg:mb-8 hed-lg lg:hed-2xl text-white'> Inside the PressHop App</h2>

                            <div className="flex gap-3">
                                <CarouselPrevious className="static rounded-full disabled:bg-transparent  disabled:text-white  bg-pink  text-white" />
                                <CarouselNext className="static rounded-full disabled:bg-transparent  disabled:text-white  bg-pink  text-white" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
                            <h2 className="hed-2xl font-medium text-white hidden xl:block">
                                Inside the PressHop App
                            </h2>
                            <div className="xl:text-end gap-12">
                                <Button variant="default" className="w-30 me-2">Video</Button>
                                <Button variant="outline" className="w-30">Get In Touch</Button>
                            </div>
                        </div>
                        <div className="mb-8">
                            <p className="text-gray">
                                <span className="text-pink">Shoot pics & sell:</span>  New-age technology for selling content directly, and discreetly to the Press
                            </p>
                        </div>

                        <div className="hidden xl:grid grid-cols-3 gap-6">

                            <Card className="p-3 bg-transparent">
                                <Image src="/images/soohpick3.png" height={300} width={300} alt="" className="w-full" />
                                <h4 className="fs-2xl text-white font-medium">
                                    Shoot content as you see it

                                </h4>
                                <p className="fs-xl text-off-white font-light">
                                    The <strong className="font-medium">PressHop</strong> app launches you straight into action.
                                    With an instant-access camera and video interface, you’re ready to capture breaking moments without Read more...
                                </p>
                            </Card>
                            <Card className="p-3 bg-transparent">
                                <Image src="/images/soohpick2.png" height={300} width={300} alt="" className="w-full" />
                                <h4 className="fs-2xl text-white font-medium">
                                    Shoot content as you see it

                                </h4>
                                <p className="fs-xl text-off-white font-light">
                                    The <strong className="font-medium">PressHop</strong> app launches you straight into action.
                                    With an instant-access camera and video interface, you’re ready to capture breaking moments without Read more...
                                </p>
                            </Card>
                            <Card className="p-3 bg-transparent">
                                <Image src="/images/soohpick1.png" height={300} width={300} alt="" className="w-full" />
                                <h4 className="fs-2xl text-white font-medium">
                                    Shoot content as you see it

                                </h4>
                                <p className="fs-xl text-off-white font-light">
                                    The <strong className="font-medium">PressHop</strong> app launches you straight into action.
                                    With an instant-access camera and video interface, you’re ready to capture breaking moments without Read more...
                                </p>
                            </Card>
                        </div>

                        <CarouselContent className="xl:hidden">
                            <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/2.5 xl:basis-1/4">
                                <Card className="p-3 bg-transparent">
                                    <Image src="/images/soohpick1.png" height={300} width={300} alt="" className="w-full" />
                                    <h4 className="fs-2xl text-white font-medium">
                                        Shoot content as you see it

                                    </h4>
                                    <p className="fs-xl text-off-white font-light">
                                        The <strong className="font-medium">PressHop</strong> app launches you straight into action.
                                        With an instant-access camera and video interface, you’re ready to capture breaking moments without Read more...
                                    </p>
                                </Card>
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/2.5 xl:basis-1/4">
                                <Card className="p-3 bg-transparent">
                                    <Image src="/images/soohpick1.png" height={300} width={300} alt="" className="w-full" />
                                    <h4 className="fs-2xl text-white font-medium">
                                        Shoot content as you see it

                                    </h4>
                                    <p className="fs-xl text-off-white font-light">
                                        The <strong className="font-medium">PressHop</strong> app launches you straight into action.
                                        With an instant-access camera and video interface, you’re ready to capture breaking moments without Read more...
                                    </p>
                                </Card>
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/2.5 xl:basis-1/4">
                                <Card className="p-3 bg-transparent">
                                    <Image src="/images/soohpick1.png" height={300} width={300} alt="" className="w-full" />
                                    <h4 className="fs-2xl text-white font-medium">
                                        Shoot content as you see it

                                    </h4>
                                    <p className="fs-xl text-off-white font-light">
                                        The <strong className="font-medium">PressHop</strong> app launches you straight into action.
                                        With an instant-access camera and video interface, you’re ready to capture breaking moments without Read more...
                                    </p>
                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
            <div className='py-10 px-4  lg:px-6'>
                <div className="container m-auto">
                    <h3 className="hed-2xl line-height120 font-medium mb-2">
                        Your next gig is just literally a tap away
                    </h3>
                    <p className="text-gray fs-2xl">
                        Uber-style news assignments with real-time rewards
                    </p>
                    <Image src="/images/product-showcase-container.png" height={340} width={1200} alt="" className="w-full h-85 object-cover my-8 rounded-3xl" />

                    <Carousel opts={{ align: "start" }} className="relative">
                        <div className='flex justify-between items-center xl:hidden'>
                            <h2 className='font-medium  mb-4 lg:mb-8 hed-lg lg:hed-2xl'>
                                Explore More</h2>

                            <div className="flex gap-3">
                                <CarouselPrevious className="static rounded-full disabled:bg-transparent  disabled:text-white  bg-pink  text-white" />
                                <CarouselNext className="static rounded-full disabled:bg-transparent  disabled:text-white  bg-pink  text-white" />
                            </div>
                        </div>
                        <CarouselContent className="xl:hidden">
                            <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/2.5 xl:basis-1/4">
                                <Card className="p-6">
                                    <div>
                                        <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                            <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                        </span>
                                    </div>
                                    <h5 className=" fs-2xl font-medium text-dark">
                                        Verified content at your fingertips
                                    </h5>
                                    <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                        <p>
                                            Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                        </p>
                                        <p>
                                            Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                        </p>
                                    </div>

                                </Card>
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/2.5 xl:basis-1/4">
                                <Card className="p-3 bg-transparent">
                                    <Image src="/images/soohpick1.png" height={300} width={300} alt="" className="w-full" />
                                    <h4 className="fs-2xl text-white font-medium">
                                        Shoot content as you see it

                                    </h4>
                                    <p className="fs-xl text-off-white font-light">
                                        The <strong className="font-medium">PressHop</strong> app launches you straight into action.
                                        With an instant-access camera and video interface, you’re ready to capture breaking moments without Read more...
                                    </p>
                                </Card>
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/2.5 xl:basis-1/4">
                                <Card className="p-6">
                                    <div>
                                        <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                            <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                        </span>
                                    </div>
                                    <h5 className=" fs-2xl font-medium text-dark">
                                        Verified content at your fingertips
                                    </h5>
                                    <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                        <p>
                                            Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                        </p>
                                        <p>
                                            Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                        </p>
                                    </div>

                                </Card>
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/2.5 xl:basis-1/4">
                                <Card className="p-6">
                                    <div>
                                        <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                            <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                        </span>
                                    </div>
                                    <h5 className=" fs-2xl font-medium text-dark">
                                        Verified content at your fingertips
                                    </h5>
                                    <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                        <p>
                                            Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                        </p>
                                        <p>
                                            Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                        </p>
                                    </div>

                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                    <div className=" grid-cols-2 gap-8 hidden xl:grid">


                        <Card className="p-6">
                            <div>
                                <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                    <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                </span>
                            </div>
                            <h5 className=" fs-2xl font-medium text-dark">
                                Verified content at your fingertips
                            </h5>
                            <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                <p>
                                    Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                </p>
                                <p>
                                    Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                </p>
                            </div>

                        </Card>
                        <Card className="p-6">
                            <div>
                                <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                    <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                </span>
                            </div>
                            <h5 className=" fs-2xl font-medium text-dark">
                                Verified content at your fingertips
                            </h5>
                            <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                <p>
                                    Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                </p>
                                <p>
                                    Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                </p>
                            </div>

                        </Card>
                        <Card className="p-6">
                            <div>
                                <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                    <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                </span>
                            </div>
                            <h5 className=" fs-2xl font-medium text-dark">
                                Verified content at your fingertips
                            </h5>
                            <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                <p>
                                    Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                </p>
                                <p>
                                    Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                </p>
                            </div>

                        </Card>
                        <Card className="p-6">
                            <div>
                                <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                    <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                </span>
                            </div>
                            <h5 className=" fs-2xl font-medium text-dark">
                                Verified content at your fingertips
                            </h5>
                            <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                <p>
                                    Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                </p>
                                <p>
                                    Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                </p>
                            </div>

                        </Card>

                    </div>
                </div>

            </div>
            <Card
                className="relative p-8 border-0 rounded-none  hover:shadow-lg transition-shadow min-h-[580px] overflow-hidden"
            >
                <video
                    ref={videoRef}
                    src="/video/new.mp4"
                    className="absolute inset-0 w-full  rounded-none h-full object-cover"
                    muted
                    playsInline
                />
                {/* OVERLAY */}
                <div className="absolute inset-0 rounded-0 bg-gradient-to-t from-gray-900/70 to-transparent z-0" />
                <button
                    onClick={handleVideoToggle}
                    className="
                        absolute top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2
                        w-16 h-16
                        bg-gray-800/60 rounded-full
                        flex items-center justify-center
                        z-10
                        cursor-pointer
                        hover:bg-gray-800/80
                        transition
                    ">
                    {isPlaying ? (
                        <Pause size={24} strokeWidth={1} className="text-white" />
                    ) : (
                        <Video
                            size={24} strokeWidth={1} className="text-white" />
                    )}
                </button>
            </Card>
            <div className='py-10 px-4  lg:px-6'>
                <div className="container m-auto">
                    <Carousel opts={{ align: "start" }} className="relative">
                        <div className='flex justify-between items-center xl:hidden'>
                            <h2 className='font-medium  mb-4 lg:mb-8 hed-lg lg:hed-2xl'>
                                Explore More</h2>

                            <div className="flex gap-3">
                                <CarouselPrevious className="static rounded-full disabled:bg-transparent  disabled:text-white  bg-pink  text-white" />
                                <CarouselNext className="static rounded-full disabled:bg-transparent  disabled:text-white  bg-pink  text-white" />
                            </div>
                        </div>
                        <CarouselContent className="xl:hidden">
                            <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/2.5 xl:basis-1/4">
                                <Card className="p-6">
                                    <div>
                                        <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                            <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                        </span>
                                    </div>
                                    <h5 className=" fs-2xl font-medium text-dark">
                                        Verified content at your fingertips
                                    </h5>
                                    <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                        <p>
                                            Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                        </p>
                                        <p>
                                            Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                        </p>
                                    </div>

                                </Card>
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/2.5 xl:basis-1/4">
                                <Card className="p-6">
                                    <div>
                                        <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                            <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                        </span>
                                    </div>
                                    <h5 className=" fs-2xl font-medium text-dark">
                                        Verified content at your fingertips
                                    </h5>
                                    <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                        <p>
                                            Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                        </p>
                                        <p>
                                            Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                        </p>
                                    </div>

                                </Card>
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/2.5 xl:basis-1/4">
                                <Card className="p-6">
                                    <div>
                                        <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                            <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                        </span>
                                    </div>
                                    <h5 className=" fs-2xl font-medium text-dark">
                                        Verified content at your fingertips
                                    </h5>
                                    <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                        <p>
                                            Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                        </p>
                                        <p>
                                            Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                        </p>
                                    </div>

                                </Card>
                            </CarouselItem>
                            <CarouselItem className="basis-1/1 sm:basis-1/2 md:basis-1/2.5 xl:basis-1/4">
                                <Card className="p-6">
                                    <div>
                                        <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                            <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                        </span>
                                    </div>
                                    <h5 className=" fs-2xl font-medium text-dark">
                                        Verified content at your fingertips
                                    </h5>
                                    <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                        <p>
                                            Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                        </p>
                                        <p>
                                            Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                        </p>
                                    </div>

                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>
                    <div className="hidden xl:grid grid-cols-2 gap-8">

                        <Card className="p-6">
                            <div>
                                <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                    <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                </span>
                            </div>
                            <h5 className=" fs-2xl font-medium text-dark">
                                Verified content at your fingertips
                            </h5>
                            <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                <p>
                                    Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                </p>
                                <p>
                                    Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                </p>
                            </div>

                        </Card>
                        <Card className="p-6">
                            <div>
                                <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                    <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                </span>
                            </div>
                            <h5 className=" fs-2xl font-medium text-dark">
                                Verified content at your fingertips
                            </h5>
                            <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                <p>
                                    Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                </p>
                                <p>
                                    Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                </p>
                            </div>

                        </Card>
                        <Card className="p-6">
                            <div>
                                <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                    <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                </span>
                            </div>
                            <h5 className=" fs-2xl font-medium text-dark">
                                Verified content at your fingertips
                            </h5>
                            <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                <p>
                                    Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                </p>
                                <p>
                                    Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                </p>
                            </div>

                        </Card>
                        <Card className="p-6">
                            <div>
                                <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                    <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                </span>
                            </div>
                            <h5 className=" fs-2xl font-medium text-dark">
                                Verified content at your fingertips
                            </h5>
                            <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                <p>
                                    Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                </p>
                                <p>
                                    Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                </p>
                            </div>

                        </Card>
                        <Card className="p-6">
                            <div>
                                <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                    <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                </span>
                            </div>
                            <h5 className=" fs-2xl font-medium text-dark">
                                Verified content at your fingertips
                            </h5>
                            <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                <p>
                                    Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                </p>
                                <p>
                                    Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                </p>
                            </div>

                        </Card>
                        <Card className="p-6">
                            <div>
                                <span className="bg-pink w-20 h-20 rounded-2xl flex items-center justify-center">
                                    <Image width={40} height={40} src="/images/icon/icon-1.png" alt="" />
                                </span>
                            </div>
                            <h5 className=" fs-2xl font-medium text-dark">
                                Verified content at your fingertips
                            </h5>
                            <div className="text-gray fs-xl [&_p]:line-height140 [&_p]:mb-4">
                                <p>
                                    Registered publishers enjoy access to a continuous flow of thousands of photos, videos, recordings, and scans uploaded by citizen journalists from across the globe.

                                </p>
                                <p>
                                    Every piece of content on PressHop is automatically date, time, and location-stamped to ensure its authenticity. In addition, our rigorous quality control teams meticulously vet each submission, eliminating unwanted material and ensuring that what you receive is 100% genuine and reliable
                                </p>
                            </div>

                        </Card>
                    </div>
                </div>

            </div>
            <DownloadApp />
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 items-center">
                        <div>
                            <Image src="/images/appinfo4.png" width="590" height="432" className="w-full object-cover rounded-2xl" alt="" />
                        </div>
                        <div className="[&_p]:mb-4 [&_p:last-child]:mb-0">
                            <h2 className="hed-lg lg:hed-3xl line-height120 text-dark font-medium mb-4">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-gray fs-md lg:fs-2xl">
                                Over the past few months, we’ve had the chance to meet and chat with hundreds of amazing users across London from bright-eyed 18-year-olds to wise and witty 72-year-olds. The verdict? They’re loving PressHop — and the brilliant opportunity to turn everyday moments into money.</p>

                            <p className="text-gray fs-md lg:fs-2xl">
                                Below, we’ve gathered some of the most common questions they threw our way — and our answers, fresh and ready for you.</p>

                            <p className="text-gray fs-md lg:fs-2xl"> Got a question we haven’t covered? No problem. Chat with us live or drop a note to Emily (our in-house rabbit and chief mischief-maker) at hello@presshop.com — she loves a good natter. 🐰
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1">
                        <Accordion type="single" defaultValue="item-1" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>When will the PressHop app be launched?</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-gray fs-md lg:fs-xl">
                                        <strong>PressHop's</strong> launched and LIVE across 06 cities in the UK and 02 cities in the USA.
                                    </p>
                                    <p className="text-gray fs-md lg:fs-xl">
                                        We are available in Birmingham, Bristol, Leeds, Liverpool, London, Los Angeles, Manchester and New York. The response so far has been nothing short of brilliant, with tens of thousands of people loving the idea and itching to be part of it.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It adheres to the WAI-ARIA design pattern.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 items-center">

                        <div className="[&_p]:mb-4 [&_p:last-child]:mb-0">
                            <Image
                                src="/images/footer-logo.png"
                                alt="PressHop Logo"
                                width={220}
                                height={100}
                                className="w-41 mb-6 h-auto cursor-pointer dark:invert"
                            />
                            <h2 className="hed-lg lg:hed-3xl  line-height120 text-dark font-medium mb-4">
                                We've crossed 20,000 Hoppers within 3 months
                            </h2>
                            <p className="text-gray fs-md lg:fs-2xl">
                                The movement is growing and fast.
                            </p>

                            <p className="text-gray fs-md lg:fs-2xl"> We’ve now crossed 20,000 Hoppers across the UK, US, and beyond, with new users joining by the hour. These are everyday people turning everyday moments into news — earning money, making headlines, and powering a new wave of citizen journalism.</p>

                            <p className="text-gray fs-md lg:fs-2xl"> If you’ve ever captured something newsworthy, or just fancy turning your camera roll into cash, now’s the time. Download the PressHop app, join the community, and start selling your content directly to the press. Your story could be the next front page
                            </p>
                        </div>
                        <div>
                            <Image src="/images/appinfo5.png" width="590" height="432" className="w-full object-cover rounded-2xl" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppPage