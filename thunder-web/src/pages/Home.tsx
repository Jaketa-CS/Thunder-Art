import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ArtGrid from '@/components/ArtGrid';
import Footer from '@/components/Footer';
import ArtModal from '@/components/ArtModal';
import { ArtPiece, MOCK_ART } from '@/data/mockArt';

const FilterButton = ({
  label,
  value,
  currentFilter,
  setFilter,
}: {
  label: string;
  value: 'all' | 'video' | 'image';
  currentFilter: 'all' | 'video' | 'image';
  setFilter: (val: 'all' | 'video' | 'image') => void;
}) => (
  <button
    onClick={() => setFilter(value)}
    aria-label={`Filter by ${label}`}
    className={`cursor-pointer px-3.5 py-1.5 text-xs font-semibold uppercase transition-colors md:text-sm ${
      currentFilter === value
        ? 'bg-(--color-accent) text-(--color-bg-primary)'
        : 'text-(--color-text-secondary) hover:bg-(--color-bg-tertiary) hover:text-(--color-text-primary)'
    }`}
  >
    {label}
  </button>
);

const Home = () => {
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);
  const [filter, setFilter] = useState<'all' | 'video' | 'image'>('all');

  return (
    <>
      <div className="container pt-16 pb-12 md:pt-20">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-wider uppercase md:text-3xl">
            Art
          </h1>
          <div className="flex items-center gap-2">
            <FilterButton
              label="All"
              value="all"
              currentFilter={filter}
              setFilter={setFilter}
            />
            <FilterButton
              label="Animations"
              value="video"
              currentFilter={filter}
              setFilter={setFilter}
            />
            <FilterButton
              label="Illustrations"
              value="image"
              currentFilter={filter}
              setFilter={setFilter}
            />
          </div>
        </div>

        <div className="border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-4 shadow-sm sm:p-6 md:p-8">
          <ArtGrid
            artworks={MOCK_ART}
            filter={filter}
            onArtClick={setSelectedArt}
          />
        </div>

        <AnimatePresence>
          {selectedArt && (
            <ArtModal art={selectedArt} onClose={() => setSelectedArt(null)} />
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default Home;
