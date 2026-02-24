'use client';

import Image from 'next/image';

const partners = [
  { name: 'SSIPMT RAIPUR', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9hwPg2dxvrGva6_moqR6xBuraowESQQvL_g&s' },
  { name: 'VIT PUNE', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7aLOs6sABaL_2tryB5lDE0TM798E61qvpg&s' },
  { name: 'AAFT UNIVERSITY RAIPUR', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bK1Pbv9jDF155Egga260hkdqTyZ7QQ4cGw&s' },
  { name: 'ARYA GROUP OF COLLEGES', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIW1dqaZj_X0Ae1y5VFr_4Rq2xHVqcO3T4Q&s' },
  { name: 'NOIDA INTERNATIONAL UNIVERSITY', logo: 'https://vectorseek.com/wp-content/uploads/2023/11/Noida-International-University-Logo-Vector.svg-.png' },
];

export function Partners() {
  const displayPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-16 lg:px-32 mb-12">
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

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap py-8 items-center">
          {displayPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="mx-6 md:mx-12 group cursor-default shrink-0"
            >
              <div className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center bg-white border-2 border-accent/40 rounded-[2rem] shadow-[0_0_20px_rgba(251,191,36,0.15)] transition-all duration-300 group-hover:scale-105 group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)] relative overflow-hidden p-4">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain p-4"
                  data-ai-hint="university logo"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
