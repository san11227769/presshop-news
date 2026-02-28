// services/curatorService.ts
import api from "@/lib/axiosInstance";

const FEED_ID = "10e6fcc1-7688-49ce-a415-0496b8098eef";
const API_KEY = "32776bd5-44ad-4271-9228-9a36034e3350";

export interface CuratorPost {
    id: string;
    post_url: string;
    image: string;
    caption?: string;
    source?: string;
    created_at?: string;
}

export const fetchCuratorPosts = async (): Promise<CuratorPost[]> => {
    try {
        const response = await api.get(`/feeds/${FEED_ID}/posts`, {
            params: { api_key: API_KEY },
        });

        if (response.data?.posts) {
            return response.data.posts;
        } else {
            throw new Error("Invalid API response");
        }
    } catch (error) {
        console.error("❌ Error fetching Curator posts:", error);
        throw error;
    }
};
