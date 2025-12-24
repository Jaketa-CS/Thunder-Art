import { motion } from 'framer-motion';

interface Maker {
  part: string;
  label: string;
  name: string;
  website: string;
  logo: string;
  logoBg: string;
  year: number;
  hoverAnimation: {
    scale: number;
    rotate?: number;
    y?: number;
  };
}

const MAKERS: Maker[] = [
  {
    part: 'Head',
    label: 'Head made by',
    name: 'Poe Productions',
    website: 'https://poeproductions.org/',
    logo: '/makers-logos/poeproductions.webp',
    logoBg: 'transparent',
    year: 2023,
    hoverAnimation: {
      scale: 1.1,
      rotate: 3,
    },
  },
  {
    part: 'Body',
    label: 'Body (Slim-Digi) made by',
    name: 'FurFuresh',
    website: 'https://www.furfuresh.com/',
    logo: '/makers-logos/furesh.webp',
    logoBg: 'transparent',
    year: 2025,
    hoverAnimation: {
      scale: 1.1,
      rotate: -3,
    },
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 250,
      damping: 22,
    },
  },
};

const FursuitMakers = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        marginTop: '1rem',
        marginBottom: '1.5rem',
        justifyContent: 'center',
      }}
    >
      {MAKERS.map((maker) => (
        <motion.a
          key={maker.name}
          href={maker.website}
          target="_blank"
          rel="noopener noreferrer"
          variants={cardVariants}
          style={{
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
            background: 'var(--color-bg-tertiary)',
            borderRadius: '12px',
            overflow: 'hidden',
            cursor: 'pointer',
            border: '1px solid #2a2a2a',
            width: '220px',
          }}
        >
          <div style={{ padding: '0.4rem 0.6rem' }}>
            {/* "Head made by" / "Body made by" label */}
            <div
              style={{
                fontSize: '0.6rem',
                fontWeight: 600,
                color: 'var(--color-text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.3rem',
                textAlign: 'center',
              }}
            >
              {maker.label}
            </div>

            {/* Large logo taking most of the space */}
            <div
              style={{
                width: '100%',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <motion.img
                src={maker.logo}
                alt={`${maker.name} logo`}
                whileHover={maker.hoverAnimation}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 15,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '8px',
                }}
              />
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FursuitMakers;
