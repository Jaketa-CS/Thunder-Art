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
    style={{
      position: 'relative',
      background: 'transparent',
      color:
        currentFilter === value
          ? 'var(--color-bg-primary)'
          : 'var(--color-text-secondary)',
      border: 'none',
      padding: '0.4rem 1rem',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontSize: '0.9rem',
      fontWeight: '600',
      textTransform: 'uppercase',
      transition: 'all 0.2s ease',
      zIndex: 1,
    }}
  >
    {currentFilter === value && (
      <motion.div
        layoutId="activeFilter"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--color-accent)', // Electric Blue
          borderRadius: 'var(--radius-sm)',
          zIndex: -1,
        }}
        transition={{ type: 'spring', bounce: 0.1, duration: 0.3 }}
      />
    )}
    <span style={{ display: 'block' }}>{label}</span>
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
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '2rem' }}
    >
      <HeroSection />

      <div
        className="gallery-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '2rem',
          marginBottom: '1rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <h3
          style={{
            margin: 0,
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: 'clamp(1.5rem, 5vw, 2rem)',
            letterSpacing: '0.05em',
          }}
        >
          Gallery
        </h3>
        <div
          className="filter-bar"
          style={{
            display: 'flex',
            gap: '0.5rem',
            alignItems: 'center',
            overflowX: 'auto',
            paddingBottom: '0.5rem',
            scrollbarWidth: 'none',
            maxWidth: '100%',
          }}
        >
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

      <Footer />

      <AnimatePresence>
        {selectedArt && (
          <ArtModal art={selectedArt} onClose={() => setSelectedArt(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;
