"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { useNewsById } from "@/hooks";
import { useEngagement } from "@/hooks/useEngagement";
import AddsTypeOne from "@/components/adds/AddsTypeOne";
import NewsCardTypeOne from "@/components/news-cards/NewsCardTypeOne";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageSquare, Send, Loader, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface CommentItemProps {
    comment: any;
    toggleCommentLike: (id: string) => void;
    deleteComment: (id: string) => void;
    addReply: (commentId: string, text: string) => void;
    deleteReply: (commentId: string, replyId: string) => void;
}

function CommentItem({
    comment,
    toggleCommentLike,
    deleteComment,
    addReply,
    deleteReply,
}: CommentItemProps) {
    const [replyText, setReplyText] = useState("");
    const [showReplyInput, setShowReplyInput] = useState(false);

    return (
        <>
            {/* ================= Parent Comment ================= */}
            <div className="flex gap-4 mb-6">
                <Image
                    src="/images/profile1.jpg"
                    alt="User"
                    width={48}
                    height={48}
                    className="rounded-full w-10 h-10 object-cover"
                />

                <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-center flex-col lg:flex-row gap-2 mb-1 justify-start">
                        <h4 className="font-semibold fs-xl w-full lg:w-auto">
                            {comment.user || "User"}
                        </h4>

                        <span className="text-gray w-full lg:w-auto fs-md relative pl-3
              before:content-['•'] before:absolute before:left-0
              before:top-1/2 before:-translate-y-1/2 before:text-xl">
                            {new Date(comment.createdAt).toLocaleDateString()}
                        </span>
                    </div>

                    {/* Comment Text */}
                    <p className="text-gray fs-md mb-2">
                        {comment.text}
                    </p>

                    {/* Actions */}
                    <div className="flex gap-6 text-gray fs-lg">
                        <button
                            onClick={() => toggleCommentLike(comment.id)}
                            className={`flex items-center gap-1 transition-all duration-200 ${comment.liked ? "text-pink" : "text-gray"
                                }`}
                        >
                            <Heart
                                className={`w-4 transition-all ${comment.liked ? "fill-pink text-pink" : ""
                                    }`}
                            />
                            {comment.likes} Likes
                        </button>

                        <button
                            onClick={() => setShowReplyInput(!showReplyInput)}
                            className="flex items-center gap-1"
                        >
                            <MessageSquare className="w-4" />
                            {comment.replies?.length || 0} Replies
                        </button>
                    </div>
                </div>
            </div>

            {/* ================= Replies Section ================= */}
            {comment.replies?.length > 0 && (
                <div className="pl-16 mb-6 space-y-6">
                    {comment.replies.map((reply: any) => (
                        <div key={reply.id} className="flex gap-4">
                            <Image
                                src="/images/profile2.jpg"
                                alt="User"
                                width={48}
                                height={48}
                                className="rounded-full w-10 h-10 object-cover"
                            />

                            <div className="flex-1">
                                <div className="flex items-center flex-col lg:flex-row gap-2 mb-1">
                                    <h4 className="font-semibold fs-lg">
                                        {reply.user || "User"}
                                    </h4>

                                    <span className="text-gray fs-sm relative pl-3
                    before:content-['•'] before:absolute before:left-0
                    before:top-1/2 before:-translate-y-1/2 before:text-lg">
                                        {new Date(reply.createdAt).toLocaleDateString()}
                                    </span>
                                </div>

                                <p className="text-gray fs-md mb-2">
                                    {reply.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* ================= Reply Input ================= */}
            {showReplyInput && (
                <div className="pl-16 mb-6">
                    <div className="bg-gray-100 dark:bg-[#4A4A4A]  rounded-xl p-4 flex items-end gap-3">
                        <Textarea
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            placeholder="Write a reply..."
                            className="bg-transparent dark:bg-[#4A4A4A]  resize-none fs-md border-0 shadow-none"
                        />

                        <button
                            onClick={() => {
                                if (!replyText.trim()) return;
                                addReply(comment.id, replyText);
                                setReplyText("");
                                setShowReplyInput(false);
                            }}
                            className="bg-black text-white rounded-md p-2 shrink-0"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
function NewsDetails() {
    const { id } = useParams<{ id: string }>();
    const { data, isLoading, error } = useNewsById(id);


    const {
        likes,
        shares,
        likedByUser,
        comments,
        handleLikeToggle,
        handleShare,
        addComment,
        deleteComment,
        toggleCommentLike,   // ✅ ADD THIS
        addReply,            // ✅ ADD THIS
        deleteReply,         // ✅ ADD THIS
    } = useEngagement(id || "");

    const [newComment, setNewComment] = useState("");

    if (isLoading) {
        return (
            <div className="w-full h-lvh flex items-center justify-center">
                <Loader className="animate-spin" />
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="container m-auto py-10 text-center text-gray-500">
                Failed to load news details.
            </div>
        );
    }

    const { title, text, image, author, category } = data;


    return (
        <div className="px-6 py-4">
            <div className="container  m-auto">
                <div className="grid grid-cols-1 py-6">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-black dark:text-white fs-md lg:fs-xl" href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink className="text-black dark:text-white fs-md lg:fs-xl" href="/">News Details</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="font-bold text-pink fs-md lg:fs-xl capitalize">{category}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                </div>
                <div className="grid grid-cols-12 lg:px-4 gap-6">
                    <div className="col-span-12 lg:col-span-9">
                        <Card className="p-3 lg:p-8">
                            <div className="mb-8">
                                <Image src={image || "/images/news1.png"} width="800" height="400" className='w-full  rounded-xl object-cover mb-8' alt="News Image" />
                                <div className="flex justify-between items-center">
                                    <div className='flex items-center gap-1 py-4'>
                                        <Image src="/images/profile1.jpg" width="24" height="24" alt="News Image" className=' h-6 w-6 rounded-full object-cover' />
                                        <div className="fs-sm md:fs-xl line-height140 text-darkgray flex items-center">
                                            <span className="ml-2 fs-sm md:fs-xl">{author || "Unknown Author"}</span>
                                            {category && (
                                                <span className="ml-2 fs-sm md:fs-xl capitalize relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-[6px] before:bg-[#4A4A4A] before:rounded-full">
                                                    {category}
                                                </span>
                                            )}
                                        </div>

                                    </div>
                                    <div className='flex items-center gap-2 order-1 lg:order-none'>
                                        <Link href="#" className=' text-white hover:bg-black  bg-pink w-5.5 h-5.5  lg:w-8.5 lg:h-8.5 flex justify-center items-center rounded-full'>
                                            <Image src="/images/icon/facebook.png" alt='' className='w-2 lg:w-3.5' width="16" height="16" />
                                        </Link>
                                        <Link href="#" className=' text-white hover:bg-black  bg-pink  w-5.5 h-5.5  lg:w-8.5 lg:h-8.5 flex justify-center items-center rounded-full'>
                                            <Image src="/images/icon/linkedIn.png" alt='' className='w-2 lg:w-3.5' width="16" height="16" />
                                        </Link>
                                        <Link href="#" className=' text-white hover:bg-black  bg-pink  w-5.5 h-5.5  lg:w-8.5 lg:h-8.5 flex justify-center items-center rounded-full'>
                                            <Image src="/images/icon/x.png" alt='' className='w-2 lg:w-3.5' width="16" height="16" />

                                        </Link>
                                        <Link href="#" className=' text-white hover:bg-black  bg-pink  w-5.5 h-5.5  lg:w-8.5 lg:h-8.5 flex justify-center items-center rounded-full'>
                                            <Image src="/images/icon/youtube.png" alt='' className='w-2 lg:w-3.5' width="16" height="16" />
                                        </Link>
                                    </div>
                                </div>
                                <h1 className="font-bold hed-md lg:hed-2xl mb-2">
                                    {title}</h1>
                                {text && (
                                    <div className="text-gray fs-md lg:fs-xl space-y-4">
                                        {text.split("\n").map((para, i) => (
                                            <p key={i}>{para}</p>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className='flex text-sm justify-between items-center mb-12'>

                                <button onClick={handleLikeToggle}
                                    className={`flex gap-1  fs-lg md:fs-2xl lg:fs-4xl items-center ${likedByUser ? "text-pink" : "text-gray"
                                        }`}
                                >
                                    <Heart className='w-3 md:w-4 lg:w-6' /> <span>{likes} Likes</span>
                                </button>

                                <button className='flex gap-1 text-gray fs-lg md:fs-2xl lg:fs-4xl items-center'>
                                    <MessageSquare className='w-3 md:w-4 lg:w-6' />  {comments.length} Comments
                                </button>
                                <button onClick={handleShare} className='flex gap-1 text-gray fs-lg md:fs-2xl lg:fs-4xl items-center'>
                                    <Send className='w-3 md:w-4 lg:w-6' /> {shares} Shares
                                </button>
                            </div>

                            {/* <div className="w-full">
                                <div className="mt-10">
                                    <h3 className="font-bold fs-2xl mb-6">3 Comments</h3>
                                    <div className="flex gap-4 mb-6">
                                        <Image
                                            src="/images/profile1.jpg"
                                            alt="User"
                                            width={48}
                                            height={48}
                                            className="rounded-full w-10 h-10 object-cover"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center flex-col lg:flex-row  gap-2 mb-1 justify-start">
                                                <h4 className="font-semibold fs-xl w-full lg:w-auto">Eleanor Pena</h4>
                                                <span className="text-gray w-full lg:w-auto fs-md relative pl-3 before:content-['•'] before:absolute  before:left-0
                                                                before:top-1.5 before:-translate-y-1/2 before:text-4xl">
                                                    29 November 25
                                                </span>
                                            </div>
                                            <p className="text-gray fs-md mb-2">
                                                Great update! The layout feels much clearer now, and everything is easier to navigate, making the overall user experience smoother and more enjoyable.
                                            </p>
                                            <div className="flex gap-6 text-gray fs-lg">
                                                <span className="flex items-center gap-1">
                                                    <Heart className="w-4" /> 200 likes
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MessageSquare className="w-4" /> 100 replies
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full pl-16 mb-3">
                                        <div className="flex gap-4 mb-6">
                                            <Image
                                                src="/images/profile2.jpg"
                                                alt="User"
                                                width={48}
                                                height={48}
                                                className="rounded-full w-10 h-10 object-cover"
                                            />
                                            <div className="flex-1">
                                                <div className="flex items-center flex-col lg:flex-row  gap-2 mb-1 justify-start">
                                                    <h4 className="font-semibold fs-xl w-full lg:w-auto">Eleanor Pena</h4>
                                                    <span className="text-gray w-full lg:w-auto fs-md relative pl-3 before:content-['•'] before:absolute  before:left-0
                                                                before:top-1.5 before:-translate-y-1/2 before:text-4xl">
                                                        29 November 25
                                                    </span>
                                                </div>
                                                <p className="text-gray fs-md mb-2">
                                                    This feature looks really helpful. Excited to see how it improves the overall experience!
                                                </p>
                                                <div className="flex gap-6 text-gray fs-sm">
                                                    <span className="flex items-center gap-1">
                                                        <Heart className="w-4" /> 200 likes
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MessageSquare className="w-4" /> 100 replies
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 rounded-xl p-4 flex items-end gap-3">
                                            <Textarea
                                                placeholder="Share your comment..."
                                                className="bg-transparent resize-none fs-md border-0 shadow-none"
                                            />

                                            <button
                                                aria-label="Send comment"
                                                className="bg-black text-white rounded-md p-2 shrink-0"
                                            >
                                                <Send className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mb-6">
                                        <Image
                                            src="/images/profile2.jpg"
                                            alt="User"
                                            width={48}
                                            height={48}
                                            className="rounded-full w-10 h-10 object-cover"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center flex-col lg:flex-row  gap-2 mb-1 justify-start">
                                                <h4 className="font-semibold fs-xl w-full lg:w-auto">Eleanor Pena</h4>
                                                <span className="text-gray w-full lg:w-auto fs-md relative pl-3 before:content-['•'] before:absolute  before:left-0
                                                                before:top-1.5 before:-translate-y-1/2 before:text-4xl">
                                                    29 November 25
                                                </span>
                                            </div>
                                            <p className="text-gray fs-md mb-2">
                                                This feature looks really helpful. Excited to see how it improves the overall experience!
                                            </p>
                                            <div className="flex gap-6 text-gray fs-sm">
                                                <span className="flex items-center gap-1">
                                                    <Heart className="w-4" /> 200 likes
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MessageSquare className="w-4" /> 100 replies
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 mb-6">
                                        <Image
                                            src="/images/profile1.jpg"
                                            alt="User"
                                            width={48}
                                            height={48}
                                            className="rounded-full w-10 h-10 object-cover"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center flex-col lg:flex-row  gap-2 mb-1 justify-start">
                                                <h4 className="font-semibold fs-xl w-full lg:w-auto">Eleanor Pena</h4>
                                                <span className="text-gray w-full lg:w-auto fs-md relative pl-3 before:content-['•'] before:absolute  before:left-0
                                                                before:top-1.5 before:-translate-y-1/2 before:text-4xl">
                                                    29 November 25
                                                </span>
                                            </div>
                                            <p className="text-gray fs-md mb-2">
                                                Great update! The layout feels much clearer now, and everything is easier to navigate, making the overall user experience smoother and more enjoyable.
                                            </p>
                                            <div className="flex gap-6 text-gray fs-lg">
                                                <span className="flex items-center gap-1">
                                                    <Heart className="w-4" /> 200 likes
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <MessageSquare className="w-4" /> 100 replies
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="font-bold fs-xl mb-4">Comments</h3>
                                    <div className="bg-gray-100 rounded-xl p-4 flex items-end gap-3">
                                        <Textarea
                                            placeholder="Share your comment..."
                                            className="bg-transparent resize-none fs-md border-0  shadow-none"
                                        />

                                        <button
                                            aria-label="Send comment"
                                            className="bg-black text-white rounded-md p-2 shrink-0"
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div> */}

                            <div className="mt-10">
                                <h3 className="font-bold text-xl mb-6">
                                    {comments.length} Comments
                                </h3>

                                {comments.length === 0 && (
                                    <p className="text-gray-500 mb-6">
                                        No comments yet. Be the first to comment.
                                    </p>
                                )}

                                {/* ================= COMMENTS LIST ================= */}
                                <div className="space-y-8">
                                    {comments.map((comment) => (
                                        <CommentItem
                                            key={comment.id}
                                            comment={comment}
                                            toggleCommentLike={toggleCommentLike}
                                            deleteComment={deleteComment}
                                            addReply={addReply}
                                            deleteReply={deleteReply}
                                        />
                                    ))}
                                </div>

                                {/* ================= ADD COMMENT ================= */}
                                <div className="bg-gray-100  dark:bg-[#4A4A4A]  rounded-xl p-4 flex items-end gap-3 mt-8">
                                    <Textarea
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        placeholder="Share your comment..."
                                        className="bg-transparent resize-none dark:bg-[#4A4A4A]  border-0 shadow-none"
                                    />

                                    <button
                                        onClick={() => {
                                            if (!newComment.trim()) return;
                                            addComment(newComment);
                                            setNewComment("");
                                        }}
                                        className="bg-black text-white rounded-md p-2 shrink-0"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="col-span-12 lg:col-span-3">

                        <div>
                            <AddsTypeOne />
                            <div className='flex justify-between items-center mb-4'>
                                <h2 className='font-bold hed-sm'>More news</h2>
                                <button className='text-pink hover:text-black cursor-pointer fs-xl flex items-center gap-2' >See All
                                    <ChevronRight strokeWidth={1} size={16} /></button>
                            </div>
                            <NewsCardTypeOne />
                            <NewsCardTypeOne />
                            <NewsCardTypeOne />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetails
