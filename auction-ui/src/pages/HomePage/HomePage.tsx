import { useMemo, useState } from 'react';
import { Icon } from '../../components/atoms/Icon/Icon';
import { RouteLink } from '../../components/atoms/RouteLink/RouteLink';
import { AuctionCard } from '../../components/molecules/AuctionCard/AuctionCard';
import { ThemePicker } from '../../components/molecules/ThemePicker/ThemePicker';
import { auctions, photo, type Theme } from '../../data/auctions';
import './HomePage.scss';

export function HomePage({
  theme,
  setTheme,
}: {
  theme: Theme;
  setTheme: (x: Theme) => void;
}) {
  const [category, setCategory] = useState('All items');
  const [query, setQuery] = useState('');
  const filtered = useMemo(
    () =>
      auctions.filter(
        (a) =>
          (category === 'All items' || a.category === category) &&
          a.title.toLowerCase().includes(query.toLowerCase()),
      ),
    [category, query],
  );
  const categories = [
    'All items',
    'Art & Objects',
    'Photography',
    'Furniture',
    'Watches',
    'Music',
  ];
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" /> A MORE THOUGHTFUL WAY TO COLLECT
          </div>
          <h1>
            Good things
            <br />
            find <em>new homes.</em>
          </h1>
          <p>
            Discover pieces with a past, and give them a future. A considered marketplace
            for the things worth keeping.
          </p>
          <a
            className="hero-cta"
            href="#live"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('live')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore the collection <Icon name="arrow" />
          </a>
          <div className="hero-proof">
            <div className="avatar-stack">
              <span>J</span>
              <span>M</span>
              <span>A</span>
              <span>+</span>
            </div>
            <span>
              <b>12,400+</b>
              <br />
              good things rehomed
            </span>
          </div>
        </div>
        <div className="hero-art">
          <img
            src={photo('photo-1579783902614-a3fb3927b6a5', 1400)}
            alt="Sunlit still life of a collectible art piece"
          />
          <div className="art-caption">
            <span>OBJECTS WITH A STORY</span>
            <b>
              A little more meaning.
              <br />A lot less ordinary.
            </b>
          </div>
          <div className="art-index">
            01 <i /> 06
          </div>
          <div className="vertical-note">THE BIDNOVA COLLECTION — VOL. 04</div>
        </div>
        <div className="hero-side-note">COLLECT WELL, LIVE WITH IT.</div>
      </section>
      <main>
        <section className="collection" id="live">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" /> THE GOOD FINDS
              </div>
              <h2>
                On the block <span>right now.</span>
              </h2>
              <p>One-of-a-kind pieces, looking for their next chapter.</p>
            </div>
            <div className="collection-count">
              {filtered.length.toString().padStart(2, '0')} <span>CURATED FINDS</span>
            </div>
          </div>
          <div className="collection-controls">
            <div className="category-tabs">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={category === c ? 'active' : ''}
                >
                  {c}
                </button>
              ))}
            </div>
            <label className="search-box">
              <Icon name="search" />
              <input
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the collection"
              />
              <span>⌘ K</span>
            </label>
          </div>
          <div className="auction-grid">
            {filtered.map((a, i) => (
              <AuctionCard key={a.id} item={a} index={i} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="empty-state">
              No pieces match that search. Try another name or category.
            </div>
          )}
          <div className="browse-more">
            <span>THE NEXT GOOD FIND IS AROUND THE CORNER</span>
            <button
              onClick={() => {
                setCategory('All items');
                setQuery('');
              }}
            >
              Reset collection <Icon name="arrow" />
            </button>
          </div>
        </section>
        <section className="manifesto" id="how">
          <div className="manifesto-image">
            <img
              src={photo('photo-1490312278390-ab64016e0aa9', 1100)}
              alt="Collected vintage pieces in a thoughtful home"
            />
            <span>MADE TO BE KEPT</span>
          </div>
          <div className="manifesto-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> A DIFFERENT KIND OF MARKETPLACE
            </div>
            <h2>
              Less scrolling.
              <br />
              <em>More finding.</em>
            </h2>
            <p>
              We believe the best things aren’t always brand new. They’re the pieces that
              have lived a little, been loved well, and are ready for someone new.
            </p>
            <div className="manifesto-stat">
              <strong>01</strong>
              <span>
                Every piece is handpicked
                <br />
                by people who care.
              </span>
              <Icon name="arrow" />
            </div>
            <div className="manifesto-stat">
              <strong>02</strong>
              <span>
                Bidding stays clear, fair,
                <br />
                and refreshingly simple.
              </span>
              <Icon name="arrow" />
            </div>
          </div>
        </section>
      </main>
      <footer id="about">
        <RouteLink to="/" className="brand">
          <span className="brand-mark">b.</span>
          <span>
            bidnova<span className="brand-dot">.</span>
          </span>
        </RouteLink>
        <span>Good things find new homes.</span>
        <span>© 2025 BidNova Studio</span>
      </footer>
      <ThemePicker theme={theme} setTheme={setTheme} />
    </>
  );
}
