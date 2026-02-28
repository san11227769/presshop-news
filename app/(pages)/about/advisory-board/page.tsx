import DataNotFound from "@/components/DataNotFound";
import InnerBanner from "@/components/inner-banner/InnerBanner";
import AdvisoryMembersCard from "@/components/advisory-board-members/page";
import type { Metadata } from "next";
import { advisoryMemberData } from "@/data/advisory-board"

export const metadata: Metadata = {
    title: "About Us | Your Company Name",
    description:
        "Learn more about Your Company Name, our mission, vision, and values. Discover who we are and what we do.",
    keywords: [
        "About Us",
        "Company Information",
        "Our Mission",
        "Our Vision",
        "Your Company Name",
    ],
    robots: {
        index: true,
        follow: true,
    },
};

export default function advisoryBoardPages() {
    return (
        <section>
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <InnerBanner rightImage="/images/gemini_generated.png" overlayColor="#EC4E54" title="Advisory Board Supporting Our Growth Strategy"
                        subtitle="The Advisory Board brings together entrepreneurs, media veterans, tech innovators restoring trust journalism, empowering stories told real time." />
                </div>
            </div>
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <h2 className="hed-lg lg:hed-2xl mb-2.5 lg:mb-8 font-medium">Advisory Board Members</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
                        {
                            advisoryMemberData.length === 0 ? (
                                <DataNotFound />
                            ) : (
                                advisoryMemberData.map((member) => (
                                    <AdvisoryMembersCard key={member.id} member={member} />
                                ))
                            )
                        }

                    </div>
                </div>
            </div>
        </section>
    );
}