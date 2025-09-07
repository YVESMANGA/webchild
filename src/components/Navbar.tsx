'use client'

import Link from 'next/link'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import AnimatedCode from './AnimatedCode'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const isActive = (href: string) => href === pathname

  return (
    <nav role="navigation" className="sticky top-0 z-50 bg-white bg-opacity-70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-gray-600 font-bold text-xl">

          <AnimatedCode />

          <span>Web</span> <span className='text-[#38b6ff]'>child</span>
        </Link>

        <button
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#38b6ff] rounded"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {[
            { href: '/', label: 'Accueil' },
            { href: '/about', label: 'À propos' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition-colors duration-300 hover:text-[#38b6ff] ${
                  isActive(href) ? 'text-[#38b6ff] font-semibold' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`md:hidden bg-white bg-opacity-95 backdrop-blur-md overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? 'max-h-60' : 'max-h-0'
        }`}
      >
        <ul className="px-4 pb-4 space-y-2 text-gray-700 font-medium">
          {[
            { href: '/', label: 'Accueil' },
            { href: '/about', label: 'À propos' },
            { href: '/services', label: 'Services' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setIsOpen(false)}
                className={`block py-2 rounded transition-colors duration-200 hover:bg-[#38b6ff] ${
                  isActive(href) ? 'text-[#38b6ff] font-semibold' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
