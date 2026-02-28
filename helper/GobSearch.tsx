"use client";

import { Search } from "lucide-react";

type GobSearchProps = {
    placeholder?: string;
    buttonText?: string;
    onSubmit?: (value: string) => void;
    className?: string;
};

export default function GobSearch({
    placeholder = "Search",
    buttonText = "Subscribe now",
    onSubmit,
    className = "",
}: GobSearchProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value;
        onSubmit?.(value);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full relative items-center bg-gray-800 rounded-md px-3"
        >
            {/* Input */}
            <input
                name="search"
                type="text"
                placeholder={placeholder}
                className="flex-1 px-2 py-2 text-sm h-10 text-white outline-none"
            />

            {/* Button */}
            <button
                type="submit"
                className="absolute right-1 top-1 bg-pink text-sm flex-1 w-8 h-8 rounded-lg flex items-center justify-center"
            >
                <Search size={16} className="text-white" />
            </button>

        </form>
    );
}
