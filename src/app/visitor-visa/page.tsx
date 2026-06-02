import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Visitor Visa / TRV',
  description: 'Visitor Visa and Temporary Resident Visa (TRV) consulting in Winnipeg. WINSUN helps families, tourists, and business travellers obtain Canadian visitor visas, including after prior refusals.',
  alternates: { canonical: 'https://www.winsunimmigration.ca/visitor-visa' },
};

export default function VisitorVisaPage() {
  return (
    <>
      <PageHero
        label="Temporary Residence"
        title="Visitor Visa / TRV"
        titleCn="访客签证 / 临时居民签证"
        subtitle="Planning to visit Canada for tourism, family, or business? We make the TRV application process clear and straightforward."
        subtitleCn="计划赴加旅游、探亲或商务出行？我们让临时居民签证申请流程清晰简便。"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="section-label mb-5"><span className="gold-line" />TRV Overview</div>
            <h2 className="font-serif text-4xl text-[#0F2A4A] mb-3">Temporary Resident Visa</h2>
            <p className="text-[#C9A96E] text-lg font-light mb-8">临时居民签证</p>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>Citizens of certain countries require a Temporary Resident Visa (TRV) to enter Canada. Most are issued as multiple-entry visas, valid for up to 10 years or until your passport expires — allowing multiple trips during the validity period.</p>
              <p className="text-gray-400">某些国家的公民需要持临时居民签证入境加拿大。大多数以多次入境形式签发，有效期最长10年或至护照到期，允许在有效期内多次入境。</p>
              <p>A strong TRV application demonstrates genuine temporary intent — clear purpose of visit, strong ties to your home country, and sufficient financial support. Our team builds applications that address these factors comprehensively.</p>
              <p className="text-gray-400">一份有力的签证申请能清楚表明临时访问意图——明确的访问目的、与本国的紧密联系及充足的经济支持。我们的团队全面有力地呈现这些要素。</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: '👨‍👩‍👧', en: 'Family Visits', cn: '家庭探访' },
                { icon: '🏔️', en: 'Tourism', cn: '旅游观光' },
                { icon: '💼', en: 'Business Travel', cn: '商务出行' },
                { icon: '🎓', en: 'Short Courses', cn: '短期课程' },
              ].map((r) => (
                <div key={r.en} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 text-center">
                  <div className="text-2xl mb-1">{r.icon}</div>
                  <p className="text-[#0F2A4A] font-semibold text-xs">{r.en}</p>
                  <p className="text-[#C9A96E] text-xs font-light">{r.cn}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-[#0F2A4A] mb-6">Documents Required 所需文件</h3>
            <div className="space-y-3">
              {[
                { en: 'Valid passport (min. 6 months beyond intended stay)', cn: '有效护照（超出预计停留日期至少6个月）' },
                { en: 'Completed IMM 5257 application form', cn: '填妥的IMM 5257申请表' },
                { en: 'Photos meeting IRCC specifications', cn: '符合IRCC规格的照片' },
                { en: 'Proof of financial support', cn: '经济支持证明' },
                { en: 'Ties to home country (employment, property, family)', cn: '与本国的联系（就业、财产、家庭）' },
                { en: 'Letter of invitation (if visiting family or friends)', cn: '邀请函（如探访亲友）' },
                { en: 'Travel itinerary and purpose of visit', cn: '行程安排及访问目的说明' },
                { en: 'Travel history documentation', cn: '旅行记录文件' },
              ].map((doc) => (
                <div key={doc.en} className="flex items-start gap-3 p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
                  <svg className="w-4 h-4 text-[#C9A96E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="text-[#0F2A4A] text-sm font-medium">{doc.en}</p>
                    <p className="text-gray-400 text-xs">{doc.cn}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 bg-[#C9A96E]/10 border border-[#C9A96E]/30 rounded-xl p-4">
              <p className="text-[#0F2A4A] font-semibold text-sm mb-1">Previous Refusal? 曾被拒签？</p>
              <p className="text-gray-600 text-sm leading-relaxed">We specialize in reviewing prior refusals, identifying weaknesses, and building stronger reapplications. A refusal is not the end of the road.</p>
              <p className="text-gray-400 text-xs mt-1">我们专门审查此前的拒签原因，找出不足之处，提交更有力的重新申请。被拒不是终点。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC] text-center px-4">
        <h2 className="font-serif text-4xl text-[#0F2A4A] mb-3">Planning a visit to Canada?</h2>
        <p className="text-[#C9A96E] text-lg font-light mb-8">计划前往加拿大？</p>
        <Link href="/contact" className="btn-primary text-base py-4 px-10">Get Help with Your Visa 获取签证申请帮助</Link>
      </section>
    </>
  );
}
