// app/terms/page.tsx
import { Metadata } from "next";
import Footer from "@/components/layout/footer";
import Layout from "@/components/layout/layout";

export const metadata: Metadata = {
  title: "Terms of Service | Chinonso Business Solutions",
  description:
    "Our terms of service governing the professional relationship between Chinonso Business Solutions and our clients.",
};

export default function TermsOfService() {
  return (
    <Layout className="flex-1 flex flex-col items-center w-full">
      <div className="w-full max-width flex flex-col gap-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-display font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-muted text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="bg-[#1e1a32] rounded-xl p-8 border border-border-dark space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-muted leading-relaxed">
                These Terms of Service (Terms) govern the professional
                relationship between Chinonso Xavier (we, us, or
                i) and our clients (you or we). By engaging our
                services, you agree to be bound by these Terms and any
                referenced policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Services Description
              </h2>
              <p className="text-muted mb-4">
                We provide the following business consulting services:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Digital Strategy Consulting</li>
                <li>Business Process Optimization</li>
                <li>E-Commerce Solution Development</li>
                <li>Business Intelligence and Analytics</li>
                <li>Process Automation Solutions</li>
                <li>Strategic Technology Planning</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Client Responsibilities
              </h2>
              <p className="text-muted mb-4">As our client, you agree to:</p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Provide accurate and complete business information</li>
                <li>Cooperate fully in the consulting process</li>
                <li>Make timely decisions and provide necessary approvals</li>
                <li>Ensure access to relevant business systems and data</li>
                <li>
                  Provide a single point of contact for project coordination
                </li>
                <li>
                  Maintain confidentiality of our proprietary methodologies
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Fees and Payment Terms
              </h2>
              <div className="space-y-4">
                <p className="text-muted">
                  All fees are as specified in the project proposal or statement
                  of work.
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Payment Schedule
                  </h3>
                  <ul className="list-disc list-inside text-muted space-y-1">
                    <li>30% deposit upon project initiation</li>
                    <li>40% upon milestone completion</li>
                    <li>30% upon final delivery and acceptance</li>
                  </ul>
                </div>
                <p className="text-muted">
                  Late payments are subject to a 1.5% monthly interest charge.
                  All payments are non-refundable except as expressly stated in
                  these Terms.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Project Timeline and Deliverables
              </h2>
              <p className="text-muted mb-4">
                Project timelines are estimates based on current information. We
                agree to:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Provide regular progress updates and status reports</li>
                <li>Deliver all specified project milestones on time</li>
                <li>Notify you promptly of any potential delays</li>
                <li>Provide high-quality, professional deliverables</li>
              </ul>
              <p className="text-muted">
                We are not responsible for delays caused by factors beyond our
                reasonable control, including client delays, third-party
                dependencies, or force majeure events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Intellectual Property Rights
              </h2>
              <div className="space-y-4">
                <p className="text-muted">
                  <strong>Your Business Information:</strong> You retain all
                  rights to your business data, strategies, and proprietary
                  information.
                </p>
                <p className="text-muted">
                  <strong>Our Methodologies:</strong> We retain all rights to
                  our consulting methodologies, frameworks, tools, and
                  proprietary systems.
                </p>
                <p className="text-muted">
                  <strong>Deliverables:</strong> Upon full payment, you receive
                  a non-exclusive, perpetual license to use the project
                  deliverables for your business purposes.
                </p>
                <p className="text-muted">
                  <strong>Pre-existing Materials:</strong> We retain all rights
                  to our pre-existing intellectual property incorporated into
                  deliverables.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Confidentiality
              </h2>
              <p className="text-muted mb-4">
                Both parties agree to maintain strict confidentiality of all
                non-public information exchanged during our engagement. This
                includes:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Business strategies and plans</li>
                <li>Financial information and metrics</li>
                <li>Customer data and relationships</li>
                <li>Technical specifications and systems</li>
                <li>Proprietary methodologies and processes</li>
              </ul>
              <p className="text-muted">
                This confidentiality obligation survives the termination of our
                engagement for a period of five (5) years.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-muted mb-4">
                Our total liability for any claims arising from our services
                shall not exceed the total fees paid for the specific project.
                We are not liable for:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Consequential, indirect, or punitive damages</li>
                <li>Lost profits or business opportunities</li>
                <li>Third-party claims or actions</li>
                <li>Damages arising from client decisions or actions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                9. Termination
              </h2>
              <p className="text-muted mb-4">
                Either party may terminate the engagement with:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>30 days written notice for convenience</li>
                <li>Immediate notice for material breach</li>
                <li>Immediate notice for bankruptcy or insolvency</li>
              </ul>
              <p className="text-muted">
                Upon termination, you shall pay all fees for work completed
                through the termination date. We will deliver all work completed
                to date within 15 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                10. Dispute Resolution
              </h2>
              <p className="text-muted mb-4">
                Any disputes arising from these Terms shall be resolved as
                follows:
              </p>
              <ol className="list-decimal list-inside text-muted space-y-2">
                <li>Good faith negotiation between senior management</li>
                <li>Mediation through a mutually agreed mediator</li>
                <li>Binding arbitration under New York law</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                11. Governing Law
              </h2>
              <p className="text-muted">
                These Terms shall be governed by and construed in accordance
                with the laws of the State of New York, without regard to its
                conflict of law principles. Any legal proceedings shall be
                brought in the state or federal courts located in New York
                County, New York.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                12. Miscellaneous
              </h2>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>These Terms constitute the entire agreement between us</li>
                <li>
                  Waiver of any provision does not constitute waiver of any
                  other
                </li>
                <li>
                  Severability: If any provision is invalid, the remainder
                  remains enforceable
                </li>
                <li>No third-party beneficiaries except as expressly stated</li>
                <li>We may update these Terms with 30 days notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Information
              </h2>
              <div className="bg-surface-dark rounded-lg p-4">
                <p className="text-white mb-2">
                  {/* <strong>Legal Department:</strong> legal@bytenuxstudio.com */}
                  <strong>Legal Department:</strong> chinonsoxavier26@gmail.com
                </p>
                <p className="text-white mb-2">
                  <strong>Phone:</strong> +234 707-577-1115
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
