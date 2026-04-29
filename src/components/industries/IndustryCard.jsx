// Reusable orange industry card — used by both the scroll-triggered animation
// and any future settled placement.
export default function IndustryCard({ icon: Icon, title, body, className = '' }) {
  return (
    <article
      className={`rounded-2xl bg-gradient-to-b from-brand-400 to-brand p-6 md:p-7 text-white shadow-2xl shadow-brand-700/30 ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/35 bg-white/10">
          <Icon className="w-5 h-5" />
        </span>
        <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
          {title}
        </h3>
      </div>
      <p className="mt-4 text-sm text-white/90 leading-relaxed">{body}</p>
    </article>
  );
}
