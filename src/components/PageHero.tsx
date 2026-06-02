interface PageHeroProps {
  title: string;
  titleCn: string;
  subtitle?: string;
  subtitleCn?: string;
  label?: string;
}

export default function PageHero({ title, titleCn, subtitle, subtitleCn, label }: PageHeroProps) {
  return (
    <section className="relative gradient-navy pt-40 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
        <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-[#C9A96E]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#C9A96E]/3 blur-3xl" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        {label && (
          <div className="section-label justify-center mb-6">
            <span className="gold-line" />
            {label}
            <span className="gold-line" />
          </div>
        )}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-3">
          {title}
        </h1>
        <p className="text-[#C9A96E] text-xl font-light mb-5">{titleCn}</p>
        {subtitle && (
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        )}
        {subtitleCn && (
          <p className="text-white/40 text-sm max-w-2xl mx-auto mt-2 leading-relaxed">{subtitleCn}</p>
        )}
      </div>
    </section>
  );
}
