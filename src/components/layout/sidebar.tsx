import Link from "next/link";
import { Logo } from "../logo";

export const Sidebar = () => {
  return (
    <aside className="hidden flex-col border-r border-r-neutral-200 bg-white p-6 md:flex dark:border-r-neutral-800 dark:bg-neutral-950">
      <div className="self-center">
        <Logo />
      </div>
    </aside>
  );
};
