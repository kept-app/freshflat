export default function About() {
  return (
    <section id="about" className="border-t border-rule px-6 md:px-10 py-10 md:py-14 max-w-6xl mx-auto reveal">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-10">
        <div>
          <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-4">
            <span className="ff-rule" />About
          </p>
          <h2 className="font-display text-section font-normal">
            Who we<br />
            <span className="italic font-light text-sage-deep">are</span>.
          </h2>
        </div>

        <div>
          <p className="text-[14px] text-body leading-relaxed max-w-lg">
            FreshFlat is a dispatch operator. We connect Hong Kong cleaning crews with customers who need them. We do not own equipment. We do not employ cleaners. We coordinate, communicate, and stand behind the work. The crews we send have been doing this for years. Our job is to make booking them as straightforward as it should have been all along.
          </p>

          <hr className="border-rule my-6" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-1.5">Founded</p>
              <p className="font-display text-[16px]">2026</p>
            </div>
            <div>
              <p className="text-eyebrow tracking-eyebrow uppercase text-stone mb-1.5">Based in</p>
              <p className="font-display text-[16px]">Hong Kong</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
