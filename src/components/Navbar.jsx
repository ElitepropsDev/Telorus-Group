
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Businesses', href: '#businesses' },
  { label: 'Opportunities', href: '#opportunities' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#F4F6F8]/95 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <a
          href="#top"
          onClick={closeMenu}
          className="group flex shrink-0 flex-col leading-none"
          aria-label="Telorus Group home"
        >
          <span className="font-heading text-xl font-extrabold tracking-[0.12em] text-navy sm:text-2xl">
            TELORUS
          </span>

          <span className="mt-1 text-[9px] font-bold tracking-[0.32em] text-teal sm:text-[10px]">
            GROUP
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-teal"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-md bg-navy px-5 py-3 text-sm font-semibold !text-white transition-colors duration-200 hover:bg-teal"
          >
            Work With Us
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-navy transition-colors hover:bg-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal lg:hidden"
          aria-label={
            menuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X size={24} strokeWidth={1.8} />
          ) : (
            <Menu size={24} strokeWidth={1.8} />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-light hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-md bg-navy px-4 py-3 text-center text-sm font-semibold !text-white transition-colors duration-200 hover:bg-teal"
            >
              Work With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
