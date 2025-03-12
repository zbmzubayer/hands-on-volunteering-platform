import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { Logo } from "@handson/ui/components";
import { Card, CardBody, CardFooter } from "@handson/ui/heroui";

import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <>
      <Image
        src="/banner3.svg"
        alt="Help your community with HandsOn"
        width={500}
        height={500}
        className="fixed left-0 top-0 -z-10 h-full w-full rounded-xl object-cover opacity-70"
      />
      <div className="w-full max-w-md">
        <Card isBlurred className="py-5 sm:p-5">
          <CardBody>
            <div className="mx-auto mb-7">
              <Logo href="/" classNames={{ link: "text-3xl", icon: "size-10" }} />
            </div>
            <p className="mb-4 text-center text-xl font-medium">Login to your account</p>
            <Suspense>
              <LoginForm />
            </Suspense>
          </CardBody>
          <CardFooter className="mt-5 flex justify-center border-t-2 border-zinc-300">
            <div className="mt-3 text-center text-sm">
              <p className="text-default-500">Don&apos;t have an account. New to HandsOn?</p>
              <Link href="/register" className="text-sky-500 hover:underline">
                Create a new account
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
