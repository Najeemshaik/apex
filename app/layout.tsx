import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex — Your AI Agent",
  description:
    "Apex connects to your tools, learns how you work, and executes — email, Slack, follow-ups, decisions — 24/7.",
  openGraph: {
    title: "Apex — Your AI Agent",
    description:
      "A fully autonomous AI agent that connects to your existing tools and performs real work on your behalf.",
    url: "https://apex.host",
    siteName: "Apex",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body className="relative min-h-screen overflow-x-hidden">
        {/* Noise overlay */}
        <div className="noise-overlay fixed inset-0 z-50 h-full w-full" />

        {/* Atmospheric glow orbs */}
        <div
          className="pointer-events-none fixed -left-[200px] -top-[200px] h-[600px] w-[600px] animate-slow-drift rounded-full opacity-[0.06]"
          style={{
            background:
              "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none fixed -right-[150px] top-[40%] h-[500px] w-[500px] rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, #A855F7 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none fixed -bottom-[100px] left-[30%] h-[700px] w-[700px] animate-slow-drift rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
            animationDelay: "-20s",
          }}
        />

        {children}
      </body>
    </html>
  );
}
