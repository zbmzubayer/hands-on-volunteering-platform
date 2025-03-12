import { USER_ROLE } from "@handson/enums";
import { type LoginDto } from "@handson/validations";

import { prisma } from "@/lib/db";

import { ApiError } from "@/shared/api-error";
import { HttpStatus } from "@/shared/enums";

import { hash } from "./hash";

const register = async (payload: LoginDto) => {
  const { email, password } = payload;

  const isUserExist = await prisma.user.findUnique({
    where: { email },
  });
  if (isUserExist) {
    throw new ApiError(HttpStatus.BAD_REQUEST, "Email already exists");
  }
  // Hash the password
  const hashedPassword = await hash.create(password);
  // Default role is USER
  const role = USER_ROLE[1];

  return await prisma.user.create({ data: { email, password: hashedPassword, role } });
};

const login = async (payload: LoginDto) => {
  const { email, password } = payload;

  const user = await prisma.user.findUnique({
    where: { email },
    select: { id: true, email: true, password: true, role: true, profile: true },
  });
  if (!user) {
    throw new ApiError(HttpStatus.NOT_FOUND, "No account found with this email");
  }
  const isPasswordMatch = await hash.verify(password, user.password);
  if (!isPasswordMatch) {
    throw new ApiError(HttpStatus.BAD_REQUEST, "Invalid email or password");
  }
  const adapterUser = {
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.profile?.name || null,
    avatar: user.profile?.avatar || null,
  };
  return adapterUser;
};

export const authService = { register, login };
