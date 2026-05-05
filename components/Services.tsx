const services = [
  { code: 'A-C', slug: 'ac-cleaning', title: 'AC cleaning', desc: 'Full split-system clean. Filters, coils, drain pan, fan blades. Restores cooling and reduces power consumption.' },
  { code: 'FIX', slug: 'ac-repair', title: 'AC repair', desc: 'Not cooling, leaking, noisy, or won\'t turn on. Flat-rate quote upfront. No inspection fees.' },
  { code: 'NEW', slug: 'ac-installation', title: 'AC installation', desc: 'New unit installs and replacements. Mounting, piping, electrical. Quoted with the unit cost separate so you know what you\'re paying for.' },
  { code: '3+', slug: 'ac-multi-unit', title: 'Multi-unit package', desc: 'Whole-flat cleans for 3 or more units. Discounted per-unit rate. Most flats finished in a single visit.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-sage-light border-t border-rule px-6 md:px-10 py-10 md:py-14 reveal">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-px bg-rule">
          {services.map((s) => (
            <div key={s.code} className="bg-cream p-5 md:p-6 flex flex-col">
              <span className="font-display text-[11px] tracking-[0.25em] text-sage uppercase mb-3">{s.code}</span>
              <h3 className="font-display text-[19px] md:text-[20px] font-normal mb-2.5">{s.title}</h3>
              <p className="text-[13px] text-body leading-relaxed flex-1">{s.desc}</p>
              <a href={`?service=${s.slug}#booking`} className="mt-4 text-[11px] tracking-btn uppercase text-sage-deep hover:text-sage transition-colors self-start border-b border-sage-deep/30 pb-0.5">
                Get a quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
