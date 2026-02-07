import { Roboto } from "next/font/google";
import Header from "./components/sections/Header";
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
              <main className="relative z-10 transition-all duration-500">
                <Header />
                {children}
                <Footer />
              </main>
            </ViewProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
