import * as z from "zod";

export const LoginSchema = z.object({
  username: z.string().min(4, {
    message: "Username minimal 4 karakter.",
  }),
  password: z.string().min(8, { message: "Password minimal 8 karakter." }),
});
