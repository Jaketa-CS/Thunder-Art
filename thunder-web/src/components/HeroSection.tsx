import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative mb-16 hidden h-[400px] w-full overflow-hidden rounded-3xl bg-(--color-bg-secondary) shadow-(--shadow-md)"
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

      <div className="absolute inset-0 bg-gradient-to-t from-(--color-bg-primary) to-transparent pointer-events-none" />

      <div className="absolute bottom-8 left-8 z-10">
        <h2 className="text-3xl text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
          IN PROGRESS ///
        </h2>
      </div> */}
    </motion.div>
  );
};

export default HeroSection;
