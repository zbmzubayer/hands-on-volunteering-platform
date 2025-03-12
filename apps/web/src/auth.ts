import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";

/**
 * Get the server session
 * @returns {Promise<Session | null>} The session
 */
export const auth = async () => getServerSession(authOptions);
/**
 * Get the authenticated user
 * @returns {Promise<User | null>} The authenticated user
 */
export const getServerAuthUser = async () => {
  const session = await auth();
  if (!session) {
    return null;
  }
  return session.user;
};
