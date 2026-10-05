'use client'

import React from 'react'

const outcomes = [
  {
    num: '01',
    heading: 'Better Visibility',
    desc: 'Bring data from multiple business areas into a unified view of performance, trends, opportunities, and risks.',
  },
  {
    num: '02',
    heading: 'Faster Decisions',
    desc: 'Provide timely and relevant insights that help decision-makers evaluate situations and respond with greater clarity.',
  },
  {
    num: '03',
    heading: 'Predictive Insights',
    desc: 'Identify patterns and forecast potential outcomes to help organizations prepare for future business conditions.',
  },
  {
    num: '04',
    heading: 'Operational Efficiency',
    desc: 'Identify bottlenecks, inefficiencies, and resource gaps to improve productivity and optimize operations.',
  },
  {
    num: '05',
    heading: 'Customer Understanding',
    desc: 'Turn customer data into insights that help organizations understand behavior, improve experiences, and strengthen retention.',
  },
  {
    num: '06',
    heading: 'Business Growth',
    desc: 'Identify opportunities across customers, markets, products, and operations to support sustainable business growth.',
  },
]

export default function BusinessOutcomes() {
  return (
    <section className="py-20 lg:py-24 bg-[#f0f7fd] border-t border-[#dce8f5]" id="outcomes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight mb-4 text-[#0b192c]">
            Turning Analytics into{' '}
            <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
              Business Impact
            </span>
          </h2>
        </div>

        {/* 3x2 Clean Light Blue & White Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#dce5ee] border border-[#dce5ee] rounded-2xl bg-white overflow-hidden shadow-sm">
          {outcomes.map((item) => (
            <div
              key={item.num}
              className="p-8 sm:p-9 hover:bg-[#f0f7fd]/60 transition-colors cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-sm font-bold text-[#1f6fb2] mb-4 block tracking-wider">
                  {item.num}
                </span>
                <h3 className="font-display font-bold text-xl text-[#0b192c] group-hover:text-[#1f6fb2] transition-colors mb-3">
                  {item.heading}
                </h3>
                <p className="text-[0.95rem] text-slate-600 leading-relaxed">
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

