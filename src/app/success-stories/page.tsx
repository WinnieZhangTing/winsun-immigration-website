import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Success Stories',
  description: 'Real client success stories from WINSUN Immigration Solutions. Start-Up Visa approvals, LMIA, study permits, business immigration, and Express Entry permanent residence in Canada.',
  alternates: { canonical: 'https://www.winsunimmigration.ca/success-stories' },
};

const stories = [
  {
    category: 'Start-Up Visa',
    categoryCn: '创业签证',
    name: 'David & Li Wei Chen',
    initials: 'DC',
    title: 'Tech Entrepreneurs → Canadian Permanent Residents',
    titleCn: '科技创业者→加拿大永久居民',
    story: 'David and Li Wei came to WINSUN with an innovative AI-powered logistics platform. We connected them with a designated business incubator, guided them through the letter of support process, and submitted a complete SUV application. They received their permanent residence within 20 months.',
    storyCn: 'David 和 Li Wei 带着一个创新的人工智能物流平台来到 WINSUN。我们为他们联系了指定的商业孵化器，引导他们完成支持函申请流程，并提交了完整的创业签证申请。他们在20个月内获得了永久居留权。',
    outcome: 'PR Approved in 20 Months',
    outcomeCn: '20个月内获批永居',
    emoji: '🚀',
  },
  {
    category: 'Work Permit & LMIA',
    categoryCn: '工作许可',
    name: 'Zhang Ming',
    initials: 'ZM',
    title: 'Software Engineer → Open Work Permit',
    titleCn: '软件工程师→开放式工作许可',
    story: 'Zhang Ming had a job offer from a Winnipeg tech firm but the employer was unfamiliar with the LMIA process. WINSUN managed the entire LMIA application — from job advertisement strategy to ESDC submission. The positive LMIA was received in 8 weeks, and Zhang Ming\'s work permit was approved on first submission.',
    storyCn: 'Zhang Ming 拥有温尼伯一家科技公司的工作邀约，但雇主对劳工市场评估流程不熟悉。WINSUN 全程管理了劳工市场评估申请——从招聘广告策略到向就业社会发展部提交申请。8周内收到了正面的劳工市场评估，Zhang Ming 的工作许可一次性获批。',
    outcome: 'LMIA Approved in 8 Weeks',
    outcomeCn: '8周内获批劳工市场评估',
    emoji: '💼',
  },
  {
    category: 'Study Permit → PR',
    categoryCn: '学习许可→永居',
    name: 'Priya Sharma',
    initials: 'PS',
    title: 'International Student → Express Entry PR',
    titleCn: '国际学生→快速通道永居',
    story: 'Priya came to Canada on a study permit to pursue her Master\'s in Computer Science at the University of Manitoba. WINSUN helped her secure a study permit, then guided her through the PGWP application after graduation, and finally built an Express Entry profile that landed her an ITA with a competitive CRS score.',
    storyCn: 'Priya 持学习许可来到加拿大，在曼尼托巴大学攻读计算机科学硕士。WINSUN 帮助她获得了学习许可，毕业后引导她申请毕业后工作许可，最终建立了快速通道档案，以有竞争力的综合排名分获得了邀请函。',
    outcome: 'Express Entry ITA Received',
    outcomeCn: '获得快速通道邀请函',
    emoji: '🎓',
  },
  {
    category: 'Business Immigration',
    categoryCn: '商业移民',
    name: 'Wang Family',
    initials: 'WF',
    title: 'Business Owner → MPNP Nominee',
    titleCn: '企业主→曼省提名',
    story: 'The Wang family operated a successful manufacturing business in China for over 15 years. WINSUN guided them through the Manitoba Provincial Nominee Program Business Investor Stream — from the exploratory visit to Winnipeg, through the business plan preparation, to the province\'s final nomination.',
    storyCn: '王氏家族在中国经营了一家成功的制造业企业超过15年。WINSUN 引导他们完成了曼尼托巴省提名计划商业投资流程——从温尼伯实地考察，到商业计划书准备，直至最终获得省级提名。',
    outcome: 'MPNP Business Nomination',
    outcomeCn: '曼省商业提名获批',
    emoji: '🏢',
  },
  {
    category: 'Visitor Visa',
    categoryCn: '访客签证',
    name: 'Li Family',
    initials: 'LF',
    title: 'Family Reunion Visit to Winnipeg',
    titleCn: '温尼伯家庭团聚探访',
    story: 'The Li family wanted to visit their daughter who had recently become a Canadian permanent resident. A previous TRV application had been refused. WINSUN reviewed the prior refusal, identified the weaknesses in the documentation, and submitted a strong new application. The visa was approved within 3 weeks.',
    storyCn: '李氏家族希望探访其女儿——她最近刚获得加拿大永久居留权。此前的临时居民签证申请曾被拒。WINSUN 审查了此前的拒签原因，找出文件不足之处，提交了一份有力的新申请。签证在3周内获批。',
    outcome: 'TRV Approved After Prior Refusal',
    outcomeCn: '拒签后成功获批',
    emoji: '✈️',
  },
  {
    category: 'Family Sponsorship',
    categoryCn: '家庭担保',
    name: 'Chen Wei & Mei',
    initials: 'CM',
    title: 'Spouse Sponsorship Successful',
    titleCn: '配偶担保成功',
    story: 'Chen Wei, a Canadian permanent resident in Winnipeg, wanted to sponsor his spouse Mei from China. WINSUN prepared a comprehensive sponsorship package with thorough documentation of the genuine relationship. The sponsorship was approved and Mei received her PR status without any additional requests for information.',
    storyCn: 'Chen Wei 是温尼伯的加拿大永久居民，希望担保其在中国的配偶 Mei。WINSUN 准备了一份全面的担保申请材料，详细证明了真实的婚姻关系。担保申请获批，Mei 顺利获得永久居留身份，无需补充任何材料。',
    outcome: 'Spouse PR Approved',
    outcomeCn: '配偶永居获批',
    emoji: '👨‍👩‍👧',
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        label="Client Results"
        title="Success Stories"
        titleCn="客户成功案例"
        subtitle="Real stories from real clients. We are proud to have guided hundreds of individuals and families to their Canadian goals."
        subtitleCn="真实客户的真实故事。我们为曾帮助数百位个人和家庭实现加拿大梦想而感到自豪。"
      />

      {/* Stats bar */}
      <section className="bg-[#C9A96E] py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { n: '500+', en: 'Cases Approved', cn: '成功案例' },
              { n: '95%', en: 'Success Rate', cn: '成功率' },
              { n: '10+', en: 'Years Experience', cn: '从业年限' },
              { n: '20+', en: 'International Regions', cn: '国际业务区域' },
            ].map((s) => (
              <div key={s.n}>
                <div className="font-serif text-3xl font-bold text-[#0F2A4A] mb-0.5">{s.n}</div>
                <div className="text-[#0F2A4A]/80 text-sm font-semibold">{s.en}</div>
                <div className="text-[#0F2A4A]/60 text-xs">{s.cn}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {stories.map((s) => (
              <div key={s.name} className="card-premium flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#0F2A4A]/10 border border-[#C9A96E]/30 flex items-center justify-center text-[#0F2A4A] font-bold">
                      {s.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0F2A4A]">{s.name}</p>
                      <p className="text-[#C9A96E] text-sm">{s.title}</p>
                      <p className="text-gray-400 text-xs">{s.titleCn}</p>
                    </div>
                  </div>
                  <div className="text-3xl flex-shrink-0">{s.emoji}</div>
                </div>

                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 bg-[#0F2A4A]/5 border border-[#0F2A4A]/10 rounded-full text-[#0F2A4A] text-xs font-medium">
                    {s.category}
                  </span>
                  <span className="text-gray-300 text-xs">{s.categoryCn}</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-1">{s.story}</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-6">{s.storyCn}</p>

                <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C9A96E]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#0F2A4A] font-semibold text-sm">{s.outcome}</span>
                  <span className="text-gray-400 text-xs">· {s.outcomeCn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] py-6 px-4">
        <p className="text-gray-400 text-xs text-center max-w-3xl mx-auto leading-relaxed">
          Client names and details have been changed or generalized to protect privacy. Past results do not guarantee future outcomes. Immigration results depend on individual circumstances and IRCC assessment. 客户姓名及细节已作更改或概括处理以保护隐私。过往结果不保证未来结果。移民结果取决于个人情况及IRCC评估。
        </p>
      </div>

      {/* CTA */}
      <section className="py-20 gradient-navy text-center px-4">
        <div className="section-label justify-center mb-5">
          <span className="gold-line" />
          Your Story Awaits
          <span className="gold-line" />
        </div>
        <h2 className="font-serif text-4xl text-white mb-3">Ready to Write Your Success Story?</h2>
        <p className="text-[#C9A96E] text-lg font-light mb-8">准备好书写您自己的成功故事了吗？</p>
        <Link href="/contact" className="btn-primary text-base py-4 px-10">
          Book a Free Consultation 预约免费咨询
        </Link>
      </section>
    </>
  );
}
