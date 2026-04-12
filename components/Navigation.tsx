"use client"

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [destinationsOpen, setDestinationsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/ohne-fremdwaehrungsgebuehr', label: 'Weltweit kostenlos' },
    { href: '/kreditkarte-ohne-fremdwaehrungsgebuehr-vergleich', label: 'Ohne Fremdwährungsgebühr' },
    { href: '/kreditkarte-studenten-ausland-kostenlos', label: 'Studenten' },
    { href: '/kreuzfahrten', label: 'Kreuzfahrten' },
  ]

  const destinationGroups = [
    {
      title: 'Nordamerika',
      links: [
        { href: '/kreditkarte-usa-ohne-gebuehren', label: 'USA' },
        { href: '/kreditkarte-kanada-ohne-gebuehren', label: 'Kanada' },
        { href: '/kreditkarte-mexiko-ohne-gebuehren', label: 'Mexiko' },
      ],
    },
    {
      title: 'Asien',
      links: [
        { href: '/kreditkarte-thailand-abheben-kostenlos', label: 'Thailand' },
        { href: '/kreditkarte-bali-ohne-gebuehren', label: 'Bali' },
        { href: '/kreditkarte-vietnam-ohne-gebuehren', label: 'Vietnam' },
        { href: '/kreditkarte-japan-ohne-gebuehren', label: 'Japan' },
        { href: '/kreditkarte-singapur-ohne-gebuehren', label: 'Singapur' },
        { href: '/kreditkarte-philippinen-ohne-gebuehren', label: 'Philippinen' },
        { href: '/kreditkarte-fuer-backpacking', label: 'Backpacking' },
      ],
    },
    {
      title: 'Orient/Afrika',
      links: [
        { href: '/kreditkarte-dubai-ohne-gebuehren', label: 'Dubai' },
        { href: '/kreditkarte-marokko-ohne-gebuehren', label: 'Marokko' },
        { href: '/kreditkarte-suedafrika-ohne-gebuehren', label: 'Südafrika' },
      ],
    },
    {
      title: 'Europa',
      links: [
        { href: '/kreditkarte-island-ohne-gebuehren', label: 'Island' },
        { href: '/kreditkarte-norwegen-ohne-gebuehren', label: 'Norwegen' },
      ],
    },
    {
      title: 'Ozeanien',
      links: [
        { href: '/kreditkarte-australien-ohne-gebuehren', label: 'Australien' },
      ],
    },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Titel */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">💳 Kreditkarten-Finder</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-medium transition
                  ${pathname === link.href 
                    ? 'bg-orange-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setDestinationsOpen(!destinationsOpen)}
                className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
              >
                Reiseziele
              </button>
              {destinationsOpen && (
                <div className="absolute right-0 mt-2 w-[28rem] bg-white border border-gray-200 rounded-xl shadow-xl p-4 z-50">
                  <div className="grid grid-cols-2 gap-4">
                    {destinationGroups.map((group) => (
                      <div key={group.title}>
                        <p className="text-xs font-bold text-gray-500 uppercase mb-2">{group.title}</p>
                        <div className="space-y-1">
                          {group.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setDestinationsOpen(false)}
                              className="block text-sm text-gray-800 hover:text-orange-600"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            aria-label="Menü öffnen"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition
                  ${pathname === link.href 
                    ? 'bg-orange-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <details className="mt-2">
              <summary className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer">
                Reiseziele
              </summary>
              <div className="pl-4 mt-2 space-y-3">
                {destinationGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-xs font-bold text-gray-500 uppercase mb-1">{group.title}</p>
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-2 py-1 text-sm text-gray-700 hover:text-orange-600"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </details>
          </div>
        )}
      </div>
    </nav>
  )
}
