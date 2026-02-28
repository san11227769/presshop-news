import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
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
type DownloadAppProps = {
    className?: string;
};

export default function DownloadApp({ className }: DownloadAppProps) {
    return (
        <>
            <div className={cn(
                "hidden md:block py-10 px-4 lg:px-6 relative",
                className
            )}>
                <div className="absolute top-0 left-0 w-full h-full -z-1">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('/images/contactbg.png')` }} />
                </div>
                <div className="container m-auto z-10">
                    <div className="flex  gap-6 items-center justify-between">
                        <div className="max-w-1/2  text-white">
                            <h2 className="hed-2sm lg:hed-xl font-medium mb-4">
                                Download the PressHop app
                            </h2>
                            <p className="fs-md lg:fs-xl text-off-white  font-light">
                                <strong className="font-bold">PressHop</strong>   is on iOS, Android, and a free desktop marketplace — built to keep journalism moving as fast as the stories.
                            </p>
                            <div className="flex gap-2 order-2  lg:border-none mt-6">

                                <Link href="#">
                                    <Image src="/images/app-store-gray.png" alt="App Store" width={150} height={50}
                                        className='h-10.5 lg:h-12.5 w-auto ' />

                                </Link>
                                <Link href="#">
                                    <Image src="/images/google-play-gray.png" alt="Google Play Store" width={150} height={50}
                                        className='h-10.5 lg:h-12.5  w-auto' />
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="bg-[#303030] rounded-lg lg:rounded-xl p-3 text-center space-y-2">
                                <Image width={125} height={125} className="w-22 lg:w-29" src="/images/apple.png" alt="" />
                                <div className="text-white">
                                    App Store
                                </div>
                            </div>
                            <div className="bg-[#303030] rounded-lg lg:rounded-xl  p-3 text-center space-y-2">
                                <Image width={125} height={125} className="w-22 lg:w-29" src="/images/apple.png" alt="" />
                                <div className="text-white">
                                    Play Store
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}