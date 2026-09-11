import { useState } from 'react';
import { motion } from 'framer-motion';
import { CommissionCategory } from '@/data/commissionsData';

export const CommissionItem = ({
  category,
  index,
}: {
  category: CommissionCategory;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % category.images.length);
  };

  const currentMedia = category.images[currentImageIndex];
  const isVideo = currentMedia.endsWith('.mp4');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`commission-item-gap flex items-center gap-8 md:gap-16 mb-16 md:mb-24 flex-wrap ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {/* IMAGE SIDE */}
      <div className="relative flex-1 min-w-[280px] basis-[400px]">
        <motion.div
          whileHover={{ scale: 1.02, rotate: isEven ? 1 : -1 }}
          whileTap={{ scale: 0.98 }}
          onClick={category.images.length > 1 ? handleNextImage : undefined}
          onKeyDown={(e) => {
            if (
              category.images.length > 1 &&
              (e.key === 'Enter' || e.key === ' ')
            ) {
              e.preventDefault();
              handleNextImage();
            }
          }}
          role={category.images.length > 1 ? 'button' : 'img'}
          tabIndex={category.images.length > 1 ? 0 : undefined}
          aria-label={
            category.images.length > 1
              ? `View next image for ${category.title}`
              : `${category.title} example`
          }
          className={`relative overflow-hidden rounded-xs bg-transparent border-none ${
            category.title === 'Icons' || category.title === 'Badges'
              ? 'aspect-square'
              : category.title === 'Full Body' || category.title.includes('Piece')
                ? 'aspect-[3/4]'
                : 'aspect-[4/3]'
          } ${category.images.length > 1 ? 'cursor-pointer' : 'cursor-default'}`}
        >
          {isVideo ? (
            <motion.video
              key={currentMedia}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={currentMedia}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain rounded-xs"
            />
          ) : (
            <motion.img
              key={currentMedia}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={currentMedia}
              alt={`${category.title} example`}
              className="w-full h-full object-contain rounded-xs"
            />
          )}

          {/* Label Badge */}
          {category.imageLabels && category.imageLabels[currentImageIndex] && (
            <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-xs text-sm font-semibold pointer-events-none opacity-90 bg-[var(--color-accent)] text-[var(--color-bg-primary)]">
              {category.imageLabels[currentImageIndex]}
            </div>
          )}

          {/* Number Counter Badge */}
          {category.images.length > 1 && (
            <div className="absolute bottom-2.5 right-2.5 px-2 py-1 rounded-xs text-xs font-mono pointer-events-none bg-black/60 text-white">
              {currentImageIndex + 1}/{category.images.length}
            </div>
          )}
        </motion.div>

        {/* Decorative element behind image */}
        <div
          className={`absolute top-5 -bottom-5 w-full h-full -z-10 rounded-xs border-2 border-[var(--color-accent)] opacity-30 ${
            isEven ? '-left-5 right-auto' : 'left-auto -right-5'
          }`}
        />
      </div>

      {/* TEXT/PRICING SIDE */}
      <div className="flex-1 min-w-[280px] basis-[350px]">
        <h2 className="relative inline-block text-3xl md:text-4xl font-bold mb-4 font-[var(--font-family-header)]">
          {category.title}
          <div className="h-1 w-2/5 bg-[var(--color-accent)] rounded-xs mt-1.5" />
        </h2>

        {/* PRICING TABLE styled cleanly */}
        <div className="p-6 md:p-8 rounded-xs border border-[var(--color-border)] bg-[var(--color-bg-secondary)] shadow-sm">
          {category.options.map((option, i) => (
            <div
              key={option.name}
              className={`flex justify-between items-baseline ${
                i === category.options.length - 1
                  ? 'mb-0 pb-0'
                  : option.isSubItem
                    ? 'mb-2 pb-2'
                    : 'mb-4 pb-4'
              } ${
                i === category.options.length - 1 ||
                option.isSubItem ||
                category.options[i + 1]?.isSubItem
                  ? ''
                  : 'border-b border-white/5'
              } ${
                option.isSubItem
                  ? 'ml-4 pl-6 border-l-2 border-[var(--color-bg-tertiary)] -mt-1'
                  : ''
              }`}
            >
              <div>
                <strong
                  className={`block ${
                    option.isSubItem
                      ? 'text-base font-semibold text-[var(--color-text-secondary)]'
                      : 'text-lg md:text-xl font-bold text-[var(--color-text-primary)]'
                  }`}
                >
                  {option.name}
                </strong>
                {option.details && (
                  <span
                    className={`block text-xs md:text-sm text-[var(--color-text-secondary)] ${
                      option.isSubItem ? 'opacity-80' : 'opacity-100'
                    }`}
                  >
                    {option.details}
                  </span>
                )}
              </div>
              <div
                className={`font-mono text-[var(--color-accent)] ${
                  option.isSubItem
                    ? 'text-lg font-semibold opacity-90'
                    : 'text-xl md:text-2xl font-extrabold'
                }`}
              >
                {option.price}
              </div>
            </div>
          ))}

          {category.extras && (
            <div className="mt-6 pt-4 border-t-2 border-dashed border-[var(--color-border)]">
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] mb-2">
                Add-ons
              </div>
              <div className="flex flex-wrap gap-3">
                {category.extras.map((extra, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1.5 rounded-md text-sm text-[var(--color-text-primary)] bg-[var(--color-bg-tertiary)] border border-transparent hover:border-[var(--color-accent)] transition-colors"
                  >
                    {/* If it's a string, prepend +, otherwise just show it */}
                    {typeof extra === 'string' ? `+ ${extra}` : extra}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
