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
import LogoutMenuItem from "./LogoutMenuItem";
import { auth } from "@/auth";
import { ArrowRight } from "lucide-react";

const DropdownMenuAdmin = async () => {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary from-20%" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="group">
            <span className="flex flex-col">
              <span className="font-bold">{session?.user.name}</span>

              <span className="text-neutral-500">
                Dashboard
                <ArrowRight className="inline h-3 w-3 group-hover:ml-0.5 transition-all" />
              </span>
            </span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <LogoutMenuItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuAdmin;
