
import { ArrowRight, ArrowUpRight } from 'lucide-react';

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      <div className="container mx-auto grid min-h-[650px] items-center gap-14 py-16 md:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Hero Content */}
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-teal" />

            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal">
              TELORUS GROUP
            </p>
          </div>

          <h1 className="max-w-2xl font-heading text-4xl font-extrabold leading-[1.12] tracking-tight text-navy sm:text-5xl md:text-6xl xl:text-7xl">
            Building Businesses Around Opportunity.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            We identify opportunities, develop practical solutions and build
            businesses around real market needs.
          </p>

          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            From engineering and industrial technology to digital services
            and education, our companies serve distinct markets with
            specialised capabilities.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#businesses"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-teal px-6 py-4 text-sm font-semibold !text-white transition-colors duration-200 hover:bg-navy"
            >
              Explore Our Businesses
              <ArrowRight size={18} strokeWidth={2} />
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-slate-300 bg-white px-6 py-4 text-sm font-semibold !text-navy transition-colors duration-200 hover:border-teal hover:bg-light"
            >
              Work With Us
              <ArrowUpRight size={18} strokeWidth={1.8} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-slate-500">
            <span className="h-2 w-2 rounded-full bg-teal" />
            A group of businesses built around real opportunities
          </div>
        </div>

        {/* Corporate Visual */}
        <div className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
          <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-teal/10 blur-2xl" />
          <div className="absolute -bottom-5 -left-5 h-36 w-36 rounded-full bg-slate-200/70 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl bg-navy p-7 text-white shadow-xl sm:p-10">
            {/* Decorative shapes */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -right-10 -top-14 h-44 w-44 rounded-full border border-teal/40"
            />
            <div
              aria-hidden="true"
              className="absolute right-10 top-10 h-3 w-3 rounded-full bg-teal"
            />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                Our Businesses
              </p>

              <h2 className="mt-4 max-w-sm font-heading text-2xl font-bold leading-snug sm:text-3xl">
                Distinct capabilities. Shared opportunities.
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-7 text-slate-300">
                From industrial solutions to digital services and education.
              </p>

              <div className="mt-9 space-y-3">
                <div className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-4 transition-colors hover:border-teal/50">
                  <div>
                    <p className="font-heading text-sm font-bold tracking-wide">
                      VALENKOR LTD
                    </p>
                    <p className="mt-1 text-xs text-slate-300">
                      Engineering & Industrial Technology
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-teal"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-4 transition-colors hover:border-teal/50">
                  <div>
                    <p className="font-heading text-sm font-bold tracking-wide">
                      OMSIX LTD
                    </p>
                    <p className="mt-1 text-xs text-slate-300">
                      Digital & Technology
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-teal"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.06] p-4 transition-colors hover:border-teal/50">
                  <div>
                    <p className="font-heading text-sm font-bold tracking-wide">
                      EXCEL CAREER PLUS LTD
                    </p>
                    <p className="mt-1 text-xs text-slate-300">
                      Education, Career & Travel
                    </p>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="shrink-0 text-teal"
                  />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/15">
                  <ArrowRight size={20} className="text-teal" />
                </div>

                <p className="text-sm font-medium text-slate-200">
                  TELORUS GROUP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
