import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Allura } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const allura = Allura({ 
  variable: "--font-allura",
  subsets: ['latin'],
  weight: ["400"]
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dipesh Ranjan | Portfolio",
  description: "Portfolio of Dipesh Ranjan, a web developer specializing in creating modern, responsive, and user-friendly web applications.",
  keywords: [
    "Dipesh Ranjan",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Web Design",
    "Responsive Design",
    "UI/UX",
    "Software Engineer",
    "Full Stack Developer",
    "Web Applications",
    "Web Development",
    "Programming",
    "Coding",
    "Tech Portfolio",
    "Personal Website",
    "Developer Portfolio",
    "Software Development",
    "Web Technologies",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${allura.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
