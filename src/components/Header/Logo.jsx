import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      aria-label="GlimmerInk Creations home"
      className="flex items-center"
    >
      <img
        src="/images/logo-blue.png"
        alt="GlimmerInk Creations logo"
        loading="eager"
        className="
          h-11 sm:h-12 md:h-14 
          w-auto object-contain
        "
      />
    </Link>
  );
}
