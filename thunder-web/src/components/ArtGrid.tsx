import { ArtPiece } from '@/data/mockArt';
import ArtCard from './ArtCard';

interface ArtGridProps {
  artworks: ArtPiece[];
  onArtClick: (art: ArtPiece) => void;
}

const ArtGrid = ({ artworks, onArtClick }: ArtGridProps) => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 py-2">
      {artworks.map((art) => (
        <ArtCard key={art.id} art={art} onClick={onArtClick} />
      ))}
    </div>
  );
};

export default ArtGrid;
