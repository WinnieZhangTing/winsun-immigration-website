import Link from 'next/link';

const services = [
  { icon: '🚀', href: '/startup-visa', en: 'Start-Up Visa Program', cn: '创业签证计划', desc: 'Launch your innovative business in Canada and obtain permanent residence through a designated organization.' },
  { icon: '💼', href: '/work-permits', en: 'Work Permits & LMIA', cn: '工作许可', desc: 'Navigate employer-sponsored work authorization and Labour Market Impact Assessment applications.' },
  { icon: '🎓', href: '/study-permits', en: 'Study Permits', cn: '学习许可', desc: 'Study at world-class Canadian institutions with a clear path to post-graduation work and PR.' },
  { icon: '✈️', href: '/visitor-visa', en: 'Visitor Visa / TRV', cn: '访客签证', desc: 'Visit family, attend business meetings, or explore Canada with a Temporary Resident Visa.' },
  { icon: '🏢', href: '/business-immigration', en: 'Business Immigration', cn: '商业移民', desc: 'Provincial investor and entrepreneur programs for experienced business professionals.' },
  { icon: '🏠', href: '/services', en: 'Permanent Residence', cn: '永久居留权', desc: 'Strategic PR pathways through Express Entry, PNP, and family sponsorship programs.' },
];

const stats = [
  { number: '500+', label: 'Cases Approved', cn: '成功案例' },
  { number: '10+', label: 'Years of Experience', cn: '年从业经验' },
  { number: '95%', label: 'Success Rate', cn: '成功率' },
  { number: '2', label: 'Languages Served', cn: '服务语言' },
];

