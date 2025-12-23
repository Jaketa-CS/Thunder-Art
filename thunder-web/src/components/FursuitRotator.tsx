import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOTAL_IMAGES = 17;

const FursuitRotator = () => {
  // Start with first two images
  const [images, setImages] = useState([0, 1]);

  // Available pool excluding current ones
  const getNextImage = (currentIndices: number[]) => {
    let next;
    do {
      next = Math.floor(Math.random() * TOTAL_IMAGES);
    } while (currentIndices.includes(next));
    return next;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prev) => {
        // Pick logical panel to update (randomly)
        const panelToUpdate = Math.random() > 0.5 ? 0 : 1;
        const newIndices = [...prev];
        newIndices[panelToUpdate] = getNextImage(prev);
        return newIndices;
      });
    }, 4000); // Rotate every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        marginBottom: '2rem',
        height: '400px', // Fixed height for professional look
        width: '100%',
      }}
    >
      {images.map((imgIndex, i) => (
        <div
          key={i}
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '12px',
            overflow: 'hidden',
            background: '#222',
            border: '1px solid #333',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIndex} // Key change triggers animation
              src={`/fursuit/fursuit-${imgIndex + 1}.jpg`}
              alt={`Fursuit Shot ${imgIndex + 1}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top center', // Focus on faces
              }}
            />
          </AnimatePresence>

          {/* Glossy Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)',
              pointerEvents: 'none',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FursuitRotator;
