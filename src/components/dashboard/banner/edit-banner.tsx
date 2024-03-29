"use client";

import { Pencil } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Modal } from "@/components/ui/modal";
import { DrawerClose } from "@/components/ui/drawer";

export const EditBanner = ({ id }: Props) => {
  return (
    <Modal
      title="Edit banner"
      trigger={
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Pencil size={20} />
                </Button>
              </TooltipTrigger>

              <TooltipContent>
                <p>Edit banner</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      }>
      <p>Modal content</p>

      <DrawerClose asChild>
        <Button variant="outline">Batal</Button>
      </DrawerClose>
    </Modal>
  );
};

type Props = {
  id: number;
};
