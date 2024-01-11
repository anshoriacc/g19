import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogoutButton } from "./logout-button";
import { auth } from "@/auth";

const DropdownMenuAdmin = async () => {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="cursor-default">
          {session?.user.username}
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogoutButton>Logout</LogoutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuAdmin;
