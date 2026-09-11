import { motion } from 'framer-motion';

interface Convention {
  name: string;
  abbrev: string;
  logo: string;
  logoStyle?: 'cover' | 'contain';
  logoScale?: number;
  logoBg?: string;
  logoPosition?: string;
  logoWidth?: number; // custom width in px
  years: (number | string)[];
}

const CONVENTIONS: Convention[] = [
  {
    name: 'Anthrocon',
    abbrev: 'AC',
    logo: '/con-logos/Anthrocon.png',
    logoStyle: 'cover',
    logoScale: 1.8,
    years: [2022, 2024, 2025, '2026'],
  },
  {
    name: 'Anthro New England',
    abbrev: 'ANE',
    logo: '/con-logos/ANE.webp',
    logoStyle: 'cover',
    logoPosition: 'left center',
    logoBg: '#1a1a2e',
    years: [2023, 2025, '2026'],
  },
  {
    name: 'DenFur',
    abbrev: 'DF',
    logo: '/con-logos/denfur.png',
    logoStyle: 'cover',
    logoScale: 1.3,
    logoBg: '#f0f0f0',
    years: [2023, 2024, 2025],
  },
  {
    name: 'Furry Weekend Atlanta',
    abbrev: 'FWA',
    logo: '/con-logos/fwa.png',
    logoStyle: 'cover',
    years: [2025],
  },
  {
    name: 'Midwest FurFest',
    abbrev: 'MFF',
    logo: '/con-logos/MidwestFurFestLogo.png',
    logoStyle: 'cover',
    logoBg: '#f0f0f0',
    years: [2025],
  },

  {
    name: 'FurPoc',
    abbrev: 'FP',
    logo: '/con-logos/furpocalypse.png',
    logoStyle: 'cover',
    logoScale: 1.3,
    logoBg: '#f0f0f0',
    years: [2024],
  },
];

// Get all unique years for the timeline
const ALL_YEARS = ['2022', '2023', '2024', '2025', '2026'];

// Container animation - stagger children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Individual card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 300,
      damping: 24,
    },
  },
};

const ConSchedule = () => {
  return (
    <div className="mt-12">
      {/* Header */}
      <motion.h3
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-xl font-bold mb-4 border-b border-[var(--color-border)] pb-2"
      >
        Convention Log Book (where I've been & where I'm heading!)
      </motion.h3>

      {/* Clean List with staggered animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="flex flex-col gap-3"
      >
        {CONVENTIONS.map((con) => {
          const isCover = con.logoStyle === 'cover';

          return (
            <motion.div
              key={con.abbrev}
              variants={cardVariants}
              className="con-card flex items-stretch bg-[var(--color-bg-tertiary)] rounded-xl overflow-hidden min-h-[60px] h-auto sm:h-[60px]"
            >
              {/* Logo Section - 1/3 of card with gradient fade */}
              <div
                className="con-logo-section w-[70px] sm:w-[100px] shrink-0 relative flex items-center justify-center overflow-hidden"
                style={{
                  background: con.logoBg || 'transparent',
                }}
              >
                {/* Logo Image */}
                <img
                  src={con.logo}
                  alt={`${con.name} logo`}
                  className={`w-full h-full ${isCover ? 'object-cover p-0' : 'object-contain p-2'}`}
                  style={{
                    objectPosition: con.logoPosition || 'center',
                    transform: con.logoScale
                      ? `scale(${con.logoScale})`
                      : undefined,
                  }}
                />

                {/* Gradient Fade Overlay - only for cover style */}
                {isCover && (
                  <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-[var(--color-bg-tertiary)] pointer-events-none" />
                )}
              </div>

              {/* Content - right side */}
              <div
                className={`flex-1 flex items-center py-3 px-4 gap-4 min-w-0 ${isCover ? 'pl-2' : 'pl-4'}`}
              >
                {/* Name Block */}
                <div className="flex-1 min-w-0">
                  <div className="text-base sm:text-lg font-extrabold tracking-wide text-[var(--color-text-primary)] truncate">
                    {con.name}
                  </div>
                  {/* Mobile-only years list */}
                  <div className="con-mobile-years block min-[401px]:hidden text-xs text-[var(--color-accent)] font-semibold mt-0.5">
                    {con.years
                      .filter((y) => !String(y).includes('?'))
                      .join(', ')}
                  </div>
                </div>

                {/* Years Grid - Fixed columns for each year */}
                <div className="con-years-grid hidden min-[401px]:grid grid-cols-5 gap-1 text-xs sm:text-sm text-[var(--color-text-secondary)] shrink-0 w-[175px] sm:w-[225px]">
                  {ALL_YEARS.map((year) => {
                    // Check if this convention attended this year
                    const attended = con.years.some((y) =>
                      String(y).includes(year)
                    );
                    const isNext = year === '2026';

                    return (
                      <div
                        key={year}
                        className={`text-center ${
                          attended
                            ? isNext
                              ? 'font-bold text-[var(--color-accent)] opacity-100'
                              : 'font-medium text-[var(--color-text-primary)] opacity-100'
                            : 'font-light text-[var(--color-text-secondary)] opacity-30'
                        }`}
                      >
                        {attended ? year : '—'}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ConSchedule;
