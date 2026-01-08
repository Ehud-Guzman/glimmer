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

  navigation: [
    {
      title: "Discover",
      links: [
        { name: "Our Work", url: "/portfolio", hoverEffect: "scale" },
        { name: "Services", url: "/services", hoverEffect: "underline" },
        { name: "Process", url: "/process", hoverEffect: "arrow" },
        { name: "About Us", url: "/about", hoverEffect: "highlight" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", url: "/blog", hoverEffect: "scale" },
        { name: "Case Studies", url: "/case-studies", hoverEffect: "underline" },
        { name: "Help Center", url: "/help", hoverEffect: "arrow" },
        { name: "Careers", url: "/careers", hoverEffect: "highlight" },
      ],
    },
  ],

  contact: {
    title: "Get in touch",
    methods: [
      {
        icon: FiMail, // NOT JSX
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
          window.open("https://maps.google.com?q=Nairobi+Kenya", "_blank");
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

  legal: [
    { name: "Privacy Policy", url: "/privacypolicy" },
    { name: "Terms of Service", url: "/termsofservice" },
    { name: "Cookie Policy", url: "/cookies" },
  ],

  credits: {
    text: "Website Created by GlimmerInk Creations",
    phone: "+254 746 527 253",
    url: "https://glimmerink.netlify.app",
  },
};

export default footerStructure;
