import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CommissionCategory } from '@/data/commissionsData';

const getAspectRatioClass = (title: string): string => {
  if (title === 'Icons' || title === 'Badges') {
    return 'aspect-square';
  }
  if (title === 'Full Body' || title.includes('Piece')) {
    return 'aspect-3/4';
  }
  return 'aspect-4/3';
};

const getOptionMargin = (isLast: boolean, isSubItem?: boolean): string => {
  if (isLast) {
    return 'mb-0 pb-0';
  }
  if (isSubItem) {
    return 'mb-2 pb-2';
  }
  return 'mb-4 pb-4';
};

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
  const aspectRatioClass = getAspectRatioClass(category.title);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`commission-item-gap mb-16 flex flex-wrap items-center gap-8 md:mb-24 md:gap-16 ${
        isEven ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {/* IMAGE SIDE */}
      <div className="relative min-w-70 flex-1 basis-100">
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
          className={`relative overflow-hidden rounded-xs border-none bg-transparent ${aspectRatioClass} ${
            category.images.length > 1 ? 'cursor-pointer' : 'cursor-default'
          }`}
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
              className="h-full w-full rounded-xs object-contain"
            />
          ) : (
            <motion.img
              key={currentMedia}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={currentMedia}
              alt={`${category.title} example`}
              className="h-full w-full rounded-xs object-contain"
            />
          )}

          {/* Label Badge */}
          {category.imageLabels?.[currentImageIndex] && (
            <div className="pointer-events-none absolute bottom-2.5 left-2.5 rounded-xs bg-(--color-accent) px-3 py-1 text-sm font-semibold text-(--color-bg-primary) opacity-90">
              {category.imageLabels[currentImageIndex]}
            </div>
          )}

          {/* Number Counter Badge */}
          {category.images.length > 1 && (
            <div className="pointer-events-none absolute right-2.5 bottom-2.5 rounded-xs bg-black/60 px-2 py-1 font-mono text-xs text-white">
              {currentImageIndex + 1}/{category.images.length}
            </div>
          )}
        </motion.div>

        {/* Decorative element behind image */}
        <div
          className={`absolute top-5 -bottom-5 -z-10 h-full w-full rounded-xs border-2 border-(--color-accent) opacity-30 ${
            isEven ? 'right-auto -left-5' : '-right-5 left-auto'
          }`}
        />
      </div>

      {/* TEXT/PRICING SIDE */}
      <div className="min-w-70 flex-1 basis-87.5">
        <h2 className="relative mb-4 inline-block text-3xl font-bold md:text-4xl">
          {category.title}
          <div className="mt-1.5 h-1 w-2/5 rounded-xs bg-(--color-accent)" />
        </h2>

        {/* PRICING TABLE styled cleanly */}
        <div className="rounded-xs border border-(--color-border) bg-(--color-bg-secondary) p-6 shadow-sm md:p-8">
          {category.options.map((option, i) => {
            const isLast = i === category.options.length - 1;
            const marginClass = getOptionMargin(isLast, option.isSubItem);
            const borderClass =
              isLast || option.isSubItem || category.options[i + 1]?.isSubItem
                ? ''
                : 'border-b border-white/5';
            const subItemBorder = option.isSubItem
              ? '-mt-1 ml-4 border-l-2 border-(--color-bg-tertiary) pl-6'
              : '';

            return (
              <div
                key={option.name}
                className={`flex items-baseline justify-between ${marginClass} ${borderClass} ${subItemBorder}`}
              >
                <div>
                  <strong
                    className={`block ${
                      option.isSubItem
                        ? 'text-base font-semibold text-(--color-text-secondary)'
                        : 'text-lg font-bold text-(--color-text-primary) md:text-xl'
                    }`}
                  >
                    {option.name}
                  </strong>
                  {option.details && (
                    <span
                      className={`block text-xs text-(--color-text-secondary) md:text-sm ${
                        option.isSubItem ? 'opacity-80' : 'opacity-100'
                      }`}
                    >
                      {option.details}
                    </span>
                  )}
                </div>
                <div
                  className={`font-mono text-(--color-accent) ${
                    option.isSubItem
                      ? 'text-lg font-semibold opacity-90'
                      : 'text-xl font-extrabold md:text-2xl'
                  }`}
                >
                  {option.price}
                </div>
              </div>
            );
          })}

          {category.extras && (
            <div className="mt-6 border-t-2 border-dashed border-(--color-border) pt-4">
              <div className="mb-2 text-xs font-bold tracking-wider uppercase text-(--color-text-secondary)">
                Add-ons
              </div>
              <div className="flex flex-wrap gap-3">
                {category.extras.map((extra) => {
                  const extraKey =
                    typeof extra === 'string'
                      ? extra
                      : React.isValidElement(extra) && extra.key != null
                        ? String(extra.key)
                        : category.title;

                  return (
                    <span
                      key={extraKey}
                      className="inline-flex items-center rounded-md border border-transparent bg-(--color-bg-tertiary) px-3 py-1.5 text-sm text-(--color-text-primary) transition-colors hover:border-(--color-accent)"
                    >
                      {typeof extra === 'string' ? `+ ${extra}` : extra}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};
