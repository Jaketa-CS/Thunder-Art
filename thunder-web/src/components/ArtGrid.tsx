import { ArtPiece } from '@/data/mockArt';
import ArtCard from './ArtCard';

interface ArtGridProps {
  artworks: ArtPiece[];
  onArtClick: (art: ArtPiece) => void;
}

const ArtGrid = ({ artworks, onArtClick }: ArtGridProps) => {
  return (
    <div
      style={{
        columnCount: 3, // Default for desktop
        columnGap: '1rem',
        padding: '1rem 0',
        // We will make this responsive in CSS later or with a hook
      }}
      className="masonry-grid"
    >
      {/* Simple responsive hack for style prop - usually done in CSS class */}
      <style>{`
          .masonry-grid { column-count: 1; }
          @media (min-width: 640px) { .masonry-grid { column-count: 2; } }
          @media (min-width: 1024px) { .masonry-grid { column-count: 3; } }
        `}</style>

      {artworks.map((art) => (
        <ArtCard key={art.id} art={art} onClick={onArtClick} />
      ))}
    </div>
  );
};

export default ArtGrid;
