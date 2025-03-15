import { type CreateProfileDto } from "@handson/validations";

import { prisma } from "@/lib/db";

const findAll = async () => {
  return await prisma.user.findMany();
};

const findById = async (id: string) => {
  return await prisma.user.findUniqueOrThrow({
    where: { id },
    select: {
      profile: true,
      volunteerEvents: true,
      helpRequests: true,
      volunteerEventAttendees: true,
      teams: true,
    },
  });
};

// User Profile
const createProfile = async (data: CreateProfileDto) => {
  return await prisma.profile.create({ data });
};

const updateProfile = async (userId: string, data: CreateProfileDto) => {
  return await prisma.profile.update({ where: { userId }, data });
};

export const userService = { findAll, findById, createProfile, updateProfile };
