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
      viewport={{ once: true, amount: 0.1 }}
      className="mt-4 mb-6 flex flex-wrap justify-center gap-4"
    >
      {MAKERS.map((maker) => (
        <motion.a
          key={maker.name}
          href={maker.website}
          target="_blank"
          rel="noopener noreferrer"
          variants={cardVariants}
          className="flex w-[220px] cursor-pointer flex-col overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] no-underline transition-colors hover:border-[var(--color-accent)]"
        >
          <div className="p-2">
            {/* "Head made by" / "Body made by" label */}
            <div className="mb-1 text-center text-[10px] font-semibold tracking-wider text-[var(--color-text-secondary)] uppercase">
              {maker.label}
            </div>

            {/* Large logo taking most of the space */}
            <div className="flex h-[100px] w-full items-center justify-center">
              <motion.img
                src={maker.logo}
                alt={`${maker.name} logo`}
                whileHover={maker.hoverAnimation}
                transition={{
                  type: 'spring',
                  stiffness: 300,

                  damping: 15,
                }}
                className="h-full w-full object-contain p-2"
              />
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default FursuitMakers;
