'use client'

import React from 'react'
import { Users, TrendingUp, ShieldCheck, PieChart, Activity, Target } from 'lucide-react'

const usecases = [
  {
    num: 'USE CASE 01',
    icon: Users,
    title: 'Customer Churn Prediction',
    desc: 'Identify customers at risk and understand the signals behind changing engagement.',
  },
  {
    num: 'USE CASE 02',
    icon: TrendingUp,
    title: 'Sales Forecasting',
    desc: 'Model future demand and revenue using historical and current performance data.',
  },
  {
    num: 'USE CASE 03',
    icon: ShieldCheck,
    title: 'Fraud Detection',
    desc: 'Detect unusual transaction patterns and support risk-based investigations.',
  },
  {
    num: 'USE CASE 04',
    icon: PieChart,
    title: 'Customer Segmentation',
    desc: 'Group customers by meaningful behavioral, value, and engagement attributes.',
  },
  {
    num: 'USE CASE 05',
    icon: Activity,
    title: 'Predictive Maintenance',
    desc: 'Anticipate asset issues and prioritize maintenance using operational signals.',
  },
  {
    num: 'USE CASE 06',
    icon: Target,
    title: 'Marketing Analytics',
    desc: 'Connect campaign and channel performance to customer and business outcomes.',
  },
]

export default function UseCases() {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-200" id="usecases">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight tracking-tight mb-4 text-[#0b192c]">
            Real-World{' '}
            <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
              Analytics Use Cases
            </span>
          </h2>
        </div>

        {/* 6 Use Case Cards Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {usecases.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-white border border-[#dce5ee] rounded-2xl p-7 hover:border-[#1f6fb2] hover:bg-[#fcfdfe] hover:shadow-xl hover:shadow-[#1f6fb2]/10 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Top Icon Box */}
                  <div className="w-10 h-10 rounded-xl bg-[#0e3b64] flex items-center justify-center text-white mb-5 shadow-sm group-hover:bg-[#1f6fb2] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <span className="font-mono text-[0.72rem] font-bold uppercase tracking-wider text-[#1f6fb2] mb-2 block">
                    {item.num}
                  </span>
                  
                  <h3 className="font-display font-bold text-xl text-[#0b192c] group-hover:text-[#1f6fb2] transition-colors mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
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

