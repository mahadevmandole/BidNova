import { useState } from 'react';
import { Icon } from '../../atoms/Icon/Icon';
import { RouteLink } from '../../atoms/RouteLink/RouteLink';
import { money, photo, type Auction } from '../../../data/auctions';
import './AuctionCard.scss';

export function AuctionCard({ item, index }: { item: Auction; index: number }) {
  const [saved, setSaved] = useState(false);
  return (
    <article className={`auction-card card-${index + 1}`}>
      <RouteLink to={`/auction/${item.id}`} className="card-image-link">
        <img className="card-image" src={photo(item.image, 760)} alt={item.title} />
        <span className="card-category">{item.category}</span>
        <button
          className={`save-button ${saved ? 'saved' : ''}`}
          aria-label={saved ? 'Remove from saved' : 'Save auction'}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setSaved(!saved);
          }}
        >
          <Icon name="heart" />
        </button>
        {item.featured && <span className="featured-tag">EDITOR’S PICK</span>}
      </RouteLink>
      <div className="card-body">
        <div className="card-title-row">
          <RouteLink to={`/auction/${item.id}`} className="card-title">
            {item.title}
          </RouteLink>
          <span className="ending-dot" />
        </div>
        <div className="card-meta">
          <span>Current bid</span>
          <span>{item.bids} bids</span>
        </div>
        <div className="card-bottom">
          <strong>{money(item.bid)}</strong>
          <span className="time-left">◷ &nbsp;{item.ends} left</span>
        </div>
      </div>
    </article>
  );
}
