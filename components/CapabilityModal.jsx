'use client'

import React, { useEffect } from 'react'
import { ArrowLeft, X, ArrowRight, BarChart3, Cpu, PieChart, Network, LineChart, CheckCircle2 } from 'lucide-react'

const capabilitiesData = {
  'data-analytics': {
    id: 'data-analytics',
    name: 'Data analytics',
    icon: BarChart3,
    title: 'Data Analytics',
    headline: 'Analyze business data to uncover patterns, trends, relationships, and opportunities.',
    items: [
      {
        title: 'Descriptive analytics',
        desc: 'Understand what happened and how the business performed, through reports and KPIs.',
      },
      {
        title: 'Diagnostic analytics',
        desc: 'Find out why outcomes happened and identify root causes.',
      },
      {
        title: 'Exploratory data analysis',
        desc: 'Uncover hidden patterns, relationships, and anomalies in your datasets.',
      },
      {
        title: 'Statistical analysis',
        desc: 'Validate business assumptions with reliable statistical evidence.',
      },
      {
        title: 'Trend analysis',
        desc: 'Spot growth, decline, seasonality, and emerging patterns over time.',
      },
      {
        title: 'Customer analytics',
        desc: 'Study behavior, preferences, and purchases to support segmentation and retention.',
      },
      {
        title: 'Operational analytics',
        desc: 'Find inefficiencies, bottlenecks, and performance gaps in your processes.',
      },
    ],
  },
  'data-science': {
    id: 'data-science',
    name: 'Data science & advanced analytics',
    icon: Cpu,
    title: 'Data Science & Advanced Analytics',
    headline: 'Apply statistical modeling and machine learning to solve complex problems and predict outcomes.',
    items: [
      {
        title: 'Machine learning',
        desc: 'Models that learn from history for classification, forecasting, and recommendations.',
      },
      {
        title: 'Predictive modeling',
        desc: 'Estimate future outcomes such as demand, customer behavior, and risk.',
      },
      {
        title: 'Regression analysis',
        desc: 'Measure how one factor influences another in pricing, revenue, and demand.',
      },
      {
        title: 'Classification',
        desc: 'Group data into set categories for fraud, churn, and risk use cases.',
      },
      {
        title: 'Clustering',
        desc: 'Discover natural customer, product, and transaction segments.',
      },
      {
        title: 'Forecasting',
        desc: 'Predict sales, demand, inventory, and finances from historical patterns.',
      },
      {
        title: 'Anomaly detection',
        desc: 'Flag unusual patterns that point to fraud, system issues, or surprises.',
      },
      {
        title: 'Recommendation systems',
        desc: 'Generate personalized products, content, and next-best actions.',
      },
    ],
  },
  'business-intelligence': {
    id: 'business-intelligence',
    name: 'Business intelligence',
    icon: PieChart,
    title: 'Business Intelligence',
    headline: 'Turn business data into reliable reports, KPIs, and dashboards that help you monitor the business.',
    items: [
      {
        title: 'BI dashboards',
        desc: 'One interactive view of metrics, KPIs, and trends.',
      },
      {
        title: 'KPI development',
        desc: 'Define measurable indicators aligned to business goals.',
      },
      {
        title: 'Management reporting',
        desc: 'Clear performance summaries for leadership teams.',
      },
      {
        title: 'Interactive reports',
        desc: 'Filter, compare, and drill down into complex data.',
      },
      {
        title: 'Self-service BI',
        desc: 'Let business users explore trusted data with consistency and governance.',
      },
      {
        title: 'Performance monitoring',
        desc: 'Track KPIs continuously and see gaps early.',
      },
      {
        title: 'Real-time analytics',
        desc: 'Respond faster using continuously updated data.',
      },
    ],
  },
  'decision-intelligence': {
    id: 'decision-intelligence',
    name: 'Decision intelligence',
    icon: Network,
    title: 'Decision Intelligence',
    headline: 'Combine data, analytics, AI, and business context to support complex decisions and identify actions.',
    items: [
      {
        title: 'Decision modeling',
        desc: 'Structure decisions using objectives, rules, constraints, and models.',
      },
      {
        title: 'Scenario analysis',
        desc: 'Compare scenarios to understand potential business impact.',
      },
      {
        title: 'What-if analysis',
        desc: 'Test how changes in pricing, demand, or costs affect outcomes.',
      },
      {
        title: 'Prescriptive analytics',
        desc: 'Go beyond prediction to identify actions that improve outcomes.',
      },
      {
        title: 'Optimization',
        desc: 'Allocate resources and manage constraints for better efficiency and cost.',
      },
      {
        title: 'Recommendation engines',
        desc: 'Deliver relevant recommendations to customers or business teams.',
      },
      {
        title: 'Risk-based decision support',
        desc: 'Weigh risks, probabilities, and impacts before big decisions.',
      },
    ],
  },
  'data-viz': {
    id: 'data-viz',
    name: 'Data visualization & storytelling',
    icon: LineChart,
    title: 'Data Visualization & Storytelling',
    headline: 'Turn complex datasets into clear visuals that are easier to understand, communicate, and act on.',
    items: [
      {
        title: 'Interactive dashboards',
        desc: 'Explore KPIs, trends, and charts through visual interfaces.',
      },
      {
        title: 'Executive dashboards',
        desc: 'A concise view of critical KPIs for leadership.',
      },
      {
        title: 'KPI visualization',
        desc: 'Track targets, progress, and gaps at a glance.',
      },
      {
        title: 'Charts & reports',
        desc: 'Structured charts that make comparisons and trends clear.',
      },
      {
        title: 'Trend visualization',
        desc: 'Show growth, decline, and seasonality over time.',
      },
      {
        title: 'Geographic visualization',
        desc: 'Map regional performance, customers, and market opportunity.',
      },
      {
        title: 'Data storytelling',
        desc: 'Combine data, visuals, and context into a clear story.',
      },
    ],
  },
}

