"use server";

import { AuthError } from "next-auth";
import * as z from "zod";

import { signIn } from "../auth";
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  try {
    await signIn("credentials", {
      username: values.username,
      password: values.password,
      redirectTo: "/dashboard",
    });

    return { success: "Login sukses" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Username atau password salah." };
        default:
          return { error: "Terjadi kesalahan, silakan coba lagi." };
      }
    }

    throw error;
  }
};
