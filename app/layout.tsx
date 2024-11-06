import { Sidebar_01 } from "@/components/components-sidebar-01";
import { ModeToggle } from "@/components/DarkMode";
import SignedInItems from "@/components/SignedIn";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.Js",
  icons: "/pngwing.com.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SignedInItems>
          <Sidebar_01>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <header className="p-4 bg-secondary flex justify-between items-center">
                <p>This is header from root layout</p>
                <ModeToggle />
              </header>
              <main className="m-5">{children}</main>
              <footer className="p-4 bg-secondary">
                This is footer from root layout
              </footer>
            </ThemeProvider>
          </Sidebar_01>
        </SignedInItems>
      </body>
    </html>
  );
}
