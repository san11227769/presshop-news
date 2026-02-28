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
export default function PrivacyPolicyPage() {
    return (
        <section>
            <div className="py-10 px-4 lg:px-6">
                <div className="container m-auto">
                    <InnerBanner rightImage="/images/pressbanner.png" overlayColor="#FAB700" title="PRIVACY POLICY" subtitle="How we collect, use, and protect your information to ensure privacy, security, and transparency at all times." />
                </div>
            </div>
            <div className="pt-2 pb-10 px-4 lg:px-6">
                <div className="container m-auto ">
                    <div className="text-gray space-y-4 cms-para-text
                    [&>h3]:font-medium line-height120 [&>h3]:text-sm lg:[&>h3]:text-lg 
                    [&>h3]:text-black/80 dark:[&>h3]:text-white/80 [&>ol]:pl-5
    [&>ol]:space-y-2
    lg:[&>ol]:text-base
    [&>ol>li]:leading-relaxed
    [&>strong]:font-medium">
                        <p>
                            This Privacy Policy applies between you, the User of this Website, and Presshop Media UK Limited, the owner and provider of this Website. Presshop Media UK Limited takes the privacy of your information very seriously. This Privacy Policy applies to our use of any and all Data collected by us or provided by you in relation to your use of the Website.
                        </p>
                        <p>
                            This Privacy Policy should be read alongside, and in addition to, our Terms and Conditions, which can be found at: https://www.presshop.co.uk/termsandconditions
                        </p>
                        <p>
                            Please read this Privacy Policy carefully.
                        </p>
                        <h3>Definitions and Interpretation</h3>
                        <p>
                            In this Privacy Policy, the following definitions are used:
                        </p>
                        <p>
                            <strong>Data</strong> - collectively all information that you submit to Presshop Media UK Limited via the Website. This definition incorporates, where applicable, the definitions provided in the Data Protection Laws;
                        </p>
                        <p>
                            <strong>Cookies</strong> - a small text file placed on your computer by this Website when you visit certain parts of the Website and/or when you use certain features of the Website. Details of the cookies used by this Website are set out in the clause below (Cookies);
                        </p>
                        <p>

                            <strong>Data Protection Laws</strong> - any applicable law relating to the processing of personal Data, including but not limited to the GDPR, and any national implementing and supplementary laws, regulations and secondary legislation;
                        </p>
                        <p>
                            <strong>GDPR</strong> - the UK General Data Protection Regulation;
                        </p>
                        <p>
                            <strong>Presshop Media UK Limited, we  or us</strong> - Presshop Media UK Limited, a company incorporated in England and Wales with registered number 13522872 whose registered office is at 167-169, Great Portland Street, London W1W 5PF;
                        </p>
                        <p>
                            <strong>UK and EU Cookie Law</strong> - the Privacy and Electronic Communications (EC Directive) Regulations 2003 as amended by the Privacy and Electronic Communications (EC Directive) (Amendment) Regulations 2011 & the Privacy and Electronic Communications (EC Directive) (Amendment) Regulations 2018;
                        </p>
                    </div>
                </div>
            </div>
        </section >
    );
}
