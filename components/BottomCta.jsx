'use client'

import React from 'react'
import { ArrowRight, Mail } from 'lucide-react'

export default function BottomCta() {
  return (
    <section className="py-24 lg:py-28 bg-gradient-to-b from-[#f0f7fd] to-[#e1f0fa] border-t border-[#dce8f5]" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Black Title with Double Shade Word */}
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[2.85rem] leading-[1.2] tracking-tight mb-6 text-[#0b192c]">
          Ready to Turn Data into{' '}
          <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">
            Intelligent Decisions?
          </span>
        </h2>

        <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
          Partner with Pibi Tech to architect scalable data platforms, build reliable predictive models, and deliver
          high-impact intelligence to your executive teams.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:contact@pibitech.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] hover:from-[#185a92] hover:to-[#22a498] shadow-lg shadow-[#2ec4b6]/25 transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <Mail className="w-5 h-5" />
            <span>Speak with a Data Architect</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#capabilities"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-slate-800 bg-white border border-slate-300 hover:border-[#2ec4b6] hover:text-[#1f6fb2] transition-all transform hover:-translate-y-0.5"
          >
            <span>Review Capabilities</span>
          </a>
        </div>

        {/* Footer info */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 text-xs font-medium text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; 2026 Pibi Tech Inc. All rights reserved. Enterprise Data &amp; Decision Intelligence.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-[#1f6fb2]">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#1f6fb2]">Terms of Service</a>
            <a href="#security" className="hover:text-[#1f6fb2]">Security &amp; Compliance</a>
          </div>
        </div>

      </div>
    </section>
  )
}