const testimonials = [
  {
    quote: 'WINSUN guided us through the Start-Up Visa process with exceptional professionalism. We received our PR within 18 months.',
    quoteCn: 'WINSUN以极高的专业水准指导我们完成了创业签证申请，18个月内我们便获得了永久居留权。',
    name: 'David & Li Wei',
    title: 'Start-Up Visa Clients',
    titleCn: '创业签证客户',
    initials: 'DL',
  },
  {
    quote: 'The bilingual support made all the difference. Our LMIA was approved on the first submission — impressive and efficient.',
    quoteCn: '双语支持让一切变得不同。我们的劳工市场评估一次性获批——高效而专业。',
    name: 'Zhang Ming',
    title: 'Work Permit Client',
    titleCn: '工作许可客户',
    initials: 'ZM',
  },
  {
    quote: 'From study permit to PGWP to Express Entry — WINSUN was with me every single step. I am now a Canadian PR.',
    quoteCn: '从学习许可到毕业后工作许可再到快速通道——WINSUN全程陪伴我。我现在已是加拿大永久居民。',
    name: 'Priya Sharma',
    title: 'Study Permit → PR',
    titleCn: '学习许可→永居',
    initials: 'PS',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center gradient-navy overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#C9A96E]/5 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#C9A96E]/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#C9A96E]/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C9A96E]/8" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-7">
              <div className="section-label mb-6">
                <span className="gold-line" />
                Winnipeg, Manitoba · Canada
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
                Your Trusted<br />
                <span className="text-gradient-gold italic">Canadian</span><br />
                Immigration Partner
              </h1>

              <p className="text-[#C9A96E]/80 text-xl mb-2 font-light tracking-wide">
                您信赖的加拿大移民伙伴
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-3 max-w-xl">
                Professional immigration consulting for entrepreneurs, workers, students, and families — delivered with expertise, integrity, and bilingual care.
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-xl">
                为创业者、职场人士、学生及家庭提供专业移民咨询，兼具专业性、诚信度与双语关怀。
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Book a Free Consultation
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/services" className="btn-outline">
                  Explore Services 了解服务
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-white/10">
                {['RCIC Authorized', 'CICC Member', 'Bilingual EN/中文'].map((badge) => (
                  <div key={badge} className="flex items-center gap-2 text-white/50 text-xs">
                    <svg className="w-3.5 h-3.5 text-[#C9A96E]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: stats card */}
            <div className="lg:col-span-5">
              <div className="bg-white/5 backdrop-blur-sm border border-[#C9A96E]/20 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {stats.map((s) => (
                    <div key={s.number} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="font-serif text-3xl text-[#C9A96E] font-bold mb-1">{s.number}</div>
                      <div className="text-white/70 text-xs font-medium">{s.label}</div>
                      <div className="text-white/30 text-xs mt-0.5">{s.cn}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-1 mb-6">
                  {[
                    { en: 'Start-Up Visa Program', cn: '创业签证计划', href: '/startup-visa' },
                    { en: 'Work Permits & LMIA', cn: '工作许可', href: '/work-permits' },
                    { en: 'Study Permits', cn: '学习许可', href: '/study-permits' },
                    { en: 'Business Immigration', cn: '商业移民', href: '/business-immigration' },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex justify-between items-center -mx-2 px-3 py-2.5 rounded-lg hover:bg-white/5 group transition-colors"
                    >
                      <span className="text-white/70 text-sm group-hover:text-white transition-colors">{item.en}</span>
                      <span className="text-[#C9A96E]/60 text-xs group-hover:text-[#C9A96E] transition-colors">{item.cn}</span>
                    </Link>
                  ))}
                </div>
                <Link href="/contact" className="btn-primary w-full justify-center text-sm py-3">
                  预约免费咨询 · Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">
              <span className="gold-line" />
              Our Expertise
              <span className="gold-line" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0F2A4A] mb-3">
              Immigration Services
            </h2>
            <p className="text-[#C9A96E] text-lg mb-4 font-light">移民服务项目</p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your unique circumstances and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="card-premium group block">
                <div className="text-3xl mb-5">{s.icon}</div>
                <h3 className="font-serif text-[#0F2A4A] text-xl font-semibold mb-1 group-hover:text-[#C9A96E] transition-colors">
                  {s.en}
                </h3>
                <p className="text-[#C9A96E] text-sm mb-4 font-light">{s.cn}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-1.5 text-[#C9A96E] text-sm font-medium">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why WINSUN ── */}
      <section className="py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="section-label mb-5">
                <span className="gold-line" />
                Why Choose Us
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#0F2A4A] mb-3 leading-tight">
                The WINSUN<br />Difference
              </h2>
              <p className="text-[#C9A96E] text-lg mb-8 font-light">为什么选择 WINSUN？</p>
              <div className="space-y-6">
                {[
                  {
                    title: 'Regulated Canadian Immigration Consultants',
                    titleCn: '持牌加拿大移民顾问',
                    desc: 'Our RCICs are authorized members of the College of Immigration and Citizenship Consultants (CICC), ensuring every application meets the highest professional standard.',
                  },
                  {
                    title: 'Bilingual English & Mandarin Service',
                    titleCn: '中英双语服务',
                    desc: 'We serve clients fluently in English and Mandarin Chinese, removing language barriers throughout your entire immigration journey.',
                  },
                  {
                    title: 'Personalized Strategy for Every Client',
                    titleCn: '个性化移民方案',
                    desc: 'No two cases are alike. We design custom pathways based on your background, goals, and timeline — not a one-size-fits-all approach.',
                  },
                  {
                    title: 'Locally Rooted in Winnipeg',
                    titleCn: '温尼伯本地专业团队',
                    desc: 'We know Manitoba\'s immigration landscape inside out, from the MPNP to local settlement resources for new arrivals.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#C9A96E]/10 border border-[#C9A96E]/30 text-[#C9A96E] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[#0F2A4A] font-semibold mb-0.5">{item.title}</h4>
                      <p className="text-[#C9A96E] text-xs mb-1.5">{item.titleCn}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mt-10">
                <Link href="/about" className="btn-navy">About Our Firm</Link>
                <Link href="/contact" className="btn-primary">Book Consultation</Link>
              </div>
            </div>

            {/* Right: Process */}
            <div>
              <div className="bg-[#0F2A4A] rounded-2xl p-8 text-white">
                <h3 className="font-serif text-2xl text-[#C9A96E] mb-6">How We Work 我们的工作流程</h3>
                <div className="space-y-0">
                  {[
                    { n: '01', en: 'Free Initial Consultation', cn: '免费初步咨询', desc: 'We assess your goals, eligibility, and outline the best pathway.' },
                    { n: '02', en: 'Personalized Strategy', cn: '个性化方案制定', desc: 'We build a detailed immigration roadmap tailored to you.' },
                    { n: '03', en: 'Document Preparation', cn: '文件准备', desc: 'We guide you through every required document and form.' },
                    { n: '04', en: 'Application Submission', cn: '申请提交', desc: 'We prepare and submit a thorough, complete application.' },
                    { n: '05', en: 'Follow-up & Support', cn: '跟进与支持', desc: 'We monitor progress and respond to any IRCC requests.' },
                  ].map((step, i, arr) => (
                    <div key={step.n} className="flex gap-5">
                      <div className="flex flex-col items-center">
                        <div className="w-9 h-9 rounded-full border-2 border-[#C9A96E] text-[#C9A96E] font-bold text-xs flex items-center justify-center flex-shrink-0">
                          {step.n}
                        </div>
                        {i < arr.length - 1 && <div className="w-px flex-1 bg-[#C9A96E]/20 my-1 min-h-[24px]" />}
                      </div>
                      <div className={`pb-6 ${i === arr.length - 1 ? 'pb-0' : ''}`}>
                        <p className="text-white font-medium text-sm">{step.en}</p>
                        <p className="text-[#C9A96E]/70 text-xs mb-1">{step.cn}</p>
                        <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-28 gradient-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="section-label justify-center mb-4">
              <span className="gold-line" />
              Client Stories
              <span className="gold-line" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-white mb-3">Success Stories</h2>
            <p className="text-[#C9A96E] text-lg font-light">客户成功案例</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-[#C9A96E]/20 rounded-2xl p-7 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#C9A96E]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 text-sm leading-relaxed mb-3 italic flex-1">"{t.quote}"</p>
                <p className="text-white/40 text-xs leading-relaxed mb-5">"{t.quoteCn}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/30 flex items-center justify-center text-[#C9A96E] font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-[#C9A96E]/70 text-xs">{t.title} · {t.titleCn}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/success-stories" className="btn-outline">
              View All Success Stories 查看全部案例
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#0F2A4A] rounded-3xl p-12 sm:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#C9A96E]/5 blur-2xl" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-[#C9A96E]/5 blur-2xl" />
            </div>
            <div className="relative">
              <div className="section-label justify-center mb-5">
                <span className="gold-line" />
                Start Your Journey
                <span className="gold-line" />
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-white mb-3 leading-tight">
                Ready to Begin Your<br />
                <span className="text-gradient-gold italic">Canadian Story?</span>
              </h2>
              <p className="text-[#C9A96E]/80 text-lg mb-3 font-light">准备好开始您的加拿大故事了吗？</p>
              <p className="text-white/50 max-w-lg mx-auto mb-10 text-sm leading-relaxed">
                Book a free initial consultation. Our experts will assess your situation and identify the best immigration pathway for you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-primary text-base py-4 px-10">
                  Book Free Consultation 预约免费咨询
                </Link>
                <Link href="/services" className="btn-outline text-base py-4 px-8">
                  Explore Services
                </Link>
              </div>
              <div className="mt-8 text-white/40 text-xs">
                200-1460 Chevrier Blvd, Winnipeg, MB · winnie@winsunimmigration.ca
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
