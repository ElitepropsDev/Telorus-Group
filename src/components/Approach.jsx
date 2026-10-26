
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const approachItems = [
  {
    number: '01',
    icon: Target,
    title: 'Identify the Gaps',
    description:
      'We identify the gaps. We build around the opportunities.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Develop Practical Solutions',
    description:
      'We develop businesses, products and services that address unmet needs and fill gaps in the market.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Create Meaningful Value',
    description:
      'We focus on practical solutions that create value for customers, businesses and communities.',
  },
];

function Approach() {
  return (
    <section
      id="about"
      className="bg-light py-20 sm:py-24 lg:py-28"
    >
      <div className="container mx-auto">
        {/* Section heading */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-10 bg-teal" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal sm:text-sm">
                Our Approach
              </p>
            </div>

            <h2 className="max-w-xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
              We identify the gaps. We build around the opportunities.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
              We aim to make a meaningful impact by developing businesses,
              products and services that address unmet needs and fill gaps
              in the market.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 lg:text-lg">
              Across different industries, we focus on practical solutions
              that create value for customers, businesses and communities.
            </p>
          </div>
        </div>

        {/* Approach cards */}
        <div className="mt-10 grid items-stretch gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {approachItems.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal/50 hover:shadow-lg hover:shadow-navy/5"
              >
                {/* Top accent */}
                <div className="h-1 w-full bg-slate-100 transition-colors duration-300 group-hover:bg-teal" />

                <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal transition-colors duration-300 group-hover:bg-teal group-hover:text-white">
                      <Icon size={24} strokeWidth={1.8} />
                    </div>

                    <span className="font-heading text-xs font-bold tracking-[0.18em] text-slate-400">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-7 font-heading text-xl font-bold leading-snug text-navy sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                    {item.description}
                  </p>

                  <div className="mt-7 border-t border-slate-100 pt-5">
                    <div className="h-[2px] w-10 bg-teal transition-all duration-300 group-hover:w-16" />
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

export default Approach;
