'use client'

import React, { useState } from 'react'
import { ArrowRight, DollarSign, Target, Users, TrendingUp, Activity, Cpu, ShieldCheck, Zap, Layers } from 'lucide-react'

const domainData = {
  data: {
    title: 'Data Ingestion & Pipelines',
    subtitle: 'Stream latency & CDC ingestion throughput · Live',
    chartTitle: 'Throughput & ingestion trend',
    timeframe: '7 months',
    barTitle: 'Ingestion methods',
    kpis: [
      { id: 'vol', label: 'VOLUME', value: '4.8 TB/d', growth: '12.4%', icon: Activity },
      { id: 'lat', label: 'LATENCY', value: '18 ms', growth: '4.2%', icon: Zap },
      { id: 'src', label: 'SOURCES', value: '142', growth: '8.0%', icon: Layers },
      { id: 'sla', label: 'SLA UPTIME', value: '99.98%', growth: '0.2%', icon: ShieldCheck },
    ],
    bars: [
      { label: 'Streaming', height: '85%' },
      { label: 'Batch ETL', height: '60%' },
      { label: 'CDC Events', height: '42%' },
    ],
    chartPoints: [
      { month: 'Feb', val: 32, forecast: 30 },
      { month: 'Mar', val: 45, forecast: 42 },
      { month: 'Apr', val: 62, forecast: 58 },
      { month: 'May', val: 78, forecast: 74 },
      { month: 'Jun', val: 95, forecast: 90 },
      { month: 'Jul', val: 112, forecast: 118 },
    ],
  },
  analytics: {
    title: 'Advanced Analytics',
    subtitle: 'Query acceleration & model training runs · Live',
    chartTitle: 'Query execution & speed',
    timeframe: '7 months',
    barTitle: 'Compute workload',
    kpis: [
      { id: 'que', label: 'QUERIES', value: '2.4M/d', growth: '15.1%', icon: Activity },
      { id: 'acc', label: 'ACCURACY', value: '98.4%', growth: '1.8%', icon: Target },
      { id: 'mod', label: 'MODELS', value: '28 Active', growth: '6.5%', icon: Cpu },
      { id: 'eff', label: 'EFFICIENCY', value: '4.2x', growth: '18.0%', icon: TrendingUp },
    ],
    bars: [
      { label: 'SQL OLAP', height: '90%' },
      { label: 'Notebooks', height: '55%' },
      { label: 'AutoML', height: '38%' },
    ],
    chartPoints: [
      { month: 'Feb', val: 40, forecast: 38 },
      { month: 'Mar', val: 58, forecast: 54 },
      { month: 'Apr', val: 70, forecast: 68 },
      { month: 'May', val: 88, forecast: 82 },
      { month: 'Jun', val: 104, forecast: 100 },
      { month: 'Jul', val: 125, forecast: 132 },
    ],
  },
  insights: {
    title: 'Business Intelligence',
    subtitle: 'Performance overview · Updated today',
    chartTitle: 'Revenue & forecast',
    timeframe: '7 months',
    barTitle: 'Sales by channel',
    kpis: [
      { id: 'rev', label: 'REVENUE', value: '$4.82M', growth: '8.4%', icon: DollarSign },
      { id: 'con', label: 'CONVERSION', value: '12.6%', growth: '2.1%', icon: Target },
      { id: 'cus', label: 'CUSTOMERS', value: '18,420', growth: '6.8%', icon: Users },
      { id: 'per', label: 'PERFORMANCE', value: '94.2', growth: '3.7%', icon: TrendingUp },
    ],
    bars: [
      { label: 'Partner', height: '76%' },
      { label: 'Digital', height: '62%' },
      { label: 'Other', height: '38%' },
    ],
    chartPoints: [
      { month: 'Feb', val: 35, forecast: 38 },
      { month: 'Mar', val: 48, forecast: 46 },
      { month: 'Apr', val: 65, forecast: 60 },
      { month: 'May', val: 78, forecast: 74 },
      { month: 'Jun', val: 92, forecast: 90 },
      { month: 'Jul', val: 110, forecast: 118 },
    ],
  },
  prediction: {
    title: 'Predictive Modeling',
    subtitle: 'Machine learning forecasts & retention indicators · Live',
    chartTitle: 'Forecast accuracy curve',
    timeframe: '7 months',
    barTitle: 'Model allocation',
    kpis: [
      { id: 'frt', label: 'FORECAST ACC.', value: '96.2%', growth: '4.1%', icon: Target },
      { id: 'chr', label: 'CHURN RISK', value: '2.8%', growth: '14.0%', icon: Activity },
      { id: 'ltv', label: 'EST. LTV', value: '$12.4K', growth: '9.3%', icon: DollarSign },
      { id: 'sig', label: 'SIGNALS', value: '840/s', growth: '22.0%', icon: Zap },
    ],
    bars: [
      { label: 'Retention', height: '80%' },
      { label: 'Acquisition', height: '65%' },
      { label: 'Cross-Sell', height: '45%' },
    ],
    chartPoints: [
      { month: 'Feb', val: 45, forecast: 42 },
      { month: 'Mar', val: 60, forecast: 58 },
      { month: 'Apr', val: 75, forecast: 70 },
      { month: 'May', val: 92, forecast: 88 },
      { month: 'Jun', val: 115, forecast: 108 },
      { month: 'Jul', val: 138, forecast: 145 },
    ],
  },
  decision: {
    title: 'Decision Intelligence',
    subtitle: 'Automated decision actions & optimization rules · Live',
    chartTitle: 'Decision throughput & ROI',
    timeframe: '7 months',
    barTitle: 'Decision areas',
    kpis: [
      { id: 'aut', label: 'AUTO-DECISIONS', value: '86.4%', growth: '11.2%', icon: Cpu },
      { id: 'tim', label: 'DECISION TIME', value: '< 2 sec', growth: '45.0%', icon: Zap },
      { id: 'roi', label: 'ROI UPLIFT', value: '+34%', growth: '8.5%', icon: DollarSign },
      { id: 'gov', label: 'GOVERNANCE', value: '100%', growth: '0.0%', icon: ShieldCheck },
    ],
    bars: [
      { label: 'Pricing', height: '88%' },
      { label: 'Routing', height: '70%' },
      { label: 'Inventory', height: '52%' },
    ],
    chartPoints: [
      { month: 'Feb', val: 50, forecast: 48 },
      { month: 'Mar', val: 68, forecast: 64 },
      { month: 'Apr', val: 84, forecast: 80 },
      { month: 'May', val: 102, forecast: 96 },
      { month: 'Jun', val: 124, forecast: 118 },
      { month: 'Jul', val: 148, forecast: 156 },
    ],
  },
}

