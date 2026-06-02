import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#06182B] text-white">
      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image src="/logo.png" alt="WINSUN" fill className="object-contain" />
              </div>
              <div>
                <div className="font-serif text-[#C9A96E] font-bold text-xl tracking-widest">WINSUN</div>
                <div className="text-white/50 text-xs tracking-wider">IMMIGRATION SOLUTIONS</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-2">
              Your trusted Canadian immigration partner in Winnipeg, Manitoba.
            </p>
            <p className="text-white/40 text-xs leading-relaxed">
              温尼伯值得信赖的加拿大移民咨询伙伴。
            </p>
            <div className="flex items-center gap-2 mt-5">
              <div className="px-2 py-1 bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded text-[#C9A96E] text-xs font-medium">
                RCIC Authorized
              </div>
              <div className="px-2 py-1 bg-[#C9A96E]/10 border border-[#C9A96E]/20 rounded text-[#C9A96E] text-xs font-medium">
                CICC Member
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider mb-5 flex items-center gap-2">
              <span className="gold-line" /> Services 服务
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/startup-visa', en: 'Start-Up Visa Program', cn: '创业签证计划' },
                { href: '/work-permits', en: 'Work Permits & LMIA', cn: '工作许可' },
                { href: '/study-permits', en: 'Study Permits', cn: '学习许可' },
                { href: '/visitor-visa', en: 'Visitor Visa / TRV', cn: '访客签证' },
                { href: '/business-immigration', en: 'Business Immigration', cn: '商业移民' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/50 hover:text-[#C9A96E] text-sm transition-colors flex items-center gap-2 group">
                    <svg className="w-3 h-3 text-[#C9A96E]/40 group-hover:text-[#C9A96E] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider mb-5 flex items-center gap-2">
              <span className="gold-line" /> Company 公司
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/about', en: 'About Us', cn: '关于我们' },
                { href: '/success-stories', en: 'Success Stories', cn: '成功案例' },
                { href: '/contact', en: 'Book Consultation', cn: '预约咨询' },
                { href: '/contact', en: 'Contact Us', cn: '联系我们' },
              ].map((item) => (
                <li key={item.en}>
                  <Link href={item.href} className="text-white/50 hover:text-[#C9A96E] text-sm transition-colors flex items-center gap-2 group">
                    <svg className="w-3 h-3 text-[#C9A96E]/40 group-hover:text-[#C9A96E] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider mb-5 flex items-center gap-2">
              <span className="gold-line" /> Contact 联系
            </h3>
            <address className="not-italic space-y-4">
              <div className="flex gap-3">
                <svg className="w-4 h-4 text-[#C9A96E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-white/50 text-sm leading-relaxed">
                  <p>200-1460 Chevrier Blvd</p>
                  <p>Winnipeg, MB R3T 1Y7</p>
                </div>
              </div>
              <div className="flex gap-3">
                <svg className="w-4 h-4 text-[#C9A96E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:winnie@winsunimmigration.ca" className="text-white/50 hover:text-[#C9A96E] text-sm transition-colors">
                  winnie@winsunimmigration.ca
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8 space-y-4">
          <p className="text-white/30 text-xs leading-relaxed max-w-4xl">
            <strong className="text-white/40">Disclaimer / 免责声明: </strong>
            Information on this website is for general information only and does not constitute legal advice. Immigration outcomes depend on individual circumstances and IRCC assessment. 本网站信息仅供一般参考，不构成法律建议。移民结果取决于个人情况及IRCC评估。
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <p className="text-white/30 text-xs">© {new Date().getFullYear()} WINSUN Immigration Solutions Inc. All rights reserved.</p>
            <p className="text-white/20 text-xs">Winnipeg, Manitoba, Canada · winsunimmigration.ca</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
