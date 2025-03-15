import { Card, CardBody, CardHeader } from "@handson/ui/heroui";
import { LuSquarePen } from "@handson/ui/icons";

import { ProfileEditDrawer } from "@/components/user";

export function CausesCard({ causes }: { causes: string[] }) {
  return (
    <Card className="p-2">
      <CardHeader className="flex items-center justify-between pb-0">
        <h3 className="text-base font-medium">Causes I Support</h3>
        <ProfileEditDrawer
          trigger={
            <>
              <LuSquarePen className="size-4" />
              <span className="sr-only">Edit causes</span>
            </>
          }
          isIconOnly
          size="sm"
          variant="light"
        />
      </CardHeader>
      <CardBody>
        <div className="flex flex-wrap gap-2">
          {causes.map((cause) => (
            <div
              key={cause}
              className="border-primary/50 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
              {cause}
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
