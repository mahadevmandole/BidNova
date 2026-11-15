import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuctionDetailPage } from './AuctionDetailPage';

describe('AuctionDetailPage', () => {
  it('shows auction details and confirms the entered bid intent', () => {
    render(
      <MemoryRouter initialEntries={['/auction/vintage-camera']}>
        <Routes>
          <Route
            path="/auction/:auctionId"
            element={<AuctionDetailPage theme="editorial" setTheme={() => {}} />}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Leica M6 TTL · 0.72' }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /place bid/i }));

    expect(screen.getByText(/is ready\. sign in to confirm/i)).toBeInTheDocument();
  });
});
