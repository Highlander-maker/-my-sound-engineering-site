import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Sound Engineer | Your Name",
  description: "Showcasing my work in sound engineering",
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
            <h1 className="text-2xl font-bold text-celticGreen">My Sound Engineering</h1>
            <ul className="flex gap-6">
              <li><Link href="/" className="hover:text-celticGreen transition">Home</Link></li>
              <li><Link href="/work" className="hover:text-celticGreen transition">Work</Link></li>
              <li><Link href="/blog" className="hover:text-celticGreen transition">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-celticGreen transition">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto p-6">{children}</main>

        <footer className="p-4 bg-charcoalGray text-center">
          <p>© 2025 Your Name. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}