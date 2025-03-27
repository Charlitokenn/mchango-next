import NavBar from "@/components/header";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      <NavBar />
      <section className="auth-layout">
        {children}
      </section>      
    </main>
  );
}