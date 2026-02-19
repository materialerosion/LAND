import type { Metadata } from "next";
import "./globals.css";
import ThemeToggle from "@/components/ThemeToggle";

// Inline script executed synchronously before first paint — prevents
// flash of wrong theme by setting data-theme on <html> immediately.
const themeScript = `
  try {
    var t = localStorage.getItem('theme');
    if (!t) t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', t);
  } catch(e) {}
`;

export const metadata: Metadata = {
  title: "Leyu Zhang  — AI Product Builder",
  description:
    "Portfolio of AI-powered web applications for research, healthcare, and innovation.",
  openGraph: {
    title: "Leyu Zhang — AI Product Builder",
    description:
      "Shipping AI tools that actually do things. Formula Research, Clinical Research, Synthetic Personas, Innovation Assistants.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning — the inline script mutates data-theme before
    // React hydrates, so the server/client attribute will differ by design.
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set data-theme synchronously before first paint — no flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Let the browser know this page supports both dark and light modes */}
        <meta name="color-scheme" content="dark light" />
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
