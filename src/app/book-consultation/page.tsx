import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Book a Consultation',
  description: 'Book an initial immigration consultation with WINSUN Immigration Solutions Inc. in Winnipeg.',
  alternates: {
    canonical: 'https://www.winsunimmigration.ca/book-consultation',
  },
};

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/winnie-winsunimmigration/30min';

export default function BookConsultationPage() {
  return (
    <main>
      <PageHero
        label="Book a Consultation"
        title="Schedule Your Initial Consultation"
        titleCn="预约初步咨询"
        subtitle="Choose a time to speak with WINSUN Immigration Solutions about your immigration goals, eligibility, and next steps."
        subtitleCn="请选择适合您的时间，与 WINSUN 移民顾问沟通您的移民目标、申请资格及下一步规划。"
      />

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-10 items-start">
            <aside className="bg-[#0F2A4A] rounded-2xl p-8 text-white shadow-xl">
              <div className="section-label mb-5">
                <span className="gold-line" /> Initial Consultation
              </div>
              <h2 className="font-serif text-3xl mb-4">What to Expect</h2>
              <p className="text-[#C9A96E] text-sm mb-6">咨询内容</p>

              <div className="space-y-5">
                {[
                  { en: 'Review your immigration goals and timeline', cn: '了解您的移民目标及时间规划' },
                  { en: 'Assess possible application pathways', cn: '初步评估适合的申请路径' },
                  { en: 'Identify key documents and next steps', cn: '说明所需材料及下一步安排' },
                  { en: 'Discuss service scope and professional support', cn: '沟通服务范围及专业支持方式' },
                ].map((item) => (
                  <div key={item.en} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#C9A96E]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white/90 text-sm font-medium">{item.en}</p>
                      <p className="text-white/40 text-xs mt-1">{item.cn}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/55 leading-relaxed">
                <p>Prefer to contact us first?</p>
                <p className="text-white/35 mt-1">如果您希望先留言咨询，也可以直接联系我们。</p>
                <Link href="/contact" className="inline-flex mt-4 text-[#C9A96E] font-semibold hover:text-[#E8C88A] transition-colors">
                  Contact WINSUN ->
                </Link>
              </div>
            </aside>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl shadow-sm overflow-hidden">
              {calendlyUrl ? (
                <iframe
                  src={calendlyUrl}
                  title="Book an initial consultation with WINSUN Immigration Solutions"
                  className="w-full h-[780px] border-0"
                />
              ) : (
                <div className="min-h-[520px] flex items-center justify-center p-8 text-center">
                  <div className="max-w-md">
                    <div className="w-16 h-16 rounded-full bg-[#0F2A4A] flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3M5 11h14M7 21h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl text-[#0F2A4A] mb-3">Online Booking Coming Soon</h3>
                    <p className="text-[#C9A96E] text-sm mb-5">在线预约即将开放</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      Please contact us by email, phone, WeChat, or WhatsApp to schedule your initial consultation.
                    </p>
                    <Link href="/contact" className="btn-primary justify-center">
                      Contact Us 联系我们
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
