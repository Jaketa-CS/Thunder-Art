import { useEffect, useRef } from 'react';
import { ArtPiece } from '@/data/mockArt';

interface ArtCardProps {
  art: ArtPiece;
  hidden?: boolean;
  onClick: (art: ArtPiece) => void;
}

const ArtCard = ({ art, hidden = false, onClick }: ArtCardProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || art.type !== 'video') return;

    if (hidden) {
      video.pause();
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.muted = true;
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { rootMargin: '200px 0px' }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [art.type, hidden]);

  const posterUrl =
    art.poster ?? art.image.replace(/^\/(.*)\.mp4$/i, '/posters/$1.webp');
  const aspectStyle = art.aspectRatio
    ? { aspectRatio: art.aspectRatio }
    : undefined;
  const videoStyle = {
    ...aspectStyle,
    backgroundImage: `url("${posterUrl}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

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
          ref={videoRef}
          src={art.image}
          poster={posterUrl}
          loop
          muted
          playsInline
          preload="none"
          style={videoStyle}
          className="block w-full object-cover"
        />
      ) : (
        <img
          src={art.image}
          alt={art.title}
          style={aspectStyle}
          className="block w-full object-cover"
          loading="lazy"
        />
      )}
    </button>
  );
};

export default ArtCard;
