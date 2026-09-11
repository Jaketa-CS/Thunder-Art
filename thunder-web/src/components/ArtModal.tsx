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
        className="art-modal-overlay fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8"
      >
        <motion.div
          layoutId={`art-${art.id}`}
          onClick={(e) => e.stopPropagation()}
          className="art-modal-content bg-[var(--color-bg-secondary)] rounded-xl overflow-hidden max-w-[900px] w-full max-h-[90vh] flex flex-col shadow-2xl"
        >
          <div className="flex-1 overflow-hidden flex items-center justify-center bg-black">
            {art.type === 'video' ? (
              <video
                src={art.image}
                controls
                autoPlay
                muted
                className="max-h-[70vh] max-w-full outline-none"
              />
            ) : (
              <img
                src={art.image}
                alt={art.title}
                className="max-h-[70vh] max-w-full object-contain"
              />
            )}
          </div>

          <div className="art-modal-info p-6 md:p-8">
            <div className="art-modal-header flex justify-between items-start">
              <div>
                <h2 className="art-modal-title text-2xl md:text-3xl font-bold mb-2">
                  {art.title}
                </h2>
                <span className="inline-block bg-[var(--color-accent)] text-[var(--color-bg-primary)] px-3 py-1 rounded-full text-xs font-bold">
                  {art.tags.join(', ')}
                </span>
              </div>
              <button
                onClick={onClose}
                className="bg-transparent border border-[var(--color-text-secondary)] text-[var(--color-text-primary)] px-4 py-2 rounded-lg cursor-pointer hover:border-[var(--color-accent)] transition-colors"
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
