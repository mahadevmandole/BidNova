import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { auctions } from '../../../data/auctions';
import { AuctionCard } from './AuctionCard';

describe('AuctionCard', () => {
  it('shows the auction summary and toggles its saved state', () => {
    render(
      <MemoryRouter>
        <AuctionCard item={auctions[0]} index={0} />
      </MemoryRouter>,
    );

    expect(screen.getByText(auctions[0].title)).toBeInTheDocument();
    expect(screen.getByText('$2,480')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Save auction' }));
    expect(screen.getByRole('button', { name: 'Remove from saved' })).toBeInTheDocument();
  });
});
