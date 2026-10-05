'use client'

import React from 'react'

const steps = [
  {
    step: 'step-1',
    name: 'Descriptive',
    question: 'What happened?',
    desc: 'Understand historical performance and outcomes.',
    minHeight: 'min-h-[200px]',
    accentBar: 'bg-[#1f6fb2]',
    accentGlow: 'shadow-[0_-2px_8px_rgba(31,111,178,0.35)]',
  },
  {
    step: 'step-2',
    name: 'Diagnostic',
    question: 'Why did it happen?',
    desc: 'Identify the factors and patterns behind outcomes.',
    minHeight: 'min-h-[260px]',
    accentBar: 'bg-[#1f6fb2]',
    accentGlow: 'shadow-[0_-2px_8px_rgba(31,111,178,0.35)]',
  },
  {
    step: 'step-3',
    name: 'Predictive',
    question: 'What could happen?',
    desc: 'Forecast future outcomes using data and models.',
    minHeight: 'min-h-[320px]',
    accentBar: 'bg-[#1f6fb2]',
    accentGlow: 'shadow-[0_-2px_8px_rgba(31,111,178,0.35)]',
  },
  {
    step: 'step-4',
    name: 'Prescriptive',
    question: 'What actions can be considered?',
    desc: 'Evaluate actions using predictions, business rules, and optimization.',
    minHeight: 'min-h-[380px]',
    accentBar: 'bg-[#1f6fb2]',
    accentGlow: 'shadow-[0_-2px_8px_rgba(31,111,178,0.35)]',
  },
]

export default function MaturityStaircase() {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200" id="maturity">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight mb-4 text-[#0b192c]">
            Predictive &amp;{' '}
            <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
              Prescriptive Analytics
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From understanding the past to shaping the future. Our approach moves from historical performance to future possibilities and the actions worth considering.
          </p>
        </div>

        {/* Staircase Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-end border-b-2 border-slate-300/80 gap-4 sm:gap-0">
          {steps.map((stair, idx) => (
            <div
              key={stair.name}
              className={`bg-white border border-[#dce5ee] border-b-0 flex flex-col justify-start relative overflow-hidden card-shadow hover:border-[#1f6fb2] hover:shadow-xl hover:shadow-[#1f6fb2]/10 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${stair.minHeight} ${
                idx === 0 ? 'sm:rounded-tl-2xl' : ''
              } ${idx === steps.length - 1 ? 'sm:rounded-tr-2xl' : ''}`}
            >
              {/* Top Border Accent Line - Blue for all cards */}
              <div className={`w-full h-[4px] ${stair.accentBar} ${stair.accentGlow}`} />

              {/* Card Body */}
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="font-display font-extrabold text-2xl text-[#0b192c] mb-2">
                  {stair.name}
                </h3>
                <p className="font-display font-bold text-base text-[#1f6fb2] mb-4">
                  {stair.question}
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {stair.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

