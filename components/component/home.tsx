import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Header } from "./header";

export function Home() {
    return (
        <div className="flex flex-col min-h-screen w-screen">
            <Header />
            <main className="flex-1">
                <section
                    className="max-w-full py-6 md:py-12 lg:py-16 xl:py-24 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/banner-image.png')",
                        backgroundSize: "cover",
                    }}
                >
                    <div className="container mx-auto flex flex-col items-center justify-center space-y-4 px-4 text-center md:px-6">
                        <div className="space-y-2 bg-gray-900 bg-opacity-50 p-4 rounded-lg">
                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                                Elevate Your Digital Presence
                            </h1>
                            <p className="mx-auto max-w-2xl text-xl lg:text-2xl">
                                Master the art of engagement with our bespoke
                                social media management, professional video
                                production, and dynamic content creation
                                services.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/get-started"
                                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            >
                                <div>Get Started</div>
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                            >
                                <div>Contact Us</div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-wrap justify-between items-center -mx-4">
                            <div className="px-4 w-full lg:w-1/2">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                                    Comprehensive Social Media Strategy
                                </h2>
                                <p className="text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400 mb-8">
                                    Enhance your brand&apos;s online footprint
                                    with our expertly crafted social media
                                    campaigns designed to grow your audience and
                                    foster meaningful engagement.
                                </p>
                            </div>
                            <div className="px-4 w-full lg:w-1/2">
                                <Image
                                    alt="Social Media Strategy"
                                    src="/social-media-strategy.png"
                                    layout="responsive"
                                    width={550}
                                    height={310}
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-wrap items-center justify-between -mx-4">
                            <div className="px-4 w-full lg:w-1/2">
                                <Image
                                    alt="Video Production"
                                    src="/video-production.png"
                                    layout="responsive"
                                    width={550}
                                    height={310}
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="px-4 w-full lg:w-1/2 space-y-4">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                    Captivating Video Production
                                </h2>
                                <p className="text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
                                    Tell your story through stunning visuals
                                    crafted by our award-winning team, designed
                                    to captivate and convert your target
                                    audience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="flex flex-wrap items-center justify-between -mx-4">
                            <div className="px-4 w-full lg:w-1/2 space-y-4">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                    Dynamic Content Creation
                                </h2>
                                <p className="text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
                                    Unleash the full potential of your brand
                                    with our creative content solutions,
                                    including captivating graphics, compelling
                                    copy, and innovative campaigns.
                                </p>
                            </div>
                            <div className="px-4 w-full lg:w-1/2">
                                <Image
                                    alt="Content Creation"
                                    src="/content-creation.png"
                                    layout="responsive"
                                    width={550}
                                    height={310}
                                    className="rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-700">
                    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                        <div className="space-y-3">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                                Let&apos;s Make Magic Happen
                            </h2>
                            <p className="mx-auto max-w-2xl text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
                                Are you ready to elevate your brand&apos;s
                                digital presence? Reach out to us today and
                                let&apos;s start crafting your success story.
                            </p>
                        </div>
                        <div className="mx-auto w-full max-w-md space-y-2">
                            <form className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                                <Input
                                    className="max-w-lg flex-1"
                                    placeholder="Enter your email"
                                    type="email"
                                />
                                <Button type="submit">Sign Up</Button>
                            </form>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Subscribe to get exclusive updates and offers.
                                <Link href="/terms">
                                    <div className="underline">
                                        Terms & Conditions
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
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
        </div>
    );
}
