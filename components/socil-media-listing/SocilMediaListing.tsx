import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import SocilMediaCard from '../socil-media-card/SocilMediaCard'
import Image from 'next/image'
function SocilMediaListing() {
    return (
        <div className='px-6 py-12  relative bg-black dark:bg-[#262626]'>

            <div className="container mx-auto">
                <Carousel opts={{ align: "start" }} className="relative">
                    <div className='flex justify-between items-center'>
                        <h2 className='font-medium  mb-4 lg:mb-8 hed-lg lg:hed-2xl text-white'>Trending Socil Media</h2>

                        <div className="flex gap-3">
                            <CarouselPrevious className="static rounded-full disabled:bg-transparent  disabled:text-white  bg-pink  text-white" />
                            <CarouselNext className="static rounded-full disabled:bg-transparent  disabled:text-white  bg-pink  text-white" />
                        </div>
                    </div>
                    <div className='full'>

                        <CarouselContent>
                            <CarouselItem className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"><SocilMediaCard /></CarouselItem>
                            <CarouselItem className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"><SocilMediaCard /></CarouselItem>
                            <CarouselItem className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"><SocilMediaCard /></CarouselItem>
                            <CarouselItem className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"><SocilMediaCard /></CarouselItem>
                            <CarouselItem className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"><SocilMediaCard /></CarouselItem>
                            <CarouselItem className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"><SocilMediaCard /></CarouselItem>
                        </CarouselContent>




                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default SocilMediaListing