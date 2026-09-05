import { Roboto } from "next/font/google";
import Header from "./components/sections/Header";
import Sidebar from "./components/sections/Sidebar";
import "./globals.css";
import Footer from "./components/sections/Footer";
import { ViewProvider } from "@/lib/ViewContext";
import { LanguageProvider } from "@/lib/LanguageContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import Stars from "./components/Stars";
import { Metadata } from "next";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: {
    default: "Anthony J. Torres | AI/ML & Data Engineer",
    template: "%s | Anthony J. Torres"
  },
  description: "Software Engineer especializado en Data Engineering y AI/ML.",
  metadataBase: new URL("https://jhandev.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Anthony J. Torres — AI/ML & Data Engineer",
    description: "Portfolio profesional con proyectos MERN, pipelines de datos y soluciones AI/ML.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony J. Torres — AI/ML & Data Engineer",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <ThemeProvider>
          <LanguageProvider>
            <ViewProvider>
              <Stars />
              <div className="relative min-h-screen flex flex-col z-10">
                <Header />
                <div className="flex flex-1 relative">
                  <Sidebar />
                  <main className="flex-1 min-h-[calc(100vh-76px)] transition-all duration-500 relative z-10">
                    {children}
                    <Footer />
                  </main>
                </div>
              </div>
            </ViewProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
