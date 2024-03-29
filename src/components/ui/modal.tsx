"use client";

import { ReactNode, useState } from "react";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";
import { Button } from "./button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

export const Modal = ({ trigger, children, title, description }: Props) => {
  const [open, setOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>

        <DialogContent className="sm:max-w-[480px]">
          {title && (
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>

              {description && (
                <DialogDescription>{description}</DialogDescription>
              )}
            </DialogHeader>
          )}

          <div className="flex flex-col gap-4">
            {children}
            {/* <DrawerClose asChild>
              <Button variant="outline">Batal</Button>
            </DrawerClose> */}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>

      <DrawerContent>
        {title && (
          <DrawerHeader className="text-left">
            <DrawerTitle>{title}</DrawerTitle>

            {description && (
              <DrawerDescription>{description}</DrawerDescription>
            )}
          </DrawerHeader>
        )}

        <div className="flex flex-col gap-4 p-4">
          {children}
          {/* <DrawerClose asChild>
            <Button variant="outline">Batal</Button>
          </DrawerClose> */}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

type Props = {
  trigger: ReactNode;
  title?: string;
  description?: string;
  children?: ReactNode;
};
