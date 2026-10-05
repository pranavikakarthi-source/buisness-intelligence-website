'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Intelligence', href: '#intelligence' },
    { name: 'Industries', href: '#industries' },
    { name: 'Use Cases', href: '#usecases' },
    { name: 'Technology', href: '#technology' },
    { name: 'Company', href: '#company' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-1 shadow-sm group-hover:border-[#2ec4b6] transition-all">
            <img src="/logo.png" alt="Pibi Tech Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-display font-extrabold text-2xl text-[#0b192c] tracking-tight">
            Pibi <span className="bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] bg-clip-text text-transparent">Tech</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[0.96rem] font-semibold text-slate-600 hover:text-[#1f6fb2] transition-colors relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm text-white bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6] hover:from-[#185a92] hover:to-[#22a498] shadow-md shadow-[#2ec4b6]/20 transition-all transform hover:-translate-y-0.5 active:scale-95"
          >
            <span>Talk to Our Experts</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-600 hover:text-[#1f6fb2] hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1f6fb2]"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold text-sm text-white bg-gradient-to-r from-[#1f6fb2] to-[#2ec4b6]"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
