import { motion } from 'framer-motion';

interface PricingOption {
  name: string;
  price: string;
  details?: string;
}

interface CommissionCategory {
  title: string;
  images: string[];
  description?: string;
  options: PricingOption[];
  extras?: string[];
}

const COMMISSION_DATA: CommissionCategory[] = [
  {
    title: 'Icons',
    images: ['/com-images/headshotwithbackground.jpg'],
    description:
      'High-quality avatars perfect for social media (2000x2000px). I focus on expression and lighting to make your character pop!',
    options: [
      {
        name: 'Sketch',
        price: '$20',
        details: 'Clean but rough lines, simple styling',
      },
      {
        name: 'Detailed',
        price: '$40',
        details: 'Fully rendered with lighting/shading',
      },
    ],
  },
  {
    title: 'Stickers',
    images: [
      '/com-images/sickers1.jpg',
      '/com-images/stickers2.jpg',
      '/com-images/stickers_headshots.png',
    ],
    description:
      "Expressive Telegram stickers! I can work from a list of emotions or suggest them based on your character's personality.",
    options: [
      { name: 'Individual', price: '$25' },
      { name: '3 Pack', price: '$70' },
      { name: '6 Pack', price: '$135' },
      { name: '9 Pack', price: '$200' },
    ],
    extras: ['+ $5-15 per complex prop'],
  },
  {
    title: 'Badges',
    images: ['/com-images/badge.jpg', '/com-images/badge2.png'],
    description:
      'Convention badges to show off your character! Includes name text and durable lamination styling if printed.',
    options: [
      { name: 'Standard Badge', price: '$50', details: 'Headshot + Name' },
    ],
    extras: ['Holographic overlay: +$10', 'Shipping: +$5'],
  },
  {
    title: 'Full Body',
    images: [
      '/com-images/1character_fullbody.jpg',
      '/com-images/2characters_fullbody.jpg',
    ],
    description:
      "Showcase your character's full design! Great for showing off outfits, anatomy, or dynamic action poses.",
    options: [
      { name: 'Sketch', price: '$45', details: 'Rough lines, simple color' },
      {
        name: 'Full Render',
        price: '$60',
        details: 'Clean lines, full shading & lighting',
      },
    ],
  },
  {
    title: 'Reference Sheets',
    images: [
      '/com-images/ref3.jpg',
      '/com-images/ref1.jpg',
      '/com-images/ref2.png',
    ],
    description:
      'The ultimate guide to your character. I focus on clarity and accuracy so other artists can draw your sona perfectly.',
    options: [
      {
        name: 'Basic Sheet',
        price: '$110',
        details: 'Front & Back view + Color Palette',
      },
      {
        name: 'Custom Sheet',
        price: 'Start $110',
        details: 'Build-your-own layout',
      },
    ],
    extras: [
      'Side pose: +$55',
      'Detailed pose: +$65',
      'Icon/Expression: +$25 ea',
    ],
  },
  {
    title: 'Full Pieces',
    images: ['/com-images/image11.jpg'],
    description:
      'A complete scene with a detailed background. Perfect for storytelling, wallpapers, or printing as a poster.',
    options: [
      {
        name: 'Full Illustration',
        price: '$180+',
        details: 'Character + Environment + Lighting',
      },
    ],
  },
];

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: 0.1 }}
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
          <motion.img
            key={currentImageIndex} // Key forces re-render for animation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={category.images[currentImageIndex]}
            alt={`${category.title} example`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain', // Ensures the whole image is seen
              borderRadius: '20px',
            }}
          />
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
                marginBottom: i === category.options.length - 1 ? 0 : '1rem',
                borderBottom:
                  i === category.options.length - 1
                    ? 'none'
                    : '1px solid rgba(255,255,255,0.05)',
                paddingBottom: i === category.options.length - 1 ? 0 : '1rem',
              }}
            >
              <div>
                <strong
                  style={{
                    fontSize: '1.2rem',
                    display: 'block',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {option.name}
                </strong>
                {option.details && (
                  <span
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {option.details}
                  </span>
                )}
              </div>
              <div
                style={{
                  fontSize: '1.4rem',
                  fontWeight: '800',
                  color: 'var(--color-accent)',
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
                {category.extras.map((extra) => (
                  <span
                    key={extra}
                    style={{
                      background: 'var(--color-bg-tertiary)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '6px',
                      fontSize: '0.9rem',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    + {extra}
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
  return (
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
      {/* Minimal Header */}
      <div
        style={{ textAlign: 'center', marginBottom: '8rem', marginTop: '2rem' }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            fontSize: '4rem',
            marginBottom: '1rem',
            fontFamily: 'var(--font-family-header)',
          }}
        >
          COMMISSIONS
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'inline-block',
            padding: '0.6rem 2rem',
            border: '1px solid #2ecc71',
            borderRadius: '50px',
            color: '#2ecc71',
            fontWeight: '800',
            fontSize: '0.9rem',
            letterSpacing: '0.1em',
            background: 'rgba(46, 204, 113, 0.05)',
          }}
        >
          STATUS: OPEN
        </motion.div>
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

      {/* Large Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          marginTop: '4rem',
          padding: '4rem',
          background: 'var(--color-bg-secondary)',
          borderRadius: '30px',
          textAlign: 'center',
          border: '1px solid var(--color-border)',
        }}
      >
        <h2
          style={{
            fontSize: '2.5rem',
            fontFamily: 'var(--font-family-header)',
            marginBottom: '1rem',
          }}
        >
          Interested?
        </h2>
        <p
          style={{
            fontSize: '1.2rem',
            color: 'var(--color-text-secondary)',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem auto',
          }}
        >
          Please have your character reference (ref sheet) ready and a clear
          idea of what you would like!
        </p>
        <a
          href="https://twitter.com/messages/compose?recipient_id=YOUR_ID"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'var(--color-accent)',
            color: 'white',
            padding: '1.2rem 3rem',
            borderRadius: '100px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          }}
        >
          Send a DM
        </a>
      </motion.div>
    </div>
  );
};

export default Commissions;
