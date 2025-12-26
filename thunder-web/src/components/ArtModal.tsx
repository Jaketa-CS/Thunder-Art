import { motion } from 'framer-motion';
import { ArtPiece } from '@/data/mockArt';
import { RemoveScroll } from 'react-remove-scroll';

interface ArtModalProps {
  art: ArtPiece;
  onClose: () => void;
}

const ArtModal = ({ art, onClose }: ArtModalProps) => {
  return (
    <RemoveScroll>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="art-modal-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.9)',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
        }}
      >
        <motion.div
          layoutId={`art-${art.id}`}
          onClick={(e) => e.stopPropagation()} // Prevent close on content click
          className="art-modal-content"
          style={{
            background: 'var(--color-bg-secondary)',
            borderRadius: '12px',
            overflow: 'hidden',
            maxWidth: '900px',
            width: '100%',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div
            style={{
              flex: 1,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#000',
            }}
          >
            {art.type === 'video' ? (
              <video
                src={art.image}
                controls
                autoPlay
                muted
                style={{
                  maxHeight: '70vh',
                  maxWidth: '100%',
                  outline: 'none',
                }}
              />
            ) : (
              <img
                src={art.image}
                alt={art.title}
                style={{
                  maxHeight: '70vh',
                  maxWidth: '100%',
                  objectFit: 'contain',
                }}
              />
            )}
          </div>

          <div className="art-modal-info" style={{ padding: '2rem' }}>
            <div
              className="art-modal-header"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <div>
                <h2
                  className="art-modal-title"
                  style={{ fontSize: '2rem', marginBottom: '0.5rem' }}
                >
                  {art.title}
                </h2>
                <span
                  style={{
                    background: 'var(--color-accent)',
                    color: 'var(--color-bg-primary)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                  }}
                >
                  {art.tags.join(', ')}
                </span>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: 'transparent',
                  border: '1px solid var(--color-text-secondary)',
                  color: 'var(--color-text-primary)',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </RemoveScroll>
  );
};

export default ArtModal;
