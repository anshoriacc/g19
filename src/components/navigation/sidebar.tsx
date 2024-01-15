import Link from "next/link";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { NavigationListSidebar } from "./navigation-list-sidebar";

export const Sidebar = () => {
  return (
    <aside className="hidden flex-col border-r border-r-neutral-200 p-6 md:flex dark:border-r-neutral-800 sticky top-0">
      <NavigationListSidebar />
    </aside>
  );
};
