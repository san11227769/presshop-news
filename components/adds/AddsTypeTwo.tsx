import React from 'react'
import { Card } from '../ui/card'
import Image from 'next/image'
import { Expand, Fullscreen, Video, ZoomIn } from 'lucide-react'
function AddsTypeTwo() {
    return (
        <Card
            className="relative p-4 border rounded-2xl hover:shadow-lg z-0 transition-shadow  min-h-40 h-full 
            bg-cover bg-center flex flex-col justify-between overflow-hidden"
            style={{ backgroundImage: "url('../images/adds2.png')" }}
        >
            {/* LIGHT GRAY OVERLAY */}
            <div className="absolute inset-0 bg-gray-800/30 backdrop-brightness-95 rounded-2xl z-0"></div>
            {/* CENTER VIDEO ICON */}
            <div className="
        absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2 
        w-10
         h-10 
        bg-gray-800/60 rounded-full 
        flex items-center justify-center 
        z-10
    ">
                <Video size={16} strokeWidth={1} className="text-white" />
            </div>


            {/* BOTTOM TEXT */}
            <div className="absolute top-3 left-0 px-4 flex justify-between w-full  z-10">
                <h2 className="hed-md line-height120 font-normal mb-1 text-white flex-1 line-clamp-2 overflow-hidden min-h-7 pe-2">
                    Unlock growth through powerful customer engagement
                </h2>
                <Expand className="text-white cursor-pointer" size={16} strokeWidth={1} />
            </div>
        </Card>

    )
}

export default AddsTypeTwo