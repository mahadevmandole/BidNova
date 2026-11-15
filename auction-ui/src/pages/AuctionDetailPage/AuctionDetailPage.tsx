import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Icon } from '../../components/atoms/Icon/Icon';
import { RouteLink } from '../../components/atoms/RouteLink/RouteLink';
import { AuctionCard } from '../../components/molecules/AuctionCard/AuctionCard';
import { ThemePicker } from '../../components/molecules/ThemePicker/ThemePicker';
import { auctions, money, photo, type Theme } from '../../data/auctions';
import './AuctionDetailPage.scss';

export function AuctionDetailPage({
  theme,
  setTheme,
}: {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}) {
  const { auctionId } = useParams();
  const item = auctions.find((auction) => auction.id === auctionId);
  const [bid, setBid] = useState((item?.bid ?? auctions[0].bid) + 50);
  const [placed, setPlaced] = useState(false);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    if (item) setBid(item.bid + 50);
    setPlaced(false);
  }, [item]);

  if (!item) return <Navigate to="/" replace />;
  return (
    <main className="detail-page">
      <div className="detail-breadcrumb">
        <RouteLink to="/" className="back-link">
          <Icon name="back" /> All auctions
        </RouteLink>
        <span> / </span>
        <span>{item.category}</span>
      </div>
      <div className="detail-layout">
        <div className="detail-visual">
          <img src={photo(item.image, 1400)} alt={item.title} />
          <span className="detail-image-label">
            {item.condition.toUpperCase()} CONDITION
          </span>
          <button
            onClick={() => setSaved(!saved)}
            className={`detail-save ${saved ? 'saved' : ''}`}
          >
            <Icon name="heart" />
            {saved ? 'Saved' : 'Save item'}
          </button>
        </div>
        <div className="detail-info">
          <div className="eyebrow">
            <span className="eyebrow-line" /> {item.category.toUpperCase()}
          </div>
          <h1>{item.title}</h1>
          <p className="detail-seller">
            Offered by <b>{item.seller}</b>{' '}
            <span className="seller-verified">
              <Icon name="check" /> verified
            </span>
          </p>
          <div className="detail-current">
            <span>CURRENT BID</span>
            <strong>{money(item.bid)}</strong>
            <small>{item.bids} bids so far</small>
          </div>
          <div className="detail-timer">
            <span>AUCTION ENDS IN</span>
            <b>
              02 <small>HRS</small> : 14 <small>MIN</small> : 36 <small>SEC</small>
            </b>
          </div>
          <label className="bid-label">
            Your maximum bid <span>Enter {money(item.bid + 50)} or more</span>
          </label>
          <div className="bid-input-wrap">
            <span>$</span>
            <input
              type="number"
              min={item.bid + 50}
              step="10"
              value={bid}
              onChange={(e) => {
                setBid(Number(e.target.value));
                setPlaced(false);
              }}
            />
            <span className="bid-increment">
              <button onClick={() => setBid(bid + 50)}>+ $50</button>
              <button onClick={() => setBid(bid + 100)}>+ $100</button>
            </span>
          </div>
          <button className="place-bid" onClick={() => setPlaced(true)}>
            Place bid <Icon name="arrow" />
          </button>
          {placed && (
            <div className="bid-confirm">
              <Icon name="check" /> Your bid of {money(bid)} is ready. Sign in to confirm.
            </div>
          )}
          <p className="bid-note">
            You’ll only pay one increment above the next highest bid.
            <br />
            No charge until the auction closes.
          </p>
          <div className="detail-description">
            <h3>THE STORY</h3>
            <p>{item.description}</p>
          </div>
          <div className="seller-card">
            <div className="seller-avatar">{item.seller[0]}</div>
            <div>
              <b>{item.seller}</b>
              <small>Trusted seller · Member since 2021</small>
            </div>
            <button>
              View profile <Icon name="arrow" />
            </button>
          </div>
        </div>
      </div>
      <section className="more-like">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-line" /> KEEP LOOKING
          </div>
          <h2>More good finds.</h2>
        </div>
        <RouteLink to="/">
          Browse all auctions <Icon name="arrow" />
        </RouteLink>
        <div className="more-grid">
          {auctions
            .filter((a) => a.id !== item.id)
            .slice(0, 3)
            .map((a, i) => (
              <AuctionCard key={a.id} item={a} index={i} />
            ))}
        </div>
      </section>
      <footer>
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
    </main>
  );
}
