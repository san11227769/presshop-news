


"use client"

import InnerBanner from "@/components/inner-banner/InnerBanner";
import NewsCardTypeFour from "@/components/news-cards/NewsCardTypeFour";
import AddsTypeTwo from '@/components/adds/AddsTypeTwo'
import { ChevronRight, Loader } from 'lucide-react'
import { useLatestNews } from '@/hooks'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";


export default function LatestNnewsPage() {
    const { data, isLoading, error } = useLatestNews({
        limit: 8,
        language: "en",
        sort: "publish-time",
        "sort-direction": "DESC"
    });

    console.log('data ----------->', data)
    if (isLoading) {
        return <Loader />
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
    const displayArticles = newsArticles;
    return (
        <section>
            <div className="w-full px-4 lg:px-6 py-2 lg:py-10">
                <div className="container m-auto">
                    <div className="grid grid-cols-1  py-6">
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink className="ext-gray fs-md lg:fs-xl" href="/">Home</BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="font-bold text-pink fs-md lg:fs-xl">
                                        Latest News
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <InnerBanner rightImage="/images/latestnews2.png" overlayColor="#EC4E54CC" title="Latest News from Streets Around You" subtitle="pdates powered by citizens, reporters, and local Hoppers" />
                </div>
            </div>
            <div className='w-full py-6 px-4 lg:px-6'>
                <div className="container m-auto ">
                    <div className='flex justify-between items-center  mb-2 lg:mb-6'>
                        <h2 className='font-bold  hed-lg sm:hed-xl  lg:hed-2xl '>Latest News</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {displayArticles.map((article: any) => (
                            <NewsCardTypeFour key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
