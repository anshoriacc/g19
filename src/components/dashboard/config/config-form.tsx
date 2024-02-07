"use client";

import { useCallback, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { appSystemSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { DrawerClose } from "@/components/ui/drawer";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Pencil } from "lucide-react";

export const ConfigForm = ({ systemConfig }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof appSystemSchema>>({
    mode: "onChange",
    resolver: zodResolver(appSystemSchema),
    defaultValues: {
      address: systemConfig?.address ?? "",
      description: systemConfig?.description ?? "",
      email: systemConfig?.email ?? "",
      phone: systemConfig?.phone ?? "",
      logoTitle: systemConfig?.logoTitle ?? "",
      title: systemConfig?.title ?? "",
    },
  });

  const onSubmit = useCallback(
    async (values: z.infer<typeof appSystemSchema>) => {
      console.log(values);
    },
    [],
  );

  return (
    <Modal
      title="Edit konfigurasi"
      trigger={
        <Button variant="outline" className="gap-1">
          <Pencil className="h-4 w-4" />
          Edit
        </Button>
      }>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="logoTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Logo teks</FormLabel>

                <FormControl>
                  <Input placeholder="Input logo teks" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>

                <FormControl>
                  <Input placeholder="Input nama" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nomor telepon</FormLabel>

                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Input nomor telpon"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>

                <FormControl>
                  <Input type="email" placeholder="Input email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deskripsi</FormLabel>

                <FormControl>
                  <Textarea
                    placeholder="Input deskripsi"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full">Simpan</Button>
        </form>
      </Form>

      <DrawerClose asChild>
        <Button variant="outline">Batal</Button>
      </DrawerClose>
    </Modal>
  );
};

type Props = {
  systemConfig?: z.infer<typeof appSystemSchema>;
};
