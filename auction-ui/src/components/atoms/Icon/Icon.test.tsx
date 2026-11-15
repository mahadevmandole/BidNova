import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders the requested icon as an accessible decorative SVG', () => {
    const { container } = render(<Icon name="heart" />);

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    expect(container.querySelector('path')).toBeInTheDocument();
  });
});
