"use client";

import * as React from "react";
import Image from "next/image";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const countries = [
    { code: "UK", name: "United Kingdom", flag: "/images/united-kingdom.png" },

];

export function CountryDropdown() {
    const [selected, setSelected] = React.useState(countries[0]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 outline-none">
                <Image
                    src={selected.flag}
                    alt={selected.name}
                    width={16}
                    height={16}
                    className="h-3 w-auto"
                    unoptimized
                    priority
                />
                <span className="fs-md font-medium">{selected.code}</span>
                <ChevronDown className="h-4 w-4 opacity-70" />
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-44">
                {countries.map((country) => (
                    <DropdownMenuItem
                        key={country.code}
                        onClick={() => setSelected(country)}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Image
                            src={country.flag}
                            alt={country.name}
                            width={16}
                            height={16}
                            className="h-3 w-auto"
                            unoptimized
                            priority
                        />
                        <span>{country.name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
