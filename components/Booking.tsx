'use client'

import { useState } from 'react'

const serviceOptions = ['Move-out clean', 'Airbnb turnover', 'Post-renovation', 'Standard deep clean']
const sizeOptions = ['Studio / 1BR', '2BR', '3BR', '4BR+']
const timeOptions = ['Within a week', '1 to 2 weeks', 'Flexible']

const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)

export default function Booking() {
  const [service, setService] = useState('')
  const [size, setSize] = useState('')
  const [timing, setTiming] = useState('')
  const [email, setEmail] = useState('')
  const [emailTouched, setEmailTouched] = useState(false)
  const [sending, setSending] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const emailValid = isValidEmail(email)
  const canSubmit = service && size && timing && emailValid && !sending

  const handleSubmit = async () => {
    if (!canSubmit) return
    setSending(true)
    setError(false)

    const message = `New enquiry from the FreshFlat website.\n\nService: ${service}\nFlat size: ${size}\nTiming: ${timing}\nReply to: ${email}`

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '8049aa4d-8684-4da1-812f-5ce19e2fbefc',
          subject: `FreshFlat Enquiry: ${service}, ${size}`,
          from_name: 'FreshFlat Website',
          email,
          service,
          flat_size: size,
          timing,
          message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  const fallbackMailto = `mailto:freshflathk@gmail.com?subject=${encodeURIComponent(`FreshFlat Enquiry: ${service}, ${size}`)}&body=${encodeURIComponent(`Hi FreshFlat,\n\nI'd like to book the following:\n\nService: ${service}\nFlat size: ${size}\nTiming: ${timing}\nReply to: ${email}\n\nPlease get back to me with availability and a quote.\n\nThanks.`)}`

  return (
    <section id="booking" className="bg-graphite text-cream relative overflow-hidden reveal">
      <div className="absolute bottom-0 left-0 w-72 h-72 opacity-20" style={{ background: '#3F5244', clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0 100%)' }} />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-10 md:py-14">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-10">
          <div>
            <p className="text-[11px] tracking-eyebrow uppercase text-cream/70 mb-4">
              <span className="inline-block w-6 h-px bg-sage-tint align-middle mr-3" />Get a quote
            </p>
            <h2 className="font-display text-section text-cream font-normal">
              Tell us about<br />your flat<span className="text-sage-tint">.</span>
            </h2>
            <p className="mt-4 text-[13px] text-cream/60 leading-relaxed max-w-[280px]">
              Pick your options and we will get back to you with a confirmed price.
            </p>
          </div>

          <div className="bg-cream text-graphite p-5 md:p-6">
            {submitted ? (
              <div className="text-center py-10">
                <p className="font-display text-[20px] mb-3">Thanks. We have your enquiry.</p>
                <p className="text-[13px] text-body">We will reply to you shortly. Check the email you used is one you check often.</p>
              </div>
            ) : (
              <>
                <div className="mb-5">
                  <div className="flex items-baseline gap-3 mb-2.5">
                    <span className="font-display text-sage text-[13px]">01</span>
                    <p className="font-display text-[15px]">What kind of clean do you need?</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {serviceOptions.map(opt => (
                      <button key={opt} onClick={() => setService(opt)}
                        className={`px-3 py-1.5 text-[11px] border transition-colors ${service === opt ? 'bg-graphite text-cream border-graphite' : 'border-rule text-body hover:border-stone'}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-3 mb-2.5">
                    <span className="font-display text-sage text-[13px]">02</span>
                    <p className="font-display text-[15px]">What size is the flat?</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {sizeOptions.map(opt => (
                      <button key={opt} onClick={() => setSize(opt)}
                        className={`px-3 py-1.5 text-[11px] border transition-colors ${size === opt ? 'bg-graphite text-cream border-graphite' : 'border-rule text-body hover:border-stone'}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-3 mb-2.5">
                    <span className="font-display text-sage text-[13px]">03</span>
                    <p className="font-display text-[15px]">When do you need it?</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {timeOptions.map(opt => (
                      <button key={opt} onClick={() => setTiming(opt)}
                        className={`px-3 py-1.5 text-[11px] border transition-colors ${timing === opt ? 'bg-graphite text-cream border-graphite' : 'border-rule text-body hover:border-stone'}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-baseline gap-3 mb-2.5">
                    <span className="font-display text-sage text-[13px]">04</span>
                    <p className="font-display text-[15px]">What email should we reply to?</p>
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onBlur={() => setEmailTouched(true)}
                    placeholder="you@example.com"
                    className={`w-full px-3 py-2 text-[12px] border bg-transparent outline-none transition-colors placeholder:text-stone ${emailTouched && !emailValid ? 'border-red-400 text-red-500' : 'border-rule focus:border-stone'}`}
                  />
                  {emailTouched && !emailValid && (
                    <p className="mt-1 text-[11px] text-red-400">Please enter a valid email address.</p>
                  )}
                </div>

                {error && (
                  <div className="mb-4 p-3 border border-rule text-[12px] text-body">
                    Something went wrong. Please{' '}
                    <a href={fallbackMailto} className="underline hover:text-graphite">email us directly</a>{' '}
                    instead.
                  </div>
                )}

                <div className="border-t border-rule pt-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    {canSubmit
                      ? <span className="text-[13px] text-body">Ready when you are</span>
                      : <span className="text-[11px] text-stone">Select your options above</span>
                    }
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className={`px-5 py-2.5 text-[11px] tracking-btn uppercase transition-colors ${canSubmit ? 'bg-graphite text-cream hover:bg-sage-deep' : 'bg-rule text-stone cursor-not-allowed'}`}
                  >
                    {sending ? 'Sending\u2026' : 'Send enquiry'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
