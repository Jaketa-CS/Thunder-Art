import { ArtPiece } from '@/data/mockArt';

interface ArtCardProps {
  art: ArtPiece;
  hidden?: boolean;
  onClick: (art: ArtPiece) => void;
}

const ArtCard = ({ art, hidden = false, onClick }: ArtCardProps) => {
  return (
    <button
      type="button"
      onClick={() => onClick(art)}
      className={`group relative mb-4 block w-full cursor-pointer break-inside-avoid overflow-hidden border border-(--color-border)/40 bg-(--color-bg-tertiary) p-0 text-left transition-opacity hover:opacity-90 ${
        hidden ? 'hidden' : ''
      }`}
      aria-hidden={hidden}
      aria-label={`View ${art.title}`}
    >
      {art.type === 'video' ? (
        <video
          src={art.image}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
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
    </button>
  );
};

export default ArtCard;
