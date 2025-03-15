"use client";

import { signOut } from "next-auth/react";

import { Button, type ButtonProps } from "@handson/ui/heroui";

export function Logout({ children, ...props }: ButtonProps) {
  return (
    <Button {...props} onPress={async () => await signOut({ callbackUrl: "/login" })}>
      {children}
    </Button>
  );
}
