import { Roboto } from "next/font/google";
import Header from "./components/layout/Header";
import "./globals.css";
import Footer from "./components/layout/Footer";
// import { AppProvider } from "@/app/components/AppContext";
// import { Toaster } from "react-hot-toast";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Anthony Torres",
  description: "My portfolio",
  icons: [
    {
      src: "public/icono.jpeg",
      sizes: "any",
      type: "image/x-icon",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <main className="bg-cerulean-blue-50">
          {/* <AppProvider> */}
          {/* <Toaster /> */}
          <Header />
          {children}
          <Footer />

          {/* </AppProvider> */}
        </main>
      </body>
    </html>
  );
}
