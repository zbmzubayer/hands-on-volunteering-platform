"use client";

import dayjs from "dayjs";
import Image from "next/image";
import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { Button, Card, CardBody, Tab, Tabs } from "@handson/ui/heroui";
import { FaHandshake, FaUsers, LuCalendar, LuClock, LuLogOut, LuSquarePen } from "@handson/ui/icons";

import { USER_KEY } from "@/constants/query-key";
import { useAuthUser } from "@/hooks/useAuthUser";
import { userService } from "@/services";
import { useUserStore } from "@/store";
import { type Profile } from "@/types/profile";

import { Logout } from "@/components/auth/logout";
import { CausesCard, ProfileEditDrawer, ProfileOnboardingModal, SkillsCard } from "@/components/user";

export function ProfileInfo() {
  const authUser = useAuthUser();

  const { data, isFetching } = useQuery({
    queryKey: [USER_KEY],
    queryFn: () => userService.getById(authUser?.id as string),
  });

  const setProfile = useUserStore((state) => state.setProfile);

  useEffect(() => {
    if (data?.data) {
      setProfile(data.data.profile);
    }
  }, [data, setProfile]);

  const profile: Profile = data?.data.profile;
  const volunteerEvents = data?.data.volunteerEvents;
  const helpRequests = data?.data.helpRequests;
  const volunteerEventAttendees = data?.data.volunteerEventAttendees;
  const teams = data?.data.teams;

  // If the profile fetched successfully and there is no profile data, show the onboarding modal
  if (!isFetching && !profile) return <ProfileOnboardingModal />;

  // If the profile is still being fetched and there is no profile data, return null
  if (isFetching && !profile) return null;

  return (
    <div className="grid gap-8 md:grid-cols-[300px_1fr]">
      <div className="space-y-6">
        <Card>
          <CardBody className="flex flex-col items-center p-6">
            <div className="relative">
              <Image
                src="/zubayerzbm.jpg"
                alt="Profile picture"
                height={100}
                width={100}
                className="size-20 rounded-full"
              />
              <Button
                isIconOnly
                size="sm"
                variant="ghost"
                className="bg-background absolute bottom-0 right-0 rounded-full">
                <LuSquarePen className="size-4" />
                <span className="sr-only">Edit profile picture</span>
              </Button>
            </div>
            <h2 className="mt-4 text-xl font-bold">{profile?.name}</h2>
            <p className="text-muted-foreground text-sm">
              Volunteer since {dayjs(profile?.createdAt).format("MMMM D, YYYY")}
            </p>
            <div className="mt-4 self-start">
              <h3 className="text-base font-medium">Bio</h3>
              <p className="text-sm">{profile.bio}</p>
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <ProfileEditDrawer trigger="Edit" size="sm" />
              <Logout size="sm" className="text-danger">
                <LuLogOut className="size-4" />
                Logout
              </Logout>
            </div>
          </CardBody>
        </Card>
        <SkillsCard skills={profile.skills} />
        <CausesCard causes={profile.causes} />
      </div>
      <div>
        <Tabs aria-label="Profile Tabs">
          <Tab key="overview" title="Overview">
            <div className="grid w-fit gap-6 lg:grid-cols-2">
              <StatsCard
                hours={0}
                events={volunteerEvents?.length + volunteerEventAttendees?.length}
                helpRequests={helpRequests?.length}
                teams={teams?.length}
              />
              <CertificatesCard />
            </div>
          </Tab>
          <Tab key="volunteer-history" title="Volunteer History">
            <VolunteerHistoryCard />
          </Tab>
          <Tab key="my-events" title="My Events">
            <MyEventCard />
          </Tab>
          <Tab key="my-help-requests" title="My Help Requests">
            <MyHelpRequestCard />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

function StatsCard({
  hours,
  events,
  helpRequests,
  teams,
}: {
  hours: number;
  events: number;
  helpRequests: number;
  teams: number;
}) {
  return (
    <div className="border-default rounded-large border p-5">
      <h3 className="mb-5 font-medium">Statistics</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-muted flex flex-col items-center justify-center space-y-1 rounded-lg p-4">
          <LuClock className="text-primary h-5 w-5" />
          <span className="text-xl font-bold">{hours}</span>
          <span className="text-muted-foreground text-xs">Hours</span>
        </div>
        <div className="bg-muted flex flex-col items-center justify-center space-y-1 rounded-lg p-4">
          <LuCalendar className="text-primary h-5 w-5" />
          <span className="text-xl font-bold">{events}</span>
          <span className="text-muted-foreground text-xs">Events</span>
        </div>
        <div className="bg-muted flex flex-col items-center justify-center space-y-1 rounded-lg p-4">
          <FaHandshake className="text-primary h-5 w-5" />
          <span className="text-xl font-bold">{helpRequests}</span>
          <span className="text-muted-foreground text-xs">Help Requests</span>
        </div>
        <div className="bg-muted flex flex-col items-center justify-center space-y-1 rounded-lg p-4">
          <FaUsers className="text-primary h-5 w-5" />
          <span className="text-xl font-bold">{teams}</span>
          <span className="text-muted-foreground text-xs">Total teams</span>
        </div>
      </div>
    </div>
  );
}

function CertificatesCard() {
  return (
    <div className="border-default rounded-large border p-5">
      <h3 className="mb-5 font-medium">Certificates</h3>
      <div className="text-muted-foreground flex items-center justify-center font-bold">Coming soon...</div>
    </div>
  );
}

function VolunteerHistoryCard() {
  return (
    <div className="border-default rounded-large border p-5">
      <h3 className="mb-5 font-medium">Volunteer History</h3>
      <div className="text-muted-foreground flex items-center justify-center font-bold">Coming soon...</div>
    </div>
  );
}

function MyEventCard() {
  return (
    <div className="border-default rounded-large border p-5">
      <h3 className="mb-5 font-medium">My Events</h3>
      <div className="text-muted-foreground flex items-center justify-center font-bold">Coming soon...</div>
    </div>
  );
}

function MyHelpRequestCard() {
  return (
    <div className="border-default rounded-large border p-5">
      <h3 className="mb-5 font-medium">My Help Requests</h3>
      <div className="text-muted-foreground flex items-center justify-center font-bold">Coming soon...</div>
    </div>
  );
}
