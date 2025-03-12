import { getServerAuthUser } from "@/auth";

export default async function FeedPage() {
  const authUser = await getServerAuthUser();
  console.log(authUser);
  return <div>Welcome, {authUser?.email || "Guest"}</div>;
}
