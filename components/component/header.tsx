import Link from "next/link";
import Image from "next/legacy/image";

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
