import "./globals.css";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata = {
  title: "Furniture Store | متجر الأثاث",
  description: "Modern & Minimalist Furniture Packages",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FAF8F5] text-[#2C2520] antialiased overflow-x-hidden">
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  );
}