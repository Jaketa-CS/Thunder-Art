export interface ArtPiece {
  id: string;
  title: string;
  image: string; // Used for thumbnail or video source
  type?: 'image' | 'video';
  tags: string[];
}

export const MOCK_ART: ArtPiece[] = [
  {
    id: 'vid-1',
    title: 'Electric Motion',
    image: '/3.mp4',
    type: 'video',
    tags: ['Motion', 'Electric', '3D'],
  },
  {
    id: '1',
    title: 'Cyberpunk City',
    image: '/art1.jpg',
    type: 'image',
    tags: ['Sci-Fi', 'Environment'],
  },
  {
    id: '2',
    title: 'Character Reference',
    image: 'https://picsum.photos/600/600?random=2',
    type: 'image',
    tags: ['Commission'],
  },
  {
    id: '3',
    title: 'Forest Spirit',
    image: 'https://picsum.photos/600/900?random=3',
    type: 'image',
    tags: ['Personal'],
  },
  {
    id: '4',
    title: 'Cyberpunk Protagonist',
    image: 'https://picsum.photos/800/600?random=4',
    type: 'image',
    tags: ['Commercial'],
  },
  {
    id: '5',
    title: 'Cozy Vibes',
    image: 'https://picsum.photos/600/700?random=5',
    type: 'image',
    tags: ['Commission'],
  },
  {
    id: '6',
    title: 'Blue Fire',
    image: 'https://picsum.photos/600/800?random=6',
    type: 'image',
    tags: ['Personal'],
  },
];
