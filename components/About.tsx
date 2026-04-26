export default function About() {
  return (
    <section id="about" className="border-t border-rule px-6 md:px-10 py-10 md:py-14 max-w-6xl mx-auto reveal">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-10">
        <div>
          <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-4">
            <span className="ff-rule" />About
          </p>
          <h2 className="font-display text-section font-normal">
            Small on<br />
            <span className="italic font-light text-sage-deep">purpose</span>.
          </h2>
        </div>

        <div>
          <p className="text-[14px] text-body leading-relaxed max-w-lg">
            FreshFlat is an independent dispatch operator working with vetted Hong Kong cleaning crews. We started because we got tired of waiting four days for a property manager to send a quote. We focus on coordination, communication, and accountability — so the cleaners can focus on the work. We are small. We answer messages ourselves. We work with the same crews repeatedly because reputation matters more to us than any single job.
          </p>

          <hr className="border-rule my-6" />

          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-1.5">Founded</p>
              <p className="font-display text-[16px]">2026</p>
            </div>
            <div>
              <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-1.5">Based in</p>
              <p className="font-display text-[16px]">Hong Kong</p>
            </div>
            <div>
              <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-1.5">What we don&apos;t do</p>
              <p className="font-display text-[16px]">Hide who we are</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
