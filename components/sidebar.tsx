'use client'

import Image from "next/image";
import { sideBarLinks } from "@/constants";
import Link from "next/link";
import { cn, getInitials} from "@/app/lib/utils";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Logo from "./logo";

const Sidebar =  ({session}: {session: userProfile}) => {
  const pathname = usePathname();
console.log(session)
  return (
    <div className=" sticky left-0 top-0 flex h-dvh flex-col justify-between bg-white px-5 pb-5 pt-10;">
      <div>
        <Logo/>
        <div className="mt-10 flex flex-col gap-5">
          {sideBarLinks.map((link) => {
            const isSelected =
              (link.route !== "/app" &&
                pathname.includes(link.route) &&
                link.route.length > 1) ||
              pathname === link.route;

            return (
              <Link href={link.route} key={link.route}>
                <div
                  className={cn(
                    "flex flex-row items-center w-full gap-2 rounded-lg px-5 py-3.5 max-md:justify-center;",
                    isSelected && "bg-primary-admin shadow-sm",
                  )}
                >
                  <div className="relative size-5">
                    <Image
                      src={link.img}
                      alt="icon"
                      fill
                      className={`${isSelected ? "brightness-0 invert" : ""}  object-contain`}
                    />
                  </div>

                  <p className={cn(isSelected ? "text-white" : "text-dark")}>
                    {link.text}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="my-8 flex w-full flex-row gap-2 items-center rounded-2xl border border-light-400 px-6 py-2 shadow-sm max-md:px-2">
        <Avatar>
          <AvatarFallback className="bg-amber-100">
            {getInitials(session?.data.firstName)}{getInitials(session?.data.lastName)}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col max-md:hidden">
          <p className="font-semibold text-dark-200">{session?.data.firstName} {session?.data.lastName}</p>
          <p className="text-xs text-light-500">{session?.data.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;