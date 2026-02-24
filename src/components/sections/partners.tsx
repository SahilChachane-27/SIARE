'use client';

import Image from 'next/image';

const partners = [
  { name: 'SSIPMT RAIPUR', logo: 'https://picsum.photos/seed/univ1/200/200' },
  { name: 'VIT PUNE', logo: 'https://picsum.photos/seed/univ2/200/200' },
  { name: 'AAFT UNIVERSITY RAIPUR', logo: 'https://picsum.photos/seed/univ3/200/200' },
  { name: 'ARYA GROUP OF COLLEGES', logo: 'https://picsum.photos/seed/univ4/200/200' },
  { name: 'NOIDA INTERNATIONAL UNIVERSITY', logo: 'https://picsum.photos/seed/univ5/200/200' },
];

export function Partners() {
  const displayPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-8 md:px-16 lg:px-32 mb-16">
        <div className="text-center" data-aos="fade-up">
          <p className="text-[10px] md:text-xs font-medium text-foreground/40 tracking-[0.4em] uppercase mb-4">
            Institutional Network
          </p>
          <h2 className="text-3xl md:text-4xl font-bold italic text-primary font-headline mb-4">
            Global University Partners
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto"></div>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap py-8 items-end">
          {displayPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex flex-col items-center mx-12 group cursor-default"
            >
              <div className="w-28 h-28 flex items-center justify-center bg-white border-2 border-accent/40 rounded-[2rem] shadow-[0_0_20px_rgba(251,191,36,0.15)] transition-all duration-300 group-hover:scale-105 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] relative overflow-hidden p-4">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain p-6"
                  data-ai-hint="university logo"
                />
              </div>
              <span className="mt-6 text-[10px] md:text-[11px] font-bold text-primary tracking-wider text-center uppercase whitespace-normal max-w-[120px] leading-tight opacity-80 group-hover:opacity-100 transition-opacity">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
