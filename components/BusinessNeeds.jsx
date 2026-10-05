'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Users, Target, Zap, Activity, DollarSign } from 'lucide-react'

const needs = [
  {
    num: '01',
    icon: Users,
    title: 'Customer Intelligence',
    desc: 'Understand customer behavior, preferences, engagement, and value to create more relevant experiences and improve retention.',
    keyAreas: 'Customer Segmentation · Customer Lifetime Value · Churn Analysis · Customer Journey Analytics · Recommendations',
  },
  {
    num: '02',
    icon: Target,
    title: 'Sales Intelligence',
    desc: 'Turn sales and revenue data into insights that help organizations understand performance, identify opportunities, and improve conversion.',
    keyAreas: 'Sales Performance · Revenue Analysis · Demand Forecasting · Lead Analytics · Conversion Analysis',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Marketing Intelligence',
    desc: 'Analyze campaigns, customer segments, channels, and marketing performance to understand what drives engagement and business value.',
    keyAreas: 'Campaign Analytics · Attribution · Customer Segmentation · Marketing Performance · ROI Analysis',
  },
  {
    num: '04',
    icon: Activity,
    title: 'Operational Intelligence',
    desc: 'Use operational data to identify bottlenecks, inefficiencies, and optimization opportunities across business processes.',
    keyAreas: 'Process Analytics · Performance Monitoring · Resource Optimization · Predictive Maintenance · Supply Chain Analytics',
  },
  {
    num: '05',
    icon: DollarSign,
    title: 'Financial Intelligence',
    desc: 'Analyze financial and business data to understand revenue, profitability, expenses, cash flow, and financial risk.',
    keyAreas: 'Financial Analytics · Profitability Analysis · Financial Forecasting · Risk Analytics · Fraud Detection',
  },
]

export default function BusinessNeeds() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [hoveredIndex, setHoveredIndex] = useState(null)
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

  // Active focus is either explicitly clicked or currently hovered
  const activeFocusIndex = selectedIndex !== null ? selectedIndex : hoveredIndex
  const hasActiveFocus = activeFocusIndex !== null

  const handleCardClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex(null) // Toggle off if already selected
    } else {
      setSelectedIndex(index)
    }
  }

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24 bg-[#f0f7fd] border-t border-[#dce8f5] relative overflow-hidden"
      id="intelligence"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight mb-3 text-[#0b192c]">
              Analytics Built Around{' '}
              <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
                Business Needs
              </span>
            </h2>
            <p className="text-sm text-slate-600">
              Click any domain to focus, scale up, and isolate key business areas.
            </p>
          </div>

          {selectedIndex !== null && (
            <button
              onClick={() => setSelectedIndex(null)}
              className="self-start sm:self-end px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white border border-[#1f6fb2]/40 text-[#1f6fb2] hover:bg-[#1f6fb2] hover:text-white transition-all shadow-xs"
            >
              ✕ Reset Focus
            </button>
          )}
        </div>

        {/* Needs Process Rows with Click Spotlight Focus & Background Blur */}
        <div className="space-y-4">
          {needs.map((item, index) => {
            const Icon = item.icon
            const delayMs = (index + 1) * 150
            const isFocused = activeFocusIndex === index
            const isDimmed = hasActiveFocus && !isFocused

            return (
              <div
                key={item.num}
                onClick={() => handleCardClick(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transitionDelay: isVisible && !hasActiveFocus ? `${delayMs}ms` : '0ms',
                }}
                className={`process-step-item ${isVisible ? 'is-visible' : ''} ${
                  isFocused ? 'focus-highlighted' : isDimmed ? 'focus-dimmed' : ''
                } grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-7 px-6 sm:px-8 rounded-2xl border transition-all duration-400 transform group cursor-pointer ${
                  isFocused
                    ? 'bg-white border-[#2ec4b6] ring-2 ring-[#2ec4b6]/40 shadow-[0_24px_50px_-10px_rgba(31,111,178,0.22)] -translate-y-1.5 scale-[1.03] z-20'
                    : 'bg-white/70 border-slate-200 hover:bg-white hover:border-[#2ec4b6]/40'
                }`}
              >
                {/* Left Side: Number, Icon, Title, Description */}
                <div className="lg:col-span-7 flex items-start gap-5">
                  <span className={`font-mono text-sm font-extrabold mt-1 tracking-wider transition-all duration-300 ${
                    isFocused ? 'text-[#2ec4b6] scale-125' : 'text-[#1f6fb2] group-hover:scale-110'
                  }`}>
                    {item.num}
                  </span>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isFocused
                      ? 'bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] text-white shadow-lg scale-110'
                      : 'bg-[#e1f0fa] border border-[#d2e6f7] text-[#1f6fb2] group-hover:bg-[#1f6fb2] group-hover:text-white group-hover:scale-105'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-display font-bold text-xl transition-colors mb-2 flex items-center gap-2 ${
                      isFocused ? 'text-[#1f6fb2]' : 'text-[#0b192c] group-hover:text-[#1f6fb2]'
                    }`}>
                      {item.title}
                      {isFocused && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#2ec4b6]/15 text-[#0b8276] font-bold">
                          SELECTED
                        </span>
                      )}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-[0.95rem] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Right Side: Key Areas */}
                <div className="lg:col-span-5 lg:pl-6 flex flex-col justify-center">
                  <span className={`font-mono text-xs font-bold uppercase tracking-wider mb-2 transition-colors ${
                    isFocused ? 'text-[#2ec4b6]' : 'text-[#1f6fb2]'
                  }`}>
                    KEY AREAS
                  </span>
                  <p className={`text-sm font-medium leading-relaxed transition-colors ${
                    isFocused ? 'text-[#0b192c] font-semibold' : 'text-slate-700'
                  }`}>
                    {item.keyAreas}
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

