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
      className="art-card mb-4 break-inside-avoid relative rounded-lg overflow-hidden cursor-pointer"
    >
      {art.type === 'video' ? (
        <video
          src={art.image}
          autoPlay
          loop
          muted
          playsInline
          className="w-full block object-cover [transform:translateZ(0)] [backface-visibility:hidden]"
        />
      ) : (
        <img
          src={art.image}
          alt={art.title}
          className="w-full block [transform:translateZ(0)] [backface-visibility:hidden]"
          loading="lazy"
        />
      )}

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4"
      >
        <h3 className="text-lg font-medium mb-1 text-white">
          {art.title}
        </h3>
        <span className="text-sm text-[var(--color-accent)] uppercase tracking-wider">
          {art.tags.join(', ')}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ArtCard;
