'use client'

import React, { useState, useEffect, useRef } from 'react'

const approachSteps = [
  {
    num: '1',
    title: 'Understand',
    desc: 'Understand your business objectives, challenges, data sources, and decision requirements.',
  },
  {
    num: '2',
    title: 'Prepare',
    desc: 'Collect, integrate, clean, transform, and structure data into a reliable foundation.',
  },
  {
    num: '3',
    title: 'Analyze',
    desc: 'Apply statistics, machine learning, and domain knowledge to uncover insight.',
  },
  {
    num: '4',
    title: 'Visualize',
    desc: 'Turn findings into dashboards and reports that communicate clearly.',
  },
  {
    num: '5',
    title: 'Operationalize',
    desc: 'Connect insights and recommendations to business processes and decision workflows.',
  },
]

export default function AnalyticsApproach() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="pt-10 pb-20 lg:pt-12 lg:pb-24 bg-white border-t border-slate-200"
      id="approach"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight mb-4 text-[#0b192c]">
            Our Proven Analytics{' '}
            <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
              Approach &amp; Methodology
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A disciplined, end-to-end framework turning complex business questions into reproducible data pipelines and clear executive action items.
          </p>
        </div>

        {/* Vertical Connected Timeline with Staggered Delays & Interactive Scale */}
        <div className="max-w-4xl space-y-4">
          {approachSteps.map((step, idx) => {
            const delayMs = (idx + 1) * 150
            const isHovered = hoveredIdx === idx

            return (
              <div
                key={step.num}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  transitionDelay: isVisible && !isHovered ? `${delayMs}ms` : '0ms',
                }}
                className={`process-step-item ${isVisible ? 'is-visible' : ''} flex items-start gap-6 p-4 rounded-2xl border transition-all duration-300 transform group cursor-pointer ${
                  isHovered
                    ? 'bg-[#f0f7fd] border-[#2ec4b6]/50 shadow-md -translate-y-0.5 scale-[1.02]'
                    : 'bg-transparent border-transparent hover:bg-[#f0f7fd]/60'
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-[#f0f7fd] border-2 border-[#1f6fb2] flex items-center justify-center font-display font-bold text-sm text-[#1f6fb2] shadow-xs group-hover:bg-[#1f6fb2] group-hover:text-white group-hover:scale-115 group-hover:shadow-md transition-all duration-300">
                    {step.num}
                  </div>
                  {idx < approachSteps.length - 1 && (
                    <div className="w-0.5 h-12 bg-gradient-to-b from-[#1f6fb2] to-[#38bdf8] my-1.5" />
                  )}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-display font-bold text-xl text-[#0b192c] group-hover:text-[#1f6fb2] transition-colors mb-1.5 flex items-center gap-2">
                    {step.title}
                  </h3>
                  <p className="text-[0.95rem] text-slate-600 leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

