"use client";

import { Checkbox } from "@/components/ui/checkbox";

export const ToggleBanner = ({ id, isDisplayed }: Props) => {
  return (
    <div className="pr-4">
      <Checkbox checked={isDisplayed} />
    </div>
  );
};

type Props = {
  id: number;
  isDisplayed: boolean;
};
