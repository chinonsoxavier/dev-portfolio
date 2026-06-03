// app/privacy-policies/page.tsx
import { Metadata } from "next";
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";

export const metadata: Metadata = {
  title: "Privacy Policy | Chinonso Business Solutions",
  description:
    "Our comprehensive privacy policy outlining how we collect, use, and protect your business information.",
};

export default function PrivacyPolicy() {
  return (
    <Layout className="flex-1 flex flex-col items-center w-full">
      <div className="w-full max-width flex flex-col gap-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-display font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-[#1e1a32] rounded-xl p-8 border border-border-dark space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Introduction
              </h2>
              <p className="text-muted leading-relaxed">
                At Chinonso Business Solutions, we are committed to protecting
                the privacy and confidentiality of our clients` business
                information. This Privacy Policy outlines how we collect, use,
                store, and protect your data when you engage with our consulting
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Business Information
                  </h3>
                  <ul className="list-disc list-inside text-muted space-y-1">
                    <li>Company name, size, and industry</li>
                    <li>Business contact information</li>
                    <li>Operational data and metrics</li>
                    <li>Strategic business plans and objectives</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Technical Information
                  </h3>
                  <ul className="list-disc list-inside text-muted space-y-1">
                    <li>IP addresses and access logs</li>
                    <li>Device and browser information</li>
                    <li>Usage patterns and analytics data</li>
                    <li>System performance metrics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                How We Use Your Information
              </h2>
              <p className="text-muted mb-4">
                We utilize your business information to:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>
                  Provide strategic consulting services tailored to your
                  business needs
                </li>
                <li>Develop and implement digital transformation solutions</li>
                <li>Analyze business performance and generate insights</li>
                <li>Communicate project progress and deliverables</li>
                <li>Ensure regulatory compliance and risk management</li>
                <li>Improve our service offerings based on client feedback</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Data Security Measures
              </h2>
              <p className="text-muted mb-4">
                We implement enterprise-grade security measures including:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>256-bit SSL encryption for all data transmissions</li>
                <li>Secure cloud storage with regular backups</li>
                <li>Role-based access control and authentication systems</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Compliance with ISO 27001 and SOC 2 standards</li>
                <li>Business continuity and disaster recovery plans</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Data Sharing and Disclosure
              </h2>
              <p className="text-muted mb-4">
                We do not sell, rent, or share your business information with
                third parties for marketing purposes. We may share data only in
                the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>
                  With your explicit consent for specific business purposes
                </li>
                <li>
                  With trusted service providers who assist in delivering our
                  services
                </li>
                <li>When required by law or regulatory authorities</li>
                <li>To protect our rights, property, or safety</li>
                <li>
                  In connection with business mergers or acquisitions (with
                  notice)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Your Rights and Choices
              </h2>
              <p className="text-muted mb-4">
                As our client, you have the right to:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Access and review your business information we hold</li>
                <li>Request corrections to inaccurate data</li>
                <li>Request deletion of non-essential business data</li>
                <li>Opt-out of non-essential communications</li>
                <li>Obtain a copy of your data in portable format</li>
                <li>Restrict certain types of data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                International Data Transfers
              </h2>
              <p className="text-muted">
                For our global clients, we ensure cross-border data transfers
                comply with applicable regulations including GDPR, CCPA, and
                other local data protection laws. We utilize standard
                contractual clauses and appropriate safeguards for international
                data transfers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Policy Updates
              </h2>
              <p className="text-muted">
                We may update this Privacy Policy periodically to reflect
                changes in our business practices or applicable laws. We will
                notify clients of significant changes via email or through our
                client portal. The revised policy will be effective immediately
                upon posting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h2>
              <p className="text-muted mb-4">
                For questions about this Privacy Policy or our data practices,
                please contact our Data Protection Officer:
              </p>
              <div className="bg-surface-dark rounded-lg p-4">
                <p className="text-white mb-2">
                  <strong>Email:</strong> chinonsoxavier26@gmail.com
                </p>
                <p className="text-white mb-2">
                  <strong>Phone:</strong> +234 916-894-5115
                </p>
                <p className="text-white">
                  <strong>Address:</strong> 78 Adekeye Street, Lagos 10001
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
