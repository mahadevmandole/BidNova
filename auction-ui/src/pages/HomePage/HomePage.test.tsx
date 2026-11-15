import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('shows the hero and all six sample auctions', () => {
    render(
      <MemoryRouter>
        <HomePage theme="editorial" setTheme={vi.fn()} />
      </MemoryRouter>,
    );

    expect(screen.getByRole('heading', { name: /good things/i })).toBeInTheDocument();
    expect(screen.getAllByRole('article')).toHaveLength(6);
  });
});
