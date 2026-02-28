"use client";

import React from 'react'
import NewsCardTypeFour from '../news-cards/NewsCardTypeFour'
import AddsTypeTwo from '@/components/adds/AddsTypeTwo'
import { ChevronRight } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useLatestNews } from '@/hooks'
import { useRouter } from "next/navigation";

function LatestNews() {
    const router = useRouter();
    const { data, isLoading, error } = useLatestNews({
        limit: 8,
        language: "en",
        sort: "publish-time",
        "sort-direction": "DESC"
    });

    console.log('data ----------->', data)

    // Show loading state
    if (isLoading) {
        return (
            <div className='w-full px-6 py-15'>
                <div className="container m-auto">
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='font-bold mb-4 hed-2xl '>Latest News</h2>
                        <button className='text-pink hover:text-black cursor-pointer fs-2xl flex gap-2' >See All <ChevronRight strokeWidth={1} /></button>
                    </div>
                    <div className="hidden xl:grid xl:grid-cols-4 gap-4">
                        {[...Array(7)].map((_, i) => (
                            <div key={i} className="p-3 border rounded-xl animate-pulse">
                                <div className="w-full h-70 bg-gray-200 rounded-xl mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            </div>
                        ))}
                    </div>
                    <div className="xl:hidden">
                        <div className="flex gap-4">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="flex-1 p-3 border rounded-xl animate-pulse">
                                    <div className="w-full h-70 bg-gray-200 rounded-xl mb-4"></div>
                                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Show error state
    if (error) {
        return (
            <div className='w-full px-6 py-15'>
                <div className="container m-auto">
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='font-bold mb-4 hed-2xl '>Latest News</h2>
                        <button className='text-pink hover:text-black cursor-pointer fs-2xl flex gap-2' >See All <ChevronRight strokeWidth={1} /></button>
                    </div>
                    <div className="text-center py-8 text-gray-500">
                        Failed to load latest news. Please try again later.
                    </div>
                </div>
            </div>
        );
    }

    const newsArticles = data?.newsArray || [];
    const displayArticles = newsArticles.slice(0, 7); // Show 7 articles + 1 ad

    console.log('displayArticles ----------->', displayArticles)

    return (
        <div className='w-full px-6 py-15'>
            <div className="container m-auto">
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='font-bold mb-4 hed-lg  lg:hed-2xl '>Latest News</h2>
                    <button onClick={() => router.push("/news/latest-news")} className='text-pink hover:text-black cursor-pointer fs-md lg:fs-2xl   line-height120 flex gap-2' >See All <ChevronRight className="w-3.5 h-3.5 lg:w-5 lg:h-5" strokeWidth={2} /></button>
                </div>
                <div className="hidden xl:grid xl:grid-cols-4 gap-6">
                    {displayArticles?.slice(0, 4)?.map((article: any) => (
                        <NewsCardTypeFour key={article.id} article={article} />
                    ))}
                    <AddsTypeTwo />
                    {displayArticles?.slice(4, 7)?.map((article: any) => (
                        <NewsCardTypeFour key={article.id} article={article} />
                    ))}
                </div>
                <Carousel className='xl:hidden'>
                    <CarouselContent>
                        {displayArticles.slice(0, 2).map((article) => (
                            <CarouselItem key={article.id} className="basis-6/7 sm:basis-2/4 lg:basis-1/3">
                                <NewsCardTypeFour article={article} />
                            </CarouselItem>
                        ))}
                        <CarouselItem className="basis-6/7 sm:basis-2/4 lg:basis-1/3">
                            <AddsTypeTwo />
                        </CarouselItem>
                        {displayArticles.slice(2, 4).map((article) => (
                            <CarouselItem key={article.id} className="basis-6/7 sm:basis-2/4 lg:basis-1/3">
                                <NewsCardTypeFour article={article} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default LatestNews