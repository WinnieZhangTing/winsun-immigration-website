import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Immigration Services',
  description: 'Comprehensive Canadian immigration services: Start-Up Visa, Work Permits, LMIA, Study Permits, Visitor Visa, Business Immigration, and Permanent Residence. Winnipeg, MB.',
  alternates: { canonical: 'https://www.winsunimmigration.ca/services' },
};

const services = [
  { icon: '🚀', href: '/startup-visa', en: 'Start-Up Visa Program', cn: '创业签证计划', desc: 'A direct pathway to Canadian permanent residence for innovative entrepreneurs backed by designated organizations.', descCn: '为获得指定机构支持的创新型创业者提供直接申请加拿大永久居留的途径。' },
  { icon: '💼', href: '/work-permits', en: 'Work Permits & LMIA', cn: '工作许可及劳工市场评估', desc: 'Employer-sponsored work authorization and full LMIA management for workers and Canadian employers.', descCn: '为工人和加拿大雇主提供雇主担保工作授权及完整的劳工市场评估管理服务。' },
  { icon: '🎓', href: '/study-permits', en: 'Study Permits', cn: '学习许可', desc: 'Study at Canada\'s world-class institutions and build a clear pathway to PGWP and permanent residence.', descCn: '在加拿大世界一流院校就读，清晰规划毕业后工作许可及永久居留路径。' },
  { icon: '✈️', href: '/visitor-visa', en: 'Visitor Visa / TRV', cn: '访客签证', desc: 'Temporary Resident Visa applications for family visits, tourism, business travel, and medical visits.', descCn: '家庭探访、旅游、商务出行及就医的临时居民签证申请服务。' },
  { icon: '🏢', href: '/business-immigration', en: 'Business Immigration', cn: '商业移民', desc: 'Manitoba PNP Business Investor Stream and other provincial programs for experienced investors and entrepreneurs.', descCn: '面向有经验投资者和创业者的曼省提名商业投资流程及其他省提名计划。' },
  { icon: '🏠', href: '/contact', en: 'Permanent Residence Strategy', cn: '永久居留权策略', desc: 'Strategic PR planning through Express Entry CRS optimization, PNP alignment, and family sponsorship.', descCn: '通过快速通道综合排名优化、省提名计划衔接及家庭担保制定永久居留策略。' },
  { icon: '👨‍👩‍👧', href: '/contact', en: 'Family Sponsorship', cn: '家庭担保', desc: 'Spouse, dependent children, and parent sponsorship applications with thorough documentation support.', descCn: '配偶、受抚养子女及父母担保申请，提供全面的文件支持服务。' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Offer"
        title="Immigration Services"
        titleCn="移民服务项目"
        subtitle="Comprehensive, personalized solutions for every stage of your Canadian immigration journey."
        subtitleCn="为您加拿大移民旅程每个阶段提供全面、个性化的解决方案。"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.en} className="card-premium flex flex-col">
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="font-serif text-[#0F2A4A] text-xl font-semibold mb-1">{s.en}</h3>
                <p className="text-[#C9A96E] text-sm mb-4 font-light">{s.cn}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-2 flex-1">{s.desc}</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">{s.descCn}</p>
                <Link href={s.href} className="inline-flex items-center gap-1.5 text-[#C9A96E] text-sm font-medium group">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 gradient-navy text-center px-4">
        <h2 className="font-serif text-4xl text-white mb-3">Not sure which pathway fits you?</h2>
        <p className="text-[#C9A96E] text-lg font-light mb-8">不确定哪条移民路径最适合您？</p>
        <p className="text-white/50 max-w-xl mx-auto mb-8 text-sm">Book a free consultation. We assess your background, goals, and timeline — then recommend the best immigration strategy.</p>
        <Link href="/contact" className="btn-primary text-base py-4 px-10">
          Book Free Consultation 免费预约咨询
        </Link>
      </section>
    </>
  );
}
