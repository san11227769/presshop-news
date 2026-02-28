import React from 'react'
import Image from 'next/image'
import { Card, CardTitle } from '../ui/card'
import { Heart, MessageSquare, Send, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
function NewsCardTypeTwo() {
    return (
        <Card className="flex flex-col gap-2  p-2 lg:p-4 border rounded-2xl hover:shadow-lg transition-shadow mb-3">
            <div className='flex gap-2 md:gap-3'>
                <Image src="/images/news.png" width="120" height="120" className='w-15 lg:w-22.5 h-15 lg:h-22.5 rounded-xl object-cover' alt="News Image" />
                <div className='flex-1'>
                    <CardTitle className='line-clamp-2 fs-sm lg:hed-sm min-h-5.5 lg:min-h-7.5 mb-1 lg:mb-3 line-height120 overflow-hidden text-dark'>
                        President Cyril Ramaphosa of South Africa at the opening plenary session.</CardTitle>
                    <p className="line-clamp-1 text-gray line-height140 fs-sm lg:fs-lg md-1 lg:mb-2.5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempore quisquam dolor quibusdam adipisci voluptate libero excepturi necessitatibus. Dolore dolorum tempore sapiente atque cumque, voluptate cupiditate obcaecati sunt accusantium sequi?
                    </p>
                    <div className='flex gap-2.5 fs-mdlg'>
                        <Link href='/' className='flex fs-sm lg:fs-md gap-1 text-darkgray items-center'>
                            <Heart className='w-2.5 md:w-[13.5]' />  1900 liks
                        </Link>
                        <Link href='/' className='flex gap-1 fs-sm  lg:fs-md text-darkgray items-center'>
                            <MessageSquare className='w-2.5 md:w-[13.5]' /> 1,900 Comments
                        </Link>
                        <Link href='/' className='flex gap-1 fs-sm  lg:fs-md  text-darkgray items-center'>
                            <Send className='w-2.5 md:w-[13.5]' /> 111 Shares
                        </Link>
                    </div>

                </div>
            </div>


        </Card>
    )
}

export default NewsCardTypeTwo