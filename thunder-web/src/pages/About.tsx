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
          {/* Placeholder for Profile Pic */}
          <div
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              background:
                'linear-gradient(45deg, var(--color-accent), #ff6b6b)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '3rem',
              fontWeight: 'bold',
              color: 'var(--color-bg-primary)',
            }}
          >
            T
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2 style={{ marginBottom: '0.5rem' }}>Thunder / Zevoloz</h2>
            <p style={{ color: 'var(--color-accent)', fontWeight: '600' }}>
              Software Engineer & Digital Artist
            </p>
          </div>
        </div>

        <div
          style={{ lineHeight: '1.8', color: 'var(--color-text-secondary)' }}
        >
          <p style={{ marginBottom: '1.5rem' }}>
            Hi! I'm a creative developer who loves bridging the gap between code
            and art. By day, I build software; by night, I create digital
            illustrations and character designs.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            My work focuses on vibrant colors, dynamic lighting, and expressive
            characters. I'm always experimenting with new styles and
            technologies (like this website!).
          </p>
          <p>
            Feel free to reach out for commissions or just to chat about art and
            tech!
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
            Tools & Tech
          </h3>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              'Clip Studio Paint',
              'Photoshop',
              'Blender',
              'React',
              'TypeScript',
              'Golang',
              'Three.js',
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
