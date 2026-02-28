import ComingSoon from "@/components/ComingSoon";
import DownloadApp from "@/components/download-app/DownloadApp";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Page name| Your Company Name",
    description:
        "Learn more about Your Company Name, our mission, vision, and values. Discover who we are and what we do.",
    keywords: [
        "Download App",
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
export default function Contact() {
    return (
        <>
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mb-10 items-center">
                        <div>
                            <Image src="/images/contact-banner.png" width="590" height="432" className="w-full object-cover rounded-2xl" alt="" />
                        </div>
                        <div className="[&_p]:mb-4 [&_p:last-child]:mb-0">
                            <h2 className="hed-xl lg:hed-3xl text-dark font-medium  line-height120 mb-4">
                                We love speaking with you
                            </h2>
                            <div className="text-gray text-gray fs-md lg:fs-xl line-height120">
                                <p>
                                    Got a question, a concern, or just fancy a chat? We’re here for you 24/7, always. Whether you need help navigating the app, guidance on uploading content, or just want to share feedback, our team is only a message away.
                                </p>

                                <p >Reach out via the Chat section of the PressHop app, or contact us anytime at hello@presshop.com. You’ll also find us on Instagram, Facebook, Twitter, TikTok, or WhatsApp at +44 7488 600 786.</p>

                                <p> However you prefer to connect, we’re always happy to hear from you. We love speaking with our Hoppers...because this movement wouldn’t exist without you.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <DownloadApp className="hidden md:block" />
        </>
    );
}