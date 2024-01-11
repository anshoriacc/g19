"use client";

import { logout } from "@/actions/logout";

interface Props {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: Props) => {
  return (
    <span
      onClick={() => {
        logout();
      }}>
      {children}
    </span>
  );
};
