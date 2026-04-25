const rows = [
  { service: 'Move-out clean', sub: 'End-of-tenancy, landlord-grade', prices: ['1,800–2,200', '2,400–2,800', '3,000–3,600', '3,800+'] },
  { service: 'Airbnb turnover', sub: 'Same-day, between guests', prices: ['600–900', '900–1,200', '1,200–1,500', null] },
  { service: 'Post-renovation', sub: 'Three-pass, furniture-ready', prices: ['2,800–3,500', '3,800–4,500', '4,800+', null] },
  { service: 'Standard deep clean', sub: 'Top-to-bottom reset', prices: ['1,200–1,500', '1,600–2,000', '2,200–2,800', '3,000+'] },
]

const headers = ['Studio / 1BR', '2BR', '3BR', '4BR+']

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-rule px-6 md:px-10 py-10 md:py-14 max-w-6xl mx-auto reveal">
      <div className="mb-6">
        <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-4">
          <span className="ff-rule" />Pricing
        </p>
        <h2 className="font-display text-section font-normal">
          Honest rates. <span className="italic font-light text-sage-deep">Quoted before we begin.</span>
        </h2>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-[13px]">
          <thead>
            <tr className="border-t border-b border-graphite">
              <th className="text-left py-3.5 pr-4 text-[10px] tracking-[0.18em] uppercase text-stone font-medium w-[30%]">Service</th>
              {headers.map(h => (
                <th key={h} className="text-right py-3.5 px-2 text-[10px] tracking-[0.18em] uppercase text-stone font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.service} className={i < rows.length - 1 ? 'border-b border-rule' : ''}>
                <td className="py-4 pr-4 align-top">
                  <div className="font-display text-[16px] leading-tight">{row.service}</div>
                  <div className="text-[11px] text-stone mt-0.5">{row.sub}</div>
                </td>
                {row.prices.map((p, j) => (
                  <td key={j} className="text-right py-4 px-2 align-top font-display text-[14px]">
                    {p ? (
                      <><span className="text-stone text-[11px] font-body">HK$</span>{p}</>
                    ) : (
                      <span className="text-stone text-[12px] font-body">On request</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {rows.map(row => (
          <div key={row.service} className="border border-rule p-4">
            <div className="font-display text-[17px] mb-1">{row.service}</div>
            <div className="text-[11px] text-stone mb-3">{row.sub}</div>
            <div className="grid grid-cols-2 gap-2 text-[13px]">
              {headers.map((h, j) => (
                <div key={h} className="flex justify-between">
                  <span className="text-stone">{h}</span>
                  <span className="font-display">
                    {row.prices[j] ? <><span className="text-stone text-[10px] font-body">$</span>{row.prices[j]}</> : <span className="text-stone text-[11px]">TBD</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 text-[11px] text-stone leading-relaxed max-w-lg">
        Quoted ranges reflect typical jobs. Heavily soiled flats, high-rise window work, and short-notice bookings may carry a surcharge — always disclosed before you confirm.
      </p>
    </section>
  )
}
