import DataNotFound from "@/components/DataNotFound";
import InnerBanner from "@/components/inner-banner/InnerBanner";
import TeamMembersCard from "@/components/team-members-card/TeamMembersCard";
import type { Metadata } from "next";
import { teamMemberData } from "@/data/team-member";

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

export default function teamPages() {
    return (
        <section>
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <InnerBanner rightImage="/images/gemini_generated.png" overlayColor="#EC4E54" title="Meet the Team Driving 
Our Mission" subtitle="We’re a team of seasoned entrepreneurs, media veterans, and tech builders united by one mission: to restore trust in journalism and empower real stories, told in real time." />
                </div>
            </div>
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <h2 className="hed-lg lg:hed-2xl mb-2.5 lg:mb-8 font-medium">Team Members</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
                        {
                            teamMemberData.length === 0 ? (
                                <DataNotFound />
                            ) : (
                                teamMemberData.map((member) => (
                                    <TeamMembersCard key={member.id} member={member} />
                                ))
                            )
                        }

                    </div>
                </div>
            </div>
        </section>
    );
}
