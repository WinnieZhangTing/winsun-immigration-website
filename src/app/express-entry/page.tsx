import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Express Entry',
  description: 'Express Entry CRS assessment, profile preparation, and invitation strategy for skilled immigration to Canada.',
  alternates: { canonical: 'https://www.winsunimmigration.ca/express-entry' },
};

export default function ExpressEntryPage() {
  return (
    <>
      <PageHero
        label="Federal Skilled Immigration"
        title="Express Entry"
        titleCn="快速通道"
        subtitle="Federal skilled immigration planning through CRS optimization, profile preparation, and invitation strategy."
        subtitleCn="通过综合排名优化、档案准备及获邀策略规划加拿大联邦技术移民申请。"
      />

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
            <div>
              <div className="section-label mb-5">
                <span className="gold-line" /> Express Entry Services
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl text-[#0F2A4A] mb-3">Professional Guidance</h2>
              <p className="text-[#C9A96E] text-lg font-light mb-6">快速通道服务内容</p>
              <p className="text-gray-600 leading-relaxed mb-4">We help candidates understand their CRS score, strengthen their profile, and prepare a practical pathway toward an invitation to apply for permanent residence.</p>
              <p className="text-gray-400 text-sm leading-relaxed">我们帮助申请人了解综合排名分数，提升个人档案竞争力，并规划获得永久居留申请邀请的实际路径。</p>
            </div>

            <div className="grid gap-4">
              {[
                { en: 'CRS score assessment and improvement strategy', cn: '综合排名分数评估及提升策略' },
                { en: 'Federal Skilled Worker, Canadian Experience Class, and trade pathway review', cn: '联邦技术、加拿大经验类别及技工类别路径评估' },
                { en: 'Education, language, work history, and spouse factor planning', cn: '学历、语言、工作经历及配偶加分因素规划' },
                { en: 'Profile preparation, document checklist, and post-ITA support', cn: '档案准备、材料清单及获邀后申请支持' }
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
