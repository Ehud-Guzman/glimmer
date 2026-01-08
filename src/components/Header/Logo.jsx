import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src="/images/GlimmerInklogo1.webp"
        alt="GlimmerInk Creations Logo"
        className="h-16 rounded-lg object-contain" // ✅ bigger logo
      />
    </Link>
  );
}
