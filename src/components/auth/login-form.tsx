"use client";

import { useCallback, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login";
import { cn } from "@/lib/utils";

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = useCallback(
    async (values: z.infer<typeof LoginSchema>) => {
      setError("");
      setSuccess("");

      startTransition(() => {
        login(values).then(data => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data.success) {
            form.reset();
            setSuccess(data.success);
          }
        });
      });
    },
    [form],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.2,
        type: "spring",
        bounce: 50,
        stiffness: 100,
      }}>
      <Card className="w-full max-w-[400px] rounded-2xl">
        <CardHeader>
          <CardTitle>Masuk</CardTitle>

          <CardDescription>
            Untuk mendapatkan akses sebagai administrator.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>

                    <FormControl>
                      <Input placeholder="Input username" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>

                    <FormControl>
                      <Input
                        placeholder="Input password"
                        {...field}
                        type="password"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <p
                className={cn(
                  "text-sm font-medium  opacity-0",
                  error && "text-red-500 opacity-100 dark:text-red-900",
                  success && "text-green-500 opacity-100 dark:text-green-900",
                )}>
                {success || error}
              </p>

              <Button type="submit" className="w-full" disabled={isPending}>
                {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Masuk
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
};
