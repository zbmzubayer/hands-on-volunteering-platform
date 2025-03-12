import Link from "next/link";
import { LuHeartHandshake } from "react-icons/lu";

import { cn } from "@heroui/theme";

type LogoProps = React.ComponentProps<typeof Link> & {
  classNames?: Partial<Record<"link" | "icon", string>>;
};

export function Logo({ classNames, className, ...props }: LogoProps) {
  return (
    <Link className={cn("flex items-center text-2xl font-bold", className, classNames?.link)} {...props}>
      <LuHeartHandshake className={cn("stroke-primary mr-2 size-8 fill-sky-200", classNames?.icon)} />
      <span>Hands</span>
      <span className="text-primary">On</span>
    </Link>
  );
}
