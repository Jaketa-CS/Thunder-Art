import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="hidden relative w-full h-[400px] rounded-3xl overflow-hidden mb-16 shadow-[var(--shadow-md)] bg-[var(--color-bg-secondary)]"
    >
      {/* 
        INSTRUCTION: 
        1. Download your video.
        2. Name it 'hero.mp4'.
        3. Place it in the 'thunder-web/public/' folder.
      */}
      {/* <img
        src="/recent-work-placeholder.png"
        alt="Recent Work"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] to-transparent pointer-events-none" />

      <div className="absolute bottom-8 left-8 z-10">
        <h2 className="text-3xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
          IN PROGRESS ///
        </h2>
      </div> */}
    </motion.div>
  );
};

export default HeroSection;
