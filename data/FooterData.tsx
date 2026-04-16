import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const footerData = {
  brand: {
    name: "Pygmalion",
    description:
      "Nous offrons une large gamme de services créatifs pour répondre à tous vos besoins, de la stratégie de contenu au montage vidéo haute performance.",
  },

  social: [
    { icon: FaInstagram, href: "https://www.instagram.com/pygmalionagency/" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@pygmalionagency?is_from_webapp=1&sender_device=pc " },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/pygmalion-agency-undefined-43751b402/?skipRedirect=true" },
  ],

  links: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Our team", href: "#ourteam" },
    { label: "About Us", href: "#aboutus" },
  ],

  contact: {
    email: "pygmalionagency@gmail.com",
    phone: "0483563639",
  },
};

