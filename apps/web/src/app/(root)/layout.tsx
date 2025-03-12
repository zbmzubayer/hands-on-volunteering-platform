import { HomeFooter, HomeHeader } from "@/layouts/home";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <HomeHeader />
      {children}
      <HomeFooter />
    </>
  );
}
