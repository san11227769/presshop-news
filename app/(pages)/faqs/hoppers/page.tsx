
import type { Metadata } from "next";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";
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
function FaqPage() {
    return (
        <div className="py-10 px-4 lg:px-6">
            <div className="container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 items-center">
                    <div>
                        <Image src="/images/faqhoppers-banner.png" width="590" height="432" className="w-full object-cover rounded-2xl" alt="" />
                    </div>
                    <div className="[&_p]:mb-4 [&_p:last-child]:mb-0">
                        <h2 className="hed-lg lg:hed-3xl text-dark font-medium mb-4">
                            FAQs for Hoppers🤳🏼
                        </h2>
                        <p className="text-gray fs-md lg:fs-2xl">
                            Over the past few months, we’ve had the chance to meet and chat with hundreds of amazing users across London — from bright-eyed 18-year-olds to wise and witty 72-year-olds. The verdict? They’re loving <strong>PressHop</strong> — and the brilliant opportunity to turn everyday moments into money.</p>

                        <p className="text-gray fs-md lg:fs-2xl">    Below, we’ve gathered some of the most common questions they threw our way — and our answers, fresh and ready for you.</p>

                        <p className="text-gray fs-2xl">Got a question we haven’t covered? No problem. Chat with us live or drop a note to Emily (our in-house rabbit and chief mischief-maker) at hello@presshop.com — she loves a good natter. 🐰
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <Accordion type="single" defaultValue="item-1" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>When will the PressHop app be launched?</AccordionTrigger>
                            <AccordionContent>
                                <p className="text-gray fs-md lg:fs-xl">
                                    <strong>PressHop's</strong> launched and LIVE across 06 cities in the UK and 02 cities in the USA.
                                </p>
                                <p className="text-gray fs-md lg:fs-xl">
                                    We are available in Birmingham, Bristol, Leeds, Liverpool, London, Los Angeles, Manchester and New York. The response so far has been nothing short of brilliant, with tens of thousands of people loving the idea and itching to be part of it.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                                Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FaqPage