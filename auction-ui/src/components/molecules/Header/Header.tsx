import { Icon } from '../../atoms/Icon/Icon';
import { RouteLink } from '../../atoms/RouteLink/RouteLink';
import './Header.scss';

export function Header() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <RouteLink to="/" className="brand">
          <span className="brand-mark">b.</span>
          <span>
            bidnova<span className="brand-dot">.</span>
          </span>
        </RouteLink>
        <nav className="main-nav">
          <a
            href="#live"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('live')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore
          </a>
          <a
            href="#how"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            How it works
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Our story
          </a>
        </nav>
        <div className="header-actions">
          <button
            className="icon-button"
            aria-label="Search"
            onClick={() =>
              document.querySelector<HTMLInputElement>('.search-input')?.focus()
            }
          >
            <Icon name="search" />
          </button>
          <button className="icon-button favorite-head" aria-label="Saved items">
            <Icon name="heart" />
          </button>
          <button className="sign-in">Sign in</button>
          <button className="sell-button">
            Start selling <Icon name="arrow" />
          </button>
        </div>
      </div>
    </header>
  );
}
