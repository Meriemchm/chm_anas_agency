import { NavbarData } from "@/data/NavbarData";
import { NavLink } from "./NavLink";

export const DesktopNavbar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="hidden lg:flex items-center bg-[#f3f3f3] px-1 py-3 rounded-full border border-gray-100">
      {NavbarData.map((item) => (
        <div key={item.name} onClick={() => setActiveTab(item.name)}>
          <NavLink
            label={item.name}
            href={item.link}
            isActive={activeTab === item.name}
          />
        </div>
      ))}
    </div>
  );
};