export default function CapabilityModal({ activeCapId, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (activeCapId) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeCapId, onClose])

  if (!activeCapId) return null

  const current = capabilitiesData[activeCapId] || capabilitiesData['data-science']
  const CurrentIcon = current.icon || Cpu

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto animate-fadeIn flex flex-col min-h-screen w-full">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e2e8f0] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          
          {/* Left: Back Button */}
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f0f7fd] border border-[#d2e6f7] text-sm font-bold text-[#144272] hover:bg-[#e1f0fa] hover:border-[#1f6fb2] transition-all cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-4 h-4 text-[#1f6fb2]" />
            <span>Back to Overview</span>
          </button>

          {/* Middle: Active Capability Label */}
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f7fd] border border-[#d2e6f7]">
            <CurrentIcon className="w-4 h-4 text-[#1f6fb2]" />
            <span className="font-display font-bold text-xs text-[#144272] uppercase tracking-wider">
              {current.title}
            </span>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] hover:from-[#185a92] hover:to-[#22a498] shadow-sm transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <span>Talk to experts</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-[#f8fafc] border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all cursor-pointer"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Main Body - Crisp Pure White & Light Blue Theme */}
      <main className="flex-1 bg-white max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col">
        
        {/* Subtitle */}
        <div className="mb-4">
          <p className="font-display font-semibold text-sm sm:text-base text-slate-500">
            From understanding your data to acting on it.
          </p>
        </div>

        {/* Dedicated Capability Pill */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1f6fb2] to-[#38bdf8] text-white font-display font-bold text-sm shadow-md shadow-[#1f6fb2]/20">
            <CurrentIcon className="w-4 h-4 text-white" />
            <span>{current.name}</span>
          </div>
        </div>

        {/* Headline */}
        <div className="mb-10 max-w-4xl">
          <h1 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0b192c] leading-snug">
            {current.headline}
          </h1>
        </div>

        {/* Sub-Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {current.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] border border-[#e2e8f0] rounded-2xl p-6 flex flex-col justify-between hover:border-[#1f6fb2] hover:bg-[#fcfdfe] hover:shadow-lg hover:shadow-[#1f6fb2]/10 transition-all duration-200 transform hover:-translate-y-1 group"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#f0f7fd] border border-[#d2e6f7] flex items-center justify-center text-[#1f6fb2] mb-4 group-hover:bg-[#1f6fb2] group-hover:text-white transition-all">
                  <CheckCircle2 className="w-5 h-5" />
                </div>

                <h2 className="font-display font-bold text-lg text-[#0b192c] group-hover:text-[#1f6fb2] transition-colors mb-2.5">
                  {item.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-auto pt-8 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-500">
            Gain predictive foresight and intelligent automation through advanced data science models.
          </p>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl font-bold text-sm text-[#144272] bg-[#f0f7fd] border border-[#d2e6f7] hover:bg-[#e1f0fa] hover:border-[#1f6fb2] transition-all cursor-pointer"
          >
            ← Return to Main Page
          </button>
        </div>

      </main>
    </div>
  )
}


