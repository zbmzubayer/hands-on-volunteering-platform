import Image from "next/image";
import Link from "next/link";

import { Button, Card, CardBody, CardHeader } from "@handson/ui/heroui";
import { FiCheckCircle, LuArrowRight, LuAward, LuCalendar, LuHandHeart, LuUsers } from "@handson/ui/icons";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="dark:to-background w-full bg-gradient-to-b from-green-50 to-white py-12 md:py-24 lg:py-32 dark:from-green-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-6xl/none">
                    Make an Impact with <span className="text-primary">HandsOn</span>
                  </h1>
                  <p className="text-muted-foreground max-w-[600px] md:text-xl">
                    Connect with meaningful volunteer opportunities, join community-driven events, and track
                    your social impact all in one place.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button as={Link} href="/register" size="lg" color="primary">
                    Get Started
                    <LuArrowRight className="size-4" />
                  </Button>
                  <Button size="lg" variant="flat" color="primary">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <FiCheckCircle className="text-primary mr-1 size-4" />
                    <span>10,000+ Volunteers</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheckCircle className="text-primary mr-1 size-4" />
                    <span>5,000+ Events</span>
                  </div>
                  <div className="flex items-center">
                    <FiCheckCircle className="text-primary mr-1 size-4" />
                    <span>100+ Communities</span>
                  </div>
                </div>
              </div>
              <Image
                src="/hero-banner.svg"
                width={550}
                height={550}
                alt="Volunteers working together"
                className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="bg-primary/10 text-primary inline-block rounded-lg px-3 py-1 text-sm">
                  Our Platform
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How HandsOn Works</h2>
                <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed">
                  Our community-driven platform makes it easy to find, join, and create meaningful volunteer
                  opportunities.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-primary/10 hover:border-primary/30 border-2 p-3 transition-all">
                <CardHeader className="pb-2">
                  <div>
                    <div className="bg-primary/10 mb-2 flex h-10 w-10 items-center justify-center rounded-md p-2">
                      <LuHandHeart className="text-primary h-5 w-5" />
                    </div>
                    <h3 className="h3">Discover Opportunities</h3>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-muted-foreground text-sm">
                    Browse and filter through hundreds of volunteer events and opportunities in your
                    community.
                  </p>
                </CardBody>
              </Card>
              <Card className="border-primary/10 hover:border-primary/30 border-2 p-3 transition-all">
                <CardHeader className="pb-2">
                  <div>
                    <div className="bg-primary/10 mb-2 flex size-10 items-center justify-center rounded-md p-2">
                      <LuUsers className="text-primary size-5" />
                    </div>
                    <h3 className="h3">Form Teams</h3>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-muted-foreground text-sm">
                    Create or join teams for large-scale initiatives and collaborate with like-minded
                    volunteers.
                  </p>
                </CardBody>
              </Card>
              <Card className="border-primary/10 hover:border-primary/30 border-2 p-3 transition-all">
                <CardHeader className="pb-2">
                  <div>
                    <div className="bg-primary/10 mb-2 flex size-10 items-center justify-center rounded-md p-2">
                      <LuCalendar className="text-primary size-5" />
                    </div>
                    <h3 className="h3">Track Impact</h3>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-muted-foreground text-sm">
                    Log your contributions and see the real impact you&apos;re making in your community and
                    beyond.
                  </p>
                </CardBody>
              </Card>
              <Card className="border-primary/10 hover:border-primary/30 border-2 p-3 transition-all">
                <CardHeader className="pb-2">
                  <div>
                    <div className="bg-primary/10 mb-2 flex size-10 items-center justify-center rounded-md p-2">
                      <LuAward className="text-primary size-5" />
                    </div>
                    <h3 className="h3">Earn Recognition</h3>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-muted-foreground text-sm">
                    Get rewarded for your volunteer work with badges, certificates, and community recognition.
                  </p>
                </CardBody>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-muted w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="space-y-4">
                  <div className="bg-primary/10 text-primary inline-block rounded-lg px-3 py-1 text-sm">
                    The Process
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Making a Difference is Easy
                  </h2>
                  <p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed">
                    Our platform simplifies the volunteering process so you can focus on what matters most -
                    making an impact.
                  </p>
                </div>
                <div className="mt-8 grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                      1
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Create Your Profile</h3>
                      <p className="text-muted-foreground">
                        Sign up and tell us about your skills, interests, and availability.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                      2
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Discover Opportunities</h3>
                      <p className="text-muted-foreground">
                        Browse through events and opportunities that match your interests.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                      3
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Volunteer & Connect</h3>
                      <p className="text-muted-foreground">
                        Join events, form teams, and make meaningful connections with other volunteers.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                      4
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold">Track Your Impact</h3>
                      <p className="text-muted-foreground">
                        Log your hours and see the difference you&apos;re making in your community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <Image
                  src="/banner2.svg"
                  width={500}
                  height={600}
                  alt="Volunteers in action"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="bg-primary/10 text-primary inline-block rounded-lg px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Volunteers Say</h2>
                <p className="text-muted-foreground max-w-[900px] md:text-xl/relaxed">
                  Hear from people who have made a difference with HandsOn.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="border-primary/10 border-2 p-3">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Image
                        src={`/zubayerzbm.jpg`}
                        width={50}
                        height={50}
                        alt={`Volunteer ${i}`}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-medium">Volunteer Name</h3>
                        <p className="text-muted-foreground">Community Member</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <p className="text-muted-foreground text-sm">
                      &quot;HandsOn has transformed how I contribute to my community. It&apos;s never been
                      easier to find meaningful volunteer opportunities and connect with like-minded
                      people.&quot;
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Make a Difference?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed">
                  Join thousands of volunteers who are creating positive change in their communities.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button as={Link} href="/register" size="lg" variant="solid" className="bg-white">
                  Sign Up Now
                </Button>
                <Button
                  size="lg"
                  className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary border-2 bg-transparent">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
