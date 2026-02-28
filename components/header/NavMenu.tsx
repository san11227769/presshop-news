"use client";

import ActiveLink from "@/helper/ActiveLink";
import { MAIN_MENU } from "@/config/menu";
import { ChevronDown } from "lucide-react";

export default function NavMenu() {
    return (
        <nav className="hidden xl:flex items-center gap-8 text-sm mx-auto">
            {MAIN_MENU.map((item) =>
                item.children ? (
                    <div key={item.label} className="relative group hover:text-pink">
                        {/* Parent */}
                        <div className="flex items-center gap-1 cursor-pointer">
                            <span className="hover:text-pink fs-xl lg:fs-lg text-off-white">{item.label}</span>
                            <ChevronDown size={12} />
                        </div>

                        {/* Dropdown */}
                        <div className="absolute top-8 right-0 p-4 mt-3 min-w-[260px] rounded-xl
                         bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 
                         group-hover:visible transition-all">
                            {/* Arrow */}
                            <span className="absolute -top-4 right-6 w-0 h-0 
    border-l-16 border-r-16 border-b-16 
    border-l-transparent border-r-transparent border-b-white">
                            </span>
                            {item.children.map((child) => (
                                <ActiveLink key={child.label} href={child.href}
                                    className="block fs-xl border-b nth-last-[1]:border-none py-3 text-gray  hover:text-pink">
                                    {child.label}
                                </ActiveLink>
                            ))}
                        </div>
                    </div>
                ) : (
                    <ActiveLink className="text-off-white" key={item.label} href={item.href}>
                        {item.label}
                    </ActiveLink>
                )
            )}
        </nav>
    );
}
