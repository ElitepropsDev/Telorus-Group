
import { ArrowUpRight } from 'lucide-react';

const businessLinks = [
  { label: 'VALENKOR', href: '#valenkor' },
  { label: 'OMSIX', href: '#omsix' },
  { label: 'Excel Career Plus', href: '#excel-career-plus' },
];

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Careers', href: 'mailto:hello@telorus.com' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
];

function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container py-12 sm:py-16">
        {/* Footer columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-white/15 pb-10 sm:gap-x-10 sm:gap-y-12 lg:grid-cols-4 lg:gap-8">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#top" className="inline-flex flex-col">
              <span className="font-heading text-2xl font-extrabold tracking-[0.16em]">
                TELORUS
              </span>

              <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.42em] text-teal">
                Group
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/70">
              Building Businesses Around Opportunity.
            </p>
          </div>

          {/* Businesses */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Our Businesses
            </h3>

            <ul className="mt-4 space-y-3">
              {businessLinks.map((business) => (
                <li key={business.label}>
                  <a
                    href={business.href}
                    className="inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-teal"
                  >
                    <span>{business.label}</span>
                    <ArrowUpRight size={13} className="shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-teal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Connect
            </h3>

            <ul className="mt-4 space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-white/65 transition-colors hover:text-teal"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={13} className="shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

       
{/* Copyright */}
<div className="flex flex-col items-center justify-center gap-3 pt-6 text-center text-xs text-white/55 sm:flex-row sm:gap-6">
  <p>© 2026 Telorus Group. All rights reserved.</p>

  <a
    href="#top"
    className="w-fit transition-colors hover:text-teal"
  >
    Back to top ↑
  </a>
</div>

      </div>
    </footer>
  );
}

export default Footer;
