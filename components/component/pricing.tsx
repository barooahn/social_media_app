import Link from "next/link";
import { Header } from "../component/header";

export function Pricing() {
    return (
        <>
            <Header />
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-700">
                <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6 lg:gap-10">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Pick the perfect plan
                        </h2>
                        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Tailored digital marketing services for every stage
                            of your business. Contact us for a personalized
                            quote.
                        </p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:gap-10">
                        {/* Starter Plan */}
                        <div className="space-y-4 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm p-6 dark:border-gray-800 dark:bg-gray-950 dark:shadow-lg">
                            <h3 className="text-xl font-bold">Starter</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                For individuals and small teams just getting
                                started.
                            </p>
                            <span className="text-2xl font-semibold">
                                £50 - £150
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Per month
                            </span>
                            <Link href="/get-started">
                                <div className="inline-block w-full rounded-xl border border-gray-200 bg-gray-50 px-8 py-2 text-sm font-semibold shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                    Start trial
                                </div>
                            </Link>
                        </div>

                        {/* Pro Plan */}
                        <div className="space-y-4 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm p-6 dark:border-gray-800 dark:bg-gray-950 dark:shadow-lg">
                            <h3 className="text-xl font-bold">Pro</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Advanced features for growing teams.
                            </p>
                            <span className="text-2xl font-semibold">
                                £200 - £500
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Per month
                            </span>
                            <Link href="/contact-sales">
                                <div className="inline-block w-full rounded-xl border border-gray-200 bg-gray-50 px-8 py-2 text-sm font-semibold shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                    Contact sales
                                </div>
                            </Link>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="space-y-4 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm p-6 dark:border-gray-800 dark:bg-gray-950 dark:shadow-lg">
                            <h3 className="text-xl font-bold">Enterprise</h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Customizable for your organisation&apos;s unique
                                needs.
                            </p>
                            <span className="text-xl font-semibold">
                                Custom Pricing
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                Contact us for a quote
                            </span>
                            <Link href="/contact-sales">
                                <div className="inline-block w-full rounded-xl border border-gray-200 bg-gray-50 px-8 py-2 text-sm font-semibold shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50">
                                    Contact sales
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
