import DataNotFound from "@/components/DataNotFound";
import InnerBanner from "@/components/inner-banner/InnerBanner";
import type { Metadata } from "next";
import Image from "next/image";

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
export default function TremsConditionPage() {
    return (
        <section>
            <div className="m-auto px-6 py-10">
                <div className="container m-auto">
                    <InnerBanner rightImage="/images/abpng.png" overlayColor="#FAB700" title="TERMS AND CONDITIONS OF USE" subtitle="Important rules governing your access and usage, ensuring safety, fairness, and proper conduct at all times." />
                </div>
            </div>
            <div className="pt-2 pb-10 px-4 lg:px-6">
                <div className="container m-auto ">
                    <div className="text-gray space-y-4 cms-para-text
                    [&>h3]:font-medium line-height120 [&>h3]:text-sm lg:[&>h3]:text-lg 
                    [&>h3]:text-black/80 dark:[&>h3]:text-white/80 [&>ol]:list-decimal
                        [&>ol]:pl-5
                        [&>ol]:space-y-2
                        lg:[&>ol]:text-base
                        [&>ol>li]:leading-relaxed
                        [&>ul]:list-disc
                        [&>ul]:pl-5
                        [&>ul]:space-y-2
                        lg:[&>ul]:text-base
                        [&>ul>li]:leading-relaxed
                        [&>strong]:font-medium">
                        <h3>Introduction</h3>
                        <p >
                            These terms and conditions apply between you, the User of this Website (including any sub-domains, unless expressly excluded by their own terms and conditions), and Presshop Media UK Limited, the owner and operator of this Website. Please read these terms and conditions carefully, as they affect your legal rights. Your agreement to comply with and be bound by these terms and conditions is deemed to occur upon your first use of the Website. If you do not agree to be bound by these terms and conditions, you should stop using the Website immediately.

                        </p>

                        <p>
                            In these terms and conditions, User or Users means any third party that accesses the Website and is not either (i) employed by Presshop Media UK Limited  and acting in the course of their employment or (ii) engaged as a consultant or otherwise providing services to  Presshop Media UK Limited  and accessing the Website in connection with the provision of such services.
                        </p>

                        <p>
                            You must be at least 18 years of age to use this Website. By using the Website and agreeing to these terms and conditions, you represent and warrant that you are at least 18 years of age.
                        </p>
                        <h3>
                            Intellectual Property and Acceptable Use
                        </h3>
                        <p>
                            All Content included on the Website, unless uploaded by Users, is the property of Presshop Media UK Limited, our affiliates or other relevant third parties. In these terms and conditions, Content means any text, graphics, images, audio, video, software, data compilations, page layout, underlying code and software and any other form of information capable of being stored in a computer that appears on or forms part of this Website, including any such content uploaded by Users.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
