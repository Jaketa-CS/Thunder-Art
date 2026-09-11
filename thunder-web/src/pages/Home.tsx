import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArtGrid from '@/components/ArtGrid';
import Footer from '@/components/Footer';
import ArtModal from '@/components/ArtModal';
import HeroSection from '@/components/HeroSection';
import { MOCK_ART, ArtPiece } from '@/data/mockArt';

const FilterButton = ({
  label,
  value,
  currentFilter,
  setFilter,
}: {
  label: string;
  value: 'all' | 'video' | 'image';
  currentFilter: 'all' | 'video' | 'image';
  setFilter: (val: 'all' | 'video' | 'image') => void;
}) => (
  <button
    onClick={() => setFilter(value)}
    aria-label={`Filter by ${label}`}
    className={`relative bg-transparent border-none px-4 py-1.5 rounded-xs cursor-pointer text-sm font-semibold uppercase transition-all duration-200 z-1 ${
      currentFilter === value
        ? 'text-[var(--color-bg-primary)]'
        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
    }`}
  >
    {currentFilter === value && (
      <motion.div
        layoutId="activeFilter"
        className="absolute inset-0 bg-[var(--color-accent)] rounded-xs -z-1"
        transition={{ type: 'spring', bounce: 0.1, duration: 0.3 }}
      />
    )}
    <span className="block">{label}</span>
  </button>
);

const Home = () => {
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);
  const [filter, setFilter] = useState<'all' | 'video' | 'image'>('all');

  const filteredArt = MOCK_ART.filter((art) => {
    if (filter === 'all') return true;
    if (filter === 'video') return art.tags.includes('Animation');
    if (filter === 'image') return art.tags.includes('Illustration');
    return true;
  });

  return (
    <>
      <motion.div
        className="container pt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />

        <div className="gallery-header flex justify-between items-center mt-8 mb-4 flex-wrap gap-4">
          <h3 className="m-0 uppercase font-bold text-2xl md:text-3xl tracking-wider">
            Gallery
          </h3>
          <div className="filter-bar flex gap-2 items-center overflow-x-auto pb-2 scrollbar-none max-w-full">
            <FilterButton
              label="All"
              value="all"
              currentFilter={filter}
              setFilter={setFilter}
            />
            <FilterButton
              label="Animations"
              value="video"
              currentFilter={filter}
              setFilter={setFilter}
            />
            <FilterButton
              label="Illustrations"
              value="image"
              currentFilter={filter}
              setFilter={setFilter}
            />
          </div>
        </div>

      <ArtGrid artworks={filteredArt} onArtClick={setSelectedArt} />

      <AnimatePresence>
        {selectedArt && (
          <ArtModal art={selectedArt} onClose={() => setSelectedArt(null)} />
        )}
      </AnimatePresence>
    </motion.div>
    <Footer />
  </>
);
};

export default Home;
