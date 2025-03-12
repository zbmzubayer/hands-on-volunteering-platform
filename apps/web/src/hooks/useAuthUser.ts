import { useSession } from "next-auth/react";

/**
 * Get the authenticated user from the client side
 * @returns {Promise<User | undefined>} The authorized user
 */
export const useAuthUser = () => {
  const { data } = useSession();

  return data?.user;
};
