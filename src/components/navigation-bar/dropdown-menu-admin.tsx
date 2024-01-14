import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import LogoutMenuItem from "./logout-menu-item";
import { auth } from "@/auth";

const DropdownMenuAdmin = async () => {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary from-20%" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-36">
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="group">
            <div className="flex w-full flex-col">
              <p className="line-clamp-1 text-ellipsis text-base font-bold">
                {session?.user.name}
              </p>

              <p className="text-neutral-500">
                Dashboard
                <ArrowRight className="ml-0.5 inline h-3 w-3 transition-all group-hover:ml-1" />
              </p>
            </div>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <LogoutMenuItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMenuAdmin;
