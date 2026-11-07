import React, { useState } from 'react';

/**
 * SmartImage attempts to render the local image first (e.g. /images/dairy/milk.jpg).
 * If the image fails to load (file not yet uploaded), it falls back seamlessly 
 * to the CDN photo.
 */
export default function SmartImage({ src, fallback, alt, className = "", loading = "lazy", ...props }) {
  const [hasError, setHasError] = useState(false);

  const displaySrc = hasError || !src ? fallback : src;

  return (
    <img
      src={displaySrc}
      alt={alt}
      onError={() => setHasError(true)}
      className={className}
      loading={loading}
      {...props}
    />
  );
}
