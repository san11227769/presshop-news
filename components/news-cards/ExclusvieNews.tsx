"use client";

import { useRef, useState } from "react";
import { Play, Pause, Video } from "lucide-react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

export default function ExclusiveNews() {
    const video = true;
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
        <Card
            className="relative p-8 border rounded-3xl hover:shadow-lg transition-shadow mb-3 min-h-[580px] overflow-hidden"
        >
            {/* VIDEO / IMAGE BACKGROUND */}
            {video ? (
                <video
                    ref={videoRef}
                    src="/video/new.mp4"
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    playsInline
                />
            ) : (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('../images/frame.png')" }}
                />
            )}

            {/* OVERLAY */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-gray-900/70 to-transparent z-0" />

            {/* EXCLUSIVE BADGE */}
            <Badge className="absolute top-8 right-8 font-bold fs-2xl px-6 py-3 z-10">
                EXCLUSIVE
            </Badge>

            {/* PLAY / PAUSE ICON */}
            {video && (
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
                    "
                >
                    {isPlaying ? (
                        <Pause size={24} strokeWidth={1} className="text-white" />
                    ) : (
                        <Video size={24} strokeWidth={1} className="text-white" />
                    )}
                </button>
            )}

            {/* BOTTOM TEXT */}
            <div className="absolute bottom-6 w-4/5 left-0 px-8 z-10">
                <h2 className="hed-xl line-height120 font-medium mb-6 text-white">
                    Champion's weekend from flawless
                </h2>
                <p className="text-off-white line-clamp-2 fs-4xl line-height120 font-light max-w-3/2">
                    Lando Norris was asked after the Sao Paulo Grand Prix whether he was now thinking about the championship.
                </p>
            </div>
        </Card>
    );
}
