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
        columnCount: 3,
        columnGap: '1rem',
        padding: '1rem 0',
      }}
      className="masonry-grid"
    >
      <style>{`
          .masonry-grid { column-count: 1; }
          @media (min-width: 640px) { .masonry-grid { column-count: 2; } }
          @media (min-width: 1024px) { .masonry-grid { column-count: 3; } }
        `}</style>

      {artworks.map((art) => (
        <div
          key={art.id}
          style={{ marginBottom: '1rem', breakInside: 'avoid' }}
        >
          <ArtCard art={art} onClick={onArtClick} />
        </div>
      ))}
    </div>
  );
};

export default ArtGrid;
