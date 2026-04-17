import Link from "next/link";

export const FooterLinks = ({ links }: any) => {
  return (
    <div className="space-y-6">
      <h3 className="text-gray-500 uppercase text-xs tracking-widest font-semibold">
        Extra links
      </h3>

      <ul className="space-y-4">
        {links.map((link: any) => (
          <li key={link.name}>
            <Link
              href={link.link}
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};