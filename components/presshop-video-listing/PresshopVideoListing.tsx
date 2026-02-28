import React from 'react'
import PresshopVideoCard from '../presshop-video-card/PresshopVideoCard'
import { ChevronRight } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import presshopVideos from '@/data/presshop-videos'
function PresshopVideoListing() {
    return (
        <div className="px-6 py-16">
            <div className="container m-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="font-bold hed-lg lg:hed-2xl">PressHop Videos</h2>
                    <button className="text-pink fs-md lg:fs-2xl flex gap-2">
                        See All <ChevronRight />
                    </button>
                </div>

                <Carousel>
                    <CarouselContent>
                        {presshopVideos.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="basis-6/7 sm:basis-2/4 lg:basis-1/3 xl:basis-1/4"
                            >
                                <PresshopVideoCard {...item} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}


export default PresshopVideoListing