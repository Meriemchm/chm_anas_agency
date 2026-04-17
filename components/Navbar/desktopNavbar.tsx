import { NavbarData } from "@/data/NavbarData";
import { NavLink } from "./NavLink";

interface DesktopNavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface NavbarItem {
  name: string;
  link: string;
}

export const DesktopNavbar = ({
  activeTab,
  setActiveTab,
}: DesktopNavbarProps) => {
  return (
    <div className="hidden lg:flex items-center bg-[#f3f3f3] px-1 py-3 rounded-full border border-gray-100">
      {NavbarData.map((item: NavbarItem) => (
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