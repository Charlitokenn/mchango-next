import Image from "next/image";

export default function MchangoLogo() {
  return (
    <div className="relative w-[45px] sm:w-[60px] md:w-[80px] lg:w-[100px] h-auto flex justify-center gap-2 mb-4">
      <Image
        src="/logo.svg"
        alt="logo"
        fill
        sizes="(max-width: 640px) 45px, 
               (max-width: 768px) 60px, 
               (max-width: 1024px) 80px, 
               100px"
        className="object-contain"
      />
      <span style={{ fontFamily: "'Blueberry', sans-serif", fontSize: "2rem", color: '#f49f1c' }}>Mchango App</span>
    </div>
  );
}