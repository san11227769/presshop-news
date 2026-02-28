"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function DataNotFound({ message = "No Data Found" }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-6">
            <Image
                src="/images/data-not-found.png" // optional: place an illustration at public/not-found.png
                alt="Data not found"
                width={150}
                height={150}
                className="mb-6 opacity-90"
            />
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-2">
                {message}
            </h2>
            <p className="text-gray max-w-md">
                We couldn’t find any data to display. Please try again later or refresh the page.
            </p>

            <Button variant="default"
                onClick={() => window.location.reload()}
                className="mt-3"
            >
                Refresh Page
            </Button>
        </div>
    );
}
