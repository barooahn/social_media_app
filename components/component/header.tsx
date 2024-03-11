import Link from "next/link";
import { SVGProps } from "react";
import Image from "next/image";

export function Header() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="/">
                <Image
                    priority
                    src="/SVG/logo-white.svg"
                    height={32}
                    width={32}
                    alt="Buzz Crafter Logo"
                />
                <span className="sr-only">Buzz Crafter</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/features"
                >
                    Features
                </Link>
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/pricing"
                >
                    Pricing
                </Link>
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/about"
                >
                    About
                </Link>
                <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/contact"
                >
                    Contact
                </Link>
            </nav>
        </header>
    );
}

function MountainIcon(
    props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    );
}
