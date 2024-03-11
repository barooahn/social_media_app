// components/PrivacyPolicy.tsx
import React from "react";

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-white text-gray-700 p-4 md:p-8 lg:p-12">
            <div className="container mx-auto">
                <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>
                <p className="mb-4">Effective date: [Insert Date]</p>
                <section>
                    <h2 className="font-semibold text-xl mb-2">
                        1. Introduction
                    </h2>
                    <p className="mb-4">
                        [Your Company Name] (&ldquo;us&ldquo;, &ldquo;we&ldquo;,
                        or &ldquo;our&ldquo;) operates the [website URL] website
                        (hereinafter referred to as the &ldquo;Service&ldquo;).
                    </p>
                    <p>
                        This page informs you of our policies regarding the
                        collection, use, and disclosure of personal data when
                        you use our Service and the choices you have associated
                        with that data.
                    </p>
                </section>
                <section>
                    <h2 className="font-semibold text-xl mb-2">
                        2. Data Collection and Use
                    </h2>
                    <p className="mb-4">
                        We collect several different types of information for
                        various purposes to provide and improve our Service to
                        you.
                    </p>
                </section>
                <section>
                    <h2 className="font-semibold text-xl mb-2">
                        3. Data Sharing and Disclosure
                    </h2>
                    <p className="mb-4">
                        Explain how and why the collected data might be shared
                        or disclosed, including legal requirements or business
                        transfers.
                    </p>
                </section>
                <section>
                    <h2 className="font-semibold text-xl mb-2">
                        4. Your Data Protection Rights under GDPR
                    </h2>
                    <p className="mb-4">
                        Detail the rights of users regarding their data, such as
                        access, rectification, erasure, etc., as per GDPR.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
