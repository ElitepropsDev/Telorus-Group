
import { ArrowUpRight, Mail } from 'lucide-react';

function Contact() {
  return (
    <section
      id="contact"
      className="bg-light py-20 sm:py-28"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-teal">
              <span className="h-px w-8 bg-teal" />
              Get in touch
            </span>

            <h2 className="max-w-xl text-4xl font-bold leading-tight text-navy sm:text-5xl lg:text-6xl">
              Contact Telorus
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-navy/70 sm:text-lg">
              For general enquiries about Telorus Group, our businesses or
              potential opportunities, get in touch.
            </p>
          </div>

          <div className="border-t border-navy/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="text-sm font-semibold text-navy/60">
              Email
            </p>

            <a
              href="mailto:hello@telorus.com"
              className="mt-3 inline-flex items-center gap-3 text-xl font-semibold text-navy transition-colors hover:text-teal sm:text-2xl"
            >
              <Mail size={22} strokeWidth={1.8} />
              hello@telorus.com
            </a>

            <div className="mt-8">
              <a
                href="mailto:hello@telorus.com"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-navy px-6 py-4 text-sm font-semibold !text-white transition-colors duration-200 hover:bg-teal"
              >
                Contact Us
                <ArrowUpRight size={18} />
              </a>
            </div>

            <p className="mt-6 text-sm leading-6 text-navy/55">
              For enquiries about Telorus Group, its businesses and potential
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
