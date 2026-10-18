import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ArtGrid from '@/components/ArtGrid';
import Footer from '@/components/Footer';
import ArtModal from '@/components/ArtModal';
import { ArtPiece, MOCK_ART } from '@/data/mockArt';

export type ArtFilter = 'all' | 'video' | 'image';

interface FilterButtonProps {
  label: string;
  value: ArtFilter;
  currentFilter: ArtFilter;
  setFilter: (val: ArtFilter) => void;
}

const FilterButton = ({
  label,
  value,
  currentFilter,
  setFilter,
}: FilterButtonProps) => (
  <button
    onClick={() => setFilter(value)}
    aria-label={`Filter by ${label}`}
    className={`cursor-pointer px-3 py-1 text-xs tracking-wider uppercase transition-colors md:text-sm ${
      currentFilter === value
        ? 'font-bold text-white'
        : 'font-normal text-[var(--color-text-secondary)] hover:text-white'
    }`}
  >
    {label}
  </button>
);

const Home = () => {
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);
  const [filter, setFilter] = useState<ArtFilter>('all');

  return (
    <>
      <div className="container pt-6 pb-12 md:pt-8">
        <div className="border border-[var(--color-border)] bg-[var(--color-bg-secondary)] shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-3 border-b border-[var(--color-border)] py-3 sm:gap-6">
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

          <div className="p-4 sm:p-6 md:p-8">
            <ArtGrid
              artworks={MOCK_ART}
              filter={filter}
              onArtClick={setSelectedArt}
            />
          </div>
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
