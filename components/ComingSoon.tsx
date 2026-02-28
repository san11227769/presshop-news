"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ComingSoon() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-[#F7F7F7] px-6">
            <div className="text-center max-w-xl">
                <h1 className="hed-2xl md:hed-xl font-bold text-pink mb-4">
                    Coming Soon
                </h1>

                <p className="text-gray fs-lg mb-6">
                    We’re working hard to bring something amazing.
                    Stay tuned — it’ll be worth the wait!
                </p>

                <div className="flex justify-center gap-3">
                    <Link href="/">
                        <Button>
                            Go Home
                        </Button>
                    </Link>

                    <Button variant="outline" onClick={() => window.history.back()}>
                        Go Back
                    </Button>
                </div>
            </div>
        </div>
    );
}
