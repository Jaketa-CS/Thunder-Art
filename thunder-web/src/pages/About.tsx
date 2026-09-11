import { motion } from 'framer-motion';
import GalleryRotator from '@/components/GalleryRotator';
import ConSchedule from '@/components/ConSchedule';
import FursuitMakers from '@/components/FursuitMakers';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        className="container pt-8 pb-16 max-w-[800px]"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        </div>

        <div className="content-panel bg-[var(--color-bg-secondary)] p-6 md:p-12 rounded-xl border border-[#2a2a2a]">
          <div className="flex flex-col items-center gap-8 mb-8">
            <div className="relative w-56 h-56 rounded-full flex items-center justify-center overflow-hidden">
              {/* Spinning Rainbow Border */}
              <div className="absolute -inset-1/2 bg-[conic-gradient(from_0deg,#FF0055,#A020F0,#0055FF,#A020F0,#FF0055)] animate-[spin_4s_linear_infinite]" />

              {/* Video Container */}
              <div className="w-[220px] h-[220px] rounded-full overflow-hidden relative z-1 bg-[var(--color-bg-secondary)]">
                <video
                  src="/2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Thunder / Zevoloz</h2>
              <p className="text-[var(--color-accent)] font-semibold">
                Digital Artist & Illustrator
              </p>
            </div>
          </div>

          <div className="leading-relaxed text-[var(--color-text-secondary)]">
            <p className="mb-6 text-lg">
              Hi, I'm Thunder (also known as Zevoloz)! I'm a Fennec/Bird hybrid
              based out of Colorado, and I specialize in digital art and
              animation.
            </p>
            <p>
              Whether you're looking for commission work or just want to chat
              about art and stuff, feel free to reach out! :P
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4 border-b border-[var(--color-border)] pb-2">
              Software
            </h3>
            <div className="flex gap-4 flex-wrap mb-8">
              {[
                'Procreate',
                'TVPaint',
                'Toon Squid',
                'Clip Studio Paint',
                'Photoshop',
                'Blender',
                'Paint Tool SAI',
              ].map((tool) => (
                <span
                  key={tool}
                  className="bg-[var(--color-bg-tertiary)] px-4 py-2 rounded-full text-sm text-[var(--color-text-primary)]"
                >
                  {tool}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-4 border-b border-[var(--color-border)] pb-2">
              Hardware
            </h3>
            <div className="flex gap-4 flex-wrap">
              {['iPad Pro 13" (2024)', 'Huion Kamvas Pro 16 (2021)'].map(
                (gear) => (
                  <span
                    key={gear}
                    className="bg-[var(--color-bg-tertiary)] px-4 py-2 rounded-full text-sm text-[var(--color-text-primary)]"
                  >
                    {gear}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-bold mb-4 border-b border-[var(--color-border)] pb-2">
              Fursuiting
            </h3>

            <FursuitMakers />

            <GalleryRotator />

            {/* View More Button */}
            <a
              href="https://www.furtrack.com/index/character:thunder_(gryphon)"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline block text-center my-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#2e1052] text-white border border-[#4a2080] px-8 py-3 rounded-full text-base font-semibold cursor-pointer inline-flex items-center gap-3 transition-colors hover:brightness-110"
              >
                <img
                  src="/furtrack-logo.png"
                  alt="FurTrack Logo"
                  className="w-6 h-6 object-contain"
                />
                View More on FurTrack
              </motion.button>
            </a>

            <ConSchedule />
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;
