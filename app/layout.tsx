import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Poppins, Righteous, Space_Grotesk } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-family-poppins",
});

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-family-righteous",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-family-space-grotesk",
});

export const metadata: Metadata = {
  title: "Polash Ahmad | Full Stack Engineer",
  description:
    "Polash Ahmad is a skilled full-stack developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL. With expertise in UI/UX design, seamless development proficiency, and a commitment to quick delivery, Polash transforms ideas into high-quality web applications that enhance user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${righteous.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
