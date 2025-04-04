import { getUserProfile } from "@/app/actions/auth.actions";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const profile = await getUserProfile();;

    return (
        <main className="flex min-h-screen w-full flex-row">
        <Sidebar session={profile}/>
  
        <div className="flex w-[calc(100%-264px)] flex-1 flex-col bg-light-300 p-5 xs:p-10;">
          <Header session={profile}/>
          {children}
        </div>
      </main>
    );
  }
  
  