import { ArtPiece } from '@/data/mockArt';
import ArtCard from './ArtCard';
import { motion, AnimatePresence } from 'framer-motion';

interface ArtGridProps {
  artworks: ArtPiece[];
  onArtClick: (art: ArtPiece) => void;
}

const ArtGrid = ({ artworks, onArtClick }: ArtGridProps) => {
  return (
    <div
      style={{
        columnCount: 3,
        columnGap: '1rem',
        padding: '1rem 0',
      }}
      className="masonry-grid"
    >
      <style>{`
          .masonry-grid { column-count: 1; }
          @media (min-width: 640px) { .masonry-grid { column-count: 2; } }
          @media (min-width: 1024px) { .masonry-grid { column-count: 3; } }
        `}</style>

      <AnimatePresence mode="popLayout">
        {artworks.map((art) => (
          <motion.div
            key={art.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{ marginBottom: '1rem', breakInside: 'avoid' }}
          >
            <ArtCard art={art} onClick={onArtClick} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ArtGrid;
