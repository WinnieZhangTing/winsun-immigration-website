import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

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
                { n: '500+', en: 'Cases Approved', cn: '成功案例' },
                { n: '10+', en: 'Years Experience', cn: '从业年限' },
                { n: '95%', en: 'Success Rate', cn: '成功率' },
                { n: '2', en: 'Languages', cn: '服务语言' },
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

      {/* RCIC credentials */}
      <section className="py-24 gradient-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-label justify-center mb-5">
            <span className="gold-line" />
            Regulated & Authorized
            <span className="gold-line" />
          </div>
          <h2 className="font-serif text-4xl text-white mb-3">Working with a Regulated Consultant</h2>
          <p className="text-[#C9A96E] text-lg font-light mb-12">与持牌顾问合作的重要性</p>
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
                title: 'Legal Representation',
                cn: '法律代理权',
                desc: 'Only authorized representatives can legally represent you before IRCC. We protect your rights throughout the entire process.',
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
