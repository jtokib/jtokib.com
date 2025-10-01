'use client';

import { useEffect, useState } from 'react';

export default function HeroVideo() {
  const [shouldShowVideo, setShouldShowVideo] = useState(false);

  useEffect(() => {
    // Check if we should show video based on connection speed
    const checkConnection = () => {
      // Type assertion for Network Information API (not in all TypeScript definitions)
      const nav = navigator as any;

      // Check if Network Information API is available
      if ('connection' in nav || 'mozConnection' in nav || 'webkitConnection' in nav) {
        const connection = nav.connection || nav.mozConnection || nav.webkitConnection;

        // Effective connection types: 'slow-2g', '2g', '3g', '4g'
        const effectiveType = connection.effectiveType;

        // Show video on fast connections (4g or better) or WiFi
        const isFastConnection = effectiveType === '4g';

        // Also check if user has data saver enabled
        const dataSaverEnabled = connection.saveData === true;

        // Show video if: fast connection AND not on data saver mode
        if (isFastConnection && !dataSaverEnabled) {
          setShouldShowVideo(true);
        }
      } else {
        // If API not available, check screen width as fallback
        // On desktop (>768px), show video by default
        if (window.innerWidth > 768) {
          setShouldShowVideo(true);
        }
      }
    };

    checkConnection();
  }, []);

  if (!shouldShowVideo) {
    return null; // Fall back to CSS animation
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="hero-video"
    >
      <source src="/1918465-uhd_3840_2160_24fps.mp4" type="video/mp4" />
    </video>
  );
}
