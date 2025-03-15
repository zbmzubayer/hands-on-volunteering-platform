import { create } from "zustand";

import { type Profile } from "@/types/profile";

type UserStore = {
  profile?: Profile;
  setProfile: (profile: Profile) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  profile: undefined,
  setProfile: (data: Profile) => set({ profile: data }),
}));
