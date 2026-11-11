import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Private RCIC Immigration Consultation',
  description: 'Book a confidential private consultation with an independent Regulated Canadian Immigration Consultant (RCIC). WINSUN is not affiliated with the Government of Canada or IRCC.',
  alternates: {
    canonical: 'https://www.winsunimmigration.ca/book-consultation',
  },
};

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/winnie-winsunimmigration/30min';

export default function BookConsultationPage() {
  return (
    <main>
      <PageHero
        label="Private RCIC Consultation"
        title="Book a Confidential Case Review"
        titleCn="预约私人移民咨询"
        subtitle="Speak with an independent Regulated Canadian Immigration Consultant about your circumstances, goals, and available options."
        subtitleCn="与独立的加拿大持牌移民顾问（RCIC）沟通您的个人情况、目标及可行选择。"
      />

      <section className="bg-[#FFF8E8] border-y border-[#C9A96E]/35" aria-label="Independent service disclosure">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-[#0F2A4A] text-sm font-semibold leading-relaxed">
            Independent private consulting service — not a government agency
          </p>
          <p className="text-[#334155] text-sm leading-relaxed mt-1">
            WINSUN Immigration Solutions Inc. is an independent private immigration consulting firm operated by a Regulated Canadian Immigration Consultant (RCIC). We are not affiliated with the Government of Canada or Immigration, Refugees and Citizenship Canada (IRCC). We do not issue visas, permits, permanent residence, or other government documents, and we cannot guarantee any government decision or outcome.
          </p>
          <p className="text-[#64748B] text-xs leading-relaxed mt-2">
            WINSUN 移民顾问有限公司为独立的私人移民咨询机构，由加拿大持牌移民顾问（RCIC）运营，与加拿大政府及 IRCC 无隶属关系。我们不签发签证、许可或永久居留身份，也不保证任何政府决定或结果。
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.78fr_1.22fr] gap-10 items-start">
            <aside className="bg-[#0F2A4A] rounded-2xl p-8 text-white shadow-xl">
              <div className="section-label mb-5">
                <span className="gold-line" /> Private Consultation
              </div>
              <h2 className="font-serif text-3xl mb-4">What to Expect</h2>
              <p className="text-[#C9A96E] text-sm mb-6">咨询内容</p>

              <div className="space-y-5">
                {[
                  { en: 'Discuss your circumstances, goals, and timeline', cn: '了解您的个人情况、目标及时间规划' },
                  { en: 'Review possible immigration options', cn: '初步评估可行的移民选择' },
                  { en: 'Receive independent professional guidance', cn: '获取独立的专业咨询意见' },
                  { en: 'Understand the scope of further professional services', cn: '了解后续专业服务的范围' },
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
                  Contact WINSUN &rarr;
                </Link>
              </div>
              <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 text-xs leading-relaxed text-white/50">
                A consultation does not constitute government approval and does not guarantee a visa, permit, status, or other outcome. All decisions are made by the responsible government authority.
              </div>
            </aside>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl shadow-sm overflow-hidden">
              {calendlyUrl ? (
                <iframe
                  src={calendlyUrl}
                  title="Book a private RCIC consultation with WINSUN Immigration Solutions"
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
