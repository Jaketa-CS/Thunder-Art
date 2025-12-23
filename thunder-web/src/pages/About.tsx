import { motion } from 'framer-motion';
import FursuitRotator from '@/components/FursuitRotator';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="container"
      style={{ paddingTop: '2rem', paddingBottom: '4rem', maxWidth: '800px' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>About Me</h1>
      </div>

      <div
        style={{
          background: 'var(--color-bg-secondary)',
          padding: '3rem',
          borderRadius: '12px',
          border: '1px solid #2a2a2a',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
            marginBottom: '2rem',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '154px', // Slightly larger for border
              height: '154px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            {/* Spinning Rainbow Border */}
            <div
              style={{
                position: 'absolute',
                inset: '-50%', // Make it large enough to cover rotation
                background:
                  'conic-gradient(from 0deg, #FF0055, #A020F0, #0055FF, #A020F0, #FF0055)',
                animation: 'spin 4s linear infinite',
              }}
            />

            {/* Video Container */}
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 1, // On top of gradient
                background: 'var(--color-bg-secondary)', // Fallback bg
              }}
            >
              <video
                src="/2.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>Thunder / Zevoloz</h2>
            <p style={{ color: 'var(--color-accent)', fontWeight: '600' }}>
              Digital Artist & Illustrator
            </p>
          </div>
        </div>

        <div
          style={{ lineHeight: '1.8', color: 'var(--color-text-secondary)' }}
        >
          <p style={{ marginBottom: '1.5rem' }}>
            Hello and thank you for visiting my page! I'm Thunder, you might
            also know me as Zevoloz. I'm a Fennec Bird Hybrid from Colorado, and
            I am a digital artist and animator!
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            My work focuses on vibrant illustrations, expressive character
            designs, and dynamic animations. I love experimenting with
            expressions, unique color palettes, and bringing fluffy creatures to
            life.
          </p>
          <p>
            Im inspired by friends and the furry art community. Im always
            looking to learn and grow. Feel free to reach out for commissions or
            just to chat about art, characters, or anything else! :P
          </p>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3
            style={{
              marginBottom: '1rem',
              borderBottom: '1px solid #333',
              paddingBottom: '0.5rem',
            }}
          >
            Software
          </h3>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '2rem',
            }}
          >
            {[
              'Procreate',
              'TVPaint',
              'Toon Boom',
              'Clip Studio Paint',
              'Photoshop',
              'Blender',
              'Paint Tool SAI',
            ].map((tool) => (
              <span
                key={tool}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-primary)',
                }}
              >
                {tool}
              </span>
            ))}
          </div>

          <h3
            style={{
              marginBottom: '1rem',
              borderBottom: '1px solid #333',
              paddingBottom: '0.5rem',
            }}
          >
            Hardware
          </h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {['iPad Pro 13" (2024)', 'Huion Kamvas Pro 16 (2021)'].map(
              (gear) => (
                <span
                  key={gear}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.5rem 1rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  {gear}
                </span>
              )
            )}
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3
            style={{
              marginBottom: '1rem',
              borderBottom: '1px solid #333',
              paddingBottom: '0.5rem',
            }}
          >
            Fursuiting
          </h3>
          <p
            style={{
              color: 'var(--color-text-secondary)',
              marginBottom: '1rem',
            }}
          >
            Catch me at conventions!
          </p>
          <FursuitRotator />

          {/* View More Button */}
          <a
            href="https://www.furtrack.com/index/character:thunder_(gryphon)"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              display: 'block',
              textAlign: 'center',
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: '#2e1052', // FurTrack Purple
                color: '#fff',
                border: '1px solid #4a2080',
                padding: '0.8rem 2rem',
                borderRadius: '30px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
              }}
            >
              <img
                src="/furtrack-logo.png"
                alt="FurTrack Logo"
                style={{ width: '24px', height: '24px', objectFit: 'contain' }}
              />
              View More on FurTrack
            </motion.button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
