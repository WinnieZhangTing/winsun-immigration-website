import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'MPNP',
  description: 'Manitoba Provincial Nominee Program planning for skilled workers, graduates, and business applicants.',
  alternates: { canonical: 'https://www.winsunimmigration.ca/mpnp' },
};

export default function MPNPPage() {
  return (
    <>
      <PageHero
        label="Manitoba Immigration Pathways"
        title="MPNP"
        titleCn="曼省提名计划"
        subtitle="Provincial nomination strategy for skilled workers, international graduates, and business applicants with Manitoba connections."
        subtitleCn="为具备曼省联系的技术人才、国际毕业生及商业申请人制定省提名规划。"
      />

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
            <div>
              <div className="section-label mb-5">
                <span className="gold-line" /> MPNP Services
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#0F2A4A] mb-3">Professional Guidance</h2>
              <p className="text-[#C9A96E] text-lg font-light mb-6">曼省提名服务内容</p>
              <p className="text-gray-600 leading-relaxed mb-4">Based in Winnipeg, WINSUN helps clients assess Manitoba connections, eligibility factors, settlement plans, and nomination strategy.</p>
              <p className="text-gray-400 text-sm leading-relaxed">WINSUN 位于温尼伯，帮助客户评估曼省联系、申请资格、安家计划及省提名策略。</p>
            </div>

            <div className="grid gap-4">
              {[
                { en: 'Skilled Worker in Manitoba and overseas pathway review', cn: '曼省境内及海外技术类别路径评估' },
                { en: 'International Education Stream planning', cn: '国际教育类别规划' },
                { en: 'Business Investor Stream strategy', cn: '商业投资类别策略' },
                { en: 'Settlement plan, documents, and application support', cn: '安家计划、材料准备及申请支持' }
              ].map((item) => (
                <div key={item.en} className="card-premium p-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#C9A96E]/15 border border-[#C9A96E]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#C9A96E]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3.25-3.25a1 1 0 111.414-1.414l2.543 2.543 6.543-6.543a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#0F2A4A] font-semibold">{item.en}</p>
                      <p className="text-gray-400 text-sm mt-1">{item.cn}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-navy text-center px-4">
        <h2 className="font-serif text-4xl text-white mb-3">Discuss Your Eligibility</h2>
        <p className="text-[#C9A96E] text-lg font-light mb-8">预约咨询，评估您的申请资格</p>
        <Link href="/book-consultation" className="btn-primary text-base py-4 px-10">
          Book a Consultation 预约咨询
        </Link>
      </section>
    </>
  );
}
