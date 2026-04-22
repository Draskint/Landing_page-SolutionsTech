import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Draskint | Desarrollo Web para Startups y Pequeños Negocios",
  description: "Creamos soluciones web innovadoras para startups y pequeños negocios. Desarrollo web moderno, minimalista y efectivo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-[#050505] text-[#fafafa] antialiased">
        {children}
      </body>
    </html>
  );
}