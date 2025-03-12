"use client";

import Link from "next/link";
import { useState } from "react";

import { Logo } from "@handson/ui/components";
import { Button } from "@handson/ui/heroui";
import { LuMenu, LuX } from "@handson/ui/icons";

export function HomeHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Logo href="/" />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          <Link href="#" className="hover:text-primary text-sm font-medium">
            How It Works
          </Link>
          <Link href="#" className="hover:text-primary text-sm font-medium">
            Find Opportunities
          </Link>
          <Link href="#" className="hover:text-primary text-sm font-medium">
            Create Events
          </Link>
          <Link href="#" className="hover:text-primary text-sm font-medium">
            About Us
          </Link>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button as={Link} href="/login" variant="ghost" className="uppercase">
            Sign In
          </Button>
          <Button as={Link} href="/register" color="primary" className="uppercase">
            Register
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <LuX className="size-6" /> : <LuMenu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-b lg:hidden">
          <div className="container flex flex-col gap-4 py-4">
            <nav className="flex flex-col gap-4">
              <Link
                href="#"
                className="hover:text-primary text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}>
                How It Works
              </Link>
              <Link
                href="#"
                className="hover:text-primary text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}>
                Find Opportunities
              </Link>
              <Link
                href="#"
                className="hover:text-primary text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}>
                Create Events
              </Link>
              <Link
                href="#"
                className="hover:text-primary text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
            </nav>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Button as={Link} href="/login" variant="ghost" className="w-full uppercase sm:w-fit">
                Sign In
              </Button>
              <Button as={Link} href="/register" color="primary" className="w-full uppercase sm:w-fit">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
