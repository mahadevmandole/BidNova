import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from '../../components/molecules/Header/Header';
import { AuctionDetailPage } from '../../pages/AuctionDetailPage/AuctionDetailPage';
import { HomePage } from '../../pages/HomePage/HomePage';
import { type Theme } from '../../data/auctions';
import './App.scss';

export default function App() {
  const [theme, setThemeState] = useState<Theme>(
    () => (localStorage.getItem('bidnova-theme') as Theme) || 'editorial',
  );
  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem('bidnova-theme', t);
    document.documentElement.dataset.theme = t;
  };
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage theme={theme} setTheme={setTheme} />} />
          <Route
            path="/auction/:auctionId"
            element={<AuctionDetailPage theme={theme} setTheme={setTheme} />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
