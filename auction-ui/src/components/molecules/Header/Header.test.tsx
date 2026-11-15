import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './Header';

describe('Header', () => {
  it('renders the brand and primary actions', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getByRole('link', { name: /bidnova/i })).toHaveAttribute('href', '/');
    expect(screen.getByRole('button', { name: /start selling/i })).toBeInTheDocument();
  });
});
