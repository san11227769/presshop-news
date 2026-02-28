import React from 'react'
import Image from 'next/image'
import { Card, CardTitle } from '../ui/card'
import { Heart, MessageSquare, Send, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
function PressCard() {
    return (
        <Card className="p-3 border rounded-xl hover:shadow-lg transition-shadow">
            <div className='flex  flex-col gap-4 relative'>
                <Image src="/images/pic4.jpg" width="300" height="320" className='w-full h-66 object-cover rounded-xl' alt="News Image" />

                <div>
                    <CardTitle className='line-clamp-1 mb-3 overflow-hidden hed-lg font-medium text-dark'>
                        7 Safety Tips for Filming and Uploading Public Events
                    </CardTitle>
                    <p className='mb-3 overflow-hidden text-gray fs-lg'>
                        The journalism world is at a tipping point. With shrinking newsrooms and a thirst for real, verified stories, the industry demands transformation — and PressHop is leading the charge

                    </p>
                    <p className='mb-3 overflow-hidden text-gray fs-lg'>
                        By empowering thousands, soon millions of everyday citizens to connect directly with the British press and beyond, PressHop is rewriting the rules of how news is sourced.

                    </p>
                    <Button variant="default" className="p-5">
                        Read the Article
                    </Button>
                </div>
            </div>


        </Card>
    )
}

export default PressCard