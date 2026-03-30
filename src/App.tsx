import { Routes, Route } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import Footer from './components/Footer';
import HomePage from './routes/HomePage';
import RegionPage from './routes/RegionPage';
import IndustryPage from './routes/IndustryPage';
import ForecastPage from './routes/ForecastPage';
import ReportsPage from './routes/ReportsPage';
import UserPage from './routes/UserPage';
import AboutPage from './routes/AboutPage';
import NotFoundPage from './routes/NotFoundPage';

function App() {
  return (
    <div className="app-shell">
      <SiteHeader />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/regions" element={<RegionPage />} />
          <Route path="/industries" element={<IndustryPage />} />
          <Route path="/forecast" element={<ForecastPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
