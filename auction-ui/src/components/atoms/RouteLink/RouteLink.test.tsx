import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { RouteLink } from './RouteLink';

function CurrentPath() {
  const { pathname } = useLocation();
  return <output>{pathname}</output>;
}

describe('RouteLink', () => {
  it('navigates to its target through React Router', () => {
    render(
      <MemoryRouter>
        <RouteLink to="/auction/vintage-camera">View auction</RouteLink>
        <CurrentPath />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('link', { name: 'View auction' }));

    expect(screen.getByText('/auction/vintage-camera')).toBeInTheDocument();
  });
});
