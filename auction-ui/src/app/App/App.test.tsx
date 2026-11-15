import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
    window.localStorage.clear();
  });

  it('opens the home route with the default theme', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /good things/i })).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute('data-theme', 'editorial');
  });

  it('opens the selected auction detail page from a listing card', () => {
    render(<App />);

    fireEvent.click(screen.getAllByRole('link', { name: 'Leica M6 TTL · 0.72' })[0]);

    expect(
      screen.getByRole('heading', { name: 'Leica M6 TTL · 0.72' }),
    ).toBeInTheDocument();
  });
});
