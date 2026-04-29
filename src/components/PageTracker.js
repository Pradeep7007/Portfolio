import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const trackView = async () => {
      try {
        // 1. Track global unique portfolio visits
        const hasVisited = localStorage.getItem('hasVisitedPortfolio');
        if (!hasVisited) {
          await fetch('https://api.counterapi.dev/v1/pradeep-portfolio/portfolio-visits/up');
          localStorage.setItem('hasVisitedPortfolio', 'true');
        }

        // 2. Track page views
        let page = location.pathname.substring(1) || 'home';
        page = page.replace(/\//g, '-'); // Format for api

        const pageVisitedKey = `hasVisitedPage_${page}`;
        if (!localStorage.getItem(pageVisitedKey)) {
          await fetch(`https://api.counterapi.dev/v1/pradeep-portfolio/${page}-visits/up`);
          localStorage.setItem(pageVisitedKey, 'true');
        }
      } catch (err) {
        console.error("Failed to track page view:", err);
      }
    };

    trackView();
  }, [location]);

  return null;
};

export default PageTracker;
