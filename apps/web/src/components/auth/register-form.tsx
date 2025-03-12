"use client";

import { Controller, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { InputPassword } from "@handson/ui/components";
import { Alert, Button, Input } from "@handson/ui/heroui";
import { type RegisterDto as FormValues, authZodSchema } from "@handson/validations";

import { authService } from "@/services";

export default function RegisterForm() {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(authZodSchema.register),
  });

  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: authService.register,
  });

  const onSubmit = async (data: FormValues) => {
    await mutateAsync(data);
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
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field, fieldState: { error, invalid } }) => (
            <InputPassword
              {...field}
              label="Confirm Password"
              placeholder="********"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
        />
        <Alert color="danger" title="Registration failed" description={error?.message} isVisible={!!error} />
      </div>
      <Button
        type="submit"
        color="primary"
        className="mt-5 w-full text-base font-medium"
        isLoading={isPending}
        disabled={isPending}>
        Register with email
      </Button>
    </form>
  );
}
