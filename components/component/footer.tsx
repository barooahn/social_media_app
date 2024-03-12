import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-6 w-full border-t">
            <div className="container flex flex-col items-center px-4 md:flex-row md:justify-between md:px-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Buzz Creator © 2024 . All rights reserved.
                </p>
                <nav className="flex gap-4 mt-4 md:mt-0">
                    <Link href="/terms-of-service">
                        <div className="text-sm hover:underline">
                            Terms of Service
                        </div>
                    </Link>
                    <Link href="/privacy-policy">
                        <div className="text-sm hover:underline">
                            Privacy Policy
                        </div>
                    </Link>
                </nav>
            </div>
        </footer>
    );
}
