import { NavigationListSidebar } from "../navigation/navigation-list-sidebar";

export const Sidebar = () => {
  return (
    <aside className="hidden flex-col border-r border-r-neutral-200 p-6 md:flex dark:border-r-neutral-800">
      <NavigationListSidebar />
    </aside>
  );
};
