import { motion } from 'framer-motion';
import GalleryRotator from '@/components/GalleryRotator';
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
        className="container max-w-[800px] pt-8 pb-16"
      >
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">About Me</h1>
        </div>

        <div className="content-panel rounded-xl border border-[#2a2a2a] bg-[var(--color-bg-secondary)] p-6 md:p-12">
          <div className="mb-8 flex flex-col items-center gap-8">
            <div className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-full">
              {/* Spinning Rainbow Border */}
              <div className="absolute -inset-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,#FF0055,#A020F0,#0055FF,#A020F0,#FF0055)]" />

              {/* Video Container */}
              <div className="relative z-1 h-[220px] w-[220px] overflow-hidden rounded-full bg-[var(--color-bg-secondary)]">
                <video
                  src="/2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="block h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <h2 className="mb-2 text-2xl font-bold">Thunder / Zevoloz</h2>
              <p className="font-semibold text-[var(--color-accent)]">
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
            <h3 className="mb-4 border-b border-[var(--color-border)] pb-2 text-xl font-bold">
              Software
            </h3>
            <div className="mb-8 flex flex-wrap gap-4">
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
                  className="rounded-full bg-[var(--color-bg-tertiary)] px-4 py-2 text-sm text-[var(--color-text-primary)]"
                >
                  {tool}
                </span>
              ))}
            </div>

            <h3 className="mb-4 border-b border-[var(--color-border)] pb-2 text-xl font-bold">
              Hardware
            </h3>
            <div className="flex flex-wrap gap-4">
              {['iPad Pro 13" (2024)', 'Huion Kamvas Pro 16 (2021)'].map(
                (gear) => (
                  <span
                    key={gear}
                    className="rounded-full bg-[var(--color-bg-tertiary)] px-4 py-2 text-sm text-[var(--color-text-primary)]"
                  >
                    {gear}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="mb-4 border-b border-[var(--color-border)] pb-2 text-xl font-bold">
              Fursuiting
            </h3>

            <FursuitMakers />

            <GalleryRotator />

            {/* View More Button */}
            <a
              href="https://www.furtrack.com/index/character:thunder_(gryphon)"
              target="_blank"
              rel="noopener noreferrer"
              className="my-6 block text-center no-underline"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex cursor-pointer items-center gap-3 rounded-full border border-[#4a2080] bg-[#2e1052] px-8 py-3 text-base font-semibold text-white transition-colors hover:brightness-110"
              >
                <img
                  src="/furtrack-logo.png"
                  alt="FurTrack Logo"
                  className="h-6 w-6 object-contain"
                />
                View More on FurTrack
              </motion.button>
            </a>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default About;
