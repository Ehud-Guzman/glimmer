import { useState } from "react";

const SafeImage = ({ src, alt, className }) => {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? "/images/placeholder-project.webp" : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
};

export default SafeImage;
