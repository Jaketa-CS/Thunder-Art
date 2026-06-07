import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import ToSModal from '@/components/ToSModal';
import { siteConfig } from '@/data/siteConfig';

import { COMMISSION_DATA, CommissionCategory } from '@/data/commissionsData';

import { useState } from 'react';

const CommissionItem = ({
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
          onClick={handleNextImage}
          style={{
            borderRadius: '20px',
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
                borderRadius: '20px',
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
                borderRadius: '20px',
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
                color: 'white',
                padding: '6px 16px',
                borderRadius: '12px',
                fontSize: '1.05rem',
                fontWeight: '800',
                pointerEvents: 'none',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                opacity: 0.85,
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
                borderRadius: '12px',
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
            borderRadius: '20px',
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

        {/* 
        {category.description && (
          <p
            style={{
              color: 'var(--color-text-secondary)',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem',
            }}
          >
            {category.description}
          </p>
        )}
        */}

        {/* PRICING TABLE styled cleanly */}
        <div
          style={{
            background: 'var(--color-bg-secondary)',
            padding: '2rem',
            borderRadius: '16px',
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

const Commissions = () => {
  const [isToSOpen, setIsToSOpen] = useState(false);

  return (
    <>
      <ToSModal isOpen={isToSOpen} onClose={() => setIsToSOpen(false)} />
      <div
        style={{
          paddingTop: '3rem',
          paddingBottom: '6rem',
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          fontFamily: 'var(--font-family-body)',
          overflowX: 'hidden', // Prevent scrollbar from animation
        }}
      >
        {/* Clean, Professional Header */}
        <div
          className="commissions-header"
          style={{
            textAlign: 'center',
            marginBottom: '6rem',
            marginTop: '3rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              color: 'var(--color-text-primary)',
              letterSpacing: '0.02em',
            }}
          >
            COMMISSIONS
          </motion.h1>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              border: `1px solid ${
                siteConfig.commissions.status === 'OPEN' ? '#2ea043' : '#f85149'
              }`,
              borderRadius: '20px',
              color:
                siteConfig.commissions.status === 'OPEN'
                  ? '#3fb950'
                  : '#f85149',
              background: 'transparent',
              fontSize: '0.85rem',
              fontWeight: '600',
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background:
                  siteConfig.commissions.status === 'OPEN'
                    ? '#3fb950'
                    : '#f85149',
                boxShadow: `0 0 8px ${
                  siteConfig.commissions.status === 'OPEN'
                    ? '#3fb950'
                    : '#f85149'
                }`,
              }}
            />
            STATUS: {siteConfig.commissions.status}
          </motion.div>

          {/* Action Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '1.5rem',
            }}
          >
            {/* Primary Button */}
            <a
              href="https://t.me/ThunderFennec"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--color-accent)',
                color: 'var(--color-bg-primary)',
                padding: '0.7rem 1.8rem',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'background 0.2s ease, transform 0.1s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'brightness(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'brightness(1)';
              }}
            >
              Send a Message
            </a>

            {/* Secondary Button */}
            <a
              href="https://trello.com/b/w0MZ464h/thunder-commision-info"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--color-bg-tertiary)',
                color: 'var(--color-text-primary)',
                padding: '0.7rem 1.8rem',
                borderRadius: '6px',
                fontSize: '1rem',
                fontWeight: '500',
                textDecoration: 'none',
                border: '1px solid var(--color-border)',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-border)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-bg-tertiary)';
              }}
            >
              View Queue
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            onClick={() => setIsToSOpen(true)}
            style={{
              background: 'transparent',
              color: 'var(--color-text-secondary)',
              fontSize: '0.9rem',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--color-text-primary)';
              e.currentTarget.style.textDecoration = 'underline';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--color-text-secondary)';
              e.currentTarget.style.textDecoration = 'none';
            }}
          >
            Read Terms of Service
          </motion.button>
        </div>

        {/* Main Content */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {COMMISSION_DATA.map((category, index) => (
            <CommissionItem
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Commissions;
