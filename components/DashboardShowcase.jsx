'use client'

import React, { useState } from 'react'

const domains = {
  executive: {
    title: 'Executive Intelligence & Growth Command',
    sub: 'Holistic performance telemetry & forecasting across global operations',
    kpis: [
      { label: 'ARR / RUN-RATE', val: '$24.6M', growth: '+18.4%' },
      { label: 'GROSS MARGIN', val: '74.2%', growth: '+3.1%' },
      { label: 'NET RETENTION', val: '118%', growth: '+4.5%' },
      { label: 'RULE OF 40', val: '52.4', growth: '+6.2%' },
    ],
    bars: [
      { label: 'Enterprise', val: '88%' },
      { label: 'Mid-Market', val: '64%' },
      { label: 'Self-Serve', val: '46%' },
    ],
    points: [
      { m: 'Feb', v: 45 },
      { m: 'Mar', v: 62 },
      { m: 'Apr', v: 80 },
      { m: 'May', v: 98 },
      { m: 'Jun', v: 124 },
      { m: 'Jul', v: 152 },
    ],
  },
  sales: {
    title: 'Sales Pipeline & Funnel Velocity',
    sub: 'Real-time deal telemetry, rep conversion rates, and stage drop-offs',
    kpis: [
      { label: 'PIPELINE COVERAGE', val: '3.8x', growth: '+12.0%' },
      { label: 'AVG DEAL SIZE', val: '$84.5K', growth: '+9.2%' },
      { label: 'WIN RATE', val: '31.4%', growth: '+5.4%' },
      { label: 'SALES CYCLE', val: '42 days', growth: '-14%' },
    ],
    bars: [
      { label: 'Direct Sales', val: '82%' },
      { label: 'Inbound', val: '68%' },
      { label: 'Partners', val: '50%' },
    ],
    points: [
      { m: 'Feb', v: 38 },
      { m: 'Mar', v: 54 },
      { m: 'Apr', v: 72 },
      { m: 'May', v: 90 },
      { m: 'Jun', v: 110 },
      { m: 'Jul', v: 135 },
    ],
  },
  customer: {
    title: 'Customer Lifetime & Retention Analytics',
    sub: 'Predictive churn alerts, engagement cohorts, and expansion scoring',
    kpis: [
      { label: 'ACTIVE ACCOUNTS', val: '4,280', growth: '+8.6%' },
      { label: 'CHURN PROBABILITY', val: '1.9%', growth: '-22%' },
      { label: 'CSAT / NPS', val: '72 / 100', growth: '+6.0%' },
      { label: 'EXPANSION ARR', val: '$4.2M', growth: '+28%' },
    ],
    bars: [
      { label: 'Tier 1 Support', val: '92%' },
      { label: 'CSM Success', val: '76%' },
      { label: 'Self-Serve', val: '40%' },
    ],
    points: [
      { m: 'Feb', v: 50 },
      { m: 'Mar', v: 68 },
      { m: 'Apr', v: 84 },
      { m: 'May', v: 104 },
      { m: 'Jun', v: 128 },
      { m: 'Jul', v: 160 },
    ],
  },
  financial: {
    title: 'Financial Unit Economics & Margins',
    sub: 'Automated cashflow models, budget vs actual variance, and burn rates',
    kpis: [
      { label: 'EBITDA MARGIN', val: '28.4%', growth: '+4.2%' },
      { label: 'CAC PAYBACK', val: '9.4 mo', growth: '-18%' },
      { label: 'RUNWAY', val: '38 mo', growth: '+12%' },
      { label: 'OPEX EFFICIENCY', val: '88.5%', growth: '+7.1%' },
    ],
    bars: [
      { label: 'R&D', val: '70%' },
      { label: 'Sales & Mktg', val: '85%' },
      { label: 'G&A', val: '35%' },
    ],
    points: [
      { m: 'Feb', v: 42 },
      { m: 'Mar', v: 58 },
      { m: 'Apr', v: 76 },
      { m: 'May', v: 94 },
      { m: 'Jun', v: 118 },
      { m: 'Jul', v: 142 },
    ],
  },
}

