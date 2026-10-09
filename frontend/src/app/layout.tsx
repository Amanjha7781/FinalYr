import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/ThemeProvider";
import { UserProvider } from "@/context/UserContext";

export const metadata: Metadata = {
  title: "Resume AI | Elevate Your Career",
  description: "AI-powered resume analysis, ATS scoring, and job matching.",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-indigo-500/30">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <UserProvider>
            <Navbar />
            <aside role="note" className="border-b border-amber-300 bg-amber-50 px-4 py-3 text-center text-sm text-amber-950">
              ResumePro demo deployment by Aman Jha, based on the original vijayyh/FinalYr team project.
              AI results may be sample data until API keys are configured. Do not upload private resumes or personal information.
              Shared skill-tracker storage is disabled in this demo.
            </aside>
            <div className="flex-1 flex flex-col relative z-10">
              {children}
            </div>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
