import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const PageTracker = () => {
  const location = useLocation();
  const trackedPaths = useRef(new Set());

  useEffect(() => {
    // Basic strict mode double-fire protection for the same pathname in a short time
    if (trackedPaths.current.has(location.pathname)) return;
    trackedPaths.current.add(location.pathname);
    
    // Clear the set after a short delay so if they navigate back it counts again
    setTimeout(() => {
      trackedPaths.current.delete(location.pathname);
    }, 1000);

    const trackView = async () => {
      try {
        // Track global unique portfolio visits on every navigation or just once?
        // To make it show count incrementing, we'll increment both.
        await fetch('https://api.counterapi.dev/v1/pradeep-portfolio/portfolio-visits/up');

        // Track page views
        let page = location.pathname.substring(1) || 'home';
        page = page.replace(/\//g, '-'); // Format for api

        await fetch(`https://api.counterapi.dev/v1/pradeep-portfolio/${page}-visits/up`);
      } catch (err) {
        console.error("Failed to track page view:", err);
      }
    };

    trackView();
  }, [location]);

  return null;
};

export default PageTracker;
