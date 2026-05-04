'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Are your technicians insured?',
    a: 'Yes. Every technician we dispatch carries their own public liability insurance. We verify documentation before the first job.',
  },
  {
    q: 'Why no inspection fee?',
    a: 'Most AC problems can be diagnosed by description and a few photos. We give you a flat-rate quote upfront. If a job genuinely needs in-person diagnosis, we tell you before anyone shows up.',
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
    a: 'Hong Kong Island, Lamma and the outlying islands, and parts of Kowloon. Outer Kowloon and the New Territories on a case-by-case basis.',
  },
  {
    q: 'Can I book recurring AC cleaning?',
    a: 'Yes. Many residents book twice-yearly cleans before and after summer. Hosts and property managers often book quarterly.',
  },
  {
    q: 'Who runs FreshFlat?',
    a: 'FreshFlat is an independent dispatch operator working with vetted Hong Kong AC technicians. We coordinate, communicate, and stand behind the work. When you message us, you get a real person.',
  },
  {
    q: 'What if the AC breaks again right after?',
    a: 'If a repair fails within seven days, we send the technician back at no cost. If we cannot fix it, we refund. We work with the same technicians repeatedly, so accountability is built in.',
  },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

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
