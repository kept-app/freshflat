const services = [
  { code: 'M-O', slug: 'move-out-clean', title: 'Move-out cleaning', desc: 'End-of-tenancy clean to landlord standard. Inside cabinets, behind appliances, oven, hood, every surface.' },
  { code: 'A-T', slug: 'airbnb-turnover', title: 'Airbnb turnover', desc: 'Same-day turnovers between guests. Linen change, bathroom reset, kitchen wipe-down. Recurring schedules available.' },
  { code: 'P-R', slug: 'post-renovation', title: 'Post-renovation', desc: 'The hardest clean there is. Three-pass system: rough, detail, finish. Furniture-ready when we leave.' },
  { code: 'D-C', slug: 'standard-deep-clean', title: 'Standard deep clean', desc: 'A reset for flats lived in. Top-to-bottom across every room, focused on the surfaces everyone misses.' },
]

export default function Services() {
  return (
    <section id="services" className="bg-sage-light border-t border-rule px-6 md:px-10 py-10 md:py-14 reveal">
      <div className="max-w-6xl mx-auto">
        <div className="mb-7">
          <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-4">
            <span className="ff-rule" />Services
          </p>
          <h2 className="font-display text-section font-normal">
            Four cleans. <span className="italic font-light text-sage-deep">Each done properly.</span>
          </h2>
        </div>

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
