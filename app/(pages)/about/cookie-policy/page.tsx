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
export default function CookiePolicyPage() {
    return (
        <section>
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <InnerBanner rightImage="/images/pressbanner.png" overlayColor="#44A152" title="COOKIE POLICY" subtitle="How we use cookies to enhance your experience, personalize content, and improve site performance." />
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
                            This Website may place and access certain Cookies on your computer. Presshop Media UK Limited uses Cookies to improve your experience of using the Website and to improve our range of products and services. Presshop Media UK Limited has carefully chosen these Cookies and has taken steps to ensure that your privacy is protected and respected at all times.
                        </p>
                        <p>
                            All Cookies used by this Website are used in accordance with current UK and EU Cookie Law.
                        </p>
                        <p>
                            Before the Website places Cookies on your computer, you will be presented with a message bar requesting your consent to set those Cookies. By giving your consent to the placing of Cookies, you are enabling Presshop Media UK Limited to provide a better experience and service to you. You may, if you wish, deny consent to the placing of Cookies; however certain features of the Website may not function fully or as intended.</p>
                        <p>

                            This Website may place the following Cookies:
                        </p>
                        <h3>
                            Strictly necessary cookies
                        </h3>
                        <p>
                            These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website, use a shopping cart or make use of e-billing services.
                        </p>
                        <h3>
                            Analytical/performance cookies
                        </h3>
                        <p>
                            They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.
                        </p>
                        <h3>
                            Functionality cookies
                        </h3>
                        <p>
                            These are used to recognise you when you return to our website. This enables us to personalise our content for you, greet you by name and remember your preferences (for example, your choice of language or region). By using the Website, you agree to our placement of functionality cookie.
                        </p>
                        <h3>
                            Targeting cookies
                        </h3>
                        <p>
                            These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.

                        </p>
                        <p>
                            You can find a list of Cookies that we use in the Cookies Schedule
                        </p>
                        <p>
                            You can choose to accept or decline Cookies. Most web browsers automatically accept Cookies, but you can usually modify your browser setting to decline Cookies if you prefer. This may prevent you from taking full advantage of the Website.
                        </p>
                        <p>
                            You can choose to delete Cookies at any time; however, you may lose any information that enables you to access the Website more quickly and efficiently including, but not limited to, personalisation settings.
                        </p>
                        <p>
                            It is recommended that you ensure that your internet browser is up-to-date and that you consult the help and guidance provided by the developer of your internet browser if you are unsure about adjusting your privacy settings.

                        </p>
                        <p>
                            For more information generally on cookies, including how to disable them, please refer to aboutcookies.org. You will also find details on how to delete cookies from your computer.
                        </p>
                        <p>
                            Updated on 05 June 2025
                        </p>
                    </div>

                </div>
            </div>
        </section >
    );
}
