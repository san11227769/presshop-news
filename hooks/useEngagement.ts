"use client";

import { useEffect, useState } from "react";

interface Reply {
    id: string;
    text: string;
    createdAt: string;
}

interface Comment {
    id: string;
    text: string;
    createdAt: string;
    liked: boolean;
    likes: number;   // ✅ ADD THIS
    replies: Reply[];
}

interface EngagementData {
    likes: number;
    shares: number;
    likedByUser: boolean;
    comments: Comment[];
}

export function useEngagement(articleId: string) {
    const storageKey = `news_engagement_${articleId}`;

    const [data, setData] = useState<EngagementData>({
        likes: 0,
        shares: 0,
        likedByUser: false,
        comments: [],
    });

    useEffect(() => {
        if (!articleId) return;

        const stored = localStorage.getItem(storageKey);
        if (stored) {
            setData(JSON.parse(stored));
        }
    }, [articleId]);

    const saveData = (updated: EngagementData) => {
        setData(updated);
        localStorage.setItem(storageKey, JSON.stringify(updated));
    };

    // Article Like
    const handleLikeToggle = () => {
        saveData({
            ...data,
            likes: data.likedByUser ? data.likes - 1 : data.likes + 1,
            likedByUser: !data.likedByUser,
        });
    };

    // Add Comment
    const addComment = (text: string) => {
        if (!text.trim()) return;

        const newComment: Comment = {
            id: Date.now().toString(),
            text,
            createdAt: new Date().toISOString(),
            liked: false,

            likes: 0, // ✅ INITIALIZE LIKES
            replies: [],
        };

        saveData({
            ...data,
            comments: [newComment, ...data.comments],
        });
    };

    // Delete Comment
    const deleteComment = (commentId: string) => {
        saveData({
            ...data,
            comments: data.comments.filter((c) => c.id !== commentId),
        });
    };

    // Like Comment
    const toggleCommentLike = (commentId: string) => {
        saveData({
            ...data,
            comments: data.comments.map((c) =>
                c.id === commentId
                    ? {
                        ...c,
                        liked: !c.liked,
                        likes: c.liked ? c.likes - 1 : c.likes + 1, // ✅ INCREASE / DECREASE
                    }
                    : c
            ),
        });
    };

    // Add Reply
    const addReply = (commentId: string, text: string) => {
        if (!text.trim()) return;

        saveData({
            ...data,
            comments: data.comments.map((c) =>
                c.id === commentId
                    ? {
                        ...c,
                        replies: [
                            {
                                id: Date.now().toString(),
                                text,
                                createdAt: new Date().toISOString(),
                            },
                            ...(c.replies || []),
                        ],
                    }
                    : c
            ),
        });
    };

    // Delete Reply
    const deleteReply = (commentId: string, replyId: string) => {
        saveData({
            ...data,
            comments: data.comments.map((c) =>
                c.id === commentId
                    ? {
                        ...c,
                        replies: c.replies.filter((r) => r.id !== replyId),
                    }
                    : c
            ),
        });
    };

    const handleShare = async () => {
        saveData({ ...data, shares: data.shares + 1 });

        const url = window.location.href;

        if (navigator.share) {
            await navigator.share({ title: "Check this news", url });
        } else {
            await navigator.clipboard.writeText(url);
            alert("Link copied!");
        }
    };

    return {
        likes: data.likes,
        shares: data.shares,
        likedByUser: data.likedByUser,
        comments: data.comments,
        handleLikeToggle,
        handleShare,
        addComment,
        deleteComment,
        toggleCommentLike,
        addReply,
        deleteReply,
    };
}