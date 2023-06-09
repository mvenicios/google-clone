import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google Clone",
  description: "Google clone criado por qualquer um",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="relative min-h-screen">
        {children}
        {/*Footer*/}
        <Footer />
      </body>
    </html>
  );
}
