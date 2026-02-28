"use client"

import React, { useEffect, useState } from "react"
import InnerBanner from "@/components/inner-banner/InnerBanner";
import NewsCardTypeFour from "@/components/news-cards/NewsCardTypeFour";
import AddsTypeTwo from '@/components/adds/AddsTypeTwo'
import { ChevronRight, Loader } from 'lucide-react'
import { useLatestNews } from '@/hooks'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useSearchParams } from "next/navigation";

export default function NewsPage() {
    const searchParams = useSearchParams();
    const category = searchParams?.get('category') || '';

    const [limit, setLimit] = useState<number>(8);

    // Reset limit when category changes
    useEffect(() => {
        setLimit(8);
    }, [category]);

    const { data, isLoading, error } = useLatestNews({
        limit,
        language: "en",
        sort: "publish-time",
        "sort-direction": "DESC",
        ...(category ? { category } : {}),
    });

    if (isLoading) {
        return <div className="w-full h-lvh flex items-center justify-center"><Loader /></div>
    }

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
    const displayArticles = newsArticles;

    // Show "Load more" if server returned exactly `limit` items (more may exist)
    const canLoadMore = (data?.newsArray?.length ?? 0) === 0;

    return (
        <section>
            <div className="w-full px-4 lg:px-6 py-2 lg:py-10">
                <div className="container m-auto">
                    <div className="grid grid-cols-1 py-6">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className="ext-gray fs-md lg:fs-xl" href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbLink className="ext-gray fs-md lg:fs-xl" href="/news">Category</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="font-bold text-pink fs-xl">
                                        {category || 'All'}
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                    <InnerBanner rightImage="/images/categorynews.png" overlayColor="#EC4E54CC" title="Headlines from real people, 
not newsrooms" subtitle="Get the raw, the real, and the right-now. PressHop curates powerful user-generated news stories from across the UK and around the world, direct from the streets, to your eyes." />
                </div>
            </div>

            <div className='w-full py-6 px-4 lg:px-6'>
                <div className="container m-auto">
                    <div className='flex justify-between items-center mb-2 lg:mb-6'>
                        <h2 className='font-bold hed-lg sm:hed-xl  lg:hed-2xl '>{category ? `${category} News` : 'Latest News'}</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {displayArticles.map((article: any) => (
                            <NewsCardTypeFour key={article.id} article={article} />
                        ))}
                    </div>



                    {canLoadMore && (
                        <div className="mt-8 text-center">
                            <button
                                onClick={() => setLimit((l) => l + 8)}
                                disabled={isLoading}
                                className="px-6 py-2 bg-pink text-white rounded-md hover:bg-pink disabled:opacity-50"
                            >
                                Load more
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}