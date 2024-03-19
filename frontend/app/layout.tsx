import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Black Rock Case Study",
  description: "Submission by Robert Sheynin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
          <main className='flex-grow'>{children}</main>
          <footer className='bg-gray-800 text-white p-4 text-center'>
          </footer>
      </body>
    </html>
  );
}
