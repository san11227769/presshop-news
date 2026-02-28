import axios from "@/lib/axiosInstance";

export const getNews = async (lat: number, lon: number, miles: number) => {
    const url = `/search-news?language=en&sort=publish-time&sort-direction=DESC&location-filter=${lat},${lon},${miles}`;

    const res = await axios.get(url);
    return res.data;
};