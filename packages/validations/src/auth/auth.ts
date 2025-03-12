import { z } from "zod";

const register = z
  .object({
    email: z.string({ required_error: "Email is required" }).email(),
    password: z
      .string({ required_error: "Password is required" })
      .trim()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(32, "Password must be at most 32 characters"),
    confirmPassword: z
      .string({ required_error: "Confirm password is required" })
      .trim()
      .min(1, "Confirm password is required")
      .min(8, "Confirm password must be at least 8 characters")
      .max(32, "Confirm password must be at most 32 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password must match",
    path: ["confirmPassword"],
  });

const login = z.object({
  email: z.string({ required_error: "Please fill in your email" }).email(),
  password: z
    .string({ required_error: "Please fill in your password" })
    .trim()
    .min(1, "Please fill in your password"),
});

type RegisterDto = z.infer<typeof register>;
type LoginDto = z.infer<typeof login>;

export const authZodSchema = { register, login };

export type { RegisterDto, LoginDto };
