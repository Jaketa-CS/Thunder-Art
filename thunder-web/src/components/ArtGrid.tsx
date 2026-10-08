import { ArtPiece } from '@/data/mockArt';
import ArtCard from './ArtCard';

interface ArtGridProps {
  artworks: ArtPiece[];
  filter?: 'all' | 'video' | 'image';
  onArtClick: (art: ArtPiece) => void;
}

const isVisible = (art: ArtPiece, filter: 'all' | 'video' | 'image') => {
  if (filter === 'all') return true;
  if (filter === 'video') return art.tags.includes('Animation');
  if (filter === 'image') return art.tags.includes('Illustration');
  return true;
};

const ArtGrid = ({ artworks, filter = 'all', onArtClick }: ArtGridProps) => {
  return (
    <div className="columns-1 gap-4 py-2 sm:columns-2 lg:columns-3">
      {artworks.map((art) => {
        const visible = isVisible(art, filter);
        return (
          <ArtCard
            key={art.id}
            art={art}
            hidden={!visible}
            onClick={onArtClick}
          />
        );
      })}
    </div>
  );
};

export default ArtGrid;
