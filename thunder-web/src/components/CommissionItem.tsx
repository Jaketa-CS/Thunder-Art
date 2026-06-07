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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="commission-item-gap"
      style={{
        display: 'flex',
        flexDirection: isEven ? 'row' : 'row-reverse',
        gap: '4rem',
        alignItems: 'center',
        marginBottom: '6rem',
        flexWrap: 'wrap', // Responsive wrapping
      }}
    >
      {/* IMAGE SIDE */}
      <div style={{ flex: '1 1 400px', position: 'relative' }}>
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
          style={{
            borderRadius: 'var(--radius-sm)',
            overflow: 'hidden',
            border: 'none',
            // Use vertical ratio for Full Body/Pieces, landscape for others
            aspectRatio:
              category.title === 'Full Body' || category.title.includes('Piece')
                ? '3/4'
                : '4/3',
            background: 'transparent',
            cursor: category.images.length > 1 ? 'pointer' : 'default',
          }}
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
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: 'var(--radius-sm)',
              }}
            />
          ) : (
            <motion.img
              key={currentMedia}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              src={currentMedia}
              alt={`${category.title} example`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: 'var(--radius-sm)',
              }}
            />
          )}

          {/* Label Badge */}
          {category.imageLabels && category.imageLabels[currentImageIndex] && (
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                background: 'var(--color-accent)',
                color: 'var(--color-bg-primary)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9rem',
                fontWeight: '600',
                pointerEvents: 'none',
                opacity: 0.9,
              }}
            >
              {category.imageLabels[currentImageIndex]}
            </div>
          )}

          {/* Number Counter Badge */}
          {category.images.length > 1 && (
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                background: 'rgba(0,0,0,0.6)',
                color: 'white',
                padding: '4px 8px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.8rem',
                pointerEvents: 'none',
              }}
            >
              {currentImageIndex + 1}/{category.images.length}
            </div>
          )}
        </motion.div>

        {/* Decorative element behind image */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: isEven ? '-20px' : 'auto',
            right: isEven ? 'auto' : '-20px',
            bottom: '-20px',
            width: '100%',
            height: '100%',
            border: '2px solid var(--color-accent)',
            borderRadius: 'var(--radius-sm)',
            zIndex: -1,
            opacity: 0.3,
          }}
        />
      </div>

      {/* TEXT/PRICING SIDE */}
      <div style={{ flex: '1 1 350px' }}>
        <h2
          style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            fontFamily: 'var(--font-family-header)',
            position: 'relative',
            display: 'inline-block',
          }}
        >
          {category.title}
          <div
            style={{
              height: '4px',
              width: '40%',
              background: 'var(--color-accent)',
              borderRadius: '2px',
              marginTop: '5px',
            }}
          />
        </h2>

        {/* PRICING TABLE styled cleanly */}
        <div
          style={{
            background: 'var(--color-bg-secondary)',
            padding: '2rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--color-border)',
          }}
        >
          {category.options.map((option, i) => (
            <div
              key={option.name}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom:
                  i === category.options.length - 1
                    ? 0
                    : option.isSubItem
                      ? '0.5rem'
                      : '1rem',
                borderBottom:
                  i === category.options.length - 1 ||
                  option.isSubItem ||
                  category.options[i + 1]?.isSubItem
                    ? 'none'
                    : '1px solid rgba(255,255,255,0.05)',
                paddingBottom:
                  i === category.options.length - 1
                    ? 0
                    : option.isSubItem
                      ? '0.5rem'
                      : '1rem',
                marginLeft: option.isSubItem ? '1rem' : '0',
                paddingLeft: option.isSubItem ? '1.5rem' : '0',
                borderLeft: option.isSubItem
                  ? '3px solid var(--color-bg-tertiary)'
                  : 'none',
                marginTop: option.isSubItem ? '-0.2rem' : '0',
              }}
            >
              <div>
                <strong
                  style={{
                    fontSize: option.isSubItem ? '1rem' : '1.2rem',
                    fontWeight: option.isSubItem ? '600' : 'bold',
                    display: 'block',
                    color: option.isSubItem
                      ? 'var(--color-text-secondary)'
                      : 'var(--color-text-primary)',
                  }}
                >
                  {option.name}
                </strong>
                {option.details && (
                  <span
                    style={{
                      fontSize: option.isSubItem ? '0.8rem' : '0.9rem',
                      color: 'var(--color-text-secondary)',
                      opacity: option.isSubItem ? 0.8 : 1,
                    }}
                  >
                    {option.details}
                  </span>
                )}
              </div>
              <div
                style={{
                  fontSize: option.isSubItem ? '1.1rem' : '1.4rem',
                  fontWeight: option.isSubItem ? '600' : '800',
                  color: 'var(--color-accent)',
                  opacity: option.isSubItem ? 0.9 : 1,
                }}
              >
                {option.price}
              </div>
            </div>
          ))}

          {category.extras && (
            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '2px dashed var(--color-border)',
              }}
            >
              <div
                style={{
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  color: 'var(--color-text-secondary)',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                }}
              >
                Add-ons
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                {category.extras.map((extra, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'var(--color-bg-tertiary)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      color: 'var(--color-text-primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                    }}
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
