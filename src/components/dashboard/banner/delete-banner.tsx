"use client";

import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Modal } from "@/components/ui/modal";

export const DeleteBanner = ({ id }: Props) => {
  return (
    <Modal
      title="Hapus banner"
      description="Apakah Anda yakin ingin menghapus banner ini?"
      trigger={
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Trash2
                    size={20}
                    className="text-red-500 dark:text-red-900"
                  />
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                <p>Hapus banner</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      }>
      <Button className="w-full">Hapus</Button>
    </Modal>
  );
};

type Props = {
  id: number;
};
