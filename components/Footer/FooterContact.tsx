export const FooterContact = ({ contact }: any) => {
  return (
    <div className="space-y-6">
      <h3 className="text-gray-500 uppercase text-xs tracking-widest font-semibold">
        Contact
      </h3>

      <div className="space-y-4 text-sm text-gray-300">
        <p className="leading-relaxed whitespace-pre-line">
          {contact.address}
        </p>

        <p>
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-[#FFF083] transition-colors"
          >
            {contact.email}
          </a>
        </p>

        <p className="font-mono text-gray-400">{contact.phone}</p>
      </div>
    </div>
  );
};