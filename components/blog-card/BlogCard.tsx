import React from 'react'
import Image from 'next/image'
import { Card, CardTitle } from '../ui/card'
import { Heart, MessageSquare, Send, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../ui/badge'
function BlogCard() {
    return (
        <Card className="p-3 border rounded-xl hover:shadow-lg transition-shadow">
            <div className='flex  flex-col gap-4 relative'>
                <Image src="/images/pic4.jpg" width="300" height="320" className='w-full h-55 object-cover rounded-xl' alt="News Image" />

                <div>
                    <div className='flex items-center gap-1 pb-4'>
                        <Image src="/images/profile2.jpg" width="24" height="24" alt="News Image" className=' h-3.5 w-3.5 rounded-full object-cover' />
                        <Badge variant="secondary" className='fs-lg line-height120 text-dark px-4 py-2 absolute top-3 right-3'>1.5k Views</Badge>
                        <div className="text-gray flex items-center">
                            <span className="ml-2 fs-sm lg:fs-lg  ">Eleanor</span>

                            <span className="ml-2 fs-sm lg:fs-lg   relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-[6px] before:bg-gray-400 before:rounded-full">
                                26 Nov
                            </span>
                            <span className="ml-2 fs-sm lg:fs-lg  relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-[6px] before:bg-gray-400 before:rounded-full">
                                3 min read
                            </span>
                        </div>

                    </div>
                    <CardTitle className='line-clamp-1 mb-3 overflow-hidden fs-md lg:fs-xl font-medium text-dark'>
                        7 Safety Tips for Filming and Uploading Public Events
                    </CardTitle>
                    <p className='line-clamp-1 mb-3 overflow-hidden text-gray fs-md lg:fs-lg'>
                        PressHop Hopper taking pics PressHop Hopper taking pics

                    </p>
                    <div className='flex gap-4 mt-4 justify-between'>
                        <Link href='/' className='flex gap-2 fs-md md:fs-xs xl:fs-sm text-gray-400 items-center'>
                            <Heart size={10} />  1900 liks
                        </Link>
                        <Link href='/' className='flex gap-2 fs-md md:fs-xs xl:fs-sm text-gray-400 items-center'>
                            <MessageSquare size={10} />  1900 comment
                        </Link>
                        <Link href='/' className='flex gap-2 fs-md md:fs-xs xl:fs-sm text-gray-400 items-center'>
                            <Send size={10} /> 1900 liks
                        </Link>
                    </div>
                </div>
            </div>


        </Card>
    )
}

export default BlogCard