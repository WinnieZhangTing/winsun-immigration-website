'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home', cn: '首页' },
  { href: '/about', label: 'About', cn: '关于我们' },
  {
    href: '/services',
    label: 'Services',
    cn: '服务',
    children: [
      { href: '/business-immigration', label: 'Business Immigration', cn: '商业移民' },
      { href: '/work-permits', label: 'Work Permits', cn: '工作许可' },
      { href: '/study-permits', label: 'Study Permits', cn: '学习许可' },
      { href: '/visitor-visa', label: 'Visitor Visa / TRV', cn: '访客签证' },
      { href: '/startup-visa', label: 'Start-Up Visa', cn: '创业签证' },
    ],
  },
  { href: '/success-stories', label: 'Success Stories', cn: '成功案例' },
  { href: '/contact', label: 'Contact', cn: '联系我们' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0F2A4A] shadow-2xl py-0' : 'bg-[#0F2A4A]/95 backdrop-blur-md py-0'
    }`}>
      {/* Top accent bar */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 flex-shrink-0 group">
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="WINSUN Immigration Solutions"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-serif text-[#C9A96E] font-bold text-2xl tracking-[0.2em] leading-none">
                WINSUN
              </div>
              <div className="text-white/80 text-xs tracking-[0.15em] mt-0.5 font-light">
                IMMIGRATION SOLUTIONS
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className={`flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors rounded-sm ${
                    pathname.startsWith('/services') || link.children.some(c => pathname === c.href)
                      ? 'text-[#C9A96E]' : 'text-white/80 hover:text-white'
                  }`}>
                    {link.label}
                    <svg className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`absolute top-full left-0 w-60 transition-all duration-200 ${
                    servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                  }`}>
                    <div className="mt-1 bg-[#06182B] border border-[#C9A96E]/20 rounded-lg shadow-2xl overflow-hidden">
                      <div className="h-0.5 bg-gradient-to-r from-[#C9A96E] to-transparent" />
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex justify-between items-center px-5 py-3.5 text-sm border-b border-white/5 last:border-0 transition-colors ${
                            pathname === child.href
                              ? 'text-[#C9A96E] bg-white/5'
                              : 'text-white/70 hover:text-[#C9A96E] hover:bg-white/5'
                          }`}
                        >
                          <span>{child.label}</span>
                          <span className="text-[#C9A96E]/60 text-xs">{child.cn}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 text-sm font-medium transition-colors rounded-sm ${
                    pathname === link.href ? 'text-[#C9A96E]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link href="/contact" className="ml-4 btn-primary text-sm py-2.5 px-6">
              Book Consultation
            </Link>
          </div>

          {/* Mobile button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 space-y-1.5">
              <span className={`block h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-[#06182B] border-t border-white/10 px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                className="flex justify-between items-center py-3.5 text-white/80 hover:text-[#C9A96E] border-b border-white/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="font-medium">{link.label}</span>
                <span className="text-[#C9A96E]/70 text-sm">{link.cn}</span>
              </Link>
              {link.children && (
                <div className="pl-4 pb-2">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="flex justify-between items-center py-2.5 text-sm text-white/60 hover:text-[#C9A96E] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{child.label}</span>
                      <span className="text-[#C9A96E]/50 text-xs">{child.cn}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="btn-primary mt-5 w-full justify-center"
            onClick={() => setIsOpen(false)}
          >
            Book Consultation 预约咨询
          </Link>
        </div>
      </div>
    </nav>
  );
}
