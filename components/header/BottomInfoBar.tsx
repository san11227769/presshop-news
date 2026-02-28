"use client";
import { CountryDropdown } from "@/helper/CountryDropdown";
import Image from "next/image";
export default function BottomInfoBar() {
    return (
        <div className="px-6 bg-white dark:bg-[var(--bottom-bar-bg)]">

            <div className="container mx-auto">
                <div className="w-full bg-white text-black  dark:bg-[var(--bottom-bar-bg)] dark:text-white fs-md font-bold py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Image src="/images/united-kingdom.png"
                            width={16}
                            height={16}
                            className="h-3 w-auto"
                            unoptimized
                            priority
                            alt="flag" />
                        <span className="fs-xs md:fs-md ">UK | Thursday, 5th September 2025 | 4:55 pm | 22 ° C</span>
                    </div>

                    <div className="flex items-center gap-4 fs-lg font-medium">
                        <CountryDropdown />
                    </div>
                </div>
            </div>
        </div>
    );
}
