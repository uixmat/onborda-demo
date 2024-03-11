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
                <div className="container p-10 space-y-10">
                  {children}

                  <Footer />
                </div>
              </main>
            </Onborda>
          </OnbordaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}