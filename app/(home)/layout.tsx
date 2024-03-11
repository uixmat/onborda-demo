import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "../global.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

// Theme
import { ThemeProvider } from "@/components/providers";

// Onborda
import { Onborda, OnbordaProvider } from "onborda";
import { steps } from "lib/steps";

// Custom Card
import CustomCard from "@/components/CustomCard";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onborda Demo - Next.js Onboarding Flow!",
  description: "A modern onboarding flow for Next.js applications!",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <OnbordaProvider>
            <Onborda
              steps={steps}
              cardComponent={CustomCard}
              shadowOpacity="0.8"
            >
              <main className="flex flex-col h-screen text-center">
                <div className="container py-4 space-y-4 lg:space-y-10 lg:py-10">
                  {children}

                  <Footer />
                </div>
              </main>
            </Onborda>
          </OnbordaProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
