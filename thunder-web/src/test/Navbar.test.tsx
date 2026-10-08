import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/contexts/ThemeContext';

describe('Navbar Component', () => {
  it('renders the THUNDERFENNEC brand title link', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </ThemeProvider>
    );

    const brandLink = screen.getByRole('link', { name: /thunderfennec/i });
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute('href', '/');
  });

  it('renders navigation links for Art, Commissions, and About', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByRole('link', { name: /art/i })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /commissions/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
  });
});
