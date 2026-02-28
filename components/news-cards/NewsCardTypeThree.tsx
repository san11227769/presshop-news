import React from 'react'
import Image from 'next/image'
import { Card, CardTitle } from '../ui/card'
import { Heart, MessageSquare, Send, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../ui/badge'
function NewsCardTypeThree() {
    return (
        <Card className="flex flex-col p-0  border-0 rounded-3xl transition-shadow shadow-none mb-3 bg-transparent">
            <div className='flex  flex-col lg:flex-row gap-2 lg:gap-6'>
                <div className='w-1/1 lg:w-1/2 relative'>

                    <Image src="/images/news3.png" width="600" height="450"
                        className='w-full max-h-100 rounded-xl object-cover' alt="News Image" />
                    <Badge variant="secondary" className='font-bold fs-lg md:fs-xl line-height120 text-dark px-4 py-2 absolute top-5 right-5'>8,247 Views</Badge>
                </div>
                <div className='flex-1'>
                    <div className='flex items-center gap-1 py-4'>
                        <Image src="/images/profile1.jpg" width="24" height="24" alt="News Image" className=' h-6 w-6 rounded-full object-cover' />
                        <div className="fs-lg md:fs-xl line-height140 text-darkgray flex items-center">
                            <span className="ml-2">EFI Football</span>

                            <span className="ml-2 text-darkgray relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-[6px] before:bg-[#4A4A4A] before:rounded-full">
                                EFI Football
                            </span>
                        </div>

                    </div>
                    <CardTitle className='line-clamp-3 mb-2 md:mb-6  overflow-hidden hed-lg md:hed-3xl font-medium line-height120 text-dark'>
                        Champion's weekend her  from flawless Norris but Verstappen shines </CardTitle>
                    <p className="line-clamp-3 mb-2 md:mb-6 fs-lg md:fs-4xl text-darkgray line-height120">
                        Lando Norris was asked after the Sao Paulo Grand Prix whether he was now thinking about the championship, having extended his lead in one.
                    </p>
                    <div className='flex gap-4 fs-lg md:fs-4xlitems-center justify-between'>
                        <Link href='/' className='flex fs-lg md:fs-3xl xl:fs-4xl gap-2 text-darkgray items-center'>
                            <Heart className='w-3.5 md:w-5 xl:w-6' />  1900 liks
                        </Link>
                        <Link href='/' className='flex fs-lg md:fs-3xl xl:fs-4xl  gap-2 text-darkgray  items-center'>
                            <MessageSquare className='w-3.5 md:w-5 xl:w-6' />  1900 comment
                        </Link>
                        <Link href='/' className='flex fs-lg md:fs-3xl xl:fs-4xl gap-2 text-darkgray  items-center'>
                            <Send className='w-3.5 md:w-5 xl:w-6' /> 1900 Shares
                        </Link>
                    </div>

                </div>
            </div>


        </Card>
    )
}

export default NewsCardTypeThree