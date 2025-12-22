import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArtGrid from '@/components/ArtGrid';
import Footer from '@/components/Footer';
import ArtModal from '@/components/ArtModal';
import HeroSection from '@/components/HeroSection';
import { MOCK_ART, ArtPiece } from '@/data/mockArt';

const Home = () => {
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);
  const [filter, setFilter] = useState<'all' | 'video' | 'image'>('all');

  const filteredArt = MOCK_ART.filter((art) => {
    if (filter === 'all') return true;
    return art.type === filter;
  });

  const FilterButton = ({
    label,
    value,
  }: {
    label: string;
    value: 'all' | 'video' | 'image';
  }) => (
    <button
      onClick={() => setFilter(value)}
      style={{
        position: 'relative',
        background: 'transparent',
        color:
          filter === value
            ? 'var(--color-bg-primary)'
            : 'var(--color-text-secondary)',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '24px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: '600',
        transition: 'color 0.3s ease',
        zIndex: 1,
      }}
    >
      {filter === value && (
        <motion.div
          layoutId="activeFilter"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--color-accent)',
            borderRadius: '24px',
            zIndex: -1,
          }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
      {label}
    </button>
  );

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
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '2rem',
          marginBottom: '1rem',
        }}
      >
        <h3 style={{ margin: 0 }}>Gallery</h3>
        <div style={{ display: 'flex', gap: '0.25rem' }}>
          <FilterButton label="All" value="all" />
          <FilterButton label="Animations" value="video" />
          <FilterButton label="Illustrations" value="image" />
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
