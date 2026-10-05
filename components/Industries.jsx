'use client'

import React from 'react'

const industries = [
  {
    title: 'Healthcare',
    desc: 'Analyze clinical, operational, financial, and patient data for better planning and efficiency.',
  },
  {
    title: 'Financial services',
    desc: 'Use transaction and risk data for fraud detection, forecasting, and customer intelligence.',
  },
  {
    title: 'Retail',
    desc: 'Improve demand planning, pricing, and customer experience.',
  },
  {
    title: 'Manufacturing',
    desc: 'Improve efficiency, quality, and maintenance using production and equipment data.',
  },
  {
    title: 'Automotive',
    desc: 'Support connected mobility, predictive maintenance, and optimization.',
  },
  {
    title: 'Telecom & media',
    desc: 'Improve retention, personalization, and network and content performance.',
  },
  {
    title: 'Logistics & supply chain',
    desc: 'Improve forecasting, planning, and delivery efficiency.',
  },
  {
    title: 'Technology',
    desc: 'Optimize products, retain customers, and grow the business.',
  },
]

export default function Industries() {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight mb-4 text-[#0b192c]">
            Analytics Built Around{' '}
            <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
              Your Industry
            </span>
          </h2>
        </div>

        {/* 8 Industry Cards Grid in Light Blue & White Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="bg-[#ffffff] border border-[#dce5ee] rounded-2xl p-6 hover:border-[#1f6fb2] hover:bg-[#fcfdfe] hover:shadow-xl hover:shadow-[#1f6fb2]/10 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display font-bold text-xl text-[#0b192c] group-hover:text-[#1f6fb2] transition-colors mb-3">
                  {ind.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