export default function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState('executive')
  const current = domains[activeTab] || domains.executive

  const width = 460
  const height = 120
  const maxVal = Math.max(...current.points.map((p) => p.v)) * 1.15
  const points = current.points.map((p, idx) => {
    const x = (idx / (current.points.length - 1)) * (width - 30) + 15
    const y = height - (p.v / maxVal) * (height - 30) - 15
    return { x, y, v: p.v, m: p.m }
  })

  const pathD = points.reduce((acc, p, idx) => {
    return idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`
  }, '')

  const areaD = `${pathD} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`

  return (
    <section className="py-20 lg:py-24 bg-[#f0f7fd] border-t border-[#dce8f5]" id="dashboards">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          {/* Black Title with Double Shade Word */}
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight mb-4 text-[#0b192c]">
            Intelligence-Powered{' '}
            <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
              Dashboards &amp; Reporting
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Experience our tailored interactive dashboards built with lightning-fast query engines, robust semantic
            layers, and clean responsive visualization components.
          </p>
        </div>

        {/* Big Showcase Dashboard Card */}
        <div className="w-full max-w-5xl mx-auto bg-white border border-[#dce5ee] rounded-2xl p-6 sm:p-9 dash-shadow mb-8">
          
          {/* Dashboard Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4 mb-6">
            <div>
              <h3 className="font-display font-extrabold text-2xl text-[#0b192c]">
                {current.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 mt-1">
                {current.sub}
              </p>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2ec4b6]/10 border border-[#2ec4b6]/30 text-[#1f6fb2] text-xs font-mono font-bold self-start sm:self-center">
              <span className="w-2 h-2 rounded-full bg-[#2ec4b6] animate-pulse" />
              <span>LIVE TELEMETRY</span>
            </div>
          </div>

          {/* 4 Large KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {current.kpis.map((kpi, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-[#2ec4b6] hover:bg-[#eef8fb] transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {kpi.label}
                  </span>
                  <span className="font-mono text-xs font-bold text-[#1f6fb2]">
                    {kpi.growth}
                  </span>
                </div>
                <div className="font-mono font-extrabold text-2xl text-[#0b192c]">
                  {kpi.val}
                </div>
              </div>
            ))}
          </div>

          {/* Main Visualizations Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            
            {/* Left Area Line Chart */}
            <div className="lg:col-span-7 bg-slate-50/80 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[#0b192c]">Trend Trajectory &amp; Run-rate</span>
                <span className="font-mono text-xs font-semibold text-[#1f6fb2]">H1 Actuals</span>
              </div>
              <div className="relative w-full h-[130px]">
                <svg className="w-full h-full overflow-visible" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="scAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2ec4b6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#1f6fb2" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <path d={areaD} fill="url(#scAreaGrad)" />
                  <path d={pathD} fill="none" stroke="#1f6fb2" strokeWidth="3" strokeLinecap="round" />
                  {points.map((p, i) => (
                    <circle
                      key={i}
                      cx={p.x}
                      cy={p.y}
                      r={4.5}
                      className="fill-[#2ec4b6] stroke-white stroke-2 hover:scale-150 transition-all cursor-pointer"
                    />
                  ))}
                </svg>
              </div>
              <div className="flex justify-between mt-2 text-xs font-mono font-medium text-slate-500 px-2">
                {current.points.map((p) => (
                  <span key={p.m}>{p.m}</span>
                ))}
              </div>
            </div>

            {/* Right Bar Chart */}
            <div className="lg:col-span-5 bg-slate-50/80 border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold text-[#0b192c]">Channel Breakdown</span>
              </div>
              <div className="flex items-end justify-around h-[130px] gap-3 pt-2">
                {current.bars.map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center h-full">
                    <div className="flex-1 w-full max-w-[48px] flex items-end border-b border-slate-200">
                      <div
                        style={{ height: bar.val }}
                        className="w-full bg-gradient-to-t from-[#1f6fb2] to-[#2ec4b6] rounded-t hover:brightness-110 transition-all duration-500 shadow-sm"
                      />
                    </div>
                    <span className="font-mono text-xs font-semibold text-slate-600 mt-2 truncate w-full text-center">
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Tab Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            { id: 'executive', name: 'Executive Overview' },
            { id: 'sales', name: 'Sales Pipeline' },
            { id: 'customer', name: 'Customer Lifetime' },
            { id: 'financial', name: 'Financial Economics' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-display font-bold text-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] text-white shadow-md shadow-[#2ec4b6]/25 scale-105'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-[#2ec4b6] hover:text-[#1f6fb2]'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${activeTab === tab.id ? 'bg-white' : 'bg-[#2ec4b6]'}`} />
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}
