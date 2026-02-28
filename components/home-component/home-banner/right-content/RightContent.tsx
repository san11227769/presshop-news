import React from 'react'
import NewsCardTypeOne from '@/components/news-cards/NewsCardTypeOne'
import AddsTypeOne from '@/components/adds/AddsTypeOne'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
function RightContent() {
    return (
        <>
            <AddsTypeOne />
            <div className='hidden lg:block'>
                <NewsCardTypeOne />
                <NewsCardTypeOne />
                <NewsCardTypeOne />
            </div>
            <Carousel opts={{ align: "start" }} className="relative lg:hidden">
                <div className='flex justify-between items-center mt-4 pt-2'>
                    <h2 className='font-medium  mb-4 lg:mb-8 hed-lg lg:hed-2xl text-black'>Explore More</h2>

                    <div className="flex gap-3">
                        <CarouselPrevious className="static rounded-full disabled:bg-transparent  disabled:text-gray-400  bg-pink  text-white" />
                        <CarouselNext className="static rounded-full disabled:bg-transparent  disabled:text-gray-400  bg-pink  text-white" />
                    </div>
                </div>
                <CarouselContent>
                    <CarouselItem className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"><NewsCardTypeOne /></CarouselItem>
                    <CarouselItem className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"><NewsCardTypeOne /></CarouselItem>
                    <CarouselItem className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"><NewsCardTypeOne /></CarouselItem>
                    <CarouselItem className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"><NewsCardTypeOne /></CarouselItem>
                    <CarouselItem className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"><NewsCardTypeOne /></CarouselItem>
                    <CarouselItem className="basis-1/1 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"><NewsCardTypeOne /></CarouselItem>
                </CarouselContent>
            </Carousel>
        </>
    )
}

export default RightContent