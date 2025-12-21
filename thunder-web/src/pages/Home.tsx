import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArtGrid from '@/components/ArtGrid';
import Footer from '@/components/Footer';
import ArtModal from '@/components/ArtModal';
import HeroSection from '@/components/HeroSection';
import { MOCK_ART, ArtPiece } from '@/data/mockArt';

const Home = () => {
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '2rem' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>
          THUNDER ART
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem' }}>
          Digital Art & Animation Portfolio
        </p>
      </div>

      <HeroSection />

      <h3 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Gallery</h3>
      <ArtGrid artworks={MOCK_ART} onArtClick={setSelectedArt} />

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
