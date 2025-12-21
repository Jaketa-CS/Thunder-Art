export interface ArtPiece {
  id: string;
  title: string;
  category: 'Commercial' | 'Personal' | 'Commission';
  imageUrl: string;
  width: number;
  height: number;
}

export const MOCK_ART: ArtPiece[] = [
  {
    id: '1',
    title: 'Neon City',
    category: 'Personal',
    imageUrl: 'https://picsum.photos/600/800?random=1',
    width: 600,
    height: 800,
  },
  {
    id: '2',
    title: 'Character Reference',
    category: 'Commission',
    imageUrl: 'https://picsum.photos/600/600?random=2',
    width: 600,
    height: 600,
  },
  {
    id: '3',
    title: 'Forest Spirit',
    category: 'Personal',
    imageUrl: 'https://picsum.photos/600/900?random=3',
    width: 600,
    height: 900,
  },
  {
    id: '4',
    title: 'Cyberpunk Protagonist',
    category: 'Commercial',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    width: 800,
    height: 600,
  },
  {
    id: '5',
    title: 'Cozy Vibes',
    category: 'Commission',
    imageUrl: 'https://picsum.photos/600/700?random=5',
    width: 600,
    height: 700,
  },
  {
    id: '6',
    title: 'Blue Fire',
    category: 'Personal',
    imageUrl: 'https://picsum.photos/600/800?random=6',
    width: 600,
    height: 800,
  },
];
