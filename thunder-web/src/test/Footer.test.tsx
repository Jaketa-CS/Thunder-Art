import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '@/components/Footer';

describe('Footer Component', () => {
  it('renders copyright notice with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
    expect(
      screen.getByText(/Thunder Fennec\. All rights reserved\./i)
    ).toBeInTheDocument();
  });

  it('renders social profile links with accessible aria labels', () => {
    render(<Footer />);
    expect(screen.getByLabelText(/Bluesky Profile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Instagram Profile/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/FurAffinity Profile/i)).toBeInTheDocument();
  });
});
