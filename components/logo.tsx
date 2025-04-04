import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
    <div className="flex justify-center items-center gap-1 my-2">
      <Image src="./logo.svg" alt="logo" width={28} height={28} />
      <span
        style={{
          fontFamily: "'Blueberry', sans-serif",
          fontSize: "1rem",
          color: "#f49f1c",
        }}
      >
        Mchango App
      </span>
    </div>
    </Link>
  );
};

export default Logo;
