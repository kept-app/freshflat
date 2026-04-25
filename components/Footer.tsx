export default function Footer() {
  return (
    <footer className="border-t border-rule px-6 md:px-10 py-8 md:py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-baseline gap-2.5 mb-3">
              <span className="font-display text-[22px] tracking-tight">FreshFlat</span>
              <span className="text-[9px] tracking-eyebrow uppercase text-stone">Hong Kong</span>
            </div>
            <p className="text-[12px] text-body leading-relaxed max-w-[240px]">
              Deep cleaning for Hong Kong flats. Vetted independent crews dispatched across the city.
            </p>
          </div>

          <div>
            <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-3">Contact</p>
            <a href="mailto:freshflathk@gmail.com" className="text-[12px] border-b border-sage pb-0.5 hover:text-sage transition-colors">
              freshflathk@gmail.com
            </a>
          </div>

          <div>
            <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-3">Coverage</p>
            <p className="text-[12px] text-body leading-relaxed">
              Hong Kong Island<br />Kowloon<br />New Territories
            </p>
          </div>

          <div>
            <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-3">Index</p>
            <div className="flex flex-col gap-1.5 text-[12px] text-body">
              <a href="#services" className="hover:text-graphite transition-colors">Services</a>
              <a href="#faq" className="hover:text-graphite transition-colors">FAQ</a>
              <a href="#booking" className="hover:text-graphite transition-colors">Get a quote</a>
            </div>
          </div>
        </div>

        <div className="border-t border-rule mt-7 pt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[11px] text-stone">
          <span>&copy; 2026 FreshFlat. Hong Kong.</span>
          <span className="font-display italic">
            <span className="text-sage">&middot;</span> Booked in minutes. Done properly.
          </span>
        </div>
      </div>
    </footer>
  )
}
