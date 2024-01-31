"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export const AddBanner = () => {
  return (
    <Button className="flex items-center gap-1">
      <Plus size={16} />
      Tambah
    </Button>
  );
};
