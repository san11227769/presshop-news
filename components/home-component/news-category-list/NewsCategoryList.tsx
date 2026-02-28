import NewsCategoryListCard from '@/components/news-category-list-card/NewsCategoryListCard'
import { categoryData } from '@/data/category'
import { ArrowBigDown, ArrowBigRight, ChevronRight } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
function NewsCategoryList() {
    return (
        <div className='w-full px-6 z-10 relative py-8  md:py-12 lg:py-15  bg-black dark:bg-[#262626]' >

            <div className="container m-auto">
                <Carousel opts={{ align: "start" }} className="relative">
                    <div className='flex justify-between items-center'>
                        <h2 className='font-medium  mb-4 lg:mb-8 hed-lg lg:hed-2xl text-white'>News Categories</h2>
                        <div className="flex gap-3">
                            <CarouselPrevious className="static rounded-full disabled:bg-transparent  disabled:text-white  bg-pink  text-white" />
                            <CarouselNext className="static rounded-full disabled:bg-transparent  disabled:text-white  bg-pink  text-white" />
                        </div>
                    </div>
                    <CarouselContent>
                        {categoryData.map((item) => (
                            <CarouselItem key={item.id} className="basis-3/12 sm:basis-2/12 md:basis-2/14 lg:2/16  xl:basis-1/10">
                                <NewsCategoryListCard key={item.id} data={item} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    )
}

export default NewsCategoryList