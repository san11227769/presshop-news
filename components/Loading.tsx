import Image from "next/image";
import React from "react";

export default function Loading() {
    return (
        <div className="flex items-center justify-center flex-col gap-0.5 h-screen bg-[#ffffff]">
            <Image src="/images/logo.png" className="mb-3" alt="Presshop Logo" width={60} height={120} />
            <div className="flex space-x-3">
                <div className="w-4 h-4 bg-[#EC4E54] rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-4 h-4 bg-[#000000] rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-4 h-4 bg-[#D9D9D9] rounded-full animate-bounce" />
            </div>
            <span className="ml-4 text-[#D9D9D9] text-lg font-semibold tracking-wide">
                Loading ...
            </span>
        </div>
    );
}
