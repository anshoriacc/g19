import { Menu } from "lucide-react";

import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Logo } from "../logo";

export const SidebarMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-[1.2rem] w-[1.2rem]" />

          <span className="sr-only">Sidebar Menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent className="w-60" side="left">
        <div className="flex h-full flex-col">
          <SheetHeader className="self-center">
            <Logo />
          </SheetHeader>
        </div>
      </SheetContent>
    </Sheet>
  );
};
