"use client";

import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import BottomInfoBar from "./BottomInfoBar";
import i18n from "@/i18n";

export default function Header() {
    const [hydrated, setHydrated] = useState(false);
    const [lang, setLang] = useState("");
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        setHydrated(true);

        setLang(i18n.language);

        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }, []);

    if (!hydrated) return null;

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.target.value;
        setLang(newLang);
        i18n.changeLanguage(newLang);
    };

    return (
        <header className="w-full border-b bg-black text-white sticky top-0 z-50">


            <TopBar
                lang={lang}
                onLanguageChange={handleLanguageChange}
                theme={theme}
                toggleTheme={toggleTheme}
            />

            <BottomInfoBar />

        </header>
    );
}
