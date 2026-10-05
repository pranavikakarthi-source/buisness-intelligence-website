'use client'

import React from 'react'
import { ArrowRight, BarChart3, PieChart, Cpu, Network, LineChart } from 'lucide-react'

const capabilities = [
  {
    id: 'data-analytics',
    num: '01',
    icon: BarChart3,
    title: 'Data Analytics',
    desc: 'Analyze business data to uncover patterns, trends, relationships, and opportunities. Our analytics solutions help organizations understand performance and identify the factors driving business outcomes.',
    tags: [
      'Descriptive Analytics',
      'Diagnostic Analytics',
      'Exploratory Data Analysis',
      'Statistical Analysis',
      'Trend Analysis',
      'Customer Analytics',
      'Operational Analytics',
    ],
  },
  {
    id: 'data-science',
    num: '02',
    icon: Cpu,
    title: 'Data Science & Advanced Analytics',
    desc: 'Apply statistical modeling, machine learning, and advanced analytical techniques to solve complex business problems and predict future outcomes.',
    tags: [
      'Machine Learning',
      'Predictive Modeling',
      'Regression Analysis',
      'Classification',
      'Clustering',
      'Forecasting',
      'Anomaly Detection',
    ],
  },
  {
    id: 'business-intelligence',
    num: '03',
    icon: PieChart,
    title: 'Business Intelligence',
    desc: 'Transform business data into reliable reports, KPIs, dashboards, and performance insights that enable organizations to monitor and understand their business.',
    tags: [
      'Executive Dashboards',
      'Automated Reporting',
      'Self-Service BI',
      'Data Warehousing',
      'Real-time Monitoring',
      'Governance & Security',
    ],
  },
  {
    id: 'decision-intelligence',
    num: '04',
    icon: Network,
    title: 'Decision Intelligence',
    desc: 'Combine data, analytics, AI, business context, and decision models to support complex business decisions and identify potential actions.',
    tags: [
      'Decision Modeling',
      'Scenario Analysis',
      'What-if Analysis',
      'Prescriptive Analytics',
      'Optimization',
      'Recommendation Engines',
    ],
  },
  {
    id: 'data-viz',
    num: '05',
    icon: LineChart,
    title: 'Data Visualization & Storytelling',
    desc: 'Transform complex datasets into clear visual experiences that make important information easier to understand, communicate, and act upon.',
    tags: [
      'Interactive Dashboards',
      'Executive Dashboards',
      'KPI Visualization',
      'Charts & Reports',
      'Trend Visualization',
      'Geographic Visualization',
      'Data Storytelling',
    ],
  },
]

export default function Capabilities({ onOpenModal }) {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200" id="capabilities-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight mb-4 text-[#0b192c]">
            Powering Better Decisions with{' '}
            <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
              Data Intelligence
            </span>
          </h2>
        </div>

        {/* 5 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon
            return (
              <div
                key={cap.id}
                onClick={() => onOpenModal && onOpenModal(cap.id)}
                className={`bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 flex flex-col justify-between card-shadow hover:card-shadow-hover hover:border-[#2ec4b6] transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer group ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-sm font-bold text-[#1f6fb2] tracking-wider">
                      {cap.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#eef8fb] border border-[#c8e9ee] flex items-center justify-center text-[#1f6fb2] group-hover:bg-gradient-to-r group-hover:from-[#1f6fb2] group-hover:to-[#2ec4b6] group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-2xl text-[#0b192c] group-hover:text-[#1f6fb2] transition-colors mb-3">
                    {cap.title}
                  </h3>

                  <p className="text-slate-600 text-[0.95rem] leading-relaxed mb-6">
                    {cap.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.72rem] font-medium text-slate-600 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md group-hover:border-[#c8e9ee] group-hover:bg-[#eef8fb] group-hover:text-[#1f6fb2] transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-sm font-bold text-[#1f6fb2] group-hover:text-[#2ec4b6] transition-colors">
                  <span>Explore Capability</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
