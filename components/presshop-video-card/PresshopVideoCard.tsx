"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle, Heart, MessageCircle, Share2, Video, Map, MonitorPlay, Wallet, Pause, Play, CalendarDays, MapPin, PiggyBank } from "lucide-react";
import { useRef, useState } from "react";


type PresshopVideoCardProps = {
    title: string;
    author: string;
    location: string;
    date: string;
    sold: string;
    isVideo: boolean;
    imageUrl: string;
    videoUrl: string;
};

export default function PresshopVideoCard({
    title,
    author,
    location,
    date,
    sold,
    isVideo,
    imageUrl,
    videoUrl,
}: PresshopVideoCardProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoToggle = () => {
        if (!videoRef.current) return;

        isPlaying ? videoRef.current.pause() : videoRef.current.play();
        setIsPlaying(!isPlaying);
    };

    return (
        <Card className="bg-[#0f0f1a]  rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all z-0 duration-300 w-full py-0 cursor-pointer">
            {/* Image Section */}
            <div className="relative w-full h-108">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-1" />
                {isVideo ? (
                    <video
                        ref={videoRef}
                        src={videoUrl}
                        className="absolute inset-0 w-full h-full object-cover"
                        muted
                        playsInline
                    />
                ) : (
                    <Image src={imageUrl} alt="news image" fill className="object-cover" />
                )}

                {/* Play / Pause */}
                {isVideo && (
                    <button
                        onClick={handleVideoToggle}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       w-14 h-14 bg-gray-800/60 rounded-full flex items-center
                       justify-center z-10 hover:bg-gray-800/80 transition"
                    >
                        {isPlaying ? (
                            <Pause size={24} strokeWidth={1} className="text-white" />
                        ) : (
                            <Video size={24} strokeWidth={1} className="text-white" />
                        )}
                    </button>
                )}

                <CardContent className="p-5 text-white space-y-1 absolute bottom-0 w-full z-10">
                    {/* Author Row */}
                    <div className='flex items-center gap-1 pb-3'>
                        <Image
                            src="/images/profile2.jpg"
                            width="24"
                            height="24"
                            alt="Author"
                            className=' h-3.5 w-3.5 rounded-full object-cover'
                        />
                        <div className="fs-lg  font-light line-height140  flex items-center">
                            <span className="ml-2 text-off-white">EFI Football</span>

                            <span className="ml-2 text-off-white  relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-[6px] before:bg-[#D1D1D1] before:rounded-full">
                                EFI Football
                            </span>
                        </div>
                    </div>
                    {/* Title */}
                    <h2 className="fs-2xl font-medium leading-snug line-clamp-1 overflow-hidden">
                        US Senate passes deal aimed
                    </h2>

                    {/* Footer Stats */}
                    <div className="flex items-center text-white justify-between  text-darkgray fs-sm pt-1 gap-1.5">
                        <div className="flex  text-white font-light items-center gap-1 fs-sm text-nowrap">
                            <PiggyBank strokeWidth={1} size={10} /> 2,009 Sold
                        </div>
                        <div className="flex  text-white font-light items-center fs-sm gap-1">
                            <MapPin size={10} strokeWidth={1} /> <span className="line-clamp-1 fs-sm">Grenfell Tower, London</span>
                        </div>
                        <div className="flex  text-white font-light items-center gap-1 fs-sm text-nowrap">
                            <CalendarDays size={10} strokeWidth={1} /> 29 Nov 2025
                        </div>
                    </div>
                </CardContent>
            </div>
        </Card>
    );
}

