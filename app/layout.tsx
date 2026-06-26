import { Roboto } from "next/font/google";
import Header from "./components/sections/Header";
import Sidebar from "./components/sections/Sidebar";
import "./globals.css";
import Footer from "./components/sections/Footer";
import { ViewProvider } from "@/lib/ViewContext";
import { LanguageProvider } from "@/lib/LanguageContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import Stars from "./components/Stars";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Anthony Torres",
  description: "My portfolio",
  keywords: ["Anthony Torres", "portfolio", "Software Developer", "web developer", "react developer", "projects", "skills"],
  icons:{
    icon: "/lighLogo.png"
  }
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
                  <main className="flex-1 min-h-[calc(100vh-76px)] pl-20 md:pl-72 transition-all duration-500 relative z-10">
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
