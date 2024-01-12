import React from "react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { LogoutButton } from "../logout-button";
import { auth } from "@/auth";
import { Badge } from "../ui/badge";

const DropdownMenuAdmin = async () => {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary from-20%" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="flex cursor-default flex-col">
            <span>{session?.user.name}</span>

            <span className="font-normal text-neutral-500">
              {session?.user.username}
            </span>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogoutButton>Logout</LogoutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuAdmin;
