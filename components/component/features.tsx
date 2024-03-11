import { Header } from "./header";

export function Features() {
    return (
        <>
            <Header />
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-700">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-tight">
                            Digital Marketing Services
                        </h1>
                        <p className="max-w-2xl mx-auto text-gray-500 md:text-xl lg:text-2xl dark:text-gray-400">
                            Enhance your business&apos;s digital presence with
                            our comprehensive suite of marketing services.
                            We&apos;re dedicated to helping you achieve your
                            sales and brand awareness goals.
                        </p>
                    </div>
                    <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-3">
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold">
                                Digital Consultations
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Technical analysis and strategic planning to
                                improve your digital presence across platforms.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold">
                                Social Media Postings
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Engage with your audience through regular,
                                high-quality posts tailored to each social media
                                platform.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold">
                                Video and Content Creation
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                High-impact promotional videos and content to
                                tell your brand&apos;s story and captivate your
                                audience.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold">
                                Advertising and PPC
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Maximize your ROI with targeted advertising
                                campaigns on various platforms, using A/B
                                testing to refine strategies.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold">
                                Technical Analysis
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Get actionable insights with our benchmarking
                                services, comparing your digital presence
                                against competitors.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold">
                                Engagement Strategies
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400">
                                Build a community around your brand by
                                effectively engaging with customers on social
                                media.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
