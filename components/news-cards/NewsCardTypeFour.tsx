import React from 'react'
import Image from 'next/image'
import { Card, CardTitle } from '../ui/card'
import { Heart, MessageSquare, Send, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import { NewsArticle } from '@/services/news.service'
import { useEngagement } from "@/hooks/useEngagement";
interface NewsCardTypeFourProps {
    article?: NewsArticle;
}

function NewsCardTypeFour({ article }: NewsCardTypeFourProps) {
    // Fallback values if article is not provided (for backward compatibility)
    const imageUrl = article?.image || "/images/pic4.jpg";
    const title = article?.title || "US Senate passes deal aimed at ending longest ever";
    const author = "EFI Football";
    const source = article?.source_country || "EFI Football";
    const articleUrl = article?.url || "#";
    const articleId = article?.id?.toString() || "";
    const {
        likes,
        shares,
        comments,
        likedByUser,
        handleLikeToggle,
        handleShare,
    } = useEngagement(articleId);
    return (
        <Card className="p-3 border rounded-xl hover:shadow-lg transition-shadow">
            <div className='flex  flex-col gap-3'>
                <Link href={`/news/${articleId}`}>
                    <Image
                        src={imageUrl}
                        width="500"
                        height="500"
                        className='w-full h-71 object-cover rounded-xl'
                        alt={title || "News Image"}
                    />
                </Link>

                <div>
                    <div className='flex items-center gap-1 pb-3'>
                        <Image
                            src="/images/profile2.jpg"
                            width="24"
                            height="24"
                            alt="Author"
                            className=' h-3.5 w-3.5 rounded-full object-cover'
                        />
                        <div className="fs-lg  line-height140 text-darkgray flex items-center">
                            <span className="ml-2">EFI Football</span>

                            <span className="ml-2 text-darkgray relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-[6px] before:bg-[#4A4A4A] before:rounded-full">
                                EFI Football
                            </span>
                        </div>

                    </div>
                    <Link href={`/news/${articleId}`}>
                        <CardTitle className='line-clamp-2 line-height140 min-h-12 mb-3 overflow-hidden hed-lg font-medium hover:text-pink transition-colors'>
                            {title}
                        </CardTitle>
                    </Link>
                    {/* <div className='flex gap-3 fs-sm justify-between items-center'>
                        <Link href='/' className='flex fs-sm gap-1 line-height120 text-darkgray items-center'>
                            <Heart size={10} />  1,900 liks
                        </Link>
                        <Link href='/' className='flex fs-sm gap-1 line-height120 text-darkgray items-center'>
                            <MessageSquare size={10} />  1,900 comment
                        </Link>
                        <Link href='/' className='flex fs-sm gap-1 line-height120 text-darkgray items-center'>
                            <Send size={10} /> 11 Shares
                        </Link>
                    </div> */}
                    <div className='flex gap-3 fs-sm justify-between items-center'>

                        <button
                            onClick={handleLikeToggle}
                            className={`flex line-height120 text-darkgray items-center gap-1 fs-sm transition ${likedByUser ? "text-pink" : ""
                                }`}
                        >
                            <Heart
                                size={10}
                                fill={likedByUser ? "currentColor" : "none"}
                            />
                            <span className='min-w-10 text-left'>
                                {likes} liks
                            </span>
                        </button>

                        {/* Comment Count */}
                        <Link
                            href={`/news/${articleId}`}
                            className="flex items-center   line-height120 text-darkgray gap-1"
                        >
                            <MessageSquare size={10} />
                            <span className='min-w-10 text-left'>
                                {comments.length}  comment
                            </span>
                        </Link>

                        {/* Share */}
                        <button
                            onClick={handleShare}
                            className="flex items-center line-height120 text-darkgray gap-1"
                        >
                            <Send size={10} />
                            <span className='min-w-10 text-left'>


                                {shares} Shares
                            </span>
                        </button>

                    </div>
                </div>
            </div>


        </Card>
    )
}

export default NewsCardTypeFour