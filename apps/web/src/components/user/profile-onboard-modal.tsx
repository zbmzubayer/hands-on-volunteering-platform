"use client";

import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { type z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { USER_CAUSES, USER_SKILLS } from "@handson/enums";
import {
  Alert,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
  addToast,
} from "@handson/ui/heroui";
import { profileZodSchema } from "@handson/validations";

import { useAuthUser } from "@/hooks/useAuthUser";
import { userService } from "@/services";

export function ProfileOnboardingModal() {
  return (
    <Modal isOpen={true} size="lg">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Create Profile</ModalHeader>
        <ModalBody className="pb-5">
          <div className="flex flex-col gap-2">
            <p className="text-muted-foreground text-sm">
              Please fill in the profile information to get started.
            </p>
            <ProfileOnboardingForm />
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

const profileFormSchema = profileZodSchema.create.omit({ userId: true });
type FormValues = z.infer<typeof profileFormSchema>;

function ProfileOnboardingForm() {
  const authUser = useAuthUser();
  const router = useRouter();

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: undefined,
  });

  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: userService.createProfile,
    onSuccess() {
      addToast({
        title: "Profile created",
        description: "Profile has been created successfully.",
        color: "success",
      });
      router.refresh();
    },
  });

  if (!authUser) return null;

  const onSubmit = async (data: FormValues) => {
    await mutateAsync({ ...data, userId: authUser.id });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-3">
        <Controller
          control={control}
          name="name"
          render={({ field, fieldState: { error, invalid } }) => (
            <Input
              {...field}
              label="Name"
              placeholder="Enter your name"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="bio"
          render={({ field, fieldState: { error, invalid } }) => (
            <Textarea
              {...field}
              label="Bio"
              placeholder="Tell us about yourself"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="skills"
          render={({ field, fieldState: { error, invalid } }) => (
            <Select
              {...field}
              onChange={(e) => {
                if (!e.target.value) {
                  field.onChange(undefined);
                  return;
                }
                const selectedValues = e.target.value.split(",");
                field.onChange(selectedValues);
              }}
              selectedKeys={field.value}
              label="Skills"
              placeholder="Select the skills you have"
              selectionMode="multiple"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}>
              {USER_SKILLS?.map((item) => <SelectItem key={item}>{item}</SelectItem>)}
            </Select>
          )}
        />
        <Controller
          control={control}
          name="causes"
          render={({ field, fieldState: { error, invalid } }) => (
            <Select
              {...field}
              onChange={(e) => {
                if (!e.target.value) {
                  field.onChange(undefined);
                  return;
                }
                const selectedValues = e.target.value.split(",");
                field.onChange(selectedValues);
              }}
              selectedKeys={field.value}
              label="Causes"
              placeholder="Select the causes you support"
              selectionMode="multiple"
              variant="bordered"
              isInvalid={invalid}
              errorMessage={error?.message}>
              {USER_CAUSES?.map((item) => <SelectItem key={item}>{item}</SelectItem>)}
            </Select>
          )}
        />
        <Alert
          color="danger"
          title="Profile creation failed"
          description={error?.message}
          isVisible={!!error}
        />
      </div>
      <div className="flex justify-center">
        <Button
          type="submit"
          color="primary"
          className="mt-5 text-base font-medium"
          isLoading={isPending}
          disabled={isPending}>
          Create Profile
        </Button>
      </div>
    </form>
  );
}
