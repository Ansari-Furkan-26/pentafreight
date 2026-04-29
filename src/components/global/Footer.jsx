import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-white border-t border-slate1-100">
      <div className="container-page relative py-6 md:py-7">
        {/* MOBILE layout: copyright on top row, social + links on bottom row */}
        <div className="md:hidden">
          <p className="text-sm text-slate1-700">
            © {new Date().getFullYear()} Penta Freight. All Rights Reserved
          </p>
          <div className="mt-5 flex items-center justify-between gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate1-200 text-slate1-700 hover:text-white hover:bg-brand hover:border-brand transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <div className="flex items-center gap-3 text-sm text-slate1-700">
              <Link to="/privacy" className="hover:text-brand transition">
                Privacy Policy
              </Link>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate1-200" />
              <Link to="/terms" className="hover:text-brand transition">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* DESKTOP layout: copyright | social | links across one row */}
        <div className="hidden md:grid md:grid-cols-3 items-center gap-4">
          <p className="text-sm text-slate1-700">
            © {new Date().getFullYear()} Penta Freight. All Rights Reserved
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate1-200 text-slate1-700 hover:text-white hover:bg-brand hover:border-brand transition"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
          <div className="flex justify-end items-center gap-3 text-sm text-slate1-700">
            <Link to="/privacy" className="hover:text-brand transition">
              Privacy Policy
            </Link>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate1-200" />
            <Link to="/terms" className="hover:text-brand transition">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
