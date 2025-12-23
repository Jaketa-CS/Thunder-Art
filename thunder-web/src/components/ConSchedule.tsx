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
    years: [2025, '2026'],
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
    name: 'Megaplex',
    abbrev: 'MP',
    logo: '/con-logos/megaplex.png',
    logoStyle: 'cover',
    logoPosition: 'left center',
    years: ['2026'],
  },
  {
    name: 'FurPoc',
    abbrev: 'FP',
    logo: '/con-logos/furpocalypse.png',
    logoStyle: 'cover',
    logoScale: 1.3,
    logoBg: '#f0f0f0',
    years: [2024, '2026?'],
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
    <div style={{ marginTop: '3rem' }}>
      {/* Header */}
      <motion.h3
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        style={{
          marginBottom: '1rem',
          borderBottom: '1px solid var(--color-border)',
          paddingBottom: '0.5rem',
        }}
      >
        Convention Log Book
      </motion.h3>

      {/* Clean List with staggered animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}
      >
        {CONVENTIONS.map((con) => {
          const isCover = con.logoStyle === 'cover';

          return (
            <motion.div
              key={con.abbrev}
              variants={cardVariants}
              style={{
                display: 'flex',
                alignItems: 'stretch',
                background: 'var(--color-bg-tertiary)',
                borderRadius: '12px',
                overflow: 'hidden',
                height: '60px', // Fixed height for all cards
              }}
            >
              {/* Logo Section - 1/3 of card with gradient fade */}
              <div
                style={{
                  width: 100,
                  flexShrink: 0,
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: con.logoBg || 'transparent',
                  overflow: 'hidden',
                }}
              >
                {/* Logo Image */}
                <img
                  src={con.logo}
                  alt={`${con.name} logo`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: isCover ? 'cover' : 'contain',
                    objectPosition: con.logoPosition || 'center',
                    padding: isCover ? 0 : '0.5rem',
                    transform: con.logoScale
                      ? `scale(${con.logoScale})`
                      : undefined,
                  }}
                />

                {/* Gradient Fade Overlay - only for cover style */}
                {isCover && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      width: '50%',
                      background:
                        'linear-gradient(to right, transparent, var(--color-bg-tertiary))',
                      pointerEvents: 'none',
                    }}
                  />
                )}
              </div>

              {/* Content - right side */}
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0.8rem 1rem',
                  paddingLeft: isCover ? '0.5rem' : '1rem',
                  gap: '1rem',
                  minWidth: 0,
                }}
              >
                {/* Name Block */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      letterSpacing: '0.01em',
                      color: 'var(--color-text-primary)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {con.name}
                  </div>
                </div>

                {/* Years Grid - Fixed columns for each year */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 45px)', // 5 years, fixed width each
                    gap: '4px',
                    fontSize: '0.85rem',
                    color: 'var(--color-text-secondary)',
                    flexShrink: 0,
                  }}
                >
                  {ALL_YEARS.map((year) => {
                    // Check if this convention attended this year
                    const attended = con.years.some((y) =>
                      String(y).includes(year)
                    );
                    const isNext = year === '2026';

                    return (
                      <div
                        key={year}
                        style={{
                          textAlign: 'center',
                          fontWeight: attended ? (isNext ? 700 : 500) : 300,
                          color: attended
                            ? isNext
                              ? 'var(--color-accent)'
                              : 'var(--color-text-primary)'
                            : 'var(--color-text-secondary)',
                          opacity: attended ? 1 : 0.3,
                        }}
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
