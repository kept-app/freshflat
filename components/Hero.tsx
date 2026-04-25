export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 md:px-10 pt-12 md:pt-16 pb-14 md:pb-20 max-w-6xl mx-auto">
      <div className="absolute top-8 right-0 w-48 md:w-64 h-48 md:h-64 bg-sage-tint opacity-60 z-0"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 70%)' }} />

      <div className="relative z-10 grid md:grid-cols-[2fr_1fr] gap-8 md:gap-10 items-end">
        <div>
          <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-5">
            <span className="ff-rule" />Hong Kong, est. 2026
          </p>
          <h1 className="font-display text-hero font-normal">
            Deep cleaning,<br />
            <span className="italic font-light text-sage-deep">considered</span> for the way<br />
            Hong Kong lives.
          </h1>
          <p className="mt-6 text-[15px] md:text-base leading-relaxed text-body max-w-lg">
            Move-out cleans, Airbnb turnovers, post-renovation deep cleans. We match you with vetted independent cleaners trusted by landlords and hosts across the city.
          </p>
          <div className="mt-7 flex flex-wrap gap-4 items-center">
            <a href="#booking" className="inline-flex items-center gap-2 bg-graphite text-cream px-5 py-3 text-[12px] tracking-btn uppercase hover:bg-sage-deep transition-colors">
              Get a quote
            </a>
            <a href="#how-it-works" className="text-[13px] text-body border-b border-rule pb-1 hover:border-sage transition-colors">
              See how it works
            </a>
          </div>
        </div>

        <div className="hidden md:block border-l border-rule pl-6">
          <div className="mb-5">
            <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-1.5">For</p>
            <p className="font-display text-[16px] leading-snug">
              Tenants moving out.<br />Hosts turning over.<br />Owners after renovation.
            </p>
          </div>
          <hr className="border-rule my-4" />
          <div className="mb-4">
            <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-1.5">Coverage</p>
            <p className="text-[12px] text-body">HK Island · Kowloon · NT</p>
          </div>
          <hr className="border-rule my-4" />
          <div>
            <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-1.5">Quote in</p>
            <p className="font-display text-[26px]">90 seconds<span className="text-sage">.</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}
