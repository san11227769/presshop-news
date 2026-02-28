// "use client";

// import { Menu, X, Search } from "lucide-react";
// import {
//     Sheet,
//     SheetContent,
//     SheetTrigger,
//     SheetClose,
// } from "@/components/ui/sheet";
// import ActiveLink from "@/helper/ActiveLink";
// import { MAIN_MENU } from "@/config/menu";
// import { DialogTitle } from "@radix-ui/react-dialog";
// import { Button } from "../ui/button";
// import GobSearch from "@/helper/GobSearch";
// import Link from "next/link";

// export default function MobileMenu() {
//     return (
//         <Sheet>
//             <SheetTrigger asChild>
//                 <button className="p-2 border rounded-md border-white/20">
//                     <Menu size={20} />
//                 </button>
//             </SheetTrigger>

//             <SheetContent
//                 side="right"
//                 className="w-[260px]  sm:w-[260px] bg-black text-white p-0 border-0 [&>button]:hidden"
//             >
//                 <DialogTitle className="hidden">Mobile Navigation Menu</DialogTitle>

//                 {/* Header */}
//                 <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
//                     <Button variant="default" size="sm" className="fs-sm md:fs-lg">
//                         Download the App
//                     </Button>

//                     <SheetClose className="bg-transparent">
//                         <X className="cursor-pointer" />
//                     </SheetClose>
//                 </div>

//                 {/* Menu */}
//                 <nav className="flex flex-col divide-y divide-white/10">
//                     {MAIN_MENU.map((item) => (
//                         <SheetClose asChild key={item.href ?? item.label}>
//                             <Link href={item.href ?? "/"} className="px-6 py-4">
//                                 {item.label}
//                             </Link>
//                         </SheetClose>
//                     ))}
//                 </nav>

//                 {/* Search */}
//                 <div className="mt-auto px-6 py-8">
//                     <GobSearch
//                         onSubmit={(email) => {
//                             console.log("Subscribed:", email);
//                         }}
//                     />

//                 </div>
//             </SheetContent>
//         </Sheet>
//     );
// }
"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { MAIN_MENU } from "@/config/menu";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "../ui/button";
import GobSearch from "@/helper/GobSearch";
import Link from "next/link";
import clsx from "clsx";

export default function MobileMenu() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <button className="p-2 border rounded-md border-white/20">
                    <Menu size={20} />
                </button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="w-[260px] md:max-w-9/10 md:w-7/10  bg-black text-white p-0 border-0 [&>button]:hidden"
            >
                <DialogTitle className="hidden">Mobile Navigation Menu</DialogTitle>

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                    <Button size="sm">Download the App</Button>

                    <SheetClose>
                        <X />
                    </SheetClose>
                </div>

                {/* Menu */}
                <div className="flex-1 overflow-y-auto">
                    <nav className="flex flex-col divide-y divide-white/10">
                        {MAIN_MENU.map((item, index) =>
                            item.children ? (
                                <div key={item.label}>
                                    {/* Parent */}
                                    <button
                                        onClick={() => toggle(index)}
                                        className="flex w-full items-center gap-2 px-6 py-4"
                                    >
                                        <span>{item.label}</span>
                                        <ChevronDown
                                            size={16}
                                            className={clsx(
                                                "transition-transform",
                                                openIndex === index && "rotate-180"
                                            )}
                                        />
                                    </button>

                                    {/* Submenu */}
                                    <div
                                        className={clsx(
                                            "overflow-hidden transition-all",
                                            openIndex === index ? "max-h-96" : "max-h-0"
                                        )}
                                    >
                                        <div className="flex flex-col bg-white/5">
                                            {item.children.map((child) => (
                                                <SheetClose asChild key={child.label}>
                                                    <Link
                                                        href={child.href}
                                                        className="px-10 py-3 text-sm hover:text-pink"
                                                    >
                                                        {child.label}
                                                    </Link>
                                                </SheetClose>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <SheetClose asChild key={item.label}>
                                    <Link href={item.href} className="px-6 py-4">
                                        {item.label}
                                    </Link>
                                </SheetClose>
                            )
                        )}
                    </nav>
                </div>

                {/* Search */}
                <div className="mt-auto px-6 py-8">
                    <GobSearch onSubmit={(email) => console.log(email)} />
                </div>
            </SheetContent>
        </Sheet>
    );
}
