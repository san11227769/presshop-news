"use client";

import React from "react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function SearchPopover() {
    return (
        <Popover>
            <PopoverTrigger className="hidden lg:inline-block p-2.5 rounded-md border border-white/20 hover:bg-white/10 cursor-pointer">
                <Search size={18} />
            </PopoverTrigger>
            <PopoverContent className="w-64 p-3 bg-white text-black">
                <Input placeholder="Search news..." />
            </PopoverContent>
        </Popover>
    );
}
