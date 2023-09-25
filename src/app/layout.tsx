import { pages } from "@/content/pages";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import slugify from "slugify";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Lazy Loading",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " container mx-auto p-8"}>
        <h1 className="text-2xl font-semibold">Lazy loading</h1>

        <nav className="mt-6">
          <ul className="flex gap-2 flex-wrap">
            {pages.map((page) => (
              <li key={page.title}>
                <Link
                  href={slugify(page.title, { lower: true })}
                  className="inline-block px-4 py-2 bg-gray-800 text-white rounded-lg"
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
