import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Study Permits',
  description: 'Study Permit consulting for international students in Canada. WINSUN guides students from application through PGWP and Express Entry permanent residence.',
  alternates: { canonical: 'https://www.winsunimmigration.ca/study-permits' },
};

export default function StudyPermitsPage() {
  return (
    <>
      <PageHero
        label="International Education"
        title="Study Permits"
        titleCn="学习许可"
        subtitle="Study at world-class Canadian institutions and build a clear pathway to post-graduation work and permanent residence."
        subtitleCn="在加拿大世界一流院校就读，清晰规划毕业后工作及永久居留路径。"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <div className="section-label mb-5"><span className="gold-line" />Study in Canada</div>
            <h2 className="font-serif text-4xl text-[#0F2A4A] mb-3 leading-tight">Why Study<br />in Canada?</h2>
            <p className="text-[#C9A96E] text-lg font-light mb-8">为什么选择在加拿大留学？</p>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>Canada is one of the world's top destinations for international students, offering globally recognized degrees, a safe multicultural environment, and excellent post-graduation opportunities including the Post-Graduation Work Permit (PGWP) and a clear pathway to permanent residence.</p>
              <p className="text-gray-400">加拿大是全球顶尖留学目的地之一，提供全球认可的学位、安全多元的环境，以及包括毕业后工作许可（PGWP）和清晰的永久居留路径在内的卓越毕业后发展机会。</p>
              <p>Our team assists from initial school selection and acceptance through study permit application, and then guides you through PGWP, Express Entry, and PR — a complete educational immigration journey.</p>
              <p className="text-gray-400">我们的团队从最初的学校选择和录取到学习许可申请全程协助，然后引导您完成毕业后工作许可、快速通道和永居申请——完整的教育移民旅程。</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { icon: '🎓', en: 'World-Class Degrees', cn: '世界一流学位' },
                { icon: '💼', en: 'Work While Studying', cn: '边学边工作' },
                { icon: '🏆', en: 'PGWP up to 3 Years', cn: '最长3年毕业后工作许可' },
                { icon: '🇨🇦', en: 'Pathway to PR', cn: '通往永居的路径' },
              ].map((b) => (
                <div key={b.en} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">{b.icon}</div>
                  <p className="text-[#0F2A4A] font-semibold text-xs">{b.en}</p>
                  <p className="text-[#C9A96E] text-xs font-light mt-0.5">{b.cn}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-[#0F2A4A] mb-6">Application Steps 申请步骤</h3>
            <div className="space-y-4">
              {[
                { en: 'Receive a Letter of Acceptance from a Designated Learning Institution (DLI)', cn: '获得指定学习机构（DLI）录取通知书' },
                { en: 'Demonstrate sufficient funds for tuition and living expenses', cn: '证明有足够资金支付学费和生活费用' },
                { en: 'Complete medical examination if required', cn: '如需要，完成体检' },
                { en: 'Obtain police clearance certificate if required', cn: '如需要，获得无犯罪记录证明' },
                { en: 'Submit study permit application online via IRCC portal', cn: '通过IRCC门户网站在线提交学习许可申请' },
                { en: 'Receive study permit and travel to Canada', cn: '获得学习许可并前往加拿大' },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
                  <div className="w-8 h-8 rounded-full bg-[#0F2A4A] text-[#C9A96E] font-bold text-xs flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-[#0F2A4A] font-medium text-sm">{step.en}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{step.cn}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-[#0F2A4A] rounded-xl p-5 text-white">
              <p className="text-[#C9A96E] font-semibold text-xs tracking-widest uppercase mb-2">Post-Graduation Work Permit (PGWP)</p>
              <p className="text-white/70 text-sm leading-relaxed">After completing a program of 8+ months at an eligible DLI, graduates may receive a PGWP matching their program length (up to 3 years) — a key stepping stone to Express Entry.</p>
              <p className="text-white/40 text-xs mt-2 leading-relaxed">在符合资格的指定学习机构完成8个月以上课程后，毕业生可获得与课程时长相匹配的毕业后工作许可（最长3年）——这是快速通道的重要跳板。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC] text-center px-4">
        <h2 className="font-serif text-4xl text-[#0F2A4A] mb-3">Ready to study in Canada?</h2>
        <p className="text-[#C9A96E] text-lg font-light mb-8">准备好在加拿大留学了吗？</p>
        <Link href="/contact" className="btn-primary text-base py-4 px-10">Book a Consultation 预约咨询</Link>
      </section>
    </>
  );
}
