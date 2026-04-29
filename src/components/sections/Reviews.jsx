import { Star } from 'lucide-react';

const REVIEWS = [
  {
    company: 'Lufthansa Cargo',
    logoColor: '#FFB400',
    quote:
      'Penta Freight India was founded 25 years ago and has been a highly valued and reliable partner of Lufthansa Cargo since then. We know that they always stand by their commitment, which makes a meaningful difference to our business. Their continuous high focus on customer service and their strive towards individual solutions are key to staying dynamic and competitive in the market. Penta Freight is a pioneer in various ways: They were amongst the first forwarders to become our Premium Partner and so far they are the only one in India.',
    name: 'Frank Naeve',
    role: 'Vice President Asia Pacific',
  },
  {
    company: 'Watson Pharmaceuticals',
    logoColor: '#1E90FF',
    quote:
      'Penta Freight has been one of our export LSP\'s for several years and our experience with them has been consistently good. Besides having operations done in a compliant manner, an excellent service level and professional relationship was maintained throughout the course of export operations. Best wishes for all success.',
    name: 'Ryan Veigas',
    role: 'Vice President - Supply Chain & Procurement',
  },
  {
    company: 'Aurelius Industrial',
    logoColor: '#E85A14',
    quote:
      "We highly regard Penta Freight's professionalism and knowledge in the freight field. Their team takes the work load and worry off our shoulders. For about two decades we have been satisfied by the flexible, reliable and trustworthy service and excellent quality of work. One key feature that Penta Freight portrays is that they understand our needs and put their best efforts in making things possible. They have continued to innovate and change with the freight industry.",
    name: 'Makarand Sane',
    role: 'General Manager Head - Export Logistics',
  },
  {
    company: 'Helix Apparel',
    logoColor: '#475563',
    quote:
      'Three years in, Penta Freight is still the partner we measure others against. They quoted what they delivered, kept us informed at every milestone, and quietly absorbed the operational complexity that used to slow us down.',
    name: 'Amelia Hart',
    role: 'Head of Supply Chain',
  },
];

function CompanyMark({ name, color }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-[10px] font-bold"
        style={{ backgroundColor: color }}
      >
        ◆
      </span>
      <span className="text-sm font-semibold text-slate1-700">{name}</span>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-white py-20 md:py-28">
      <div className="container-page">
        {/*
          Sticky-left layout:
          - Grid items must be `items-start` so each column controls its own height.
          - The sticky wrapper is the FULL height of the right column (because
            its sibling is). Inside, we use a flex column centered vertically so
            the title/intro sits at the visual center of the left and stays
            pinned until the right column has finished scrolling.
        */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* STICKY left column — vertically centered */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] flex items-center">
              <div>
                <span className="eyebrow-pill mb-5">Reviews</span>
                <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-slate1-900">
                  Hear From Our Satisfied<br />
                  <span className="text-slate1-400">Clients Worldwide.</span>
                </h2>
                <p className="mt-6 text-slate1-500 text-base md:text-lg leading-relaxed max-w-md">
                  Explore what industry leaders and long-term partners say about our
                  commitment to excellence and innovation.
                </p>
                <div className="mt-7 flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand text-brand" />
                  ))}
                  <span className="ml-3 text-sm text-slate1-500">
                    4.9 / 5 across long-term partners
                  </span>
                </div>
              </div>
            </div>
          </aside>

          {/* Right column scrolls past the sticky left */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {REVIEWS.map((r, i) => (
                <article
                  key={r.name}
                  className={`rounded-2xl bg-white border border-slate1-100 shadow-md shadow-slate1-900/[0.04] p-6 md:p-7 ${
                    i % 2 === 1 ? 'sm:translate-y-10' : ''
                  }`}
                >
                  <CompanyMark name={r.company} color={r.logoColor} />
                  <p className="mt-5 text-[15px] leading-relaxed text-slate1-700">
                    "{r.quote}"
                  </p>
                  <div className="mt-6 pt-5 border-t border-slate1-100">
                    <p className="font-display font-semibold text-slate1-900">
                      {r.name}
                    </p>
                    <p className="text-xs text-slate1-500 mt-0.5">{r.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
