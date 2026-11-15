import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './RouteLink.scss';

export function RouteLink({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link to={to} className={['route-link', className].filter(Boolean).join(' ')}>
      {children}
    </Link>
  );
}
