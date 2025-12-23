import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TOTAL_IMAGES = 17;

interface ImageMetadata {
  credit: string;
  url: string;
}

const GalleryRotator = () => {
  const [images, setImages] = useState([0, 1]);
  const [metadata, setMetadata] = useState<Record<string, ImageMetadata>>({});

  // Fetch metadata manifest
  useEffect(() => {
    fetch('/gallery-ft/metadata.json')
      .then((res) => res.json())
      .then((data) => setMetadata(data))
      .catch((err) => console.error('Failed to load metadata', err));
  }, []);

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
        const panelToUpdate = Math.random() > 0.5 ? 0 : 1;
        const newIndices = [...prev];
        newIndices[panelToUpdate] = getNextImage(prev);
        return newIndices;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        marginBottom: '2rem',
        height: '400px',
        width: '100%',
      }}
    >
      {images.map((imgIndex, i) => {
        const filename = `fTrackImage-${imgIndex + 1}.jpg`;
        const data = metadata[filename];
        const linkUrl = data?.url || '#';

        return (
          <motion.div
            key={i}
            initial="idle"
            whileHover="hover"
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
            {/* Clickable Link */}
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                cursor: 'pointer',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={`/gallery-ft/${filename}`}
                  alt={`Gallery Shot`}
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
                    objectPosition: 'top center',
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
            </a>
          </motion.div>
        );
      })}
    </div>
  );
};

export default GalleryRotator;
