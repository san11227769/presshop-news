export const MAIN_MENU = [
    { label: "Home", href: "/" },
    { label: "App", href: "/app-info" },
    {
        label: "FAQs",
        children: [
            { label: "Hoppers", href: "/faqs/hoppers" },
            { label: "Publisher", href: "/faqs/publisher" },
        ],
    },
    {
        label: "Hub",
        children: [
            { label: "Hopper resource", href: "/hub/hopper-resource" },
            { label: "Publisher resource", href: "/hub/publisher-resource" },
            { label: "Videos", href: "/hub/videos" },
            { label: "Updates", href: "/hub/updates" },
        ],
    },
    {
        label: "Blog",
        children: [
            { label: "Blog", href: "/blog" },
            { label: "Press", href: "/press" },
        ],
    },
    {
        label: "About",
        children: [
            { label: "About Us", href: "/about/about-us" },
            { label: "Advisory Board", href: "/about/advisory-board" },
            { label: "Team", href: "/about/team" },
            { label: "T&Cs", href: "/about/trems-condition" },
            { label: "Content Policy Guide", href: "/about/content-policy-guide" },
            { label: "Account Deletion & Data Retention Policy", href: "/about/account-deletion-data-retention-policy" },
            { label: "Privacy Policy", href: "/about/privacy-policy" },
            { label: "Cookie Policy", href: "/about/cookie-policy" },
        ],
    },
    { label: "Contact", href: "/contact" },
];

