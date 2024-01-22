import { Menu } from "lucide-react";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Logo } from "../logo";
import { NavigationListSidebar } from "./navigation-list-sidebar";

export const SidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem]" />

          <span className="sr-only">Sidebar Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="w-60 border-r-neutral-200 dark:border-r-neutral-800" side="left">
        <div className="flex h-full flex-col gap-6">
          <SheetHeader className="self-center">
            <Logo />
          </SheetHeader>

          <NavigationListSidebar />
        </div>
      </SheetContent>
    </Sheet>
  );
};
