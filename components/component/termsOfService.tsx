// components/TermsOfService.tsx
import React from "react";

const TermsOfService: React.FC = () => {
    return (
        <div className="bg-white text-gray-700 p-4 md:p-8 lg:p-12">
            <div className="container mx-auto">
                <h1 className="text-2xl font-semibold mb-4">
                    Terms of Service
                </h1>
                <p className="mb-4">Last updated: [Insert Date]</p>
                <section>
                    <h2 className="font-semibold text-xl mb-2">
                        1. Introduction
                    </h2>
                    <p className="mb-4">
                        These Terms of Service (&ldquo;Terms&ldquo;) govern your
                        use of our website located at [Insert Website]
                        (&ldquo;Service&ldquo;) operated by [Your Company Name]
                        (&ldquo;us&ldquo;, &ldquo;we&ldquo;, or
                        &ldquo;our&ldquo;).
                    </p>
                </section>
                <section>
                    <h2 className="font-semibold text-xl mb-2">
                        2. Acceptance of Terms
                    </h2>
                    <p className="mb-4">
                        By accessing or using our Service, you agree to be bound
                        by these Terms. If you disagree with any part of the
                        terms, then you do not have permission to access the
                        Service.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
