
import {
  ArrowUpRight,
  Factory,
  Monitor,
  GraduationCap,
} from 'lucide-react';

const businesses = [
  {
    name: 'VALENKOR LTD',
    categories: 'Engineering • Industrial Technology • Procurement',
    description:
      'Engineering and industrial solutions for businesses, institutions and technical projects.',
    icon: Factory,
    number: '01',
    link: '#valenkor',
  },
  {
    name: 'OMSIX LTD',
    categories: 'Digital • Technology • Business Services',
    description:
      'Digital products, technology solutions and business services designed around practical business needs.',
    icon: Monitor,
    number: '02',
    link: '#omsix',
  },
  {
    name: 'EXCEL CAREER PLUS LTD',
    categories: 'Education • Career • Travel',
    description:
      'Education, career development, professional training and travel-related services.',
    icon: GraduationCap,
    number: '03',
    link: '#excel-career-plus',
  },
];

function Businesses() {
  return (
    <section
      id="businesses"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="container mx-auto">
        {/* Section heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-teal" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal sm:text-sm">
                Our Businesses
              </p>
            </div>

            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              Different businesses. Shared opportunities.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Each business operates within its area of expertise, supported
            by the wider capabilities and relationships of Telorus Group.
          </p>
        </div>

        {/* Business cards */}
        <div className="mt-10 grid items-stretch gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {businesses.map((business) => {
            const Icon = business.icon;

            const exploreLabel =
              business.name === 'EXCEL CAREER PLUS LTD'
                ? 'Explore Excel Career Plus'
                : `Explore ${business.name.replace(' LTD', '')}`;

            return (
              <article
                key={business.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-lg hover:shadow-navy/5"
              >
                {/* Accent line */}
                <div className="h-1 w-full bg-slate-100 transition-colors duration-300 group-hover:bg-teal" />

                <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                  {/* Icon and number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-light text-navy transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                      <Icon size={24} strokeWidth={1.7} />
                    </div>

                    <span className="font-heading text-xs font-bold tracking-[0.18em] text-slate-400">
                      {business.number}
                    </span>
                  </div>

                  {/* Business information */}
                  <h3 className="mt-7 font-heading text-xl font-extrabold leading-snug text-navy sm:text-2xl">
                    {business.name}
                  </h3>

                  <p className="mt-3 min-h-12 text-xs font-semibold leading-6 text-teal sm:text-sm">
                    {business.categories}
                  </p>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {business.description}
                  </p>

                  {/* Explore link */}
                  <div className="mt-7 border-t border-slate-100 pt-5">
                    <a
                      href={business.link}
                      className="inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors duration-200 hover:text-teal"
                    >
                      {exploreLabel}

                      <ArrowUpRight
                        size={17}
                        strokeWidth={1.8}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Businesses;
