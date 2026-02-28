"use client";

import React from "react";
import Link from "next/link";
import NavMenu from "./NavMenu";
import SearchPopover from "./SearchPopover";
import MobileMenu from "./MobileMenu";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

type TopBarProps = {
    lang: string;
    onLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    theme: string;
    toggleTheme: () => void;
};

export default function TopBar({ lang, onLanguageChange, theme, toggleTheme }: TopBarProps) {
    return (
        <div className="px-6">

            <div className="container mx-auto">

                <div className="flex items-center justify-between  py-4">
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/images/logo-presshop.png" className="h-6 lg:h-10" alt="logo" />
                    </Link>

                    <NavMenu />

                    <div className="flex items-center gap-4">
                        <SearchPopover />

                        <Button variant="default" size="sm" className="fs-sm md:fs-lg">
                            Download the App
                        </Button>

                        {/* <select
                            onChange={onLanguageChange}
                            value={lang}
                            className="bg-gray-800 dark:bg-gray-200 border border-gray-700 dark:border-gray-300 text-white dark:text-black text-sm p-1 rounded"
                        >
                            <option value="en">English</option>
                            <option value="hi">Hindi</option>
                        </select> */}

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-800 dark:bg-gray-200 text-white dark:text-black hover:bg-[#EC4E54] hover:text-white transition"
                        >
                            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                        </button>


                        <div className="xl:hidden">
                            <MobileMenu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