export default function Hero() {
  const [activeFlow, setActiveFlow] = useState('insights')
  const [selectedKpi, setSelectedKpi] = useState(0)

  const current = domainData[activeFlow] || domainData.insights

  const width = 340
  const height = 110
  const maxVal = Math.max(...current.chartPoints.map((p) => Math.max(p.val, p.forecast || p.val))) * 1.15

  // Actual Curve Points
  const points = current.chartPoints.map((p, idx) => {
    const x = (idx / (current.chartPoints.length - 1)) * (width - 24) + 12
    const y = height - (p.val / maxVal) * (height - 25) - 10
    return { x, y, val: p.val, month: p.month }
  })

  // Forecast Curve Points (dashed line)
  const forecastPoints = current.chartPoints.map((p, idx) => {
    const x = (idx / (current.chartPoints.length - 1)) * (width - 24) + 12
    const y = height - ((p.forecast || p.val) / maxVal) * (height - 25) - 10
    return { x, y }
  })

  const pathD = points.reduce((acc, p, idx) => {
    return idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`
  }, '')

  const forecastPathD = forecastPoints.reduce((acc, p, idx) => {
    return idx === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`
  }, '')

  const areaD = `${pathD} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`

  return (
    <section className="relative bg-white pt-12 pb-20 lg:pt-16 lg:pb-24 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Black + Double-Shade Highlight Heading matching exact user layout */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.25rem] leading-[1.18] tracking-tight mb-6 text-[#0b192c]">
              <span>Transforming</span>
              <br />
              <span>Data into</span>
              <br />
              <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
                Insights,
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
                Predictions, and
              </span>
              <br />
              <span>Intelligent </span>
              <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
                Decisions
              </span>
            </h1>

            {/* Exactly matching Image 1 copy */}
            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              We combine data science, advanced analytics, business intelligence, and decision
              intelligence to transform complex business data into meaningful insights. Our solutions
              help organizations understand performance, predict outcomes, optimize operations, and
              make informed decisions.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-bold text-white bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] hover:from-[#185a92] hover:to-[#22a498] shadow-lg shadow-[#2ec4b6]/20 transition-all transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Talk to Our Experts</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-bold text-slate-800 bg-white border border-slate-300 hover:border-[#2ec4b6] hover:text-[#1f6fb2] transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Capabilities</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive BI Dashboard Card */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <div className="w-full max-w-[620px] bg-white border border-[#dce5ee] rounded-2xl p-6 sm:p-7 dash-shadow hover:dash-shadow-hover transition-all duration-300">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#0b192c]">
                    {current.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-0.5">
                    {current.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#2ec4b6]/10 border border-[#2ec4b6]/30 text-[#1f6fb2] text-xs font-mono font-bold">
                  <span className="w-2 h-2 rounded-full bg-[#2ec4b6] animate-ping" />
                  <span>Live</span>
                </div>
              </div>

              {/* 4 Interactive KPI Boxes */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                {current.kpis.map((kpi, idx) => {
                  const Icon = kpi.icon || DollarSign
                  return (
                    <button
                      key={kpi.id}
                      onClick={() => setSelectedKpi(idx)}
                      className={`text-left p-3.5 rounded-xl border transition-all ${
                        selectedKpi === idx
                          ? 'bg-white border-[#1f6fb2] shadow-md shadow-[#1f6fb2]/10 ring-1 ring-[#1f6fb2]'
                          : 'bg-slate-50 border-slate-200 hover:border-[#2ec4b6] hover:bg-[#eef8fb]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-slate-400">
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <span className="font-mono text-[0.72rem] font-bold text-[#1f6fb2] flex items-center gap-0.5">
                          <span>↗</span>
                          <span>{kpi.growth}</span>
                        </span>
                      </div>
                      <div className="font-mono text-[0.68rem] font-bold text-slate-500 uppercase tracking-wider mb-0.5">
                        {kpi.label}
                      </div>
                      <div className="font-mono font-extrabold text-lg text-[#0b192c]">
                        {kpi.value}
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Charts Row: SVG Line Chart + Bar Chart */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 mb-4">
                
                {/* Line Chart */}
                <div className="sm:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#0b192c]">{current.chartTitle}</span>
                    <span className="font-mono text-[0.7rem] font-semibold text-[#1f6fb2]">{current.timeframe}</span>
                  </div>
                  <div className="relative w-full h-[110px]">
                    <svg className="w-full h-full overflow-visible" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="heroAreaGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2ec4b6" stopOpacity="0.28" />
                          <stop offset="100%" stopColor="#1f6fb2" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      <path d={areaD} fill="url(#heroAreaGrad)" />
                      {/* Dashed Forecast Path */}
                      <path d={forecastPathD} fill="none" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 4" opacity="0.85" />
                      {/* Solid Actual Path */}
                      <path d={pathD} fill="none" stroke="#1f6fb2" strokeWidth="2.5" strokeLinecap="round" />
                      {points.map((p, i) => (
                        <circle
                          key={i}
                          cx={p.x}
                          cy={p.y}
                          r={selectedKpi === i % 4 ? 5.5 : 3.5}
                          className="fill-[#2ec4b6] stroke-white stroke-2 hover:r-6 cursor-pointer transition-all"
                        />
                      ))}
                    </svg>
                  </div>
                  <div className="flex justify-between mt-1 text-[0.68rem] font-mono font-medium text-slate-500 px-1">
                    {current.chartPoints.map((p) => (
                      <span key={p.month}>{p.month}</span>
                    ))}
                  </div>
                </div>

                {/* Bar Chart */}
                <div className="sm:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-3.5 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#0b192c]">{current.barTitle}</span>
                  </div>
                  <div className="flex items-end justify-around h-[110px] gap-2 pt-2">
                    {current.bars.map((bar, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center h-full">
                        <div className="flex-1 w-full max-w-[38px] flex items-end border-b border-slate-200">
                          <div
                            style={{ height: bar.height }}
                            className="w-full bg-gradient-to-t from-[#1f6fb2] to-[#2ec4b6] rounded-t hover:brightness-110 transition-all duration-500 shadow-sm"
                          />
                        </div>
                        <span className="font-mono text-[0.68rem] font-semibold text-slate-600 mt-1 truncate w-full text-center">
                          {bar.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Interactive Hint */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="text-[#2ec4b6]">✦</span> Click stages below to explore different intelligence layers
              </div>

            </div>

            {/* Stepper Navigation Pills matching reference Image 3 */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              {['data', 'analytics', 'insights', 'prediction', 'decision'].map((flowKey, index, arr) => (
                <React.Fragment key={flowKey}>
                  <button
                    onClick={() => {
                      setActiveFlow(flowKey)
                      setSelectedKpi(0)
                    }}
                    className={`px-3.5 py-1.5 rounded-lg font-mono text-xs font-bold tracking-wide transition-all ${
                      activeFlow === flowKey
                        ? 'bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] text-white shadow-md shadow-[#2ec4b6]/25 scale-105 ring-2 ring-[#2ec4b6]/30'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-[#2ec4b6] hover:text-[#1f6fb2]'
                    }`}
                  >
                    {flowKey.toUpperCase()}
                  </button>
                  {index < arr.length - 1 && <span className="text-slate-400 text-xs font-bold">&gt;</span>}
                </React.Fragment>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
