import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "HighlanderAudio | Live Sound Engineering",
  description:
    "Professional live sound engineering and audio production portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-charcoalGray text-ashGray">
        <header className="p-4 bg-charcoalGray shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            {/* Logo + Title (clickable home) */}
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-90 transition"
            >
              <Image
                src="/logo.png"
                alt="HighlanderAudio Logo"
                width={50}
                height={25}
                className="opacity-100"
                priority
              />
              <h1 className="text-2xl font-bold text-celticGreen">
                Highlander Audio
              </h1>
            </Link>

            <ul className="flex gap-6">
              <li>
                <Link href="/" className="hover:text-celticGreen transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-celticGreen transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-celticGreen transition">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-celticGreen transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-celticGreen transition">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto p-6">{children}</main>

        <footer className="p-4 bg-charcoalGray text-center">
          <p>© 2025 Highlander Audio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}