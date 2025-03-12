export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main className="container flex min-h-screen items-center justify-center">{children}</main>;
}
