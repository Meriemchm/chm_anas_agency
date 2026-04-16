import { FooterSocial } from "./FooterSocial";

export const FooterBrand = ({ brand, social }: any) => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight">{brand.name}</h2>

      <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
        {brand.description}
      </p>

      <FooterSocial social={social} />
    </div>
  );
};