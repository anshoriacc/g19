import * as z from "zod";

export const LoginSchema = z.object({
  username: z.string().min(4, {
    message: "Username minimal 4 karakter.",
  }),
  password: z.string().min(8, { message: "Password minimal 8 karakter." }),
});

export const appSystemSchema = z.object({
  title: z.string().min(4, { message: "Judul web minimal 4 karakter." }),
  logoTitle: z.string().min(2, { message: "Logo web minimal 4 karakter." }),
  phone: z
    .string()
    .regex(/^0?8\d{8,11}$/, { message: "Nomor telepon tidak valid." }),
  email: z.string().regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, {
    message: "Email tidak valid.",
  }),
});
