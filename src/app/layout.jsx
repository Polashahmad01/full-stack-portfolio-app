import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Polash Ahmad | Full Stack Engineer",
  description: "Polash Ahmad is a skilled full-stack developer specializing in React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL. With expertise in UI/UX design, seamless development proficiency, and a commitment to quick delivery, Polash transforms ideas into high-quality web applications that enhance user experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
