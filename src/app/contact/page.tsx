'use client';

import { useState } from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [state, setState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setState('success');
      } else {
        const data = await res.json();
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
        setState('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setState('error');
    }
  };

  return (
    <>
      <PageHero
        label="Get In Touch"
        title="Contact Us"
        titleCn="联系我们"
        subtitle="Ready to begin? Reach out for a free consultation — we respond within one business day."
        subtitleCn="准备好开始了吗？立即联系我们获取免费咨询——我们将在一个工作日内回复。"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16">

          {/* Info */}
          <div>
            <div className="section-label mb-5">
              <span className="gold-line" />
              Office Information
            </div>
            <h2 className="font-serif text-4xl text-[#0F2A4A] mb-3 leading-tight">
              We're Here<br />to Help You
            </h2>
            <p className="text-[#C9A96E] text-lg font-light mb-10">我们随时为您服务</p>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#0F2A4A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0F2A4A] font-semibold mb-1">Office Address 办公地址</p>
                  <p className="text-gray-600">200-1460 Chevrier Blvd</p>
                  <p className="text-gray-600">Winnipeg, MB R3T 1Y7</p>
                  <a
                    href="https://maps.google.com/?q=1460+Chevrier+Blvd+Winnipeg+MB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A96E] text-sm hover:underline mt-1 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#0F2A4A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0F2A4A] font-semibold mb-1">Email 邮箱</p>
                  <a href="mailto:winnie@winsunimmigration.ca" className="text-gray-600 hover:text-[#C9A96E] transition-colors">
                    winnie@winsunimmigration.ca
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-[#0F2A4A] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0F2A4A] font-semibold mb-1">Office Hours 营业时间</p>
                  <p className="text-gray-600">Monday – Friday: 9:00 AM – 6:00 PM</p>
                  <p className="text-gray-400 text-sm">周一至周五：上午9:00 – 下午6:00</p>
                  <p className="text-gray-600 mt-1">Saturday: By Appointment 周六：预约制</p>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div className="mt-12 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6">
              <h3 className="font-serif text-[#0F2A4A] text-lg font-semibold mb-4">
                What to Expect 咨询流程
              </h3>
              <div className="space-y-3">
                {[
                  { n: '1', en: 'Submit your inquiry below', cn: '提交您的咨询请求' },
                  { n: '2', en: 'Receive an automatic confirmation email', cn: '收到自动确认邮件' },
                  { n: '3', en: 'We respond within 1–2 business days', cn: '我们在1–2个工作日内回复' },
                  { n: '4', en: 'Schedule your free consultation', cn: '安排免费咨询' },
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#C9A96E] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {step.n}
                    </div>
                    <div>
                      <p className="text-[#0F2A4A] text-sm font-medium">{step.en}</p>
                      <p className="text-gray-400 text-xs">{step.cn}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-8 sm:p-10">
              <h3 className="font-serif text-2xl text-[#0F2A4A] mb-1">Book a Consultation</h3>
              <p className="text-[#C9A96E] font-light mb-7">预约咨询</p>

              {state === 'success' ? (
                <div className="text-center py-14">
                  <div className="w-16 h-16 bg-[#0F2A4A] rounded-full flex items-center justify-center mx-auto mb-5">
                    <svg className="w-8 h-8 text-[#C9A96E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-[#0F2A4A] text-2xl mb-3">Message Sent!</h4>
                  <p className="text-[#C9A96E] mb-4">消息已发送！</p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Thank you for reaching out. A confirmation email has been sent to <strong>winnie@winsunimmigration.ca</strong>. Our team will follow up within 1–2 business days.
                  </p>
                  <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                    确认邮件已发送至 winnie@winsunimmigration.ca，我们将在1–2个工作日内与您联系。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                        Full Name 姓名 <span className="text-[#C9A96E]">*</span>
                      </label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        disabled={state === 'loading'}
                        className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E]/30 transition-colors disabled:opacity-60"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">Phone 电话</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        disabled={state === 'loading'}
                        className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E]/30 transition-colors disabled:opacity-60"
                        placeholder="+1 (204) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                      Email 邮箱 <span className="text-[#C9A96E]">*</span>
                    </label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      disabled={state === 'loading'}
                      className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E]/30 transition-colors disabled:opacity-60"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">Service of Interest 服务项目</label>
                    <select
                      name="service" value={form.service} onChange={handleChange}
                      disabled={state === 'loading'}
                      className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E]/30 transition-colors disabled:opacity-60"
                    >
                      <option value="">Select a service 请选择服务...</option>
                      <option value="Business Immigration 商业移民">Business Immigration 商业移民</option>
                      <option value="Work Permits & LMIA 工作许可">Work Permits & LMIA 工作许可</option>
                      <option value="Study Permit 学习许可">Study Permit 学习许可</option>
                      <option value="Visitor Visa / TRV 访客签证">Visitor Visa / TRV 访客签证</option>
                      <option value="Start-Up Visa Program 创业签证计划">Start-Up Visa Program 创业签证计划</option>
                      <option value="Permanent Residence 永久居留权">Permanent Residence 永久居留权</option>
                      <option value="Family Sponsorship 家庭担保">Family Sponsorship 家庭担保</option>
                      <option value="Other / Not Sure 其他">Other / Not Sure 其他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0F2A4A] mb-1.5">
                      Your Message 留言 <span className="text-[#C9A96E]">*</span>
                    </label>
                    <textarea
                      name="message" required rows={5} value={form.message} onChange={handleChange}
                      disabled={state === 'loading'}
                      className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-sm bg-white focus:outline-none focus:border-[#C9A96E] focus:ring-1 focus:ring-[#C9A96E]/30 transition-colors resize-none disabled:opacity-60"
                      placeholder="Tell us about your situation and immigration goals... 请描述您的情况和移民目标..."
                    />
                  </div>

                  {state === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-600 text-sm">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={state === 'loading'}
                    className="w-full py-4 bg-[#0F2A4A] text-white font-bold rounded-lg hover:bg-[#163660] transition-colors text-sm tracking-wide disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {state === 'loading' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending... 发送中...
                      </>
                    ) : (
                      'Send Message · 发送消息'
                    )}
                  </button>

                  <p className="text-gray-400 text-xs text-center leading-relaxed">
                    By submitting, you consent to WINSUN Immigration Solutions contacting you. We respect your privacy.
                    提交即表示同意 WINSUN 联系您。我们尊重您的隐私。
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Social QR Codes */}
      <section className="py-16 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="section-label justify-center mb-4">
            <span className="gold-line" />
            扫码联系我们
            <span className="gold-line" />
          </div>
          <p className="text-gray-500 text-sm mb-8">Scan to connect with us on WeChat or Xiaohongshu</p>
          <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-[#C9A96E]/30 shadow-md bg-white p-2">
                <Image
                  src="/qr-wechat.png"
                  alt="WeChat QR Code"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg">💬</span>
                <p className="text-[#0F2A4A] font-semibold text-sm">微信 WeChat</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-36 h-36 rounded-2xl overflow-hidden border-2 border-[#C9A96E]/30 shadow-md bg-white p-2">
                <Image
                  src="/qr-xiaohongshu.png"
                  alt="Xiaohongshu QR Code"
                  width={128}
                  height={128}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg">📕</span>
                <p className="text-[#0F2A4A] font-semibold text-sm">小红书 RED</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] py-8 px-4">
        <p className="text-gray-400 text-xs text-center max-w-4xl mx-auto leading-relaxed">
          <strong className="text-gray-500">Disclaimer / 免责声明:</strong> Information on this website is for general information only and does not constitute legal advice. Immigration outcomes depend on individual circumstances and IRCC assessment. 本网站信息仅供一般参考，不构成法律建议。移民结果取决于个人情况及IRCC评估。
        </p>
      </div>
    </>
  );
}
