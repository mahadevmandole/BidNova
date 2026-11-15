import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ThemePicker } from './ThemePicker';

describe('ThemePicker', () => {
  it('calls the theme handler when a theme is selected', () => {
    const setTheme = vi.fn();
    render(<ThemePicker theme="editorial" setTheme={setTheme} />);

    fireEvent.click(screen.getByRole('button', { name: /after hours/i }));

    expect(setTheme).toHaveBeenCalledWith('gallery');
  });
});
