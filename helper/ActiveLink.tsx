"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type ActiveLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
};

export default function ActiveLink({
  href,
  children,
  className,
  activeClassName = "text-pink",
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "hover:text-pink fs-xl lg:fs-lg",
        className,
        isActive && activeClassName
      )}
    >
      {children}
    </Link>
  );
}
