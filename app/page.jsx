'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import FromDataToDecisions from '@/components/FromDataToDecisions'
import Capabilities from '@/components/Capabilities'
import BusinessNeeds from '@/components/BusinessNeeds'
import MaturityStaircase from '@/components/MaturityStaircase'
import DashboardShowcase from '@/components/DashboardShowcase'
import AnalyticsApproach from '@/components/AnalyticsApproach'
import TechStack from '@/components/TechStack'
import Industries from '@/components/Industries'
import BusinessOutcomes from '@/components/BusinessOutcomes'
import UseCases from '@/components/UseCases'
import WhyChooseUs from '@/components/WhyChooseUs'
import BottomCta from '@/components/BottomCta'
import CapabilityModal from '@/components/CapabilityModal'

export default function HomePage() {
  const [activeCapModal, setActiveCapModal] = useState(null)

  useEffect(() => {
    // Select ONLY section headings (h1, h2) for smooth scroll reveal
    const headings = document.querySelectorAll('h1, h2')

    headings.forEach((h) => {
      if (!h.closest('header') && !h.closest('.fixed')) {
        h.classList.add('reveal-heading')
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px',
      }
    )

    const revealHeadings = document.querySelectorAll('.reveal-heading')
    revealHeadings.forEach((node) => observer.observe(node))

    return () => {
      revealHeadings.forEach((node) => observer.unobserve(node))
    }
  }, [])

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Hero Section with Interactive Dashboard */}
      <Hero />

      {/* Section 2: From Data to Decisions Chevron Pipeline */}
      <FromDataToDecisions />

      {/* Section 3: Capabilities Grid */}
      <Capabilities onOpenModal={(capId) => setActiveCapModal(capId)} />

      {/* Section 4: Analytics Built Around Business Needs */}
      <BusinessNeeds />

      {/* Section 5: Predictive & Prescriptive Analytics Maturity Staircase */}
      <MaturityStaircase />

      {/* Section 6: Intelligence-Powered Dashboards Showcase */}
      <DashboardShowcase />

      {/* Section 7: Our Analytics Approach Timeline */}
      <AnalyticsApproach />

      {/* Section 8: Tech Stack Grid */}
      <TechStack />

      {/* Section 9: Industries Grid */}
      <Industries />

      {/* Section 10: Business Outcomes */}
      <BusinessOutcomes />

      {/* Section 11: Real-World Use Cases */}
      <UseCases />

      {/* Section 12: Why Choose Our Data & Analytics Services */}
      <WhyChooseUs />

      {/* Section 13: Bottom CTA & Footer */}
      <BottomCta />

      {/* Full-Page Deep Dive Capability Explorer Modal */}
      <CapabilityModal
        activeCapId={activeCapModal}
        onClose={() => setActiveCapModal(null)}
      />
    </main>
  )
}
