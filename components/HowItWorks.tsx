const steps = [
  {
    num: '01',
    title: 'Tell us what\'s wrong',
    desc: 'Service type, number of units, location, and when. Takes about two minutes.',
  },
  {
    num: '02',
    title: 'Get a flat quote',
    desc: 'Transparent pricing upfront. No inspection fees, no surprises. Reply within the hour during service hours.',
  },
  {
    num: '03',
    title: 'A technician arrives',
    desc: 'Often same-day.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-rule px-6 md:px-10 py-10 md:py-14 max-w-6xl mx-auto reveal">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-10">
        <div>
          <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-4">
            <span className="ff-rule" />How it works
          </p>
          <h2 className="font-display text-section font-normal">
            Three steps.<br />
            <span className="italic font-light text-sage-deep">That&apos;s it.</span>
          </h2>
        </div>

        <div className="border-t border-b border-rule">
          {steps.map((step, i) => (
            <div key={step.num} className={`grid grid-cols-[50px_1fr] md:grid-cols-[60px_1fr] gap-3 py-5 md:py-6 ${i < steps.length - 1 ? 'border-b border-rule' : ''}`}>
              <span className="font-display text-sage text-[26px] md:text-[30px]">{step.num}</span>
              <div>
                <h3 className="font-display text-[17px] md:text-[18px] font-normal leading-snug">{step.title}</h3>
                <p className="mt-1.5 text-[13px] text-body leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
