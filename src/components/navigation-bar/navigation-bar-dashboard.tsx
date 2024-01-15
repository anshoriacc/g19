import { ThemeToggle } from "./theme-toggle";
import { auth } from "@/auth";
import { DropdownMenuAdmin } from "./dropdown-menu-admin";
import { SidebarMobile } from "../layout/sidebar-mobile";

export const NavigationBarDashboard = async () => {
  const session = await auth();

  return (
    <section className="overflow-hidden border-b border-b-neutral-200 bg-white dark:border-b-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <div>
          <SidebarMobile />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <DropdownMenuAdmin />
        </div>
      </div>
    </section>
  );
};
