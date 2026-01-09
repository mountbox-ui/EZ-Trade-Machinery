import React from 'react'
import Divider from '../Divider'

const TermsAndConditionsContent = ({ className = '' }) => {
  return (
    <div className={className}>
      {/* Title */}
      <div>
        <h1 className="text-[32px] font-bold text-[#131214] font-inter">Terms and Conditions</h1>
        <p className="text-[18px] font-inter font-normal leading-[1.5] text-[var(--semantic-fg-muted,#6E7375)] mt-3">Last updated: November 1, 2025</p>
        {/* Divider */}
        <Divider color="#DADDDE" />
        
        {/* Content Sections */}
        <div className="space-y-6 text-[#131214] ">
        {/* Section 1 */}
        <section>
          <h2 className="text-[#131214] font-inter text-2xl font-bold leading-[1.2] tracking-normal mb-2">1. Acceptance of Terms</h2>
          <p className="text-[#6E7375] font-inter text-lg font-normal leading-[1.5] tracking-normal mb-2">
          By accessing and using this heavy machinery auction platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-[#131214] font-inter text-2xl font-bold leading-[1.2] tracking-normal mb-2">2. Use License</h2>
          <p className="text-[#6E7375] font-inter text-lg font-normal leading-[1.5] tracking-normal mb-2">
          Permission is granted to temporarily use this platform for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#6E7375] font-inter text-lg font-normal leading-[1.5] tracking-normal ml-4 mb-3">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose</li>
            <li>Attempt to decompile or reverse engineer any software</li>
            <li>Remove any copyright or other proprietary notations</li>
            <li>Transfer the materials to another person</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-[#131214] font-inter text-2xl font-bold leading-[1.2] tracking-normal mb-2">3. Auction Participation</h2>
          <p className="text-[#6E7375] font-inter text-lg font-normal leading-[1.5] tracking-normal mb-2">
          When participating in auctions on our platform:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[#6E7375] font-inter text-lg font-normal leading-[1.5] tracking-normal ml-4 mb-3">
            <li>All bids are legally binding commitments to purchase</li>
            <li>Users must be 18 years or older to participate</li>
            <li>Bidders are responsible for understanding item descriptions</li>
            <li>The platform reserves the right to cancel fraudulent bids</li>
            <li>Payment must be completed within the specified timeframe</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-[#131214] font-inter text-2xl font-bold leading-[1.2] tracking-normal mb-2">4. Modifications to Terms</h2>
          <p className="text-[#6E7375] font-inter text-lg font-normal leading-[1.5] tracking-normal mb-2">
          We reserve the right to revise these terms at any time. Users will be notified of significant changes via email. Continued use of the platform after changes constitutes acceptance of the modified terms.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-[#131214] font-inter text-2xl font-bold leading-[1.2] tracking-normal mb-2">5. Contact Information</h2>
          <p className="text-[#6E7375] font-inter text-lg font-normal leading-[1.5] tracking-normal mb-3">
          For questions about these Terms and Conditions, please contact us at legal@eztrade.com or visit our support center.
          </p>
        </section>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditionsContent

