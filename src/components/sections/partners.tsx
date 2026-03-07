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
  // Duplicating the list multiple times to ensure seamless looping
  const displayPartners = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

  return (
    <section className="py-10 md:py-14 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-16 lg:px-32 mb-8">
        <div className="text-center" data-aos="fade-up">
          <p className="text-[9px] font-medium text-foreground/40 tracking-[0.4em] uppercase mb-2">
            Institutional Network
          </p>
          <h2 className="text-2xl md:text-3xl font-bold italic text-primary font-headline mb-2">
            Global University Partners
          </h2>
          
          {/* Custom Animated Line & Moving Point */}
          <div className="w-[200px] h-[2px] bg-[#333] relative mx-auto mt-12 mb-8">
            <div className="w-[10px] h-[10px] bg-[#ff0000] rounded-full absolute top-1/2 animate-move-point shadow-[0_0_10px_rgba(255,0,0,0.5)]"></div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Edge Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee whitespace-nowrap py-4 items-center w-max">
          {displayPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="mx-4 md:mx-8 group cursor-default shrink-0"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white border-2 border-accent/40 rounded-[1.5rem] shadow-[0_0_15px_rgba(251,191,36,0.15)] transition-all duration-300 group-hover:scale-105 group-hover:border-accent group-hover:shadow-[0_0_25px_rgba(251,191,36,0.3)] relative overflow-hidden p-3">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain p-3"
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
