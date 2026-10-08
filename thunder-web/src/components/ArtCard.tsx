import { ArtPiece } from '@/data/mockArt';

interface ArtCardProps {
  art: ArtPiece;
  onClick: (art: ArtPiece) => void;
}

const ArtCard = ({ art, onClick }: ArtCardProps) => {
  return (
    <div
      onClick={() => onClick(art)}
      className="group relative mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-lg bg-(--color-bg-secondary) border border-(--color-border)/40 transition-opacity hover:opacity-90"
    >
      {art.type === 'video' ? (
        <video
          src={art.image}
          autoPlay
          loop
          muted
          playsInline
          className="block w-full object-cover"
        />
      ) : (
        <img
          src={art.image}
          alt={art.title}
          className="block w-full object-cover"
          loading="lazy"
        />
      )}
    </div>
  );
};

export default ArtCard;
