import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'relative',
        width: '100%',
        height: '400px', // Adjustable height
        borderRadius: '24px',
        overflow: 'hidden',
        marginBottom: '4rem',
        boxShadow: 'var(--shadow-md)',
        background: 'var(--color-bg-secondary)', // Fallback
      }}
    >
      {/* 
        INSTRUCTION: 
        1. Download your video.
        2. Name it 'hero.mp4'.
        3. Place it in the 'thunder-web/public/' folder.
      */}
      <img
        src="/recent-work-placeholder.png"
        alt="Recent Work"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Overlay Gradient (Optional: Makes text readable if you put text over it) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, var(--color-bg-primary) 0%, transparent 20%)',
          pointerEvents: 'none',
        }}
      />

      {/* Title Overlay (Optional) */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '2rem',
          zIndex: 10,
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            color: '#fff',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          IN PROGRESS ///
        </h2>
      </div>
    </motion.div>
  );
};

export default HeroSection;
