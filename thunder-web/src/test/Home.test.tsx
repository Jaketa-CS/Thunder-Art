import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '@/pages/Home';

describe('Home Page and Filtering', () => {
  it('renders Art heading and category filter buttons', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1, name: /art/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /filter by all/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /filter by animations/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /filter by illustrations/i })).toBeInTheDocument();
  });

  it('switches filter correctly when clicking Animations and Illustrations', () => {
    render(<Home />);
    const animationsBtn = screen.getByRole('button', { name: /filter by animations/i });
    const illustrationsBtn = screen.getByRole('button', { name: /filter by illustrations/i });
    const allBtn = screen.getByRole('button', { name: /filter by all/i });

    fireEvent.click(animationsBtn);
    expect(animationsBtn).toHaveClass('bg-(--color-accent)');

    fireEvent.click(illustrationsBtn);
    expect(illustrationsBtn).toHaveClass('bg-(--color-accent)');

    fireEvent.click(allBtn);
    expect(allBtn).toHaveClass('bg-(--color-accent)');
  });
});
