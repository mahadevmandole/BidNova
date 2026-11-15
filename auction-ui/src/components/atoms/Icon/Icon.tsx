type IconName = 'search' | 'heart' | 'arrow' | 'bag' | 'back' | 'check';
import './Icon.scss';

export function Icon({ name }: { name: IconName }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  return (
    <svg {...common} className="icon" aria-hidden="true">
      {name === 'search' && (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-4-4" />
        </>
      )}
      {name === 'heart' && (
        <path d="M20.8 8.6c0 4.1-8.8 10-8.8 10s-8.8-5.9-8.8-10a4.7 4.7 0 0 1 8.8-2.1 4.7 4.7 0 0 1 8.8 2.1Z" />
      )}
      {name === 'arrow' && (
        <>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </>
      )}
      {name === 'bag' && (
        <>
          <path d="M5 8h14l1 12H4L5 8Z" />
          <path d="M9 9V6a3 3 0 0 1 6 0v3" />
        </>
      )}
      {name === 'back' && (
        <>
          <path d="M19 12H5" />
          <path d="m11 18-6-6 6-6" />
        </>
      )}
      {name === 'check' && <path d="m5 12 4 4L19 6" />}
    </svg>
  );
}
