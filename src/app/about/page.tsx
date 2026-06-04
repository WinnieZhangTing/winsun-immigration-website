import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about WINSUN Immigration Solutions Inc. — a RCIC-authorized Canadian immigration consulting firm based in Winnipeg, Manitoba. Bilingual English and Mandarin services.',
  alternates: { canonical: 'https://www.winsunimmigration.ca/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Our Story"
        title="About WINSUN"
        titleCn="关于 WINSUN"
        subtitle="A premium immigration consulting firm dedicated to guiding newcomers, entrepreneurs, and families to a successful future in Canada."
        subtitleCn="专业移民咨询公司，致力于引导新移民、创业者和家庭在加拿大开创成功的未来。"
      />

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="section-label mb-5">
              <span className="gold-line" />
              Who We Are
            </div>
            <h2 className="font-serif text-4xl text-[#0F2A4A] mb-3 leading-tight">
              Winnipeg's Premier<br />Immigration Firm
            </h2>
            <p className="text-[#C9A96E] text-lg mb-8 font-light">温尼伯卓越移民咨询公司</p>
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                WINSUN Immigration Solutions Inc. is a professional, RCIC-authorized immigration consulting firm headquartered in Winnipeg, Manitoba. We specialize in helping individuals, entrepreneurs, students, and families navigate Canada's immigration system with clarity, confidence, and personalized care.
              </p>
              <p className="text-gray-400 text-sm">
                WINSUN 移民解决方案有限公司是一家持牌专业移民咨询公司，总部位于曼尼托巴省温尼伯市。我们专注于以清晰、自信和个性化的关怀，帮助个人、创业者、学生和家庭顺利完成加拿大移民申请。
              </p>
              <p>
                Our team of Regulated Canadian Immigration Consultants (RCICs) brings years of hands-on experience across every major immigration pathway — from the federal Start-Up Visa to provincial nominee programs, Express Entry, work permits, study permits, and family sponsorship.
              </p>
              <p className="text-gray-400 text-sm">
                我们的持牌加拿大移民顾问（RCIC）团队在各主要移民途径方面拥有丰富的实践经验，涵盖联邦创业签证、省提名计划、快速通道、工作许可、学习许可及家庭担保。
              </p>
            </div>
            <div className="flex gap-4 mt-10">
              <Link href="/contact" className="btn-primary">Book a Consultation</Link>
              <Link href="/services" className="btn-navy">Our Services</Link>
            </div>
          </div>

          <div className="space-y-5">
            <div className="bg-[#0F2A4A] rounded-2xl p-8 text-white">
              <div className="text-[#C9A96E] font-semibold text-xs tracking-widest uppercase mb-3">Our Vision 愿景</div>
              <p className="font-serif text-xl leading-relaxed text-white/90">
                "To be the most trusted bilingual immigration firm in Manitoba — empowering every client to achieve their Canadian dream."
              </p>
              <p className="text-white/40 text-sm mt-3 leading-relaxed">
                "成为曼尼托巴省最受信赖的双语移民咨询公司——助力每位客户实现加拿大梦想。"
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { n: '500+', en: 'Clients Served', cn: '客户服务经验' },
                { n: '10+', en: 'Years Experience', cn: '从业年限' },
                { n: '100+', en: 'Business Projects', cn: '商业咨询项目经验' },
                { n: '20+', en: 'International Regions', cn: '国际业务区域' },
              ].map((s) => (
                <div key={s.n} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 text-center">
                  <div className="font-serif text-3xl text-[#C9A96E] font-bold mb-1">{s.n}</div>
                  <div className="text-[#0F2A4A] text-xs font-semibold">{s.en}</div>
                  <div className="text-gray-400 text-xs">{s.cn}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-4">
              <span className="gold-line" />
              What Drives Us
              <span className="gold-line" />
            </div>
            <h2 className="font-serif text-4xl text-[#0F2A4A] mb-2">Our Core Values</h2>
            <p className="text-[#C9A96E] font-light">我们的核心价值观</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚖️', en: 'Integrity', cn: '诚信', desc: 'Honest, transparent guidance you can rely on at every step of your journey.' },
              { icon: '🎯', en: 'Excellence', cn: '卓越', desc: 'We pursue the best outcomes through meticulous attention to every detail.' },
              { icon: '🤝', en: 'Dedication', cn: '敬业', desc: 'Your success is our mission — we stand with you from start to finish.' },
              { icon: '🌏', en: 'Cultural Bridge', cn: '文化桥梁', desc: 'We bridge languages and cultures, making Canada feel like home from day one.' },
            ].map((v) => (
              <div key={v.en} className="card-premium text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-serif text-[#0F2A4A] text-xl font-semibold mb-1">{v.en}</h3>
                <p className="text-[#C9A96E] text-sm mb-3 font-light">{v.cn}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-label justify-center mb-4">
              <span className="gold-line" />
              The People Behind Your Journey
              <span className="gold-line" />
            </div>
            <h2 className="font-serif text-4xl text-[#0F2A4A] mb-2">Meet Our Team</h2>
            <p className="text-[#C9A96E] font-light mb-6">认识我们的团队</p>
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto">
              WINSUN Immigration Solutions Inc. is led by licensed Canadian immigration professionals and supported by a team of business consultants, MBA graduates, project managers, and entrepreneurial advisors.
            </p>
            <p className="text-gray-400 text-xs leading-relaxed max-w-2xl mx-auto mt-2">
              WINSUN 移民解决方案由持牌加拿大移民专业人员领导，并由商业顾问、MBA毕业生、项目经理和创业顾问团队提供支持。
            </p>
          </div>

          {/* Team Photo */}
          <div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl">
            <Image
              src="/team-photo.jpg"
              alt="WINSUN Immigration Solutions Team"
              width={1400}
              height={700}
              className="w-full object-cover"
              style={{ maxHeight: '520px', objectPosition: 'center 10%' }}
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06182B]/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <p className="text-white font-serif text-2xl mb-1">Our Winnipeg Team</p>
              <p className="text-[#C9A96E] text-sm font-light">温尼伯专业团队</p>
            </div>
          </div>

          {/* Team Member Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Winnie Zhang',
                nameCn: '张婷',
                title: 'Founder & CEO · RCIC-IRB',
                titleCn: '创始人兼首席执行官 · 持牌移民顾问',
                credentials: 'RCIC R731688 · Class L3-IRB · MBA · PMP',
                bio: 'Winnie is a Regulated Canadian Immigration Consultant (RCIC-IRB, R731688) licensed by the College of Immigration and Citizenship Consultants. She founded WINSUN to deliver expert, ethical immigration counsel across all major pathways — from Start-Up Visa to refugee proceedings.',
                bioCn: 'Winnie 是持牌加拿大移民顾问（RCIC-IRB，编号R731688），由移民和公民顾问学院授权。她创立WINSUN，为客户提供从创业签证到难民听证的全面专业移民服务。',
                photo: 'https://cdn.sanity.io/images/3dek4247/production/4ec00417dbb113e4855e29630264add9b82ca1c0-819x1024.png?w=400&auto=format',
              },
              {
                name: 'Summer Wang',
                nameCn: '王莹',
                title: 'Chief Operating Officer',
                titleCn: '首席运营官',
                credentials: 'MBA',
                bio: 'Summer oversees day-to-day operations and client experience, ensuring every application is managed with precision and care from submission to approval.',
                bioCn: 'Summer 负责日常运营和客户体验，确保每份申请从提交到获批都以精准和用心的态度处理。',
                photo: 'https://cdn.sanity.io/images/3dek4247/production/ff042e8b35ea5f222f76d1b80fc540230c801d0a-400x400.jpg?w=400&auto=format',
              },
              {
                name: 'Jing Zhang',
                nameCn: '张晶',
                title: 'Project Management Director',
                titleCn: '项目管理总监',
                credentials: 'BA',
                bio: 'Jing keeps every client file on track and on time. Her meticulous project management ensures no deadline is missed and every document is in order.',
                bioCn: 'Jing 确保每位客户的申请按时推进，以严谨的项目管理确保没有截止日期被错过，每份文件都井然有序。',
                photo: 'https://cdn.sanity.io/images/3dek4247/production/e36dea714d47937977f68a94fc8fb6a7cf6dfc08-1500x1001.jpg?rect=305,0,847,1001&w=400&auto=format',
              },
              {
                name: 'Ivy Yang',
                nameCn: '杨蕊',
                title: 'Office Manager',
                titleCn: '办公室经理',
                credentials: 'MA, Mass Communication',
                bio: 'Ivy is the welcoming voice of WINSUN. She ensures every client feels informed, supported, and confident at every stage of their immigration journey.',
                bioCn: 'Ivy 是 WINSUN 温暖的门面，确保每位客户在移民旅程的每个阶段都感到知情、受支持和充满信心。',
                photo: 'https://cdn.sanity.io/images/3dek4247/production/3006aacd213aa7e99ebf4b56639f49791b4f9ced-1766x2579.jpg?rect=0,441,1766,2138&w=400&auto=format',
              },
              {
                name: 'Kunwer Dhillon',
                nameCn: 'Kunwer Dhillon',
                title: 'Strategic Advisor',
                titleCn: '战略顾问',
                credentials: 'MBA · BE · CSCP · LSSGB',
                bio: 'Kunwer brings multi-disciplinary expertise in supply chain and business strategy, advising clients on Manitoba\'s business immigration pathways and investment planning.',
                bioCn: 'Kunwer 在供应链和商业战略方面拥有跨学科专长，为客户提供曼省商业移民路径和投资规划的专业建议。',
                photo: 'https://cdn.sanity.io/images/3dek4247/production/d69719539c401df975065d217357e932f07b67cc-800x800.jpg?w=400&auto=format',
              },
              {
                name: 'Hao Fu',
                nameCn: '傅浩',
                title: 'Strategic Advisor',
                titleCn: '战略顾问',
                credentials: 'MBA · CSC',
                bio: 'Hao specializes in financial and investment advisory for business immigration clients, helping entrepreneurs structure their ventures for MPNP and Start-Up Visa success.',
                bioCn: 'Hao 专注于商业移民客户的财务与投资咨询，帮助创业者为曼省提名和创业签证的成功申请做好规划。',
                photo: 'https://cdn.sanity.io/images/3dek4247/production/e55914afb791dcae2d5247e565055e66f97989aa-594x662.png?rect=0,82,594,580&w=400&auto=format',
              },
              {
                name: 'Shin Wang',
                nameCn: '王鑫',
                title: 'Strategic Advisor',
                titleCn: '战略顾问',
                credentials: 'Driving Instructor',
                bio: 'Shin supports clients navigating the entrepreneur and investor immigration streams, bringing hands-on business experience and a strong network in the Winnipeg business community.',
                bioCn: 'Shin 支持客户办理创业者和投资者移民流程，凭借丰富的商业经验和温尼伯商业圈的人脉为客户提供帮助。',
                photo: 'https://cdn.sanity.io/images/3dek4247/production/b4f0a3d8ea49a29d76cfdb5eaadc966b39ff5ed5-1155x1132.png?w=400&auto=format',
              },
              {
                name: 'Tony Luo',
                nameCn: '罗Tony',
                title: 'Investment Strategist',
                titleCn: '投资策略师',
                credentials: 'Financial Analyst',
                bio: 'Tony advises business immigration clients on property investment and financial planning in Manitoba, helping them meet investment thresholds and build a strong financial foundation in Canada.',
                bioCn: 'Tony 为商业移民客户提供曼省房产投资和财务规划建议，帮助他们满足投资要求并在加拿大建立稳固的财务基础。',
                photo: 'https://cdn.sanity.io/images/3dek4247/production/84b71ed60b8abdd481fe257722a8ecb4253ba355-1155x1132.png?w=400&auto=format',
              },
            ].map((member) => (
              <div key={member.name} className="card-premium flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C9A96E]/30 flex-shrink-0">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F2A4A] text-sm">{member.name}</p>
                  </div>
                </div>
                <p className="text-[#C9A96E] font-semibold text-xs mb-0.5">{member.title}</p>
                <p className="text-gray-400 text-xs mb-1">{member.titleCn}</p>
                {member.credentials ? (
                  <p className="text-[#0F2A4A]/60 text-xs font-mono mb-3">{member.credentials}</p>
                ) : <div className="mb-3" />}
                <p className="text-gray-500 text-xs leading-relaxed flex-1">{member.bio}</p>
                <p className="text-gray-300 text-xs leading-relaxed mt-2">{member.bioCn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RCIC credentials */}
      <section className="py-24 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label justify-center mb-5">
            <span className="gold-line" />
            Regulated & Authorized
            <span className="gold-line" />
          </div>
          <h2 className="font-serif text-4xl text-white mb-3">Working with a Regulated Consultant</h2>
          <p className="text-[#C9A96E] text-lg font-light mb-8">与持牌顾问合作的重要性</p>

          {/* Licence badge */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 border border-[#C9A96E]/40 rounded-2xl px-8 py-5 mb-12">
            <div className="text-left">
              <p className="text-[#C9A96E] text-xs tracking-widest uppercase font-semibold mb-1">Licensed RCIC · CICC Verified</p>
              <p className="text-white font-serif text-xl font-semibold">Ting (Winnie) Zhang</p>
              <p className="text-white/60 text-sm">College ID: <span className="text-[#C9A96E] font-mono font-bold">R731688</span> &nbsp;·&nbsp; Class L3 - RCIC-IRB &nbsp;·&nbsp; <span className="text-green-400 font-semibold">Active</span></p>
            </div>
            <Link
              href="https://college-ic.ca/protecting-the-public/find-an-immigration-consultant?id=R731688"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-5 py-2.5 rounded-xl border border-[#C9A96E] text-[#C9A96E] text-xs font-semibold hover:bg-[#C9A96E] hover:text-[#0F2A4A] transition-colors"
            >
              Verify on CICC ↗
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {[
              {
                icon: '🏛️',
                title: 'CICC Regulated',
                cn: '持牌RCIC',
                desc: 'Our consultants are members of the College of Immigration and Citizenship Consultants, ensuring ethical, professional practice.',
              },
              {
                icon: '⚖️',
                title: 'IRB Representation',
                cn: '移民和难民委员会代理权',
                desc: 'As a Class L3 RCIC-IRB, Ting Zhang holds the highest licence class — authorized to represent clients before the Immigration and Refugee Board of Canada.',
              },
              {
                icon: '🛡️',
                title: 'Accountable Standards',
                cn: '负责任的执业标准',
                desc: 'Bound by strict professional ethics and continuing education requirements — your peace of mind is our obligation.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-[#C9A96E]/20 rounded-2xl p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-[#C9A96E] text-sm mb-3 font-light">{item.cn}</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center px-4">
        <div className="section-label justify-center mb-5">
          <span className="inline-block w-8 h-px bg-[#C9A96E]" />
          Get Started
          <span className="inline-block w-8 h-px bg-[#C9A96E]" />
        </div>
        <h2 className="font-serif text-4xl text-[#0F2A4A] mb-3">Ready to take the next step?</h2>
        <p className="text-[#C9A96E] text-lg font-light mb-8">准备好迈出下一步了吗？</p>
        <Link href="/contact" className="btn-primary text-base py-4 px-10">
          Contact Us Today 立即联系我们
        </Link>
      </section>
    </>
  );
}
