import Link from 'next/link';
import Image from 'next/image';

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
  { number: '20+', label: 'International Regions', cn: '国际业务区域' },
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
                Strategic immigration solutions for entrepreneurs, skilled workers, students, and families — guided by licensed professionals with real-world experience and a proven track record.
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-xl">
                为创业者、技术人才、留学生及家庭提供专业移民解决方案，由持牌移民顾问亲自规划，结合丰富实战经验与成功案例，为您实现加拿大移民目标。
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

      {/* ── Founder Profile ── */}
      <section className="py-24 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="section-label justify-center mb-4">
              <span className="gold-line" />
              Principal Consultant
              <span className="gold-line" />
            </div>
          </div>
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row gap-10 items-start lg:items-center shadow-sm">
            {/* Photo */}
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-4 border-[#C9A96E]/30 shadow-lg">
                <Image
                  src="https://cdn.sanity.io/images/3dek4247/production/4ec00417dbb113e4855e29630264add9b82ca1c0-819x1024.png?w=400&auto=format"
                  alt="Ting (Winnie) Zhang, RCIC-IRB"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            {/* Bio */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h3 className="font-serif text-3xl text-[#0F2A4A] font-semibold">Winnie Zhang, RCIC-IRB</h3>
                <span className="px-3 py-1 bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-full text-[#C9A96E] text-xs font-semibold tracking-wide">Licence R731688</span>
              </div>
              <p className="text-[#C9A96E] font-medium mb-1">Founder & Principal Consultant</p>
              <p className="text-gray-400 text-sm mb-4">创始人及首席顾问 · 持牌移民顾问 | 女王大学移民法文凭 | MBA | PMP</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {['MBA · Asper School of Business', "Queen's University Immigration Law", 'PMP Certified', 'RCIC-IRB · Class L3'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white border border-[#E2E8F0] rounded-full text-[#0F2A4A] text-xs font-medium shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">
                Winnie Zhang is the Founder and Principal Consultant of WINSUN Immigration Solutions Inc. She is a licensed RCIC-IRB consultant with formal immigration law education from Queen's University, an MBA from the Asper School of Business, and professional project management training. She combines regulated immigration consulting with business strategy, helping entrepreneurs, families, workers, and students build practical pathways to Canada.
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Winnie Zhang是WINSUN移民解决方案有限公司的创始人及首席顾问。她持有CICC颁发的RCIC-IRB执照，拥有女王大学移民法研究生文凭、Asper商学院MBA学位及PMP项目管理认证，将专业移民咨询与商业战略深度融合，为创业者、家庭、职场人士及学生构建通往加拿大的实践路径。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Professional Credentials ── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-4">
              <span className="gold-line" />
              Verified Qualifications
              <span className="gold-line" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0F2A4A] mb-3">Professional Credentials</h2>
            <p className="text-[#C9A96E] text-lg font-light">专业资质认证</p>
          </div>

          {/* Featured RCIC + other credentials grid */}
          <div className="grid lg:grid-cols-3 gap-6 mb-14">
            {/* Featured RCIC card */}
            <div className="lg:col-span-1 bg-[#0F2A4A] rounded-2xl p-8 flex flex-col items-start shadow-lg border border-[#C9A96E]/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#C9A96E]/5 -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
              <span className="px-3 py-1 bg-[#C9A96E]/20 border border-[#C9A96E]/40 rounded-full text-[#C9A96E] text-xs font-semibold tracking-widest uppercase mb-5">
                Featured Credential
              </span>
              <div className="w-12 h-12 rounded-xl bg-[#C9A96E]/10 border border-[#C9A96E]/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h4 className="font-serif text-white text-xl font-semibold mb-1 leading-snug">Licensed RCIC-IRB Consultant</h4>
              <p className="text-[#C9A96E] text-sm mb-1">持牌移民顾问 · CICC认证</p>
              <p className="text-white/50 text-xs font-mono mb-6">Licence No. R731688 · Class L3-IRB · Active</p>
              <div className="mt-auto w-full">
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#C9A96E]/20 mb-5 bg-white/5">
                  <Image src="/cert-rcic.jpg" alt="RCIC Licence" width={300} height={225} className="w-full h-full object-cover" unoptimized />
                </div>
                <Link
                  href="https://college-ic.ca/protecting-the-public/find-an-immigration-consultant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-[#C9A96E] text-[#C9A96E] text-sm font-semibold hover:bg-[#C9A96E] hover:text-[#0F2A4A] transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Verify My Licence
                </Link>
              </div>
            </div>

            {/* Other 5 credentials */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 content-start">
              {[
                { src: '/cert-queens.jpg', label: "Queen's University", labelCn: '女王大学移民法研究生文凭', tag: 'Graduate Diploma' },
                { src: '/cert-mba.jpg', label: 'MBA – Asper School', labelCn: 'MBA · 曼省大学Asper商学院', tag: 'MBA' },
                { src: '/cert-pmp.jpg', label: 'PMP Certification', labelCn: 'PMP认证项目管理师', tag: 'PMP' },
                { src: '/cert-ba.jpg', label: 'BA – Business Admin', labelCn: '商业管理学士', tag: 'BA Degree' },
                { src: '/cert-french.jpg', label: 'French Language Certificate', labelCn: '法语语言证书', tag: 'French' },
                { src: '/cert-CAPIC.jpg', label: 'CAPIC Membership', labelCn: '加拿大专业移民顾问协会会员', tag: 'CAPIC' },
              ].map((cert) => (
                <div key={cert.src} className="bg-white border border-[#E2E8F0] rounded-2xl p-4 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-16 h-20 rounded-lg overflow-hidden border border-[#E2E8F0] flex-shrink-0 bg-[#F8FAFC]">
                    <Image src={cert.src} alt={cert.label} width={64} height={80} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" unoptimized />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2 py-0.5 bg-[#C9A96E]/10 text-[#C9A96E] text-xs font-semibold rounded-full mb-1.5">{cert.tag}</span>
                    <p className="text-[#0F2A4A] font-semibold text-sm leading-snug">{cert.label}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{cert.labelCn}</p>
                  </div>
                </div>
              ))}
              {/* Checklist summary */}
              <div className="sm:col-span-2 bg-[#0F2A4A]/5 border border-[#0F2A4A]/10 rounded-2xl p-5">
                <p className="text-[#0F2A4A] font-semibold text-xs tracking-wider uppercase mb-3">All Verified Qualifications</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    'Licensed RCIC-IRB · R731688',
                    "Queen's University Immigration Law",
                    'MBA · Asper School of Business',
                    'PMP Certified Project Manager',
                    'BA · Business Administration',
                    'French Language Certificate',
                    'GMCA MBA Certificate',
                    'CAPIC Registered Member · R24570',
                  ].map((c) => (
                    <div key={c} className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#C9A96E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#0F2A4A] text-xs">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet the Team ── */}
      <section className="py-24 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-label justify-center mb-4">
              <span className="gold-line" />
              Our People
              <span className="gold-line" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0F2A4A] mb-3">Meet the WINSUN Team</h2>
            <p className="text-[#C9A96E] text-lg font-light mb-3">认识我们的团队</p>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              A multidisciplinary team of immigration consultants, business advisors, project managers, and entrepreneurial specialists.
            </p>
            <p className="text-gray-400 text-xs max-w-xl mx-auto mt-1 leading-relaxed">
              由移民顾问、商业顾问、项目管理人员及创业规划专家组成的专业团队。
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/team-photo.jpg"
              alt="WINSUN Immigration Solutions Team"
              width={1400}
              height={600}
              className="w-full object-cover"
              style={{ maxHeight: '480px', objectPosition: 'center 10%' }}
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06182B]/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4">
              <div>
                <p className="text-white font-serif text-2xl mb-0.5">Our Winnipeg Team</p>
                <p className="text-[#C9A96E] text-sm font-light">温尼伯专业团队</p>
              </div>
              <Link href="/about" className="flex-shrink-0 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white text-sm font-semibold hover:bg-white/20 transition-colors">
                Meet Everyone →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social Proof Metrics ── */}
      <section className="py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { number: '10+', label: 'Years of Experience', labelCn: '10年以上经验', desc: 'Serving clients in Canada and internationally' },
              { number: '100+', label: 'Business Plans', labelCn: '100+商业计划书', desc: 'Prepared for entrepreneur and start-up clients' },
              { number: '50+', label: 'Start-Up Visa Projects', labelCn: '50+创业移民项目', desc: 'Across technology, health, energy, education, and service sectors' },
              { number: '20+', label: 'International Regions', labelCn: '国际业务区域', desc: 'Serving clients across global markets' },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-[#E2E8F0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="font-serif text-4xl text-[#C9A96E] font-bold mb-2">{s.number}</div>
                <p className="text-[#0F2A4A] font-semibold text-sm mb-0.5">{s.label}</p>
                <p className="text-gray-400 text-xs mb-3">{s.labelCn}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
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
