import { Card, CardBody, CardHeader } from "@handson/ui/heroui";
import { LuSquarePen } from "@handson/ui/icons";

import { ProfileEditDrawer } from "@/components/user";

export function SkillsCard({ skills }: { skills: string[] }) {
  return (
    <Card className="p-2">
      <CardHeader className="flex items-center justify-between pb-0">
        <h3 className="text-base font-medium">Skills</h3>
        <ProfileEditDrawer
          trigger={
            <>
              <LuSquarePen className="size-4" />
              <span className="sr-only">Edit skills</span>
            </>
          }
          isIconOnly
          size="sm"
          variant="light"
        />
      </CardHeader>
      <CardBody>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <div key={skill} className="rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-700">
              {skill}
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
