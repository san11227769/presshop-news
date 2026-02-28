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
export default function AccountDeletionDataRetentionPolicy() {
    return (
        <section>
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <InnerBanner rightImage="/images/act-img.png" overlayColor="#FFAE3A" title="ACCOUNT DELETION POLICY 
& DATA RETENTION NOTICE" subtitle="Details on data handling, storage, and deletion timelines, including retention periods, security measures, and user rights." />
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
                        <p>
                            (updated on 8th May 2025)
                        </p>
                        <h3>
                            PressHop Editorial & Content Policy Guide (updated on 8th May 2025)
                        </h3>
                        <p>
                            How to Delete Your Account
                        </p>

                        <ol >
                            <li>Open the PressHop app</li>
                            <li>Tap on "Menu" at the bottom of your screen</li>
                            <li>Scroll down and tap on "Account settings"</li>
                            <li>Tap on "Delete Account" (shown in red)</li>
                            <li>Select a reason for deleting your account</li>
                            <li>Confirm your decision by tapping the "Delete Account" button</li>
                            <li>In the confirmation popup, tap "Proceed" to permanently delete your account</li>
                        </ol>
                        <h3>
                            Visual Guide to Account Deletion
                        </h3>
                        <ol>
                            <li>
                                Open Menu
                                <br />
                                Tap on Menu in the bottom navigation</li>
                            <li>
                                Account Settings
                                <br />
                                Find and tap on "Account settings"
                            </li>
                            <li>
                                Delete Account
                                <br />
                                Tap on the "Delete Account" option (in red)
                            </li>
                            <li>
                                Confirm Deletion
                                <br />
                                Choose a reason and tap "Delete Account", then "Proceed"
                            </li>
                        </ol>
                    </div>

                </div>
            </div>
        </section>
    );
}
