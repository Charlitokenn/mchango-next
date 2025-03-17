import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { createClient } from '@/utils/supabase/server'

export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    return (
        <main className="flex min-h-screen w-full flex-row">
        <Sidebar session={user}/>
  
        <div className="flex w-[calc(100%-264px)] flex-1 flex-col bg-light-300 p-5 xs:p-10;">
          <Header session={user}/>
          {children}
        </div>
      </main>
    );
  }
  
  