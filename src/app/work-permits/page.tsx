import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work Permits & LMIA',
  description: 'Work Permit and LMIA consulting in Winnipeg. WINSUN assists skilled workers and Canadian employers with employer-specific, open, and LMIA-exempt work permit applications.',
  alternates: { canonical: 'https://www.winsunimmigration.ca/work-permits' },
};

export default function WorkPermitsPage() {
  return (
    <>
      <PageHero
        label="Temporary Authorization"
        title="Work Permits & LMIA"
        titleCn="工作许可及劳工市场评估"
        subtitle="Helping skilled workers and Canadian employers navigate work authorization with expertise and efficiency."
        subtitleCn="以专业高效的方式帮助技术工人和加拿大雇主完成工作授权申请。"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20">
          <div>
            <div className="section-label mb-5"><span className="gold-line" />Work in Canada</div>
            <h2 className="font-serif text-4xl text-[#0F2A4A] mb-3">Your Path to<br />Working in Canada</h2>
            <p className="text-[#C9A96E] text-lg font-light mb-8">在加拿大工作的路径</p>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>Canada offers multiple pathways for foreign nationals to work legally. Whether you have a job offer, are an intra-company transferee, or are seeking an open work permit, our team will identify the right pathway and manage your application precisely.</p>
              <p className="text-gray-400">加拿大为外国公民提供多种合法工作途径。无论您是否已有工作邀约、属于公司内部调动，还是寻求开放式工作许可，我们的团队都将为您确定正确路径并精准管理申请。</p>
              <p>For Canadian employers, we manage the entire LMIA process — from crafting compliant job advertisements to submitting a complete application to Service Canada and responding to any additional requests.</p>
              <p className="text-gray-400">对于加拿大雇主，我们全程管理劳工市场评估流程——从制定合规招聘广告到向加拿大服务部提交完整申请并处理任何补充要求。</p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-[#0F2A4A] mb-6">Types of Work Permits 工作许可类型</h3>
            <div className="space-y-4">
              {[
                { title: 'LMIA-Based Work Permit', cn: '基于劳工市场评估的工作许可', desc: 'Employer obtains a positive LMIA showing no qualified Canadian is available for the role, then sponsors your work permit.' },
                { title: 'LMIA-Exempt Work Permit', cn: '豁免劳工市场评估的工作许可', desc: 'Certain categories under CUSMA/USMCA, intra-company transfers, and significant benefit exemptions bypass LMIA requirements.' },
                { title: 'Open Work Permit', cn: '开放式工作许可', desc: 'Not tied to a specific employer. Available to PGWP graduates, spouses of workers/students, and other eligible categories.' },
                { title: 'International Mobility Program', cn: '国际流动计划', desc: 'Work permits under international agreements, reciprocal employment, or for positions that benefit Canada economically or culturally.' },
              ].map((p) => (
                <div key={p.title} className="border-l-2 border-[#C9A96E] pl-5 py-1">
                  <h4 className="text-[#0F2A4A] font-semibold text-sm mb-0.5">{p.title}</h4>
                  <p className="text-[#C9A96E] text-xs mb-2 font-light">{p.cn}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-white mb-2">Typical Documents Required</h2>
            <p className="text-[#C9A96E] font-light">通常所需文件</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Valid job offer from a Canadian employer 加拿大雇主有效工作邀约',
              'Positive LMIA (if required) 劳工市场评估批准（如需）',
              'Valid passport (min. 6 months validity) 有效护照（至少6个月有效期）',
              'Educational credentials & transcripts 教育资历及成绩单',
              'Proof of relevant work experience 相关工作经验证明',
              'Language test results (if applicable) 语言测试成绩（如适用）',
              'Medical examination (if required) 体检报告（如需要）',
              'Police clearance certificate (if required) 无犯罪记录证明（如需要）',
            ].map((doc) => (
              <div key={doc} className="flex items-start gap-3 bg-white/5 border border-[#C9A96E]/20 rounded-lg p-4">
                <svg className="w-4 h-4 text-[#C9A96E] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-white/70 text-sm">{doc}</p>
              </div>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-5 text-center">Requirements vary by case — we provide a complete checklist after your consultation. 具体要求因案而异，咨询后我们将提供完整清单。</p>
        </div>
      </section>

      <section className="py-20 bg-white text-center px-4">
        <h2 className="font-serif text-4xl text-[#0F2A4A] mb-3">Need help with a Work Permit?</h2>
        <p className="text-[#C9A96E] text-lg font-light mb-8">需要工作许可方面的帮助？</p>
        <Link href="/contact" className="btn-primary text-base py-4 px-10">Book a Consultation 预约咨询</Link>
      </section>
    </>
  );
}
