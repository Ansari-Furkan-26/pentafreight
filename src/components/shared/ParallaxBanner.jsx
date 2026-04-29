// Fixed-background banner: image stays, text scrolls on top.
export default function ParallaxBanner({
  image,
  title,
  subtitle,
  ctaLabel,
  ctaHref = '/contact',
  height = 'h-[55vh] md:h-[60vh]',
}) {
  return (
    <section
      className={`relative w-full ${height} overflow-hidden`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Mobile fallback (no fixed-attachment on iOS) */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-slate1-900/55" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h3 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight text-white">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-4 text-white/85 text-base md:text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          {ctaLabel && (
            <a
              href={ctaHref}
              className="mt-7 inline-flex items-center gap-2 bg-brand hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded-full transition shadow-lg shadow-black/25"
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
