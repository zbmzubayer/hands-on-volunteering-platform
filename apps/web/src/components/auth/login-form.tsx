"use client";

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { InputPassword } from "@handson/ui/components";
import { Alert, Button, Input } from "@handson/ui/heroui";
import { type LoginDto as FormValues, authZodSchema } from "@handson/validations";

export default function LoginForm() {
  const params = useSearchParams();
  const router = useRouter();
  const [error, setError] = useState<string | undefined>(undefined);

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(authZodSchema.login),
  });

  const onSubmit = async (data: FormValues) => {
    const callbackUrl = params.get("callbackUrl") || "/feed";
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.error) {
      setError(res.error);
    }
    if (res?.ok) {
      router.push(callbackUrl);
      router.refresh();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-3">
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState: { error, invalid } }) => (
            <Input
              {...field}
              label="Email"
              placeholder="abc@example.com"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field, fieldState: { error, invalid } }) => (
            <InputPassword
              {...field}
              label="Password"
              placeholder="********"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
        />
        <Alert
          color="danger"
          title="Login failed"
          description={error}
          isVisible={!!error}
          classNames={{ base: "mt-1" }}
        />
      </div>
      <Button type="submit" color="primary" className="mt-5 w-full text-base font-medium">
        Login with email
      </Button>
    </form>
  );
}
