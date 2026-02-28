import Image from "next/image";
import React from "react";
import { Search } from "lucide-react";

function FooterTop() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap:3 md:gap-6 md:py-6">

            {/* Logo */}
            <div className="w-full md:w-1/3">
                <Image
                    src="/images/footer-logo.png"
                    alt="PressHop Logo"
                    width={220}
                    height={100}
                    className="w-52 h-auto cursor-pointer dark:invert"
                />
            </div>

            {/* Subscribe */}
            <form className="hidden flex-1 md:flex justify-center md:justify-end w-full md:w-2/3">
                <div className="flex flex-1 items-center bg-white dark:bg-[#2C2C2C] p-0.5 rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-transparent max-w-xl">

                    {/* Icon */}
                    <span className="px-4 text-dark">
                        <Search size={18} />
                    </span>

                    {/* Input */}
                    <input
                        type="email"
                        placeholder="Stay connected with us. Enter your email here"
                        className="flex-1 px-2 py-2 text-sm text-gray-700 dark:text-white outline-none"
                    />

                    {/* Button */}
                    <button
                        type="submit"
                        className="flex items-center fs-xl gap-2 bg-pink text-white px-6 py-3 rounded-r-lg hover:bg-black cursor-pointer transition"
                    >
                        <span className=" border-2 border-white w-5  text-xs">✓</span>
                        Subscribe now
                    </button>
                </div>
            </form>

        </div>
    );
}

export default FooterTop;
