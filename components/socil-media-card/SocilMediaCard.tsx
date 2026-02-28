"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Heart, MessageCircle, Share2, Video, Instagram, MessageSquare, Send, } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link";
export default function SocilMediaCard() {
    return (
        <Card className="bg-[#0f0f1a]/10 border border-[#2c2c52]
         p-4 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 w-full cursor-pointer">
            {/* Image Section */}
            <div className="relative w-full" >
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className="relative">
                            <Image
                                src="/images/profile1.jpg"
                                alt="news image"
                                width="100"
                                height="200"

                                className="object-cover w-full h-65  rounded-2xl"
                            />

                            {/* Play Icon */}
                            <div className="absolute inset-0 flex items-center justify-center z-1">
                                <div className="bg-black/50 backdrop-blur-sm w-14 h-14 flex items-center justify-center rounded-full">
                                    <Video size={34} className="text-white" />
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem className="relative">
                            <Image
                                src="/images/thum.png"
                                alt="news image"
                                width="150"
                                height="200"

                                className="object-cover w-full h-65 rounded-2xl"
                            />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <CardContent className="text-white p-0">
                {/* Author Row */}
                <div className='flex items-center gap-1 py-4'>
                    <Image src="/images/profile2.jpg" width="24" height="24" alt="News Image" className=' h-3.5 w-3.5 rounded-full object-cover' />
                    <div className="fs-lg text-gray flex items-center">
                        <span className="ml-2">EFI Football</span>

                        <span className="ml-2 relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-[6px] before:bg-gray-400 before:rounded-full">
                            EFI Football
                        </span>
                    </div>

                </div>

                {/* Title */}
                <h2 className="hed-lg font-medium leading-snug mb-4 line-clamp-2 min-h-9 text-justify">
                    Two Major League Baseball pitchers charged in sports
                </h2>

                {/* Footer Stats */}
                <div className='flex fs-sm justify-between items-center'>
                    <Link href='/' className='flex fs-sm gap-1 line-height120 text-off-white items-center'>
                        <Heart size={10} />  1,900 liks
                    </Link>
                    <Link href='/' className='flex fs-sm gap-1 line-height120 text-off-whiteitems-center'>
                        <MessageSquare size={10} />  1,900 comment
                    </Link>
                    <Link href='/' className='flex fs-sm gap-1 line-height120 text-off-white items-center'>
                        <Send size={10} /> 11 Shares
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
}
