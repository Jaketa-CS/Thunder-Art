import { motion } from 'framer-motion';
import { ArtPiece } from '@/data/mockArt';

interface ArtCardProps {
  art: ArtPiece;
}

const ArtCard = ({ art }: ArtCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="art-card"
      style={{
        marginBottom: '1rem',
        breakInside: 'avoid',
        position: 'relative',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <img
        src={art.imageUrl}
        alt={art.title}
        style={{ width: '100%', display: 'block' }}
        loading="lazy"
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '1rem',
        }}
      >
        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>
          {art.title}
        </h3>
        <span
          style={{
            fontSize: '0.9rem',
            color: 'var(--color-accent)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {art.category}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default ArtCard;
