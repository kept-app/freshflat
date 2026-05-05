'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Are your technicians insured?',
    a: 'Yes. Every technician we dispatch carries their own public liability insurance. We verify documentation before the first job.',
  },
  {
    q: 'Why no inspection fee?',
    a: 'Most AC problems can be diagnosed by description and a few photos — enough for a flat-rate quote upfront. If a job genuinely needs in-person diagnosis, we tell you first. The diagnostic visit is HK$200, fully deducted from the repair if you proceed.',
  },
  {
    q: 'Do you work on Sundays?',
    a: 'Yes. Same-day service runs seven days a week, 8am to 9pm.',
  },
  {
    q: 'How does payment work?',
    a: 'Quote upfront, payment on completion. FPS, PayMe, or bank transfer. No deposits for standard bookings.',
  },
  {
    q: 'What areas do you cover?',
    a: 'Hong Kong Island and Lamma. Other areas case-by-case — message us with your location and we\'ll tell you honestly whether we can serve you.',
  },
  {
    q: 'Can I book recurring AC cleaning?',
    a: 'Yes. Many customers book before each summer to keep their units running well.',
  },
  {
    q: 'What if the AC breaks again right after?',
    a: 'If a repair fails within seven days, we send the technician back at no cost. If we cannot fix it, we refund. We work with the same technicians repeatedly, so accountability is built in.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="border-t border-rule px-6 md:px-10 py-10 md:py-14 max-w-6xl mx-auto reveal">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-10">
        <div>
          <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-4">
            <span className="ff-rule" />Common questions
          </p>
          <h2 className="font-display text-[clamp(26px,3.5vw,34px)] leading-tight tracking-tight font-normal">
            The<br />
            <span className="italic font-light text-sage-deep">short answers</span>.
          </h2>
        </div>

        <div className="border-t border-rule">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-rule">
              <button
                className="w-full flex justify-between items-baseline py-4 md:py-5 text-left"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <span className="font-display text-[15px] md:text-[16px] font-normal pr-4">{faq.q}</span>
                <span className={`font-display text-sage text-[22px] transition-transform ${openIdx === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`faq-answer ${openIdx === i ? 'open' : ''}`}>
                <p className="text-[13px] text-body leading-relaxed pb-4 max-w-md">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
