'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Are your cleaners insured?',
    a: 'Yes. Every crew we work with carries their own public liability insurance. We check documentation before the first booking.',
  },
  {
    q: "What's included in each clean?",
    a: 'Every service has a detailed scope of work we share before you confirm. Move-out cleans cover every surface including inside cabinets, oven, hood, and behind appliances. Airbnb turnovers focus on guest-visible areas plus linen change. Post-renovation cleans are three-pass: rough debris, detail wipe, final finish.',
  },
  {
    q: 'Do I need to provide cleaning supplies?',
    a: "No. Our crews bring their own professional-grade products and equipment. If you have specific preferences (eco-friendly, fragrance-free), let us know and we can accommodate.",
  },
  {
    q: 'How does payment work?',
    a: 'We quote before we begin. Payment is due on completion via FPS, PayMe, or bank transfer. No deposits required for standard bookings.',
  },
  {
    q: 'What areas do you cover?',
    a: 'All of Hong Kong Island, Kowloon, and most of the New Territories. Remote areas or outlying islands may carry a small surcharge, always disclosed upfront.',
  },
  {
    q: 'Can I book a recurring schedule?',
    a: "Yes. Airbnb hosts and property managers often set up recurring turnovers. We can match you with the same crew each time for consistency.",
  },
  {
    q: 'Who runs FreshFlat?',
    a: 'FreshFlat is an independent dispatch operator working with vetted HK cleaning crews. We focus on coordination, communication, and accountability so the cleaners can focus on the work. We are small. When you message us, you get a real person.',
  },
  {
    q: 'What if I am not happy with the clean?',
    a: 'Tell us within 24 hours and we will send the crew back to fix it at no cost. If we cannot make it right, we do not take payment. We work with the same cleaners repeatedly, so reputation matters more to us than any single job.',
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
