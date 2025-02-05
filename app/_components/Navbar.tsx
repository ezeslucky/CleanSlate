"use client";


import Link from "next/link";
import {  Button, buttonVariants } from "../../components/ui/button";
import { Icons } from "./icon";



import { SheetClose } from "@/components/ui/sheet";


import Anchor from "./Anchor";
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export const NAVLINKS = [
  {
    title: "Docs",
    href: "/docs",
  },

  {
    title: "Components",
    href: "/docs",
  },


];

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
      <div className="sm:p-3 p-2 max-w-[1530px] mx-auto h-full flex items-center justify-between gap-2">
        <div className="flex items-center gap-5">
        
          <div className="flex items-center gap-8">
            <div className="sm:flex ">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
            <div className="md:block hidden">
            <LoginLink postLoginRedirectURL="/dashboard">
            <Button className="rounded-xl font-bold">Login</Button>
            </LoginLink>
                  
              
              </div>
              <div className="md:block hidden">
              <RegisterLink>
              <Button className="rounded-xl font-bold">Try  CleanSlate</Button>
              </RegisterLink>
                  
                
              </div>
              <div className='hidden md:flex'>
                
              </div>
              <div>
              <Link
                href="https://github.com/ezeslucky/CleanSlate.git"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <Icons.gitHub className="icon-class w-4" />
              </Link>
              <Link
                href="https://x.com/ezeslucky"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <Icons.twitter className="icon-class w-3" />
              </Link>

              
              <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      {/* <Icons.logo className="icon-class w-2" /> */}
      <Image  src="./logo.svg" alt="logo" width={75} height={75}/>

      <h2 className="text-base md:text-lg font-bold">
      CleanSlate
      </h2>
      
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="text-black dark:text-white font-semibold"
            absolute
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
