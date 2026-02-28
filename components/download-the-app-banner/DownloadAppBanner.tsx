import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface DownloadAppBannerProps {
    overlayColor?: string;
    subtitle?: string;
    rightImage?: string;
}

const DownloadAppBanner: React.FC<DownloadAppBannerProps> = ({

    overlayColor = "rgba(0,0,0,0.5)",
    subtitle,
    rightImage,
}) => {
    return (

        <div className="relative w-full  overflow-hidden  rounded-xl md:rounded-2xl lg:rounded-3xl" style={{ backgroundColor: overlayColor }}>
            {/* Background Images */}

            <div
                className="w-1/3 bg-cover bg-center absolute top-0 right-0 h-full"
                style={{ backgroundImage: "url('/images/bg-3.png')" }}
            />
            <div
                className="w-1/3 bg-cover bg-center absolute top-0 right-2/5 h-full"
                style={{ backgroundImage: "url('/images/bg-4.png')", opacity: 0.05 }}
            />
            {/* Content */}
            <div className="relative z-10   flex flex-row px-4 md:px-8  lg:px-12   justify-between gap-6">
                <div className="text-white py-4 w-7/12 md:w-9/20  my-2 flex-col flex justify-center gap-4">
                    <h2 className="hed-xm xl:hed-xl line-height120 font-medium lg:pr-15">Want the map? Get the app</h2>
                    {subtitle && <p className="mt-1 lg:my-2 fs-xs md:fs-2xl text-white text-justify">{subtitle}</p>}
                    <Button variant="darkbtn" className="fs-sm">
                        Download the App
                    </Button>
                </div>

                {rightImage && (
                    <div className="w-5/12 md:w-11/20  flex items-end">
                        <Image
                            src={rightImage}
                            alt="Banner Image"
                            width={340}
                            height={340}
                            className="w-full"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default DownloadAppBanner;
