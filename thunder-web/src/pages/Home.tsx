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
    if (filter === 'video') return art.tags.includes('Animation');
    if (filter === 'image') return art.tags.includes('Illustration');
    return true;
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
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: '800',
        textTransform: 'uppercase',
        transform: 'skewX(-12deg)',
        transition: 'color 0.2s ease',
        zIndex: 1,
      }}
    >
      {filter === value && (
        <motion.div
          layoutId="activeFilter"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--color-accent)', // Electric Blue
            borderRadius: '4px',
            zIndex: -1,
            // boxShadow removed for flat look
          }}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
        />
      )}
      <span style={{ display: 'block', transform: 'skewX(12deg)' }}>
        {label}
      </span>
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
            fontWeight: '900',
            fontSize: 'clamp(1.5rem, 5vw, 2rem)',
            transform: 'skewX(-12deg)',
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
