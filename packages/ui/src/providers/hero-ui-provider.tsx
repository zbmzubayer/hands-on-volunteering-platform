"use client";

import { HeroUIProvider } from "@heroui/system";

export function HeroUiProvider({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}
