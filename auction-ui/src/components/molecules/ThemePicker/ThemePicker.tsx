import { Icon } from '../../atoms/Icon/Icon';
import { themes, type Theme } from '../../../data/auctions';
import './ThemePicker.scss';

export function ThemePicker({
  theme,
  setTheme,
}: {
  theme: Theme;
  setTheme: (x: Theme) => void;
}) {
  return (
    <div className="theme-panel">
      <span className="theme-label">CHOOSE YOUR VIEW</span>
      <div className="theme-options">
        {themes.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`theme-option ${theme === t.id ? 'selected' : ''}`}
          >
            <span className={`theme-swatch swatch-${t.id}`}>
              <i />
              <i />
              <i />
            </span>
            <span className="theme-copy">
              <b>{t.name}</b>
              <small>{t.hint}</small>
            </span>
            {theme === t.id && (
              <span className="theme-check">
                <Icon name="check" />
              </span>
            )}
            <span className="theme-number">0{i + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
