export default function Placeholder({ title }) {
  return (
    <section className="min-h-[70vh] flex items-center justify-center pt-24">
      <div className="container-page text-center py-32">
        <span className="eyebrow-pill mb-5">Penta Freight</span>
        <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-slate1-900">
          {title}
        </h1>
        <p className="mt-6 text-slate1-500 max-w-xl mx-auto">
          This page is a placeholder for the {title.toLowerCase()} route. The home
          experience is the focus of this build.
        </p>
      </div>
    </section>
  );
}
