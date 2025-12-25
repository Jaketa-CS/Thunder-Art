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

      <AnimatePresence mode="popLayout" initial={false}>
        {artworks.map((art) => (
          <motion.div
            key={art.id}
            layout="position" // Prevents expensive size calculations during movement
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.25,
              ease: 'circOut',
            }}
            style={{
              marginBottom: '1rem',
              breakInside: 'avoid',
              // Performance hint
              willChange: 'transform, opacity',
            }}
          >
            <ArtCard art={art} onClick={onArtClick} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ArtGrid;
