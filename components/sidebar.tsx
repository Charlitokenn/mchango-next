'use client'

import Image from "next/image";
import { sideBarLinks } from "@/constants";
import Link from "next/link";
import { cn} from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";


const Sidebar =  ({session}: {session: Session}) => {
  const pathname = usePathname();
  
  return (
    <div className=" sticky left-0 top-0 flex h-dvh flex-col justify-between bg-white px-5 pb-5 pt-10;">
      <div>
        <div className="flex flex-row items-center gap-2 border-b border-dashed border-primary-admin/20 pb-10 max-md:justify-center">
          <Image
            src="/logo.png"
            alt="logo"
            height={50}
            width={150}
          />
          <h1>Mchango App</h1>
        </div>

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

      <div className="my-8 flex w-full flex-row gap-2 rounded-full border border-light-400 px-6 py-2 shadow-sm max-md:px-2">
        <Avatar>
          <AvatarFallback className="bg-amber-100">
            {"IN"}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col max-md:hidden">
          <p className="font-semibold text-dark-200">{session?.email}</p>
          <p className="text-xs text-light-500">{}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;