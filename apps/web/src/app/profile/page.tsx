import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import { getServerAuthUser } from "@/auth";
import { USER_KEY } from "@/constants/query-key";
import { getQueryClient } from "@/lib";
import { userService } from "@/services";

import { ProfileInfo } from "@/components/user/profile-info";

export default async function ProfilePage() {
  const authUser = await getServerAuthUser();

  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: [USER_KEY],
    queryFn: () => userService.getById(authUser?.id as string),
  });

  return (
    <div className="container py-10">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProfileInfo />
      </HydrationBoundary>
    </div>
  );
}
