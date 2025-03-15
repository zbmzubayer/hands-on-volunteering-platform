import { z } from "zod";

const create = z.object({
  name: z.string({ required_error: "Name is required" }).trim().min(1, "Name is required"),
  bio: z.string().max(150, "Bio cannot exceed 150 characters").trim().optional(),
  skills: z.array(z.string()),
  causes: z.array(z.string()),
  userId: z.string().uuid({ message: "Invalid user ID" }),
});

export const update = create.partial();

type CreateProfileDto = z.infer<typeof create>;
type UpdateProfileDto = z.infer<typeof update>;

export const profileZodSchema = { create, update };

export type { CreateProfileDto, UpdateProfileDto };
