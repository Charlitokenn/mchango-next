export default async function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="flex min-h-screen w-full flex-row">
        {/* <Sidebar session={session} /> */}

        <div className="flex w-[calc(100%-264px)] flex-1 flex-col bg-light-300 p-5 xs:p-10;">
        {/* <Header session={session} /> */}
        {children}
        </div>
        </main>
    );
  }