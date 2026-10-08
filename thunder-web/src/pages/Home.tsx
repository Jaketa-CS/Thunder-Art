import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ArtGrid from '@/components/ArtGrid';
import Footer from '@/components/Footer';
import ArtModal from '@/components/ArtModal';
import { MOCK_ART, ArtPiece } from '@/data/mockArt';

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
    className={`px-3.5 py-1.5 text-xs md:text-sm font-semibold uppercase rounded-md transition-colors cursor-pointer ${
      currentFilter === value
        ? 'bg-(--color-accent) text-(--color-bg-primary)'
        : 'text-(--color-text-secondary) hover:text-(--color-text-primary) hover:bg-(--color-bg-tertiary)'
    }`}
  >
    {label}
  </button>
);

const Home = () => {
  const [selectedArt, setSelectedArt] = useState<ArtPiece | null>(null);
  const [filter, setFilter] = useState<'all' | 'video' | 'image'>('all');

  const filteredArt = MOCK_ART.filter((art) => {
    if (filter === 'all') return true;
    if (filter === 'video') return art.tags.includes('Animation');
    if (filter === 'image') return art.tags.includes('Illustration');
    return true;
  });

  return (
    <>
      <div className="container pt-10 md:pt-12 pb-12">
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
            Gallery
          </h1>
          <div className="flex gap-2 items-center">
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

        <ArtGrid artworks={filteredArt} onArtClick={setSelectedArt} />

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
