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
        transition={{ duration: 0.15 }}
        onClick={onClose}
        className="art-modal-overlay fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/90 p-4 md:p-8"
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-50 flex cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/60 p-2.5 text-white transition-all duration-200 hover:scale-105 hover:bg-black/90 active:scale-95 md:top-6 md:right-6"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div
          onClick={(e) => e.stopPropagation()}
          className="art-modal-content relative flex max-h-[90vh] max-w-[92vw] cursor-default items-center justify-center overflow-hidden rounded-xl shadow-2xl"
        >
          {art.type === 'video' ? (
            <video
              src={art.image}
              controls
              autoPlay
              muted
              className="max-h-[85vh] max-w-full rounded-xl outline-none"
            />
          ) : (
            <img
              src={art.image}
              alt={art.title || ''}
              className="max-h-[85vh] max-w-full rounded-xl object-contain select-none"
            />
          )}
        </div>
      </motion.div>
    </RemoveScroll>
  );
};

export default ArtModal;
