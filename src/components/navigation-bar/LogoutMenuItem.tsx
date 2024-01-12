"use client";

import { logout } from "@/actions/logout";
import { DropdownMenuItem } from "../ui/dropdown-menu";

interface Props {
  children?: React.ReactNode;
}

const LogoutMenuItem = ({ children }: Props) => {
  return (
    <DropdownMenuItem
      onClick={() => {
        logout();
      }}>
      Logout
    </DropdownMenuItem>
  );
};

export default LogoutMenuItem;
