"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center bg-[#F7F7F7] px-6">
            <h1 className="text-[120px] font-bold text-[#EC4E54] leading-none mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-[#222] mb-4">Oops! Page not found</h2>
            <p className="text-[#717171] max-w-md mb-6">
                The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.
            </p>

            <div className="flex gap-3">
                <Button
                    onClick={() => router.back()}
                    variant="outline">
                    Go Back
                </Button>
                <Link href="/">
                    <Button variant="default">
                        Go Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
