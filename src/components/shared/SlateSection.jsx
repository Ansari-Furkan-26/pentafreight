// Reusable slate band: brand color + lineas pattern image + content on top.
// Used by Philosophy, Achievements, Certifications, GlobalFootprint, AuthorizedDistributor, etc.
const LINEAS = '/media/pattern.png';

export default function SlateSection({
  id,
  className = '',
  innerClassName = '',
  children,
  bg = LINEAS,
  overlayClassName = 'bg-slate1-700/00',
}) {
  return (
    <section
      id={id}
      className={`relative w-full text-white overflow-hidden bg-slate1-700 ${className}`}
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className={`relative ${innerClassName}`}>{children}</div>
    </section>
  );
}
