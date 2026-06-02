import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Start-Up Visa Program',
  description: 'Canada Start-Up Visa Program consulting in Winnipeg. WINSUN helps innovative entrepreneurs connect with designated organizations and obtain Canadian permanent residence.',
  alternates: { canonical: 'https://www.winsunimmigration.ca/startup-visa' },
};

export default function StartUpVisaPage() {
  return (
    <>
      <PageHero
        label="Federal Immigration Program"
        title="Start-Up Visa Program"
        titleCn="创业签证计划"
        subtitle="A direct pathway to Canadian permanent residence for innovative entrepreneurs with designated organization support."
        subtitleCn="为获得指定机构支持的创新型创业者提供直接申请加拿大永久居留权的路径。"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="section-label mb-5"><span className="gold-line" />Program Overview</div>
            <h2 className="font-serif text-4xl text-[#0F2A4A] mb-3 leading-tight">What is the Start-Up Visa?</h2>
            <p className="text-[#C9A96E] text-lg font-light mb-8">什么是创业签证？</p>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>Canada's Start-Up Visa Program (SUV) targets innovative entrepreneurs who can create jobs for Canadians and compete on a global scale. Unlike other immigration programs, it focuses on the viability and innovation of your business concept rather than personal net worth alone.</p>
              <p className="text-gray-400">加拿大创业签证计划（SUV）面向能为加拿大人创造就业机会、在全球范围内具有竞争力的创新型创业者。与其他移民项目不同，它更注重您商业理念的可行性和创新性。</p>
              <p>Applicants must secure a letter of support from a designated Canadian organization — a venture capital fund, angel investor group, or business incubator — and meet minimum language and settlement fund requirements.</p>
              <p className="text-gray-400">申请人须获得加拿大指定机构（风险投资基金、天使投资人团体或商业孵化器）的支持函，并满足最低语言要求及定居资金要求。</p>
            </div>

            <div className="mt-10 bg-[#0F2A4A] rounded-2xl p-7 text-white">
              <p className="text-[#C9A96E] font-semibold text-xs tracking-widest uppercase mb-4">Designated Organizations 指定机构类型</p>
              <div className="space-y-4">
                {[
                  { icon: '💰', en: 'Venture Capital Funds', cn: '风险投资基金', note: 'Min. investment: $200,000 CAD' },
                  { icon: '👼', en: 'Angel Investor Groups', cn: '天使投资人团体', note: 'Min. investment: $75,000 CAD' },
                  { icon: '🏗️', en: 'Business Incubators', cn: '商业孵化器', note: 'No minimum investment required' },
                ].map((o) => (
                  <div key={o.en} className="flex items-start gap-3">
                    <span className="text-2xl">{o.icon}</span>
                    <div>
                      <p className="font-medium text-sm">{o.en} · <span className="text-[#C9A96E]/70">{o.cn}</span></p>
                      <p className="text-white/40 text-xs">{o.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl text-[#0F2A4A] mb-5">Eligibility Requirements 申请资格</h3>
              <div className="space-y-3">
                {[
                  { en: 'Own 10% or more of the Canadian business', cn: '持有加拿大企业10%或以上股份' },
                  { en: 'Business incorporated in Canada', cn: '企业须在加拿大注册' },
                  { en: 'Designated organization holds 51%+ voting rights', cn: '指定机构持有51%以上投票权' },
                  { en: 'Applicant actively manages the business from Canada', cn: '申请人在加拿大积极管理业务' },
                  { en: 'Language: CLB 5 in all four abilities', cn: '语言：各项均达CLB 5级' },
                  { en: 'Sufficient settlement funds', cn: '具备足够的定居资金' },
                ].map((item) => (
                  <div key={item.en} className="flex items-start gap-3 p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
                    <svg className="w-4 h-4 text-[#C9A96E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <p className="text-[#0F2A4A] text-sm font-medium">{item.en}</p>
                      <p className="text-gray-400 text-xs">{item.cn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-xl p-5">
              <p className="text-[#0F2A4A] font-semibold text-sm mb-2">Work Permit While You Wait 等待期间工作许可</p>
              <p className="text-gray-600 text-sm leading-relaxed">While your PR application is processed, you may be eligible for an employer-specific work permit, allowing you to start building your business in Canada immediately.</p>
              <p className="text-gray-400 text-xs mt-2">在PR申请处理期间，您可能有资格获得雇主特定工作许可，让您可以立即在加拿大开始创业。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Steps */}
      <section className="py-24 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-white mb-2">Application Process</h2>
            <p className="text-[#C9A96E] font-light">申请流程</p>
          </div>
          <div className="space-y-4">
            {[
              { en: 'Develop an innovative, viable business concept', cn: '提出创新可行的商业理念' },
              { en: 'Secure a letter of support from a designated Canadian organization', cn: '获得加拿大指定机构的支持函' },
              { en: 'Meet CLB 5 language requirement in all abilities', cn: '各项语言能力均满足CLB 5级要求' },
              { en: 'Demonstrate sufficient settlement funds', cn: '证明具备足够的定居资金' },
              { en: 'Apply for permanent residence through IRCC', cn: '通过IRCC申请永久居留权' },
              { en: 'Receive bridging work permit and begin operations in Canada', cn: '获得过渡工作许可并在加拿大开展业务' },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-5 bg-white/5 border border-[#C9A96E]/20 rounded-xl p-5">
                <div className="w-9 h-9 rounded-full border-2 border-[#C9A96E] text-[#C9A96E] font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{step.en}</p>
                  <p className="text-white/40 text-xs mt-0.5">{step.cn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center px-4">
        <h2 className="font-serif text-4xl text-[#0F2A4A] mb-3">Interested in the Start-Up Visa?</h2>
        <p className="text-[#C9A96E] text-lg font-light mb-8">对创业签证感兴趣？</p>
        <p className="text-gray-500 max-w-lg mx-auto mb-8 text-sm">We evaluate your business concept, connect you with designated organizations, and guide your entire application from start to approval.</p>
        <Link href="/contact" className="btn-primary text-base py-4 px-10">Book a Consultation 预约咨询</Link>
      </section>
    </>
  );
}
