import { motion } from 'framer-motion';

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
            Hi! I'm a digital artist and animator who doodling fluffy creatures.
            I specialize in vibrant illustrations and character designs.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            My work focuses on dynamic lighting, expressive poses, and unique
            color palettes. I'm always experimenting with new artistic styles
            and techniques.
          </p>
          <p>
            Feel free to reach out for commissions or just to chat about
            art/characters!
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
            Tools
          </h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              'Clip Studio Paint',
              'Photoshop',
              'Blender',
              'Paint Tool SAI',
            ].map((tech) => (
              <span
                key={tech}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.5rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-primary)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
