'use client'

import React, { useState } from 'react'

const steps = [
  { id: 1, label: 'Data', sub: 'Connected sources', activeType: 'normal' },
  { id: 2, label: 'Analyze', sub: 'Explore signals', activeType: 'normal' },
  { id: 3, label: 'Understand', sub: 'Find meaning', activeType: 'teal' },
  { id: 4, label: 'Predict', sub: 'Model outcomes', activeType: 'normal' },
  { id: 5, label: 'Decide', sub: 'Evaluate options', activeType: 'normal' },
  { id: 6, label: 'Act', sub: 'Create impact', activeType: 'orange' },
]

export default function FromDataToDecisions() {
  const [selectedStep, setSelectedStep] = useState(3)

  return (
    <section className="py-20 lg:py-24 bg-[#f8fafc] border-t border-slate-200/80" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          {/* Black Title with Double Shade Word */}
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight mb-4 text-[#0b192c]">
            Turning Business Data into{' '}
            <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
              Actionable Intelligence
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Businesses generate vast data across operations, customers, and financials. We transform
            disconnected logs into clean architectures, predictive capabilities, and proactive decision
            frameworks.
          </p>
        </div>

        {/* Chevron Pipeline in Light Blue Palette */}
        <div className="bg-[#f0f7fd] p-4 sm:p-7 rounded-2xl shadow-sm border border-[#d2e6f7]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
            {steps.map((step, idx) => {
              const isSelected = selectedStep === step.id
              const isTeal = step.activeType === 'teal'
              const isOrange = step.activeType === 'orange'
              
              const isFirst = idx === 0
              const clipStyle = isFirst
                ? { clipPath: 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%)' }
                : { clipPath: 'polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%, 18px 50%)' }

              let bgClass = 'bg-[#e2effa] text-[#144272] hover:bg-[#d5eaf7]'
              if (isSelected || isTeal) {
                bgClass = 'bg-gradient-to-r from-[#1f6fb2] to-[#38bdf8] text-white font-black shadow-md shadow-[#38bdf8]/35'
              } else if (isOrange) {
                bgClass = 'bg-gradient-to-r from-[#0284c7] to-[#38bdf8] text-white font-black shadow-md shadow-[#0284c7]/30'
              }

              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedStep(step.id)}
                  className="flex flex-col items-stretch text-center group cursor-pointer transition-transform hover:-translate-y-1 active:scale-95 py-1"
                >
                  <div
                    style={clipStyle}
                    className={`h-16 flex items-center justify-center px-4 font-display font-bold text-base tracking-tight transition-all duration-200 ${bgClass}`}
                  >
                    <span className="truncate">{step.label}</span>
                  </div>
                  <span className={`mt-2 text-xs font-semibold transition-colors ${isSelected ? 'text-[#1f6fb2] font-bold' : 'text-slate-500 group-hover:text-[#1f6fb2]'}`}>
                    {step.sub}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
