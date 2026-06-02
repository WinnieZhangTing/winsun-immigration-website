import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Business Immigration',
  description: 'Business immigration consulting in Winnipeg. WINSUN guides investors and entrepreneurs through the Manitoba PNP Business Investor Stream, Start-Up Visa, and Self-Employed Persons Program.',
  alternates: { canonical: 'https://www.winsunimmigration.ca/business-immigration' },
};

export default function BusinessImmigrationPage() {
  return (
    <>
      <PageHero
        label="Business & Investor Programs"
        title="Business Immigration"
        titleCn="商业移民"
        subtitle="Tailored immigration pathways for experienced entrepreneurs, investors, and business professionals."
        subtitleCn="为有经验的创业者、投资者和商业专业人士量身定制的移民路径。"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-4"><span className="gold-line" />Programs<span className="gold-line" /></div>
            <h2 className="font-serif text-4xl text-[#0F2A4A] mb-2">Business Immigration Programs</h2>
            <p className="text-[#C9A96E] font-light">商业移民计划</p>
          </div>

          <div className="space-y-8">
            {[
              {
                title: 'Manitoba Provincial Nominee Program — Business Investor Stream',
                titleCn: '曼尼托巴省提名计划 — 商业投资流程',
                desc: 'The MPNP Business Investor Stream is designed for experienced business people who intend to establish or purchase a business in Manitoba and actively manage it.',
                descCn: '曼省提名计划商业投资流程面向有意在曼省建立或收购企业并积极管理的有经验商界人士。',
                highlights: [
                  { en: 'Minimum net worth: $500,000 CAD', cn: '最低净资产：50万加元' },
                  { en: 'Minimum investment: $250,000 CAD', cn: '最低投资额：25万加元' },
                  { en: 'Exploratory visit to Manitoba required', cn: '须前往曼省实地考察' },
                  { en: 'Must create at least 1 FT job for a Canadian', cn: '须为加拿大人创造至少1个全职工作' },
                ],
                icon: '🏢',
              },
              {
                title: 'Federal Start-Up Visa Program',
                titleCn: '联邦创业签证计划',
                desc: 'Innovative entrepreneurs who secure support from a designated Canadian organization can apply directly for permanent residence.',
                descCn: '获得加拿大指定机构支持的创新型创业者可直接申请永久居留权。',
                highlights: [
                  { en: 'Supported by VC fund, angel investor, or incubator', cn: '获得风险投资基金、天使投资人或孵化器支持' },
                  { en: 'Must own 10%+ of the business', cn: '须持有公司10%以上股份' },
                  { en: 'Language requirement: CLB 5', cn: '语言要求：CLB 5' },
                  { en: 'Direct permanent residence pathway', cn: '直接永久居留路径' },
                ],
                icon: '🚀',
              },
              {
                title: 'Self-Employed Persons Program',
                titleCn: '自雇人士计划',
                desc: 'For individuals with relevant experience in cultural activities, athletics, or farm management who intend to be self-employed in Canada.',
                descCn: '适用于在文化活动、体育运动或农场管理方面有相关经验并有意在加拿大自雇的人士。',
                highlights: [
                  { en: 'Two years of relevant self-employment experience', cn: '两年相关自雇经验' },
                  { en: 'Demonstrated ability and intent to be self-employed', cn: '展示自雇的能力和意愿' },
                  { en: 'Cultural, athletic, or farm management background', cn: '文化、体育或农场管理背景' },
                  { en: 'Contribution to Canadian cultural or economic life', cn: '对加拿大文化或经济生活的贡献' },
                ],
                icon: '🌱',
              },
            ].map((prog) => (
              <div key={prog.title} className="card-premium">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="text-4xl mb-4">{prog.icon}</div>
                    <h3 className="font-serif text-[#0F2A4A] text-xl font-semibold mb-1">{prog.title}</h3>
                    <p className="text-[#C9A96E] text-sm font-light mb-4">{prog.titleCn}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{prog.desc}</p>
                    <p className="text-gray-400 text-xs mt-2 leading-relaxed">{prog.descCn}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <h4 className="text-[#0F2A4A] font-semibold text-sm mb-4">Key Requirements 主要要求</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {prog.highlights.map((h) => (
                        <div key={h.en} className="flex items-start gap-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3">
                          <svg className="w-4 h-4 text-[#C9A96E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <p className="text-[#0F2A4A] text-xs font-medium">{h.en}</p>
                            <p className="text-gray-400 text-xs">{h.cn}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Winnipeg */}
      <section className="py-24 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label justify-center mb-5"><span className="gold-line" />Location Advantage<span className="gold-line" /></div>
          <h2 className="font-serif text-4xl text-white mb-3">Why Start Your Business in Winnipeg?</h2>
          <p className="text-[#C9A96E] text-lg font-light mb-10">为什么选择在温尼伯创业？</p>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              { icon: '💰', en: 'Affordable Cost of Living', cn: '生活成本合理', desc: 'Lower operating and living costs compared to Vancouver or Toronto, maximizing your investment.' },
              { icon: '📈', en: 'Diverse Growing Economy', cn: '多元增长经济', desc: 'Manitoba\'s economy spans agriculture, manufacturing, technology, healthcare, and financial services.' },
              { icon: '🤝', en: 'Supportive Business Ecosystem', cn: '完善的商业生态', desc: 'Access to incubators, government grants, a strong immigrant entrepreneur community, and the MPNP pathway.' },
            ].map((item) => (
              <div key={item.en} className="bg-white/5 border border-[#C9A96E]/20 rounded-2xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold mb-1">{item.en}</h3>
                <p className="text-[#C9A96E] text-sm font-light mb-2">{item.cn}</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center px-4">
        <h2 className="font-serif text-4xl text-[#0F2A4A] mb-3">Ready to bring your business to Canada?</h2>
        <p className="text-[#C9A96E] text-lg font-light mb-8">准备好将您的业务带到加拿大了吗？</p>
        <Link href="/contact" className="btn-primary text-base py-4 px-10">Book a Consultation 预约咨询</Link>
      </section>
    </>
  );
}
