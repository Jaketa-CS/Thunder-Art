import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
    <div className="mb-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      {images.map((imgIndex, i) => {
        const filename = `fTrackImage-${imgIndex + 1}.jpg`;
        const data = metadata[filename];
        const linkUrl = data?.url || '#';

        return (
          <motion.div
            key={i}
            initial="idle"
            whileHover="hover"
            className="relative h-[420px] w-full overflow-hidden rounded-xl border border-[#333] bg-[#222] sm:h-[500px]"
          >
            {/* Clickable Link */}
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full cursor-pointer"
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
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </AnimatePresence>

              {/* Glossy Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
            </a>
          </motion.div>
        );
      })}
    </div>
  );
};

export default GalleryRotator;
