
"use client";

import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/types/team";


interface TeamMembersCardProps {
    member: TeamMember;
}

function TeamMembersCard({ member }: TeamMembersCardProps) {
    const [expanded, setExpanded] = useState(false);
    const [wordLimit, setWordLimit] = useState(250);

    useEffect(() => {
        const updateLimit = () => {
            setWordLimit(window.innerWidth < 768 ? 100 : 220);
        };

        updateLimit(); // initial run
        window.addEventListener("resize", updateLimit);

        return () => window.removeEventListener("resize", updateLimit);
    }, []);

    const words = member.description;
    const isLongText = words.length > wordLimit;

    const displayedText = expanded
        ? member.description
        : words.slice(0, wordLimit);
    return (
        <Card className="py-3 md:py-6 lg:py-6 px-2 justify-between md:px-4 text-center gap-3">
            <div className="space-y-3">

                <Image
                    src={member.image}
                    alt={member.name}
                    width="160"
                    height={160}
                    className="w-20 md:w-32 lg:w-40  max-w-40 h-20 md:h-32 lg:h-40 max-h-40 border-2
                     border-red-400 rounded-full m-auto mb-4 object-cover"
                />
                <h2 className="font-medium fs-lg lg:fs-2xl">{member.name}</h2>

                <span className="fs-md md:fs-lg lg:fs-xl text-dark ">{member.role}</span>

            </div>

            <div className="text-gray flex-1 fs-sm lg:fs-lg  space-y-4 mb-4 line-height140 flex justify-start flex-col">

                <p>
                    {displayedText}
                    {isLongText && !expanded && "... "}
                    {isLongText && (
                        <button
                            type="button"
                            onClick={() => setExpanded(!expanded)}
                            className="text-dark font-medium ml-1 hover:underline"
                        >
                            {expanded ? "Read less" : "Read more"}
                        </button>
                    )}
                </p>
            </div>
            <div className='flex items-center justify-center gap-2 order-1 lg:order-none'>
                <Link href="#" className=' text-white hover:bg-black  bg-pink w-5.5 h-5.5  lg:w-8.5 lg:h-8.5 flex justify-center items-center rounded-full'>
                    <Image src="/images/icon/facebook.png" alt='' className='w-2 lg:w-3.5' width="16" height="16" />
                </Link>
                <Link href="#" className=' text-white hover:bg-black  bg-pink  w-5.5 h-5.5  lg:w-8.5 lg:h-8.5 flex justify-center items-center rounded-full'>
                    <Image src="/images/icon/linkedIn.png" alt='' className='w-2 lg:w-3.5' width="16" height="16" />
                </Link>
                <Link href="#" className=' text-white hover:bg-black  bg-pink  w-5.5 h-5.5  lg:w-8.5 lg:h-8.5 flex justify-center items-center rounded-full'>
                    <Image src="/images/icon/x.png" alt='' className='w-2 lg:w-3.5' width="16" height="16" />

                </Link>
                <Link href="#" className=' text-white hover:bg-black  bg-pink  w-5.5 h-5.5  lg:w-8.5 lg:h-8.5 flex justify-center items-center rounded-full'>
                    <Image src="/images/icon/youtube.png" alt='' className='w-2 lg:w-3.5' width="16" height="16" />
                </Link>
            </div>
        </Card>
    )
}

export default TeamMembersCard