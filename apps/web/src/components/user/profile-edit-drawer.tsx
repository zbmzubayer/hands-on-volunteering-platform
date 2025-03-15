"use client";

import { useSession } from "next-auth/react";
import { Controller, useForm } from "react-hook-form";
import { type z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";

import { USER_CAUSES, USER_SKILLS } from "@handson/enums";
import {
  Alert,
  Button,
  type ButtonProps,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Input,
  Select,
  SelectItem,
  Textarea,
  addToast,
  useDisclosure,
} from "@handson/ui/heroui";
import { profileZodSchema } from "@handson/validations";

import { USER_KEY } from "@/constants/query-key";
import { getQueryClient } from "@/lib";
import { userService } from "@/services";
import { useUserStore } from "@/store";

type ProfileEditDrawerProps = Omit<ButtonProps, "onPress"> & {
  trigger: React.ReactNode;
};

export function ProfileEditDrawer({ trigger, ...props }: ProfileEditDrawerProps) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Button {...props} onPress={onOpen}>
        {trigger}
      </Button>
      <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
        <DrawerContent>
          <DrawerHeader className="flex flex-col gap-1">Edit your profile</DrawerHeader>
          <DrawerBody>
            <ProfileEditForm onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const profileFormSchema = profileZodSchema.create.omit({ userId: true });
type FormValues = z.infer<typeof profileFormSchema>;

function ProfileEditForm({ onClose }: { onClose: () => void }) {
  const { data, update } = useSession();
  const authUser = data?.user;
  const profile = useUserStore((state) => state.profile);

  const queryClient = getQueryClient();

  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      name: profile?.name,
      bio: profile?.bio,
      skills: profile?.skills,
      causes: profile?.causes,
    },
  });

  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: userService.updateProfile,
    onSuccess({ data }) {
      update({ name: data.name }); // update NextAuth session
      onClose(); // close the drawer
      queryClient.invalidateQueries({ queryKey: [USER_KEY] });
      addToast({
        title: "Profile updated",
        description: "Profile has been updated successfully.",
        color: "success",
      });
    },
  });

  const onSubmit = async (data: FormValues) => {
    await mutateAsync({ ...data, userId: authUser?.id });
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
              defaultSelectedKeys={field.value}
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
              defaultSelectedKeys={field.value}
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
          title="Profile update failed"
          description={error?.message}
          isVisible={!!error}
        />
      </div>
      <Button
        type="submit"
        className="mt-5 w-full text-base font-medium"
        isLoading={isPending}
        disabled={isPending}>
        Save
      </Button>
    </form>
  );
}
