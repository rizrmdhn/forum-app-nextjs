import ReduxProvider from "@/provider/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "react-loading-skeleton/dist/skeleton.css";
import "./globals.css";
import 'animate.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Forum App",
  description: "Forum App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
