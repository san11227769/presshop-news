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
export default function ContentPolicyGuide() {
    return (
        <section>
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <InnerBanner rightImage="/images/guide.png" overlayColor="#44A152" title="EDITORIAL & CONTENT 
POLICY GUIDE" subtitle="Guidelines for creating clear, fair, and reliable content while maintaining accuracy, transparency, and audience trust." />
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
                        <h3>PressHop Editorial & Content Policy Guide (updated on 8th May 2025)</h3>
                        <p>
                            Applies to: All content submitted, uploaded, or distributed via PressHop
                        </p>
                        <h3>
                            1. General Principles
                        </h3>
                        <p>
                            At PressHop, we are committed to:
                        </p>
                        <ul>
                            <li>
                                Upholding the highest editorial standards.
                            </li>
                            <li>
                                Ensuring the integrity, safety, and legality of all content.
                            </li>
                            <li>
                                Respecting the privacy, dignity, and rights of all individuals
                            </li>
                        </ul>
                        <p>
                            This guide sets out what is and isn’t acceptable on our platform, with strict compliance to Google Play Store policies and UK & EU regulations, especially the General Data Protection Regulation (GDPR).
                        </p>
                        <h3>
                            2. GDPR & Data Protection
                        </h3>
                        <p>
                            PressHop is fully compliant with the UK GDPR and EU GDPR. We strictly enforce:
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
