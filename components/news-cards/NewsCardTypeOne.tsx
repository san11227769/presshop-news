import React from 'react'
import Image from 'next/image'
import { Card, CardTitle } from '../ui/card'
import { Heart, MessageSquare, Send, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../ui/badge'

function NewsCardTypeOne() {
    return (
        <Card className="flex flex-col gap-2  p-3 border rounded-2xl hover:shadow-lg transition-shadow mb-3">
            <div className='flex gap-3'>
                <Image src="/images/pic3.jpg" width="120" height="120" className='w-18.5 h-18.5 rounded-xl object-cover' alt="News Image" />
                <div>
                    <CardTitle className='hed-xm line-height120 line-clamp-3 min-h-11 text-dark  overflow-hidden mb-3 text-justify'>
                        Romania becomes second Nato country to report Russian </CardTitle>
                    <div className='flex gap-2'>
                        <Badge variant="default" className='font-bold fs-sm'>EXCLUSIVE</Badge>
                        <Badge variant="secondary" className='font-bold fs-sm'>8,247 Views</Badge>
                    </div>

                </div>
            </div>
            <div className='flex gap-2 mt-1 text-sm justify-between'>
                <Link href='/' className='flex gap-1 text-darkgray  fs-sm items-center'>
                    <Heart size={12} />  1900 liks
                </Link>
                <Link href='/' className='flex gap-1 text-gray  fs-sm items-center'>
                    <MessageSquare size={12} />  1900 comment
                </Link>
                <Link href='/' className='flex gap-1 text-gray fs-sm items-center'>
                    <Send size={12} /> 1900 Shares
                </Link>
            </div>

        </Card>
    )
}

export default NewsCardTypeOne