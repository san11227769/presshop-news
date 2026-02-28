import Image from "next/image";
import React from "react";

interface InnerBannerProps {
    overlayColor?: string;
    title: string;
    subtitle?: string;
    rightImage?: string;
}

const InnerBanner: React.FC<InnerBannerProps> = ({

    overlayColor = "rgba(0,0,0,0.5)",
    title,
    subtitle,
    rightImage,
}) => {
    return (

        <div className="relative w-full  overflow-hidden  rounded-xl md:rounded-2xl lg:rounded-3xl" style={{ backgroundColor: overlayColor }}>
            {/* Background Images */}

            <div
                className="w-1/3 bg-cover bg-center absolute top-0 right-0 h-full"
                style={{ backgroundImage: "url('/images/bg1.png')" }}
            />
            <div
                className="w-1/3 bg-cover bg-center absolute bottom-0 right-1/3 h-full"
                style={{ backgroundImage: "url('/images/bg2.png')", opacity: 0.05 }}
            />
            {/* Content */}
            <div className="relative z-10   flex flex-row px-4 md:px-8  lg:px-12   justify-between gap-6">
                <div className="text-white py-4 w-7/12 md:w-11/20 flex-col flex justify-center gap-4">
                    <h1 className="hed-sm md:hed-xl line-height120 lg:hed-2xl font-medium lg:pr-15">{title}</h1>
                    {subtitle && <p className="mt-1 lg:mt-3 fs-sm sm:fs-lg lg:fs-2xl text-white text-justify">{subtitle}</p>}
                </div>

                {rightImage && (
                    <div className="w-5/12 md:w-9/20  flex items-end">
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

export default InnerBanner;
