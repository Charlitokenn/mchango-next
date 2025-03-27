import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AuthButton from "./header-auth";

const NavBar = () => {
  return (
    <header className="flex justify-between z-10 bg-mchango2 sticky top-0">
      <Link href="/">
        <div className="flex justify-center items-center gap-1 p-2 cursor-pointer">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <span style={{ fontFamily: "'Blueberry', sans-serif", fontSize: "1.5rem", color: '#f49f1c' }}>Mchango App</span>
        </div>
      </Link>

      {/* <ul className="flex flex-row items-center gap-8">
        <li>
          <form
            action={async () => {
              "use server";

            //   await signOut();
            }}
            className="mb-10"
          >
            <Button>Logout</Button>
          </form>
        </li>
      </ul> */}

      <AuthButton/>
    </header>
  );
};

export default NavBar;