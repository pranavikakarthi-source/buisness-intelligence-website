'use client'

import React from 'react'
import { Check } from 'lucide-react'

const reasons = [
  {
    title: 'Business-Focused Analytics',
    desc: 'Align analytical solutions with business objectives to deliver insights that are relevant and actionable.',
  },
  {
    title: 'Scalable Solutions',
    desc: 'Build analytics solutions that can adapt to growing data volumes, users, and evolving business requirements.',
  },
  {
    title: 'Actionable Insights',
    desc: 'Go beyond reporting to uncover insights that help teams understand opportunities, challenges, and potential actions.',
  },
  {
    title: 'Advanced Analytics',
    desc: 'Apply statistical modeling, machine learning, forecasting, and advanced analytical techniques to complex business problems.',
  },
  {
    title: 'Interactive Visualization',
    desc: 'Transform complex information into intuitive dashboards and visual experiences that make insights easier to understand.',
  },
  {
    title: 'Decision Support',
    desc: 'Combine data, analytics, business context, and intelligent recommendations to support informed business decisions.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-[#f8fafc] border-t border-slate-200/80" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight mb-4 text-[#0b192c]">
            Why choose our{' '}
            <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
              data &amp; analytics services?
            </span>
          </h2>
        </div>

        {/* 2-Column Grid (3 rows) with dividing lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="pt-6 border-t border-[#dce5ee] flex items-start gap-4 group"
            >
              {/* Checkmark Icon */}
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#2ec4b6]">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-bold text-xl text-[#0b192c] group-hover:text-[#1f6fb2] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-[0.95rem] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
