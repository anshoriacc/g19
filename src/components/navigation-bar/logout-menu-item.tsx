"use client";

import { logout } from "@/actions/logout";
import { DropdownMenuItem } from "../ui/dropdown-menu";

interface Props {
  children?: React.ReactNode;
}

const LogoutMenuItem = ({ children }: Props) => {
  return (
    <DropdownMenuItem
      className={
        "text-red-500 focus:text-red-500 dark:focus:text-red-500"
      }
      onClick={() => {
        logout();
      }}>
      Logout
    </DropdownMenuItem>
  );
};

export default LogoutMenuItem;
