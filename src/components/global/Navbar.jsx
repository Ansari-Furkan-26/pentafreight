import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Industries', to: '/industries' },
  { label: 'PentaKuhl', to: '/pentakuhl' },
  { label: 'News', to: '/news' },
  { label: 'Careers', to: '/careers' },
  { label: 'Contact', to: '/contact' },
];

function Brand() {
  return (
    <Link to="/" className="flex items-center gap-2 shrink-0">
      <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-brand text-white font-display font-extrabold text-lg leading-none">
        P
      </span>
      <span className="font-display font-extrabold text-xl tracking-tight">
        <span className="text-brand">Penta</span>
        <span className="text-slate1-700"> Freight</span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);
  const lastY = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Auto-hide: hide when scrolling DOWN past 120px, reveal when scrolling UP
      if (y > 120 && y > lastY.current) {
        setHidden(true);
      } else if (y < lastY.current) {
        setHidden(false);
      }
      lastY.current = y;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenSub(null);
  }, [location.pathname]);

  return (
    <motion.header
      animate={{ y: hidden && !open ? '-110%' : '0%' }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'bg-white/95 backdrop-blur-md border-b border-slate1-100 shadow-sm'
          : 'bg-white/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Brand />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenSub(link.label)}
              onMouseLeave={() => link.children && setOpenSub(null)}
            >
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive ? 'text-brand' : 'text-slate1-700 hover:text-brand'
                  }`
                }
              >
                {link.label}
                {link.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
              </NavLink>
              {link.children && (
                <AnimatePresence>
                  {openSub === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full pt-2 w-64"
                    >
                      <div className="rounded-xl bg-white border border-slate1-100 shadow-xl overflow-hidden">
                        {link.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="block px-4 py-2.5 text-sm text-slate1-700 hover:text-brand hover:bg-cream-50 transition"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand hover:bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition shadow-sm shadow-brand/30"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-slate1-800"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-slate1-100 bg-white"
          >
            <div className="container-page py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label} className="border-b border-slate1-100/70 last:border-0">
                  <button
                    onClick={() =>
                      link.children
                        ? setOpenSub(openSub === link.label ? null : link.label)
                        : null
                    }
                    className="w-full flex items-center justify-between py-3"
                  >
                    <Link to={link.to} className="text-base font-medium text-slate1-800">
                      {link.label}
                    </Link>
                    {link.children && (
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          openSub === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  {link.children && openSub === link.label && (
                    <div className="pl-3 pb-3 space-y-1">
                      {link.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className="block py-2 text-sm text-slate1-600 hover:text-brand"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand text-white text-sm font-semibold px-5 py-2.5 rounded-full"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
