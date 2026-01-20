// src/data/footerData.js
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiInstagram,
  FiTwitter,
  FiDribbble,
  FiLinkedin,
} from "react-icons/fi";
import { FaBehance } from "react-icons/fa";

const footerStructure = {
  brand: {
    logo: {
      primary: "Glimmer",
      secondary: "Ink",
      tagline: "Where ink meets imagination",
    },
    description:
      "Transforming ideas into exceptional digital experiences through innovative design and development solutions.",
    cta: {
      text: "Start your project",
      url: "/contact",
      hoverText: "Let's create →",
    },
  },

  // ✅ MUST match your current App routes
  navigation: [
    {
      title: "Discover",
      links: [
        { name: "Home", url: "/", hoverEffect: "underline" },
        { name: "Work", url: "/work", hoverEffect: "scale" },
        { name: "Services", url: "/services", hoverEffect: "underline" },
        { name: "About", url: "/about", hoverEffect: "highlight" },
        { name: "Contact", url: "/contact", hoverEffect: "arrow" },
      ],
    },
    {
      title: "Resources",
      links: [
        // ✅ real links only; keep placeholders as "#" until you build routes
        { name: "Case Studies", url: "#", hoverEffect: "underline" },
        { name: "Blog", url: "#", hoverEffect: "scale" },
        { name: "Help Center", url: "#", hoverEffect: "arrow" },
        { name: "Careers", url: "#", hoverEffect: "highlight" },
      ],
    },
  ],

  contact: {
    title: "Get in touch",
    methods: [
      {
        icon: FiMail,
        text: "nyamuehud@gmail.com",
        copyable: true,
        hoverColor: "text-primary",
      },
      {
        icon: FiPhone,
        text: "+254 746 527 253",
        action: () => {
          window.location.href = "tel:+254746527253";
        },
        hoverColor: "text-secondary",
      },
      {
        icon: FiMapPin,
        text: "Freelance, Kenya",
        action: () => {
          window.open("https://maps.google.com?q=Kenya", "_blank");
        },
        hoverColor: "text-accent",
      },
    ],

    social: [
      {
        icon: FiInstagram,
        url: "https://instagram.com/ehud_guzman",
        label: "Instagram",
        bgHover: "bg-gradient-to-br from-yellow-400 to-pink-600",
      },
      {
        icon: FiTwitter,
        url: "https://twitter.com/Glimmerink_",
        label: "Twitter",
        bgHover: "bg-gradient-to-br from-blue-400 to-blue-600",
      },
      {
        icon: FiDribbble,
        url: "https://dribbble.com/Ehud_Guzman",
        label: "Dribbble",
        bgHover: "bg-gradient-to-br from-pink-400 to-red-500",
      },

      // ✅ If you don’t have them yet, keep as "#" (and component should hide them)
      {
        icon: FaBehance,
        url: "#",
        label: "Behance",
        bgHover: "bg-gradient-to-br from-blue-500 to-blue-700",
      },
      {
        icon: FiLinkedin,
        url: "#",
        label: "LinkedIn",
        bgHover: "bg-gradient-to-br from-blue-600 to-blue-800",
      },
    ],
  },

  // keep this if you’re not rendering FooterLegal; otherwise pass it in
  legal: [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" },
    { name: "Cookie Policy", url: "#" },
  ],

  credits: {
    text: "Website Created by GlimmerInk Creations",
    phone: "+254 746 527 253",
    url: "https://glimmerink.netlify.app",
  },
};

export default footerStructure;
