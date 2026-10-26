
import { ArrowUpRight, ArrowRight } from 'lucide-react';

function Opportunities() {
  return (
    <section
      id="opportunities"
      className="relative overflow-hidden bg-navy py-20 text-white md:py-28 lg:py-32"
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/[0.08]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-teal/30"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-teal/[0.08] blur-3xl"
      />

      <div className="container relative mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-20">
          {/* Main content */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-teal" />

              <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal">
                Exploring Opportunities
              </p>
            </div>

            <h2 className="max-w-3xl font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Exploring Opportunities
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
              We remain open to opportunities across a wide range of
              industries, whether developing new businesses or contributing
              to the growth of existing ones.
            </p>

            <a
              href="#contact"
              className="mt-9 inline-flex items-center gap-3 border-b border-teal pb-3 text-sm font-semibold !text-white transition-colors duration-200 hover:!text-teal"
            >
              Work With Us
              <ArrowUpRight size={19} strokeWidth={1.8} />
            </a>
          </div>

          {/* Decorative statement */}
          <div className="relative border-l-2 border-teal/60 py-3 pl-6 sm:pl-9 lg:ml-auto lg:max-w-md">
            <span className="mb-5 block h-2 w-2 rounded-full bg-teal" />

            <p className="font-heading text-2xl font-semibold leading-relaxed text-white sm:text-3xl">
              Building businesses around real market needs.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-medium text-slate-300">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20">
                <ArrowRight size={17} className="text-teal" />
              </span>

              <span>TELORUS GROUP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opportunities;
