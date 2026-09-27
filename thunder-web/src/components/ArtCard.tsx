import { motion } from 'framer-motion';
import { ArtPiece } from '@/data/mockArt';

interface ArtCardProps {
  art: ArtPiece;
  onClick: (art: ArtPiece) => void;
}

const ArtCard = ({ art, onClick }: ArtCardProps) => {
  return (
    <motion.div
      layoutId={`art-${art.id}`}
      onClick={() => onClick(art)}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
      className="art-card group relative mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      {art.type === 'video' ? (
        <video
          src={art.image}
          autoPlay
          loop
          muted
          playsInline
          className="block w-full [transform:translateZ(0)] object-cover transition-transform duration-300 [backface-visibility:hidden] group-hover:brightness-105"
        />
      ) : (
        <img
          src={art.image}
          alt={art.title}
          className="block w-full [transform:translateZ(0)] transition-transform duration-300 [backface-visibility:hidden] group-hover:brightness-105"
          loading="lazy"
        />
      )}
    </motion.div>
  );
};

export default ArtCard;
