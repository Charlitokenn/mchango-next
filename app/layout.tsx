// import { EnvVarWarning } from "@/components/env-var-warning";
// import HeaderAuth from "@/components/header-auth";
// import { ThemeSwitcher } from "@/components/theme-switcher";
// import { hasEnvVars } from "@/utils/supabase/check-env-vars";
// import { Inter, IBM_Plex_Serif } from "next/font/google";
// import { ThemeProvider } from "next-themes";
// import Link from "next/link";
// import "./globals.css";
// import Footer from "@/components/footer";

// const defaultUrl = process.env.VERCEL_URL
//   ? `https://${process.env.VERCEL_URL}`
//   : "http://localhost:3000";

// const inter = Inter({ subsets: ['latin'],variable: '--font-inter' });
// const ibmPlexSerif = IBM_Plex_Serif({ 
//     subsets: ['latin'],
//     weight: ['400', '700'],
//     variable: '--font-ibm-plex-serif'
//   });

// export const metadata = {
//   metadataBase: new URL(defaultUrl),
//   title: "Mchango App",
//   description: "Events Bulk SMS",
//   icons: {
//     icon: '/favicon.ico',
//   }
// };  

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${inter.variable} ${ibmPlexSerif.variable}`} >
//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           {/* <main className="min-h-screen flex flex-col items-center">
//             <div className="flex-1 w-full flex flex-col gap-20 items-center">
//               <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
//                 <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
//                   <div className="flex gap-5 items-center font-semibold">
//                     <Link href={"/"}>Mchango App</Link>
//                   </div>
//                   {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
//                 </div>
//               </nav>
//               <div className="flex flex-col gap-20 max-w-5xl p-5">
//                 {children}
//               </div>
//               <Footer/>
//             </div>
//           </main> */}
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Mchango App",
  description: "Mchango App is a bulk SMS solution for Events.",
  icons: {
    icon: '/logo.svg'
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`} >{children}</body>
    </html>
  );
}