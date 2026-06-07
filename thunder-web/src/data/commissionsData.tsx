import React from 'react';

export interface PricingOption {
  name: string;
  price: string;
  details?: string;
  isSubItem?: boolean;
}

export interface CommissionCategory {
  title: string;
  images: string[];
  imageLabels?: string[];
  description?: string;
  options: PricingOption[];
  extras?: (string | React.ReactNode)[];
}

export const COMMISSION_DATA: CommissionCategory[] = [
  {
    title: 'Icons',
    images: [
      '/com-images/sketch_icon.png',
      '/com-images/headshotwithbackground.jpg',
    ],
    imageLabels: ['Sketch', 'Detailed'],
    description:
      'High-quality avatars perfect for social media (2000x2000px). I focus on expression and lighting to make your character pop!',
    options: [
      {
        name: 'Sketch',
        price: '$20',
        details: 'Clean but rough lines, simple styling',
      },
      {
        name: 'Detailed',
        price: '$40',
        details: 'Fully rendered with lighting/shading',
      },
    ],
  },
  {
    title: 'Stickers',
    images: [
      '/com-images/sickers1.jpg',
      '/stickers.jpg',
      '/com-images/stickers2.jpg',
      '/com-images/stickers_headshots.png',
    ],
    description:
      "Expressive Telegram stickers! I can work from a list of emotions or suggest them based on your character's personality.",
    options: [
      { name: 'Individual', price: '$25' },
      { name: '3 Pack', price: '$70' },
      { name: '6 Pack', price: '$135' },
      { name: '9 Pack', price: '$200' },
    ],
    extras: [
      <span>+$5-15 per complex prop</span>,
      <a
        href="https://t.me/addstickers/Zevoloz"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: '#0088cc',
          textDecoration: 'none',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
        My Main Telegram Pack!
      </a>,
    ],
  },
  {
    title: 'Badges',
    images: ['/com-images/badge.jpg', '/com-images/badge2.png'],
    description:
      'Convention badges to show off your character! Includes name text and durable lamination styling if printed.',
    options: [
      { name: 'Standard Badge', price: '$50', details: 'Headshot + Name' },
    ],
  },
  {
    title: 'Full Body',
    images: [
      '/com-images/1character_fullbody.jpg',
      '/com-images/2characters_fullbody.jpg',
    ],
    description:
      "Showcase your character's full design! Great for showing off outfits, anatomy, or dynamic action poses.",
    options: [
      {
        name: 'Cartoony Style',
        price: '$55',
        details: 'Exaggerated, playful proportions',
      },
      {
        name: 'Standard Style',
        price: '$65-$70',
        details: 'More detailed anatomy and proportions',
      },
    ],
    extras: ['Full shading & rendering: +$5-$10'],
  },
  {
    title: 'Animations',
    images: [
      '/rock.mp4',
      '/bite.mp4',
      '/2 frame animation.mp4',
      '/2frameanimation2.mp4',
      '/dance.gif',
      '/watchyotone.gif',
      '/whybirbsdontwearleashes.gif',
    ],
    description:
      'Bring your character to life! From charming 2-frame wiggles to full activity loops.',
    options: [
      {
        name: '2-Frame Wiggle',
        price: '$45',
        details: 'Simple bouncy icon (perfect for Discord)',
      },
      {
        name: 'Simple Loop',
        price: '$120+',
        details: 'Walk cycle, dance, or specific action',
      },
      {
        name: 'Complex / Meme',
        price: '$250+',
        details: 'Full body movement, lip-sync, or multi-action',
      },
    ],
    extras: ['Complex background: +$30', 'Additional character: +75%'],
  },
  {
    title: 'Reference Sheets',
    images: [
      '/com-images/ref3.jpg',
      '/com-images/ref1.jpg',
      '/com-images/ref2.png',
    ],
    description:
      'The ultimate guide to your character. I focus on clarity and accuracy so other artists can draw your sona perfectly.',
    options: [
      {
        name: 'Basic Sheet',
        price: '$110',
        details: 'Front & Back view + Color Palette',
      },
      {
        name: 'Custom Sheet',
        price: 'Start $110',
        details: 'Build-your-own layout',
      },
    ],
    extras: [
      'Side pose: +$55',
      'Detailed pose: +$65',
      'Icon/Expression: +$25 ea',
    ],
  },
  {
    title: 'Full Pieces',
    images: ['/com-images/image11.jpg', '/com-images/fullscene.jpg'],
    description:
      'A complete scene with a detailed background. Perfect for storytelling, wallpapers, or printing as a poster.',
    options: [
      {
        name: 'Full Scene (Total)',
        price: '~$150-$200',
        details: 'Price varies based on complexity. Breakdown below:',
      },
      {
        name: 'Base Character',
        price: '~$60-$80',
        details: 'Matches your chosen Full Body style + Shading',
        isSubItem: true,
      },
      {
        name: 'Custom Environment',
        price: '~$50+',
        details: 'Detailed painted background and scenery',
        isSubItem: true,
      },
      {
        name: 'Atmospheric Lighting',
        price: '~$40+',
        details: 'Complex full-scene shading and mood lighting',
        isSubItem: true,
      },
    ],
  },
];
