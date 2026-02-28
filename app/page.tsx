import HomeBanner from "@/components/home-component/home-banner/Banner";
import LatestNews from "@/components/latest-news/LatestNews";
import RecentNews from "@/components/recent-news/RecentNews";
import NewsCategoryList from "@/components/home-component/news-category-list/NewsCategoryList";
import ExclusvieNews from "@/components/news-cards/ExclusvieNews";
import SocilMediaListing from "@/components/socil-media-listing/SocilMediaListing";
import PresshopVideoListing from "@/components/presshop-video-listing/PresshopVideoListing";
import Trending from "@/components/home-component/trending/Trending";
import SubscribeCard from "@/components/home-component/subscribe-card/SubscribeCard";
export default function Home() {
  return (
    <>
      <HomeBanner />
      <RecentNews />
      <NewsCategoryList />
      <LatestNews />
      <div className="px-6 py-4">
        <div className="container m-auto">
          <ExclusvieNews />
        </div>
      </div>
      <PresshopVideoListing />
      <SocilMediaListing />
      <Trending />
      <SubscribeCard />
    </>
  );
}