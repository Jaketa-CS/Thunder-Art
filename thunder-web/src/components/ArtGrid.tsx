import { ArtPiece } from '@/data/mockArt';
import ArtCard from './ArtCard';

interface ArtGridProps {
  artworks: ArtPiece[];
  onArtClick: (art: ArtPiece) => void;
}

const ArtGrid = ({ artworks, onArtClick }: ArtGridProps) => {
  return (
    <div className="masonry-grid columns-1 sm:columns-2 lg:columns-3 gap-4 py-4">
      {artworks.map((art) => (
        <div key={art.id} className="mb-4 break-inside-avoid">
          <ArtCard art={art} onClick={onArtClick} />
        </div>
      ))}
    </div>
  );
};

export default ArtGrid;
